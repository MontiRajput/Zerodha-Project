function RightSection({ img, title, des, linkName1, linkName2 }) {
  return (
    <div className="Container p-3 p-md-5">
      <div className="row d-flex justify-content-between">
        <div className="col-md-5 pt-md-5 d-flex flex-column justify-content-center">
          <h1>{title}</h1>
          <p>{des}</p>
          {linkName1 || linkName2 ? (
            <div className="row mb-3">
              {" "}
              {linkName1 ? (
                <a
                  className="arrow-a col-5"
                  style={{ marginLeft: "0" }}
                  href="#"
                >
                  {linkName1} &nbsp;
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              ) : null}
              {linkName2 ? (
                <a
                  className="arrow-a col-5"
                  style={{ marginLeft: "0" }}
                  href="#"
                >
                  {linkName2} &nbsp;
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="col-md-6">
          <img src={img} style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
