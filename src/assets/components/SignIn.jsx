import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
import "../css/sign.css";
import { useState } from "react";
import User from "../../api/User";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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

  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate("/dashboard");
  };

  const handleSignUpBack = () => {
    navigate("/signup");
  };

  const signInInputs = signInInputData.map((item, index) => {
    return <Input key={index} properties={item}></Input>;
  });

  async function handleSignInValues(event) {
    event.preventDefault();
    const data = { email, password };
    let user = new User();
    let result = JSON.parse(await user.loginUser(data));
    if (result.status === 500) {
      alert(result.error);
    } else {
      let token = result.token;
      sessionStorage.setItem("token", token);
      alert("success");
      handlePageChange();
    }
  }

  return (
    <div className="signup-div-container">
      <div className="singup-div-inside-div">
        <form className="sign-up">
          <div className="sign-up-inside-div">
            <h1 className="sign-head">Sign In</h1>
            {signInInputs}
            <RegisterButton
              buttonFor="Sign In"
              registerAction={(event) => handleSignInValues(event)}
            />

            {/* Other options to sing in */}
            <div className="other-sign-options-div-container">
              <div className="other-sign-options-inside-div">
                <div className="social-account-div">
                  <div className="line"></div>
                  <p className="message">SignIn with social accounts</p>
                  <div className="line"></div>
                </div>
                <div className="social-icons-div">
                  <button className="social-icons">
                    <i className="bi bi-google"></i>
                  </button>
                  <button className="social-icons">
                    <i className="bi bi-apple"></i>
                  </button>
                  <button className="social-icons">
                    <i className="bi bi-github"></i>
                  </button>
                </div>
                <div className="already-have-account-div">
                  <p className="already-message-head">
                    Don't have an account?
                    <span
                      className="sign-option-anger"
                      onClick={handleSignUpBack}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignIn };
