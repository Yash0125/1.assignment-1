import { useState, useEffect } from "react";

const LoginValidation = ({
  newPassword = "",
  reEnterNewPassword = "",
  requiredLength = 8,
}) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    setValidLength(newPassword.length >= requiredLength ? true : false);
    setUpperCase(newPassword.toLowerCase() !== newPassword);
    setLowerCase(newPassword.toUpperCase() !== newPassword);
    setHasNumber(/\d/.test(newPassword));
    setMatch(newPassword && newPassword === reEnterNewPassword);
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(newPassword));
  }, [newPassword, reEnterNewPassword, requiredLength]);

  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
};

export default LoginValidation;
