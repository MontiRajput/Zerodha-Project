function Pricing() {
  return (
    <div className="Container mb-5">
      <div className="row mt-5 p-4">
        <div className="col-md-5">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6 d-flex p-0">
              <img style={{ width: "120px" }} src="Media/img/pricing0.svg" />
              <p style={{ fontSize: "14px", alignSelf: "end" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-md-6 d-flex">
              <img style={{ width: "120px" }} src="Media/img/pricing20.svg" />
              <p style={{ fontSize: "14px", alignSelf: "center" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
        <a className="arrow-a m-0">
          See pricing &nbsp;<i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
}

export default Pricing;
