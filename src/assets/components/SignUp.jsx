import "../css/sign.css";
import { useState } from "react";
import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";

const SignUp = (props) => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//  const [confirmPassword, setConfirmPassword] = useState("");
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
      // event: setConfirmPassword,
    },
  ];

  const inputs = data.map((e) => {
    return <Input properties={e} />;
  });
  const create = () => {
		const xml = new XMLHttpRequest(false);
		const data = { username, email, password };
		xml.open("POST", "http://localhost:3030/api/timecraft/user/create", true);
		xml.setRequestHeader("Content-Type", "application/json");
		xml.onreadystatechange = () => {
			if (xml.readyState === 4) {
				if (xml.status === 200) {
					const result = JSON.parse(xml.responseText);
					props.event(true);
					console.log(result);
				} else {
					alert("server error");
				}
			}
		};
		xml.send(JSON.stringify(data));
	};

  return (
    <form  onSubmit={(e) => {
      e.preventDefault();
      create();
    }} className="sign-up">
      <h1>Sign Up</h1>
      {inputs}
      <RegisterButton buttonFor="Sign Up"></RegisterButton>
    </form>
  );
};

export { SignUp };
