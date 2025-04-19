import "./../components.css";

const TTMFETabel = ({ columns, data }) => {
  return (
    <div className="ttmfe:flex ttmfe:flex-col">
      <div className="ttmfe:flex ttmfe:flex-row ttmfe:pb-1 ttmfe:border-b-1 ttmfe:justify-between">
        {columns.map((item, index) => (
          <div key={"h" + index} className="ttmfe:px-2">
            {item}
          </div>
        ))}
      </div>
      {data.map((row, index) => (
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
