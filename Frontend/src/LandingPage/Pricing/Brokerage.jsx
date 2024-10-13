function Brokerage() {
  return (
    <div className="Container">
      <div className="row text-center">
        <div className="col-md-4">
          <img style={{ maxHeight: "50%" }} src="Media/img/pricing0.svg" />
          <h3 className="mb-md-4 text-muted">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-md-4">
          <img style={{ maxHeight: "50%" }} src="Media/img/pricing20.svg" />
          <h3 className="mb-md-4 text-muted">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-md-4">
          <img style={{ maxHeight: "50%" }} src="Media/img/pricing0.svg" />
          <h3 className="mb-md-4 text-muted">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
