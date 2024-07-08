import { useState } from "react";
import { TextField, Backdrop, Button, CircularProgress } from "@mui/material";
import "./BasicDetails.styles.css";
import { Controller, useForm } from "react-hook-form";
import { validationRules } from "../../../validationRules/validationRules";

const BasicDetails = () => {
  const { control, handleSubmit, formState, setValue, setError, getValues } =
    useForm({
      mode: "onChange",
    });
  const { errors, isValid } = formState;

  const [showLoader, setShowLoader] = useState(false);

  const basicDataHandler = (data) => {
    setShowLoader(true);
    console.log(data);
    setTimeout(() => {
      setShowLoader(false);
      //disable the upper form
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(basicDataHandler)}>
      <div className="form-container-row">
        <Controller
          name="name"
          control={control}
          rules={validationRules?.name}
          render={({ field }) => (
            <TextField
              {...field}
              id="name"
              label={errors?.name ? errors?.name.message : "name"}
              variant="outlined"
              style={{ width: "40%" }}
              size="medium"
              margin="normal"
              error={errors?.name}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={validationRules?.email}
          render={({ field }) => (
            <TextField
              {...field}
              id="email"
              label={errors?.email ? errors?.email.message : "email"}
              variant="outlined"
              style={{ width: "40%" }}
              size="medium"
              margin="normal"
              error={errors?.email}
            />
          )}
        />
      </div>

      <div className="form-container-row">
        <Controller
          name="password"
          control={control}
          rules={validationRules?.password}
          render={({ field }) => (
            <TextField
              {...field}
              id="password"
              type="password"
              label={errors?.password ? errors?.password.message : "password"}
              variant="outlined"
              style={{ width: "40%" }}
              size="medium"
              margin="normal"
              error={errors?.password}
            />
          )}
        />

        <Controller
          name="adhaar_number"
          control={control}
          rules={validationRules?.adhaar}
          render={({ field }) => (
            <TextField
              {...field}
              id="adhaar_number"
              label={
                errors?.adhaar_number
                  ? errors?.adhaar_number.message
                  : "adhaar number"
              }
              variant="outlined"
              style={{ width: "40%" }}
              size="medium"
              margin="normal"
              error={errors?.adhaar_number}
            />
          )}
        />
      </div>
      <div className="button-container">
        <Button variant="contained" type="submit" disabled={!isValid}>
          Validate Details
        </Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </form>
  );
};

export default BasicDetails;
