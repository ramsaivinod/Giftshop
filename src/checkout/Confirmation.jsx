import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import NavMenu from '../components/NavMenu';


const Confirmation = () => {
  return (
    <>
      <NavMenu navFromTop={true} />
      <Box m="90px auto" width="80%" height="50vh">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      </Box>
    </>
  );
};

export default Confirmation;
