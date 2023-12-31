import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
import "../css/sign.css";
import { useState } from "react";
import User from "../../api/User";
import { useNavigate } from "react-router-dom";
import showToast from "../toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const signInInputData = [
    {
      type: "email",
      icon: "email",
      place: "Enter your email",
      event: setEmail,
      invalid: emailInvalid,
      invalidMessage: "Email address is not exists.",
    },
    {
      type: "password",
      title: "Password",
      icon: "lock",
      place: "Enter your password",
      event: setPassword,
      invalid: passwordInvalid,
      invalidMessage: "Invalid password. Please check your credentials",
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
      showToast("Successfully get into the TimeCraft!", "success");
      const dataResult = JSON.parse(await user.getProfilePicture());
      if (dataResult.status == 200) {
        let arr =  dataResult.data[0].profile_image;
        sessionStorage.setItem(
          "profile_image",
          JSON.stringify(arr)
          );
          console.log(arr);
      }
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
