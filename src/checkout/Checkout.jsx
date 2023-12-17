// Import necessary modules and components
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Divider,
  Input,
} from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { encode as btoa } from "base-64";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import DiscountIcon from "@mui/icons-material/Discount";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { setPrice, setCode, setSuccess } from "../state";
import Shipping from "./Shipping";
import { shades } from "../theme";
import NavMenu from "../components/NavMenu";

// Define a styled component for flexible box layout
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Define the Checkout component
const Checkout = ({ val }) => {
  // Select necessary Redux state variables
  const address = useSelector((state) => state.cart.address);
  const price = useSelector((state) => state.cart.price);
  const isNonMobile = useMediaQuery("(min-width:800px)");
  const isNonMobile2 = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const code = useSelector((state) => state.cart.code);
  const [coupan, setCoupan] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const success = useSelector((state) => state.cart.success);
  const isFirstStep = activeStep === 0;
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(false);
  const [cs, setCodeSuccess] = useState(true);
  const [error, setError] = useState("");
  const [pay, setPay] = useState(false);
  const [h, setH] = useState(true);
  const [isPaypalVisible, setIsPaypalVisible] = useState(true);
  const [type, setType] = useState(false);
  const directCoupon = useSelector((state) => state.cart.directCoupon);
  const couponName = useSelector((state) => state.cart.couponName);
  const [isDisablePayment, setIsDisablePayment] = useState(true);

  // Calculate the total price of the items in the cart
  let totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.variants[0].price;
  }, 0);

  // Handle button click to show/hide PayPal payment options
  const handleButtonClick = () => {
    if (!success) {
      setIsPaypalVisible(!isPaypalVisible);
      dispatch(setSuccess(!success));
    }
  };

  // Handle button click for payment with discount
  const handleButtonsClick = () => {
    setType(true);
    if (!success) {
      setIsPaypalVisible(!isPaypalVisible);
      dispatch(setSuccess(!success));
    }
  };

  // Make payment when the 'pay' state is true
  useEffect(() => {
    if (pay) {
      makePayment(address);
    }
  }, [address, pay]);

  // Check if the address is complete and enable/disable payment button accordingly
  useEffect(() => {
    const isActive =
      address.email &&
      address.firstName &&
      address.lastName &&
      address.phoneNumber &&
      address.state;
    setIsDisablePayment(!isActive);
  }, [address]);

  // Create an order for PayPal payment
  const createOrder = (data, actions) => {
    console.log(data, "Data");
    return actions.order
      .create({
        purchase_units: [
          {
            description: "",
            amount: {
              currency_code: "USD",
              value: data,
            },
          },
        ],
      })
      .then((orderId) => {
        console.log(orderId, "orderId");
        setOrderId(orderId);
        return orderId;
      });
  };

  // Handle form submission
  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
    if (activeStep === 0) {
      // Additional logic for the first step of the form
    }

    // Copy billing address to shipping address if they are the same
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
    console.log(values.shippingAddress, "shipping address");
    actions.setTouched({});
  };

  // Handle payment approval by PayPal
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setPay(true);
    });
  };

  // Handle payment error by PayPal
  const onError = (data, actions) => {
    setError("An Error Occurred With Your Payment");
  };

  // Make the actual payment
  const makePayment = async (data) => {
    // Define the request body
    const requestBody = {
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
    };
    const requestDataFormat = {
      body: JSON.stringify(requestBody),
    };
    console.log(requestBody);
    // Send the payment request to the server
    const response = await axios.post(
      "https://m48e2fta9d.execute-api.us-east-1.amazonaws.com/jkyogstage/orders",
      requestBody
    );
    // console.log(data.firstName, "address");
    // console.log(data.lastName, "search");
    console.log(response.data, "data");
    setPay(false);
    const session = response.data;
    if (session.body) {
      navigate("/thank");
    }
  };

  // Apply coupon
  async function applyCoupon() {
    var headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " +
        btoa(
          "ce9a3ad16708f3eb4795659e809971c4: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"
        )
    );

    const result = await fetch(
      "https://qc2n483pw9.execute-api.us-east-1.amazonaws.com/QA",
      {
        headers: headers,
      }
    );

    const itemJson = await result.json();
    const l = JSON.parse(itemJson.body);
    const title = l.price_rules.filter((i) => i.title === coupan);
    if (title.length > 0) {
      dispatch(setCode(true));
      setCodeSuccess(false);
      dispatch(setSuccess(!success));
      totalPrice = parseFloat(totalPrice - -title[0].value).toFixed(1);
      dispatch(setPrice(totalPrice));
      setH(false);
    } else {
      setCodeSuccess(false);
      setSuccess(true);
    }
  }

  // Render the Checkout component
  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <NavMenu navFromTop={true} />
      </div>
      <Box className="container">
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
                          <Shipping
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleBlur={handleBlur}
                            handleChange={handleChange}
                            setFieldValue={setFieldValue}
                          />
                        </Box>

                        <Box
                          padding="30px"
                          overflow="auto"
                          height="100%"
                          width="70%"
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
                                    </FlexBox>
                                  </Box>
                                </FlexBox>
                                <Divider />
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
                                  applyCoupon();
                                  handleButtonClick();
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
                                  applyCoupon();
                                  handleButtonClick();
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
                                  <Typography fontWeight="bold">
                                    TOTAL
                                  </Typography>
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
                                <strong> Pay With Discount </strong> &nbsp;
                                &nbsp; <DiscountIcon />
                              </Button>
                            ) : (
                              <></>
                            )}

                            <PayPalScriptProvider
                              options={{
                                "client-id":
                                  "AYQ5fCEYi8xgTe5wBLDbv4Ttv5f1UptJSoO2h_VtJYFiw8gduAz_A0KfpkcdWERq6qwORcPKY_7g5jD8",
                              }}
                            >
                              {success ? (
                                <PayPalButtons
                                  disabled={isDisablePayment}
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
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

// Define initial form values
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
};

// Define validation schema for the form
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
];

// Export the Checkout component
export default Checkout;
