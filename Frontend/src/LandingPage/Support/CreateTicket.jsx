function CreateTicket() {
  return (
    <div className="Container">
      <h4 className="fw-medium" style={{ color: "var(--bs-secondary-color)" }}>
        To create a ticket, select a relevant topic
      </h4>
      <div className="row mt-5">
        <div className="col-12 px-4 px-md-0 col-md-4 lh-lg">
          <h5>
            <i class="fa-brands fa-creative-commons-sampling-plus"></i>{" "}
            &nbsp;Account Opening
          </h5>
          <div className="anc px-4">
            <a href="#" className="text-decoration-none">
              Getting started
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Online
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Offline
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Charges
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Company, Partnership and HUF
            </a>
            <br />
            <a href="#" className="text-decoration-none py-2">
              Non Resident Indian (NRI)
            </a>
          </div>
        </div>

        <div className="col-12 col-md-4  px-4 px-md-0 lh-lg">
          <h5>
            <i class="fa-regular fa-user"></i> &nbsp;Your Zerodha Account
          </h5>
          <div className="anc px-4">
            <a href="#" className="text-decoration-none">
              Login credentials
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Your profile
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Account modification and segement addition
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              CMR & DP ID
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Nomination
            </a>
            <br />
            <a href="#" className="text-decoration-none py-2">
              Transfer and conversion of shares
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 px-4 px-md-0 lh-lg">
          <h5>
            <i class="fa-solid fa-arrow-trend-up"></i> &nbsp;Trading and Markets
          </h5>
          <div className="anc px-4">
            <a href="#" className="text-decoration-none">
              Trading FAQs
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Kite
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Margins
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Product and order types
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Corporate actions
            </a>
            <br />
            <a href="#" className="text-decoration-none py-2">
              Kite features
            </a>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 px-4 px-md-0 col-md-4 lh-lg">
          <h5>
            <i class="fa-solid fa-box-tissue"></i> &nbsp;Funds
          </h5>
          <div className="anc px-4">
            <a href="#" className="text-decoration-none">
              Fund withdrawal
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Adding funds
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Adding bank accounts
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              eMandates
            </a>
          </div>
        </div>

        <div className="col-12 col-md-4  px-4 px-md-0 lh-lg">
          <h5>
            <i class="fa-solid fa-circle-dot"></i> &nbsp;Console
          </h5>
          <div className="anc px-4">
            <a href="#" className="text-decoration-none">
              IPO
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Portfolio
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Funds statement
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Profile
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Reports
            </a>
            <br />
            <a href="#" className="text-decoration-none py-2">
              Referral program
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 px-4 px-md-0 lh-lg">
          <h5>
            <i class="fa-brands fa-bitcoin"></i> &nbsp;Coin
          </h5>
          <div className="anc px-4">
            <a href="#" className="text-decoration-none">
              Understanding mutual funds and Coin
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Coin app
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Coin web
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              Transactions and reports
            </a>
            <br />
            <a href="#" className="text-decoration-none">
              National Pension Scheme (NPS)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
