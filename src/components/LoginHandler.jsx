import React from "react";
import confetti from "../assets/Confetti.mov";

const LoginHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <video
        src={confetti}
        autoPlay
        muted
        className="h-full w-full object-cover"
      ></video>
    </>
  );
};

export default LoginHandler;
