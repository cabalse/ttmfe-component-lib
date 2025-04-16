const TTMFEButton = ({ label, onClick }) => {
  return (
    <button
      className="p-2 p-x-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TTMFEButton;
