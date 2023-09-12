import {
  Box,
  InputBase,
  Divider,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const breakPoint = useMediaQuery("(max-width:500px)");

  return (
    <Box className="subscribe" >
      <div className="row"
      >
        <div className="col-md-4 col-sm-12 textleft">

          <IconButton>
            <MarkEmailReadOutlinedIcon
              fontSize="medium"
              style={{ color: "#ff6d2f" }}
            />
          </IconButton>
          <div> <p className="txt">
            Subscribe To Our Newsletter
          </p>
            <p className="desc">
              Get all the latest news, upcoming programs, retreats and other updates
              regularly!
            </p></div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <Box className="col-5"
              p="2px 4px"
              m="15px auto"
              // display="flex"
              alignItems="center"
              // width={breakPoint ? "100%" : "55%"}
              backgroundColor="#F2F2F2"
            >
              <InputBase
                width="100%"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Box>
            <Box className="col-7"
              p="2px 4px"
              m="15px auto"
              display="flex"
              alignItems="center"
              width={breakPoint ? "100%" : "55%"}
              backgroundColor="#F2F2F2"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

              <Button>
                {" "}
                <Typography
                  sx={{
                    p: "10px",
                    ":hover": { cursor: "pointer" },
                    background: "#ff6d2f",
                  }}
                >
                  Subscribe
                </Typography>
              </Button>
            </Box>
          </div>
        </div>
      </div>


    </Box>
  );
};

export default Subscribe;
