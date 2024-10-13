function Team() {
  return (
    <div className="Container mb-5">
      <h2 className="text-center my-5">People</h2>
      <div className="row">
        <div className="col-md-5 text-center">
          <img
            style={{
              borderRadius: "50%",
              maxHeight: "250px",

              marginBottom: "1rem",
            }}
            src="Media/img/image.jpg"
          />
          <h5>Monti Tanwar</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col px-md-5" style={{ fontSize: "17px" }}>
          <p>
            Monti Tanwar developed a fully responsive Zerodha clone in 2024 to
            enhance his web development skills. The clone replicates all key
            services of the original platform, providing a seamless user
            experience.
          </p>
          <p>
            {" "}
            Monti implemented{" "}
            <b className="text-muted">
              {" "}
              real-time data fetching, user authentication, and intuitive UI
              elements{" "}
            </b>
            , making it not only functional but also user-friendly.
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a className="anchr  fs-6" href="https://github.com/MontiRajput">
              <i class="fa-brands fa-github"></i> Github
            </a>{" "}
            /{" "}
            <a
              className="anchr fs-6"
              href="https://www.instagram.com/mr_rajputana_89/"
            >
              <i class="fa-brands fa-instagram"></i> Instagram
            </a>{" "}
            /{" "}
            <a
              className="anchr fs-6"
              href="https://www.linkedin.com/in/monti-rajput/"
            >
              <i class="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
