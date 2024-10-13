import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
  const HandleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div className="Container p-5">
      <div className="row flex justify-content-center text-center mt-md-5">
        <h1 className="mt-sm-3 " style={{ fontSize: "40px" }}>
          Open a Zerodha account
        </h1>
        <p className="fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="btn-Hero" onClick={HandleSignupClick}>
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
