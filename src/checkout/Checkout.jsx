import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Divider,
  IconButton,
  Input,
} from "@mui/material"
import { Formik } from "formik"
import { useEffect, useState } from "react"
import * as yup from "yup"
import { shades } from "../theme"
import Payment from "./Payment"
import Shipping from "./Shipping"
//import { loadStripe } from "@stripe/stripe-js";
import { encode as btoa } from "base-64"
import { useNavigate } from "react-router-dom"
//import Stripe from "stripe";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
  PayPalButtons,
} from "@paypal/react-paypal-js"
import Thank from "../components/Thank"
import CartMenu from "../components/CartMenu"
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import styled from "@emotion/styled"
import useMediaQuery from "@mui/material/useMediaQuery"
import axios from "axios"
import { useCallback } from "react"
import useForceUpdate from "use-force-update"
import { setPrice, setCode, setSuccess } from "../state"
import DiscountIcon from "@mui/icons-material/Discount"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import SweetAlert from "../components/Alerts/SweetAlert"

import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setAddress,
  setIsCartOpen,
} from "../state"
import { red } from "@mui/material/colors"
import AddressForm from "./AddressForm"

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Checkout = ({ val }) => {
  const address = useSelector((state) => state.cart.address)
  const price = useSelector((state) => state.cart.price)
  const forceUpdate = useForceUpdate()
  const isNonMobile = useMediaQuery("(min-width:800px)")
  const isNonMobile2 = useMediaQuery("(min-width:1000px)")
  const dispatch = useDispatch()
  const isCartOpen = useSelector((state) => state.cart.isCartOpen)
  const code = useSelector((state) => state.cart.code)
  const [coupan, setCoupan] = useState("")
  const [activeStep, setActiveStep] = useState(0)
  const cart = useSelector((state) => state.cart.cart)
  const success = useSelector((state) => state.cart.success)
  const isFirstStep = activeStep === 0
  const isSecondStep = activeStep === 1
  const navigate = useNavigate()
  const [orderId, setOrderId] = useState(false)
  //const [success, setSuccess] = useState(true);
  //const [code, setCode] = useState(false);
  const [cs, setCodeSuccess] = useState(true)
  const [error, setError] = useState("")
  //const [price, setPrice] = useState(1);
  const [search, setSearchField] = useState("")
  const [pay, setPay] = useState(false)
  const [h, setH] = useState(true)
  const [shouldRender, setShouldRender] = useState(false)
  const [isPaypalVisible, setIsPaypalVisible] = useState(true)
  const [type, setType] = useState(false)
  const directCoupon = useSelector((state) => state.cart.directCoupon)
  const couponName = useSelector((state) => state.cart.couponName)

  let totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.variants[0].price
  }, 0)

  // useEffect(() => {
  //   setShouldRender(true);
  // }, [count]);
  // re-render whenever data changes

  const handleButtonClick = () => {
    if (!success) {
      setIsPaypalVisible(!isPaypalVisible)
      dispatch(setSuccess(!success))
    }
  }

  const handleButtonsClick = () => {
    setType(true)
    if (!success) {
      setIsPaypalVisible(!isPaypalVisible)
      dispatch(setSuccess(!success))
    }
  }

  useEffect(() => {
    if (pay) {
      makePayment(address)
    }
  }, [address, pay])

  // useEffect(() => {}, [price, h]);

  const createOrder = (data, actions) => {
    console.log(data, "Data")
    return actions.order
      .create({
        purchase_units: [
          {
            description: "",
            amount: {
              currency_code: "USD",
              // value: code
              //   ? 23
              value: data,

              //   : cart
              //       .map((item, sumi = 0) => {
              //         return (sumi = +item.variants[0].price * item.count);
              //       })
              //       .reduce(function (acc, val) {
              //         return acc + val;
              //       }, 0),
            },
          },
        ],

        // application_context: {
        //   shipping_preference: "NO_SHIPPING",
        // },
      })
      .then((orderId) => {
        console.log(orderId, "orderId")
        setOrderId(orderId)
        return orderId
      })
  }

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1)
    if (activeStep === 0) {
      // setSuccess(true);
    }

    // this copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      })
    }
    console.log(values.shippingAddress, "shipping address")
    actions.setTouched({})
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details
      //makePayment(payer.email_address);
      setPay(true)
    })
  }

  const onShow = (data, actions) => {
    console.log(address, "add")
  }

  const onError = (data, actions) => {
    setError("An Error Occured With Your Payment")
  }

  async function makePayment(data) {
    const requestBody = {
      //  userName: [values.firstName, values.lastName].join(" "),
      order: {
        line_items: cart.map((item) => ({
          title: item.title,
          price: item.variants[0].price,
          quantity: item.count,
          taxable: "false",
        })),
        email: data.email,
        shipping_address: {
          first_name: data.firstName,
          last_name: data.lastName,
          address1: data.street1,
          phone: data.phoneNumber,
          city: data.city,
          province: data.state,
          country: data.country,
          zip: data.zipCode,
        },
        billing_address: {
          first_name: data.firstName,
          last_name: data.lastName,
          address1: data.street1,
          phone: data.phoneNumber,
          city: data.city,
          province: data.state,
          country: data.country,
          zip: data.zipCode,
        },
      },
    }

    const response = await axios.post(
      "https://m48e2fta9d.execute-api.us-east-1.amazonaws.com/jkyogstage/orders",
      {
        body: requestBody,
        // {
        //   method:"POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //

        // }
      }
    )
    console.log(data.firstName, "address")
    console.log(data.lastName, "search")
    console.log(response.data, "data")
    setPay(false)
    const session = response.data
    if (session.body) {
      // window.open(session.body.order_status_url);
      navigate("/thank")
    }
  }

  const wrapper = () => {
    setActiveStep(activeStep - 1)
  }

  async function applycoupan() {
    var headers = new Headers()
    headers.append(
      "Authorization",
      "Basic " +
        btoa(
          "ce9a3ad16708f3eb4795659e809971c4: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"
        )
    )

    //
    //http://localhost:5000/price_rules.json
    const result = await fetch(
      "https://qc2n483pw9.execute-api.us-east-1.amazonaws.com/QA",
      {
        headers: headers,
      }
    )

    const itemJson = await result.json()
    const l = JSON.parse(itemJson.body)
    const title = l.price_rules.filter((i) => i.title === coupan)
    if (title.length > 0) {
      dispatch(setCode(true))
      setCodeSuccess(false)
      dispatch(setSuccess(!success))
      totalPrice = parseFloat(
        // (!code ? price : )
        totalPrice - -title[0].value
      ).toFixed(1)
      dispatch(setPrice(totalPrice))
      setH(false)
    } else {
      setCodeSuccess(false)
      setSuccess(true)
    }
  }

  const buttonData = {
    // Set the data object with parameter values
    // In this example, we're passing two parameters: param1 and param2
    // You can pass any number of parameters this way
    data: {
      param1: price,
      // param2: 'value2'
    },
  }

  return (
    <Box
      className="container"
      // width={isNonMobile ? "80%" : "100%"}
      // m={isNonMobile ? "100px 100px" : "100px 5px"}
    >
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <>
                  <>
                    <Box display="flex">
                      <Box>
                        {/* <Payment
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          setFieldValue={setFieldValue}
                        /> */}
                        <Shipping
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          setFieldValue={setFieldValue}
                        />
                        {/* <Input
                    placeholder="Search for Products..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearchField(e.target.value)}
                  /> */}
                      </Box>

                      <Box
                        padding="30px"
                        overflow="auto"
                        height="100%"
                        width="70%"
                        //border="1px solid #66666657"
                      >
                        {/* HEADER */}
                        <FlexBox mb="15px">
                          <Typography variant="h3">
                            <strong>SHOPPING BAG ({cart.length}) </strong>
                          </Typography>
                          <Box display={!isNonMobile ? "none" : ""}>
                            <Button
                              onClick={() => navigate(`/`)}
                              variant="contained"
                              sx={{ backgroundColor: "#ff6d2f" }}
                            >
                              {" "}
                              <ArrowBackIcon />
                              <Typography> Continue Shopping</Typography>
                            </Button>
                          </Box>

                          {/* <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                      <CloseIcon />
                    </IconButton> */}
                        </FlexBox>
                        <Divider />

                        {/* CART LIST */}
                        <Box overflow="auto" maxHeight="50em">
                          {cart.map((item) => (
                            <Box key={`${item.id}`}>
                              <FlexBox p="15px 0">
                                <Box flex="1 1 40%">
                                  <img
                                    alt={item?.name}
                                    width={!isNonMobile2 ? "60em" : "180em"}
                                    height={!isNonMobile2 ? "100em" : "250em"}
                                    src={item.image?.src}
                                  />
                                </Box>
                                <Box flex="1 1 60%">
                                  <FlexBox mb="5px" ml="10px">
                                    <Typography fontWeight="bold">
                                      {item.title} x ( {item.count} )
                                    </Typography>
                                    {/* <IconButton
                                onClick={() =>
                                  dispatch(removeFromCart({ id: item.id }))
                                }
                              >
                                <CloseIcon />
                              </IconButton> */}
                                  </FlexBox>
                                  {/* <Typography>{item.attributes.shortDescription}</Typography> */}
                                  {/* <FlexBox m="15px 0">
                                    <Box
                                display="flex"
                                alignItems="center"
                                border={`1.5px solid ${shades.neutral[500]}`}
                              >
                                    <IconButton
                                  onClick={() =>
                                    dispatch(decreaseCount({ id: item.id }))
                                  }
                                >
                                  <RemoveIcon />
                                </IconButton>
                                    <Typography>{item.count} item</Typography>
                                    <IconButton
                                  onClick={() =>
                                    dispatch(increaseCount({ id: item.id }))
                                  }
                                >
                                  <AddIcon />
                                </IconButton>
                                    </Box>
                                    <Typography fontWeight="bold">
                                      ${item.variants[0].price}
                                    </Typography>
                                  </FlexBox> */}
                                </Box>
                              </FlexBox>
                              <Divider />

                              <></>
                            </Box>
                          ))}
                        </Box>

                        {/* ACTIONS */}
                        <Box m="20px 0">
                          <Divider />
                          <FlexBox m="20px 0">
                            <Typography
                              fontWeight="bold"
                              sx={{ display: isNonMobile ? "" : "none" }}
                            >
                              COUPON CODE
                            </Typography>
                            <Box
                              sx={{
                                p: 2,
                                border: `1px dashed ${
                                  cs
                                    ? "grey"
                                    : success
                                    ? isPaypalVisible
                                      ? "red"
                                      : "green"
                                    : "green"
                                }`,
                                background: "white",
                              }}
                            >
                              {!directCoupon ? (
                                <Input
                                  placeholder="Enter Coupon Code"
                                  type="text"
                                  value={coupan}
                                  onChange={(e) => setCoupan(e.target.value)}
                                />
                              ) : (
                                <Input
                                  placeholder="Enter Coupon Code"
                                  type="text"
                                  value={couponName}
                                />
                              )}
                            </Box>

                            <Button
                              variant="contained"
                              onClick={() => {
                                applycoupan()
                                handleButtonClick()
                              }}
                              sx={{
                                display:
                                  isNonMobile && h && !code ? "" : "none",
                              }}
                            >
                              {" "}
                              Apply{" "}
                            </Button>
                          </FlexBox>
                          {!isNonMobile && (
                            <Button
                              variant="contained"
                              onClick={() => {
                                applycoupan()
                                handleButtonClick()
                              }}
                              sx={{ display: h ? "" : "none" }}
                            >
                              {" "}
                              Apply{" "}
                            </Button>
                          )}
                          <Divider />
                          {code ? (
                            <>
                              {" "}
                              <FlexBox m="20px 0">
                                <Typography fontWeight="bold">
                                  SUBTOTAL
                                </Typography>
                                <Typography
                                  fontWeight="bold"
                                  sx={{ textDecoration: "line-through" }}
                                >
                                  ${totalPrice}
                                </Typography>
                              </FlexBox>
                              <FlexBox>
                                <Typography fontWeight="bold">TOTAL</Typography>
                                <Typography fontWeight="bold">
                                  ${code ? price : totalPrice}
                                </Typography>
                              </FlexBox>
                            </>
                          ) : (
                            <FlexBox m="20px 0">
                              <Typography fontWeight="bold">
                                SUBTOTAL
                              </Typography>
                              <Typography fontWeight="bold">
                                ${code ? price : totalPrice}
                              </Typography>
                            </FlexBox>
                          )}
                          <Divider />
                          <Divider />
                          {/* <Button
                      disabled={cart.length === 0}
                      sx={{
                        backgroundColor: shades.primary[400],
                        color: "white",
                        borderRadius: 0,
                        minWidth: "100%",
                        padding: "20px 40px",
                        m: "20px 0",
                        display: cart.length === 0 ? "none" : "",
                      }}
                      onClick={
                        () => {
                        navigate("/checkout");
                      }
                    }
                    >
                     SAVE 
                    </Button> */}
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display:
                            values.firstName !== "" && values.country !== ""
                              ? ""
                              : "none",
                        }}
                      >
                        {type && (
                          <Typography sx={{ mb: "15px" }} fontSize="18px">
                            <strong>
                              Make Payment With{" "}
                              <b style={{ color: "#ff6d2f" }}>
                                {" "}
                                Discount Applied
                              </b>
                            </strong>
                          </Typography>
                        )}
                        <div>
                          {!success ? (
                            <Button
                              onClick={handleButtonsClick}
                              variant="contained"
                              size="large"
                              sx={{
                                padding: "18px 22px",
                                background:
                                  "linear-gradient(95deg, rgba(230,114,20,1) 0%, rgba(232,171,14,1) 66%, rgba(230,114,20,1) 94%)",
                                fontWeight: "bolder",
                                fontSize: "medium",
                              }}
                            >
                              Proceed to &nbsp;{" "}
                              <strong> Pay With Discount </strong> &nbsp; &nbsp;{" "}
                              {/* <SweetAlert/> */}
                              <DiscountIcon />
                            </Button>
                          ) : (
                            <></>
                          )}

                          <PayPalScriptProvider
                            options={{
                              "client-id":
                                "AVRcsMIkUdUB-1PC0AHfQWISSMbQV2pCr8IVGiQd1QLkA8EWQzYY9owvyPm1zWdQjNO4sAXnxQyDgtJz",
                            }}
                          >
                            {/* { h === "true" ? */}
                            {/* {h ? "true" : "false"} */}
                            {
                              //!success
                            }{" "}
                            {success ? (
                              <PayPalButtons
                                style={{ layout: "vertical", color: "blue" }}
                                createOrder={(data, actions) =>
                                  createOrder(price, actions)
                                }
                                onApprove={(data, actions) =>
                                  onApprove(data, actions)
                                }
                                onError={(error) => onError(error)}
                              />
                            ) : (
                              <> </>
                            )}
                            {/* <PayPalButtons
                              style={{ layout: "vertical",color:'blue' }}
                              createOrder={(data, actions) =>
                               createOrder(price,actions)
                              }
                              onApprove={(data, actions) =>
                                onApprove(data, actions)
                              }
                              onError={(error) => onError(error)}
                            /> */}
                            {/* createOrder = {createOrder}
                          {...buttonData}
                            onApprove={onApprove}
                            onError={onError}
                            onClick={onShow} */}
                          </PayPalScriptProvider>
                        </div>
                      </Box>
                    </Box>
                  </>
                </>
              )}

              <Box display="flex" justifyContent="center" gap="50px">
                {!isFirstStep && (
                  <Button
                    // fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      display: "flex",
                      backgroundColor: shades.primary[400],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                      width: "20%",
                    }}
                    onClick={wrapper}
                  >
                    Back
                  </Button>
                )}
                {/* <Button
                  fullWidth
                  //disabled={success}
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                    display: isSecondStep ? "none" : "",
                  }}
                >
                  {!isSecondStep ? "Next" : ""}
                </Button> */}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

const initialValues = {
  billingAddress: {
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
}

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      email: yup.string().required("required"),
      phoneNumber: yup.string().required("required"),
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  // yup.object().shape({
  //   email: yup.string().required("required"),
  //   phoneNumber: yup.string().required("required"),
  // }),
]

export default Checkout
