import { useState, useEffect } from "react";
import "./App.css";
export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      setIsActive(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000);

    setOtp(String(newOTP));
    setTimeLeft(5);
    setIsActive(true);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">{otp || "Click 'Generate OTP' to get a code"}</h2>

      <p id="otp-timer" aria-live="polite">
        {isActive
          ? `Expires in: ${timeLeft} seconds`
          : otp
            ? "OTP expired. Click the button to generate a new OTP."
            : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={isActive}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
