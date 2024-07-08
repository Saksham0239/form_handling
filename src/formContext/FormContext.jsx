import { createContext, useReducer } from "react";
import { defaultStateReducer } from "../utils/commonUtils";

export const FormContext = createContext();

const initialState = {
  name: "",
  email: "",
  password: "",
  adhaarNumber: "",
  isBasicDetailsValid: true,
  mothersName: "",
  dateOfBirth: "",
  membershipType: "",
  isPersonalDetailsValid: false,
  isTncSelected: true,
};

const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  return (
    <FormContext.Provider
      value={{ formState: state, dispatchFormState: dispatch }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
