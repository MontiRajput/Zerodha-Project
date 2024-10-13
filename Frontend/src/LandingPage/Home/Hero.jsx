import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Container pt-5 pb-5 mt-5">
      <div className="row flex justify-content-center text-center">
        <img
          src="Media/img/homeHero.png"
          alt="Home-Image"
          className="col-md-8 p-0 mb-5"
        />
        <h1 className="mt-sm-3 " style={{ fontSize: "40px" }}>
          Invest in everything
        </h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn-Hero" onClick={() => navigate("/signup")}>
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
