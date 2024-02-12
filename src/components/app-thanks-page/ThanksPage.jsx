import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ExpandMore } from "@mui/icons-material";
import ProductDisplayCard from "../checkout-components/Product-display-card";
import ThanksBillingDisplay from "./components/billingDisplay";
import OrderDetailsSection from "./components/orderDetailsSection";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ApiDataPostType } from "../../api/Api";

const ThanksPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const orderParam = queryParams.get("order");
  const breakPoint = useMediaQuery("(max-width:850px)");
  const breakPointXs = useMediaQuery("(max-width:600px)");
  const [orderDetails, setOrderDetails] = useState(null);
  const [lineItems, setLineItems] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order");

  // console.log("orderId",orderId);

  useEffect(() => {
    if (orderId) {
      getOrderDetail();
    }
  }, []);

  useEffect(() => {
    orderDetails !== null && getLineItemsDetails();
  }, [orderDetails]);

  const getOrderDetail = useCallback(async () => {
    const url = `https://sso.jkyog.org/api/v1/customer/order/${orderId}`;
    try {
      const response = await axios.get(url);
      console.log("response.data.orderDetails", response.data.response);
      setOrderDetails(response.data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }, [orderParam]);

  const getLineItemsDetails = async () => {
    if (orderDetails?.line_items?.length > 0) {
      const lineItemsDetails = await Promise.all(
        orderDetails.line_items.map(async (lineItem) => {
          let productDetails = {};
          if (lineItem?.product_id) {
            productDetails = await getProductDetailById(lineItem.product_id);
            // console.log(productDetails);
          }
          return {
            ...productDetails,
            price: lineItem?.price,
            title: lineItem?.name,
            count: lineItem?.fulfillable_quantity,
          };
        })
      );
      // console.log(lineItemsDetails);
      setLineItems(lineItemsDetails);
    }
  };

  const getProductDetailById = async (id) => {
    try {
      const response = await ApiDataPostType(`/customer/product/${id}`);
      return response.data.response;
    } catch (error) {
      console.error("Error fetching product data:", error);
      throw error;
    }
  };

  return (
    <>
      {breakPoint && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid lightgrey",
            background: "#F5F5F5",
            padding: "1rem 5rem",
          }}
        >
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              id="checkout-mobile-display-header"
              sx={{
                background: "#F5F5F5",
                boxShadow: "none",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  textAlign: "left",
                  color: "rgb(185,72,24)",
                }}
              >
                Show order summary
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div className="products-section">
                  {lineItems != null &&
                    lineItems?.map((product, index) => (
                      <ProductDisplayCard product={product} key={index} />
                    ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
                  }}
                >
                  <ThanksBillingDisplay orderDetails={orderDetails} />
                </div>
              </Box>
            </AccordionDetails>
          </Accordion>
        </section>
      )}

      <Box p={breakPoint ? "0" : "2rem 0rem"}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <section
            style={{
              width: breakPoint ? "100%" : "55%",
              display: "flex",
              flexDirection: "column",
              borderRight: "0.5px solid lightgrey",
              borderTop: "1px solid lightgrey",
              padding: breakPoint ? "2rem 5rem" : "1.8rem 1.8rem 1.8rem 10%",
              gap: "1.5rem",
            }}
          >
            <OrderDetailsSection
              orderDetails={orderDetails}
              breakPointXs={breakPointXs}
            />
          </section>

          {!breakPoint && (
            <section
              style={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid lightgrey",
                background: "#F5F5F5",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem 20% 1rem 2rem",
                  minHeight: "20rem",
                  gap: "1rem",
                }}
              >
                <div
                  className="products-section"
                  style={{
                    maxHeight: "45vh",
                    overflow: "scroll",
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                  }}
                >
                  {lineItems != null ? (
                    lineItems?.map((product, index) => (
                      <ProductDisplayCard product={product} key={index} />
                    ))
                  ) : (
                    <CircularProgress sx={{ marginLeft: "50%" }} />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
                  }}
                >
                  <ThanksBillingDisplay orderDetails={orderDetails} />
                </div>
              </Box>
            </section>
          )}
        </div>
      </Box>
    </>
  );
};

export default ThanksPage;
