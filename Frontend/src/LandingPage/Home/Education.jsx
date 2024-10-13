function Education() {
  return (
    <div className="Container mt-5 ">
      <div className="row p-4 d-flex justify-content-between align-items-center">
        <div className="col-md-5 mb-5 mb-sm-0">
          <img style={{ maxWidth: "100%" }} src="Media/img/education.svg" />
        </div>

        <div className="col-md-6">
          <h4 className="mb-3">Free and open market education</h4>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="arrow-a m-0">
            Varsity &nbsp;<i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p style={{ marginTop: "1rem " }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="arrow-a m-0 " style={{ marginBottom: "2rem" }}>
            TradingQ&A &nbsp;<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
