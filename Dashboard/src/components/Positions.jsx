import { useState, useEffect } from "react";
// import { positions } from "../Data/data";
import axios from "axios";
const Positions = () => {
  let [positions, setPositions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/positions").then((res) => {
      setPositions(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock, index) => {
            let currnprice = stock.price * stock.qty;
            let isProfit = currnprice - stock.avg * stock.qty >= 0.0;
            let profClass = isProfit ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(currnprice - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
