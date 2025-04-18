import "./../components.css";

const TTMFEButton = ({ label, onClick }) => {
  return (
    <button
      className="ttmfe:p-2 ttmfe:p-x-4 ttmfe:text-white ttmfe:bg-blue-600 ttmfe:hover:bg-blue-700 ttmfe:rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TTMFEButton;
