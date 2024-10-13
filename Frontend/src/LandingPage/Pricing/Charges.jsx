function Charges() {
  return (
    <div className="Container my-5">
      <h3 className="mb-3 ">Charges for account opening</h3>
      <table className="row border mx-2  mt-3 rounded-top">
        <thead>
          <tr className="row border rounded-top p-2 ">
            <th className="col-9 col-md-10 px-md-4">Type of account</th>
            <th className="col-2 col-md-1">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row my-3">
            <td className="col-9 col-md-10 px-md-4">online account</td>
            <td className="col-2 col-md-1 text-center">
              <div
                className="bg-success rounded text-light "
                style={{ maxWidth: "50px" }}
              >
                Free
              </div>
            </td>
          </tr>
          <tr className="row my-3">
            <td className="col-9 col-md-10 px-md-4">offline account</td>
            <td className="col-2 col-md-1 text-center">
              <div
                className="bg-success rounded text-light "
                style={{ maxWidth: "50px" }}
              >
                Free
              </div>
            </td>
          </tr>
          <tr className="row my-3">
            <td className="col-9 col-md-10 px-md-4">
              NRI account (offline only)
            </td>
            <td className=" col-3 col-md-1 ">&#8377; 500</td>
          </tr>
          <tr className="row my-3">
            <td className="col-9 col-md-10 px-md-4">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td className="col-3 col-md-1 ">&#8377; 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Charges;
