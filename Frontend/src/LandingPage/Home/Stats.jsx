function Stats() {
  return (
    <div className="Container">
      <div className="row stat p-4">
        <div className="col-md-5 ">
          <h1 style={{ marginBottom: "40px", fontSize: "32px" }}>
            Trust with confidence
          </h1>
          <h4>Customer-first always</h4>
          <p className="stats-p">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="stats-p">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4>The Zerodha universe</h4>
          <p className="stats-p">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="stats-p">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-md-7 d-flex flex-wrap justify-content-center align-items-center">
          <img src="Media/img/ecosystem.png" style={{ maxWidth: "85%" }} />
          <p className="align-self-start">
            <a className="arrow-a" href="#">
              Explore your products&nbsp;
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a className="arrow-a" href="#">
              Try Kite demo &nbsp;<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="row p-4">
        <div className="col col-md-8 mx-auto ">
          <img style={{ maxWidth: "100%" }} src="Media/img/pressLogos.png" />
        </div>
      </div>
    </div>
  );
}

export default Stats;
