import "../css/sign.css";
import { useState } from "react";
import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";

const SignUp = ({ onPageChange }) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let data = [
    {
      type: "text",
      icon: "badge",
      place: "Enter the name",
      event: setName,
    },
    {
      type: "email",
      icon: "email",
      place: "Enter your email",
      event: setEmail,
    },
    {
      type: "password",
      title: "Password",
      icon: "lock",
      place: "Enter your password",
      event: setPassword,
    },
    {
      type: "password",
      title: "Confirm Password",
      icon: "lock",
      place: "Confirm your password",
      event: setConfirmPassword,
    },
  ];

  const inputs = data.map((item, index) => (
    <Input key={index} properties={item} title={item.title} />
  ));

  const handleSingUpValues = () => {
    console.log(`${email} ${password} ${username} ${confirmPassword}`);
    onPageChange();
  };
  

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      {inputs}
      <RegisterButton
        registerAction={handleSingUpValues}
        buttonFor="Sign Up"
      ></RegisterButton>
    </div>
  );
};

export { SignUp };
