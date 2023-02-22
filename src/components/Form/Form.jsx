import { useState, useRef } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";

import "./form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    AccountType: "Advanced",
    UserName: "",
    Password: "",
    ServerAddress: "",
    ServerPath: "",
    Port: "",
    UseSSL: false,
  });

  const selectRef = useRef(null);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      AccountType: formValues.AccountType,
      UserName: formValues.UserName,
      Password: formValues.Password,
      /* ServerAddress: formValues.ServerAddress,
      ...(formValues.AccountType === "Advanced" && {
        ServerPath: formValues.ServerPath,
        Port: formValues.Port,
        UseSSL: formValues.UseSSL,
      } ,)*/
    };
    if (formValues.ServerAddress !== "") {
      formData.ServerAddress = formValues.ServerAddress;
    }
    if (formValues.AccountType === "Advanced") {
      if (formValues.ServerPath !== "") {
        formData.ServerPath = formValues.ServerPath;
      }
      if (formValues.Port !== "") {
        formData.Port = formValues.Port;
      }
      formData.UseSSL = formValues.UseSSL;
    }
    const jsonData = JSON.stringify(formData);
    console.log("Form values:", jsonData);
    return jsonData;
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <FormControl>
        <InputLabel id="AccountType-label">AccountType</InputLabel>
        <Select
          labelId="AccountType-label"
          id="AccountType"
          name="AccountType"
          value={formValues.AccountType}
          onChange={handleInputChange}
          inputRef={selectRef}
        >
          <MenuItem value="Advanced" className="menuItem">
            Advanced
          </MenuItem>
          <MenuItem value="Manual" className="menuItem">
            Manual
          </MenuItem>
        </Select>
      </FormControl>
      <label htmlFor=""></label>
      <TextField
        variant="outlined"
        placeholder="name@example.com"
        name="UserName"
        type="email"
        value={formValues.UserName}
        onChange={handleInputChange}
        required
        className="formElement"
      />
      <TextField
        variant="outlined"
        placeholder="Required"
        name="Password"
        type="password"
        value={formValues.Password}
        onChange={handleInputChange}
        required
        className="formElement"
      />
      <TextField
        variant="outlined"
        placeholder="example.com"
        name="ServerAddress"
        type="text"
        value={formValues.ServerAddress}
        onChange={handleInputChange}
        className="formElement"
      />
      {formValues.AccountType === "Advanced" && (
        <>
          <TextField
            variant="outlined"
            placeholder="/calendars/user/"
            name="ServerPath"
            type="text"
            value={formValues.ServerPath}
            onChange={handleInputChange}
            className="formElement"
          />
          <TextField
            variant="outlined"
            placeholder="Server Path"
            name="Port"
            inputProps={{ min: 1, max: 65535 }}
            type="number"
            value={formValues.Port}
            onChange={handleInputChange}
            className="formElement"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Use SSL"
            name="UseSSL"
            checked={formValues.UseSSL}
            onChange={handleInputChange}
            className="formElement"
          />
        </>
      )}
      <div className="buttonContainer">
        <Button variant="contained" color="primary" type="submit" size="small">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
