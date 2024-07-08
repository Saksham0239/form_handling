export const validationRules = {
  name: {
    required: { value: true, message: "your name is required" },
    pattern: {
      value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
      message: "please enter a valid name",
    },
  },
  email: {
    required: { value: true, message: "your email Id is required" },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "please enter a valid email",
    },
  },
  password: {
    required: { value: true, message: "your password is required" },
    min: { value: 6, message: "password should be minimum 6 characters" },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d.*\d).{6,}$/,
      message: "please enter a valid password",
    },
  },
  adhaar: {
    required: { value: true, message: "your adhaar number is required" },
    pattern: {
      value: /^\d{12}$/,
      message: "please enter a valid adhaar number",
    },
  },
};
