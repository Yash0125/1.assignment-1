import "./App.css";
import LoginValidation from "./components/LoginValidation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function App() {
  const [passwordType, setPasswordType] = useState("password");
  const [disable, setDisable] = useState(true);
  const [password, setPassword] = useState({
    newPassword: "",
    reEnterNewPassword: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    LoginValidation({
      newPassword: password.newPassword,
      reEnterNewPassword: password.reEnterNewPassword,
    });
  const setNew = (event) => {
    setPassword({ ...password, newPassword: event.target.value });
  };
  const setReEnter = (event) => {
    setPassword({ ...password, reEnterNewPassword: event.target.value });
  };
  useEffect(() => {
    match ? setDisable(false) : setDisable(true);
  }, [match]);
  const togglePassword = (e) => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div>
      <form action="">
        <div className="container">
          <div className="email">
            <p>Email</p>
            <input
              className="emailInput"
              type="text"
              placeholder="example@mail.com"
            />
          </div>

          <div className="newPassword">
            <p>New Password</p>
            <div className="input">
              <input
                className="inputPassword"
                name="password"
                type="password"
                placeholder="Choose a secure password"
                onChange={setNew}
              />
              <button className="icon" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </button>
            </div>
          </div>

          <div className="reEnterPassword">
            <p>Re-enter New Password</p>
            <div className="input">
              <input
                className="inputPassword"
                name="password"
                type="password"
                placeholder="Choose a secure password"
                onChange={setReEnter}
              />
              <button className="icon" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </button>
            </div>
          </div>

          <div className="functionality">
            <p>Your password must contain : </p>
            <ul className="unorderList">
              <li>
                {" "}
                {validLength ? (
                  <span className="mark">✓ </span>
                ) : (
                  <span>• </span>
                )}
                At least 8 characters
              </li>
              <li>
                {" "}
                {lowerCase ? (
                  <span className="mark">✓ </span>
                ) : (
                  <span>• </span>
                )}{" "}
                A lower case letter
              </li>
              <li>
                {" "}
                {upperCase ? (
                  <span className="mark">✓ </span>
                ) : (
                  <span>• </span>
                )}{" "}
                An upper case letter
              </li>
              <li>
                {" "}
                {specialChar ? (
                  <span className="mark">✓ </span>
                ) : (
                  <span>• </span>
                )}{" "}
                A special character
              </li>
              <li>
                {" "}
                {hasNumber ? (
                  <span className="mark">✓ </span>
                ) : (
                  <span>• </span>
                )}{" "}
                A number
              </li>
            </ul>
          </div>

          <button disabled={disable} className="btn ">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
