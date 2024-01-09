import "../css/sign.css";
import { useState } from "react";
import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
import User from "../../api/User";
import { useNavigate } from "react-router-dom";
import showToast from "../toast";
const { createCanvas } = require("canvas");
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate("/signin");
  };

  const data = [
    {
      type: "text",
      icon: "badge",
      place: "Enter the name",
      event: setUsername,
      invalid: usernameInvalid,
      invalidMessage: "Please enter a valid name.",
    },
    {
      type: "email",
      icon: "email",
      place: "Enter your email",
      event: setEmail,
      invalid: emailInvalid,
      invalidMessage: "Please enter a valid email address.",
    },
    {
      type: "password",
      title: "Password",
      icon: "lock",
      place: "Enter your password",
      event: setPassword,
      invalid: passwordInvalid,
      invalidMessage:
        "Password must be 8+ characters with at least one uppercase, one lowercase, one digit, and one symbol.",
    },
    {
      type: "password",
      title: "Confirm Password",
      icon: "lock",
      place: "Confirm your password",
      event: setConfirmPassword,
      invalid: confirmPasswordInvalid,
      invalidMessage: "Passwords do not match.",
    },
  ];

  const inputs = data.map((item, index) => (
    <Input key={index} properties={item} invalid={item.invalid} />
  ));

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function createAvatar(username, size = 200, fontSize = 100) {
    const canvas = createCanvas(size, size);
    const context = canvas.getContext("2d");

    // Generate a random background color
    const backgroundColor = getRandomColor();

    // Set background color
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, size, size);

    // Set text color and font
    context.fillStyle = "#fff";
    context.font = `${fontSize}px Arial`;

    // Calculate text position to center it
    const textWidth = context.measureText(username).width;
    const x = (size - textWidth) / 2;
    const y = size / 2 + fontSize / 3;

    // Draw the username on the canvas
    context.fillText(username.charAt(0).toUpperCase(), x, y);

    // Convert canvas to data URL
    const dataUrl = canvas.toDataURL();

    return dataUrl;
  }

  async function handleSignUpValues() {
    let usernameError = false;
    let emailError = false;
    let passwordError = false;
    let confirmPasswordError = false;

    // Validate name
    if (!username || /^\s*$/.test(username)) {
      usernameError = true;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      emailError = true;
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])/;
    if (!password || password.length < 8 || !passwordRegex.test(password)) {
      passwordError = true;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword || passwordError) {
      confirmPasswordError = true;
    }

    // Update state variables based on validation results
    setUsernameInvalid(usernameError);
    setEmailInvalid(emailError);
    setPasswordInvalid(passwordError);
    setConfirmPasswordInvalid(confirmPasswordError);

    // If any validation error exists, stop further processing
    if (usernameError || emailError || passwordError || confirmPasswordError) {
      return;
    }

    const profileImage = createAvatar(username);
    const data = { username, email, password, profile_image: profileImage };
    let user = new User();

    try {
      let result = await user.createUser(data);

      if (result.status === 500) {
        alert(result.error);
      } else {
        showToast("Successfully registered with TimeCraft!", "success");
        handlePageChange();
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("An unexpected error occurred.");
    }
  }

  return (
    <div className="signup-div-container">
      <div className="singup-div-inside-div">
        <form
          className="sign-up"
          onSubmit={async (e) => {
            e.preventDefault();
            handleSignUpValues();
          }}
        >
          <div className="sign-up-inside-div">
            <h1 className="sign-head">Sign Up</h1>
            {inputs}
            <RegisterButton buttonFor="Sign Up"></RegisterButton>

            {/* Other options to sing in */}
            <div className="other-sign-options-div-container">
              <div className="other-sign-options-inside-div">
                <div className="social-account-div">
                  <div className="line"></div>
                  <p className="message">SignUp with social accounts</p>
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
                    Already have an account?
                    <span
                      className="sign-option-anger"
                      onClick={handlePageChange}
                    >
                      Sign In
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

export { SignUp };
