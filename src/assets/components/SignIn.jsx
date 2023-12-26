import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
import "../css/sign.css";
import { useState } from "react";

const SignIn = ({ onPageChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInInputData = [
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
  ];

  const signInInputs = signInInputData.map((item, index) => {
    return <Input key={index} properties={item}></Input>;
  });

  const handleSignInValues = () => {
    console.log(`${email} ${password}`);
    onPageChange();
  };

  return (
    <div className="sign-up">
      <h1 className="signIn-head">Sign In</h1>
      {signInInputs}
      <RegisterButton buttonFor="Sign In" registerAction={handleSignInValues} />
    </div>
  );
};

export { SignIn };
