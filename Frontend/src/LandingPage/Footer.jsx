import "./Outer.css";
function Footer() {
  return (
    <div className=" footer ">
      <div className="row p-3 pt-0">
        <div className="col p-4">
          <img
            style={{ maxHeight: "20px" }}
            src="Media/img/logo.svg"
            alt="logo"
          />
          <p className="sm-rem mt-3">
            © 2010 - 2024, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
          <div className=" d-flex justify-content-between">
            <a className="anchr" href="#">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a className="anchr" href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a className="anchr" href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a className="anchr" href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="anchr" href="#"></a>
          </div>
          <hr />
          <div className=" d-flex justify-content-between">
            <a className="anchr" href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a className="anchr" href="#">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a className="anchr" href="#">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a className="anchr" href="#"></a>

            <a className="anchr" href="#"></a>
            <a className="anchr" href="#"></a>
          </div>
        </div>
        <div className="col p-4">
          <h5>Company</h5>
          <div className="row">
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              About
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Products
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Pricing
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Referal Programme
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Careers
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Zerodha.tech
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Press & Media
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Zerodha Cares (ZSR)
            </a>
          </div>
        </div>
        <div className="col p-4">
          <h5>Support</h5>
          <div className="row">
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Contact us
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Support portal
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Z-Contect blog
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              List of charges
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Downloads & resources
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Videos
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Market Overview
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              How to file a complaint?
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Status of your complaints
            </a>
          </div>
        </div>
        <div className="col p-4">
          <h5>Account</h5>
          <div className="row">
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Open an account
            </a>
            <a className="anchr pb-1" style={{ fontSize: "1rem" }}>
              Fund transfer
            </a>
          </div>
        </div>
      </div>
      <div className="row p-3 ">
        <p className="sm-rem " style={{ lineHeight: "23px" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
          <br />
          <br />
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
          <br />
          <br />
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          <br />
          <br />
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
          <br />
          <br />
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
      </div>
    </div>
  );
}

export default Footer;
