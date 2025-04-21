import { useEffect, useState } from "react";
import "./../components.css";

const TTMFETabel = ({ columns, data }) => {
  const [tabelValues, setTableValues] = useState([]);

  const convertInputData = (inputData) => {
    if (Array.isArray(inputData[0])) {
      return inputData;
    } else {
      return inputData.map((item) => {
        return [item];
      });
    }
  };

  useEffect(() => {
    setTableValues(convertInputData(data));
  }, []);

  useEffect(() => {
    setTableValues(convertInputData(data));
  }, [data]);

  return (
    <div className="ttmfe:flex ttmfe:flex-col">
      <div className="ttmfe:flex ttmfe:flex-row ttmfe:pb-1 ttmfe:border-b-1 ttmfe:justify-between">
        {columns.map((item, index) => (
          <div key={"h" + index} className="ttmfe:px-2 ttmfe:font-bold">
            {item}
          </div>
        ))}
      </div>
      {tabelValues.map((row, index) => (
        <div
          key={index}
          className={`ttmfe:flex ttmfe:flex-row ttmfe:justify-between ${
            index % 2 ? "" : "ttmfe:bg-gray-300"
          }`}
        >
          {row.map((item, index2) => (
            <div key={index + index2} className="ttmfe:px-2">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TTMFETabel;
