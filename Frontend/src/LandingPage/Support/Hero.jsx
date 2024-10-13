function Hero() {
  return (
    <div
      style={{ backgroundColor: "#387ed1" }}
      className="Container m-0 my-5 py-2 "
    >
      <div className="row text-white my-4 mx-2 m-md-5 px-md-5">
        <div className="col-3">
          <h5 className="">Support Portal</h5>
        </div>
        <div className="col-5"></div>
        <div className="col-3 text-end ">
          <h6 className="text-decoration-underline">Track ticket</h6>
        </div>
      </div>
      <div className="row text-white m-2 m-md-5 px-md-5">
        <div className="col-md-7">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <div class="input-group my-3">
            <input
              type="text"
              class="form-control "
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="bg-white text-black px-3 py-3 rounded-end text-center"
              id="basic-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div className="row ">
            <div className="col-md-4 py-2 py-md-0">
              <a href="#" className="text-white pr-5">
                Track account opening
              </a>
            </div>
            <div className="col-md-6 pr-5">
              <a href="#" className="text-white ">
                Track segment activation
              </a>
            </div>
          </div>
          <div className="row my-md-4">
            <div className="col-md-3 py-2 py-md-0">
              <a href="#" className="text-white ">
                Intraday margins
              </a>
            </div>
            <div className="col-md-7 pb-2 pb-md-0">
              <a href="#" className="text-white ">
                Kite user manual
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-5 pl-5">
          <h4>Featured</h4>
          <ol>
            <li className="my-3">
              <a>Surveillance measure on scrips - September 2024</a>
            </li>
            <li>Rights Entitlements listing in September 2024</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
