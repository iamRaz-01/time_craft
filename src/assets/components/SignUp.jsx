import "../css/sign.css";
import { useState } from "react";
import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";

const SignUp = () => {
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

  const inputs = data.map((e) => {
    return <Input properties={e} />;
  });

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      {inputs}
      <RegisterButton buttonFor="Sign Up"></RegisterButton>
    </div>
  );
};

export { SignUp };