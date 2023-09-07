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
    <Box width="80%" margin="30px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon
          fontSize="large"
          style={{ color: "#ff6d2f" }}
        />
      </IconButton>
      <Typography variant="h2" color="#ff6d2f">
        Subscribe To Our Newsletter
      </Typography>
      <Typography color="white">
        Get all the latest news, upcoming programs, retreats and other updates
        regularly!
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width= {breakPoint ? "100%" : "55%"} 
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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
    </Box>
  );
};

export default Subscribe;
