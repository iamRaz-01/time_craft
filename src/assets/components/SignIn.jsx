import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
const signInInputData = [
  {
    type: "email",
    icon: "email",
    place: "Enter your email",
  },
  {
    type: "password",
    title: "Password",
    icon: "lock",
    place: "Enter your password",
  },
];
const signInInputs = signInInputData.map((item) => {
  return <Input properties={item}></Input>;
});

const SignIn = () => {
  return (
    <div>
      <h1 className="signIn-head">Sign In</h1>
      {signInInputs}
      <RegisterButton buttonFor="Sign In" />
    </div>
  );
};

export { SignIn };
