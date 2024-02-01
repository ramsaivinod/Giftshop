import { ErrorOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

function TooManyRequests() {
  return (
    <div>
      <Fragment>
        <Box width="100%" m="80px auto">
          <div className="container">
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem",justifyContent:"center" }}>
              <ErrorOutline sx={{mt:2,fontSize: "3rem",color:"red"}}/>
              <p
                style={{
                  fontSize: 26,
                  fontWeight: 500,
                  margin: "20px 0 10px",
                  textAlign: "center",
                }}
              >
                API rate limit exceeded
              </p>
            </div>
            <p
              style={{
                fontSize: 20,
                fontWeight: 500,
                margin: "20px 0 10px",
                textAlign: "center",
                marginBottom: 8,
                color: "#ff6d31",
              }}
            >
              Try reloading the page after few minutes!
            </p>
          </div>
        </Box>
      </Fragment>
    </div>
  );
}

export default TooManyRequests;
