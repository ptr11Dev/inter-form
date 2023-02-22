import "./FormTwo.css";

import { useState } from "react";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

const FormTwo = () => {
  const [formValues, setFormValues] = useState({
    accountType: "Advanced",
    userName: "",
    password: "",
    serverAddress: "",
    serverPath: "",
    port: "",
    ssl: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAdditionalValidation = (field) => {
    if (field === "serverPath") {
      const serverPathRegex = /^[0-9a-zA-Z/]+$/;
      const isServerPathMatch = serverPathRegex.test(formValues.serverPath);
      if (!isServerPathMatch) alert("Invalid server path");
    }

    if (field === "serverAddress") {
      const serverAddressRegex =
        /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}|(?:[a-zA-Z0-9](?:[a-zA-Z0-9/.\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
      const isServerAddressMatch = serverAddressRegex.test(
        formValues.serverAddress
      );
      if (!isServerAddressMatch) alert("Invalid server address");
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = {
      accountType: formValues.accountType,
      userName: formValues.userName,
      password: formValues.password,
    };
    if (formValues.serverAddress !== "") {
      console.log("?");
      handleAdditionalValidation("serverAddress");
      formData.serverAddress = formValues.serverAddress;
    }
    if (formValues.accountType === "Advanced") {
      if (formValues.serverPath !== "") {
        handleAdditionalValidation("serverPath");
        formData.serverPath = formValues.serverPath;
      }
      if (formValues.port !== "") {
        formData.port = formValues.port;
      }
      formData.ssl = formValues.ssl;
    }
    const jsonData = JSON.stringify(formData);
    console.log("Form values:", jsonData);
    return jsonData;
  };

  return (
    <form className="formContainer" onSubmit={handleSubmitForm}>
      <div className="inputContainer">
        <label htmlFor="accountType" className="inputContainer__label">
          Account Type:
        </label>
        <select
          name="accountType"
          id="accountType"
          className="inputContainer__input"
          onChange={handleInputChange}
          style={{ width: "calc(12em + 8px)" }}
          value={formValues.accountType}
        >
          <option value="Advanced" style={{ height: "10px" }}>
            Advanced
          </option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <Input
        name="userName"
        labelValue="User Name"
        inputType="email"
        placeholder="name@example.com"
        required={true}
        change={handleInputChange}
      />
      <Input
        name="password"
        labelValue="Password"
        inputType="password"
        placeholder="Required"
        required={true}
        change={handleInputChange}
      />
      <Input
        name="serverAddress"
        labelValue="Server Address"
        inputType="text"
        placeholder="example.com"
        change={handleInputChange}
      />
      {formValues.accountType === "Advanced" && (
        <>
          <Input
            name="serverPath"
            labelValue="Server Path"
            inputType="text"
            placeholder="/calendars/users/"
            change={handleInputChange}
          />
          <div className="lastLineContainer">
            <Input
              name="port"
              labelValue="Port"
              inputType="number"
              change={handleInputChange}
              additionalProps={{ min: 1, max: 65535 }}
              additionalContainerStyle={{
                maxWidth: "30px",
                justifyContent: "flex-end",
              }}
            />
            <Checkbox
              name="ssl"
              labelValue="Use SSL"
              inputType="checkbox"
              change={handleInputChange}
              isChecked={formValues.SSL}
            />
          </div>
        </>
      )}
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};
export default FormTwo;
