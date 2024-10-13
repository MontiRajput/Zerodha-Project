function NotFound() {
  return (
    <div className="Container p-5">
      <div className="row flex justify-content-center text-center mt-md-5">
        <h1 className="mt-sm-3 " style={{ fontSize: "40px" }}>
          400 Not Found
        </h1>
        <p className="fs-5">
          We couldn’t find the page you were looking for. <br />
          Visit{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            Zerodha’s home page
          </a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
