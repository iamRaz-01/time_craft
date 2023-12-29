import "../css/sign.css";
import { useState } from "react";
import { Input } from "./Input";
import { RegisterButton } from "./RegisterButton";
import User from "../../api/User";
import { useNavigate } from "react-router-dom";
 const { createCanvas } = require("canvas");
const SignUp = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate("/signin");
  };
  
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
    // Validate name
    if (!username || /^\s*$/.test(username)) {
      alert("Please enter a valid name.");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!password || password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
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
