import { getIn } from "formik";
import { Box,Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setAddress } from "../state";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setAddress(values));
  },[values])
 
  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
        {/* <Typography sx={{ mb: "15px" }} fontSize="18px" >
          Contact Info
        </Typography> */}
        <TextField
         // fullWidth
      
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name={formattedName("email")}
          error={formattedError("email")}
          helperText={formattedHelper("email")}
          sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%" }}
        />
        <TextField
          //fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name={formattedName("phoneNumber")}
          error={formattedError("phoneNumber")}
          helperText={formattedHelper("phoneNumber")}
          sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%" }}
        />
     
    
      <TextField
    
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%" }}
      />
      <TextField
        
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%"}}
      />
      
      <TextField
        
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%"}}
      />
      <TextField
        
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
       sx={{ gridColumn: "span 4" ,width:isNonMobile ? "80%" :"100%" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Address 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%"}}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{ gridColumn: "span 4",width:isNonMobile ? "80%" :"100%"  }}
      />
      <TextField
        
        type="text"
        label="Province"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
       sx={{ gridColumn: "span 2" }}
      />
      <TextField
        
        type="text"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
       sx={{ gridColumn: "span 1" }}
      />
    </Box>
  );
};

export default AddressForm;
