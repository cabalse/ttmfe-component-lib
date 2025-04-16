import TTMFEButton from "./components/ttmfe-button/ttmfe-button";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="font-bold ">TTMFE Component Lib</div>
      <div className="mt-4">
        <TTMFEButton
          label="Click Me"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default App;
