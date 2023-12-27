import "../css/sign.css";
import { useState } from "react";
import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
import User from "../../api/User";
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
  async function handleSingUpValues() {
    if (password !== confirmPassword) alert("password doesn't matching");
    else {
      const data = { username, email, password };
      let user = new User();
      let result = JSON.parse(await user.createUser(data));
      if (result.status === 500) {
        alert(result.error);

      }
      // onPageChange();
    }
  };

  return (
    <div className="signup-div-container">
      <div className="singup-div-inside-div">
        <form className="sign-up" onSubmit={async (e) => {
          e.preventDefault();
          handleSingUpValues();
        }}>
          <div className="sign-up-inside-div">
            <h1 className="sign-head">Sign Up</h1>
            {inputs}
            <RegisterButton

              buttonFor="Sign Up"
            ></RegisterButton>

            {/* Other options to sing in */}
            <div class="other-sign-options-div-container">
              <div className="other-sign-options-inside-div">
                <div className="social-account-div">
                  <div class="line"></div>
                  <p class="message">SignUp with social accounts</p>
                  <div class="line"></div>
                </div>
                <div class="social-icons-div">
                  <button className="social-icons">
                    <i class="bi bi-google"></i>
                  </button>
                  <button className="social-icons">
                    <i class="bi bi-apple"></i>
                  </button>
                  <button className="social-icons">
                    <i class="bi bi-github"></i>
                  </button>
                </div>
                <div className="already-have-account-div">
                  <p className="already-message-head">
                    Already have an account?
                    <span className="sign-option-anger">  Sign In</span>
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

export { SignUp };
