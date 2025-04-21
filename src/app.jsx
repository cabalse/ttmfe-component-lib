import { useRef, useState } from "react";

import TTMFEButton from "./components/ttmfe-button/ttmfe-button";
import TTMFETextInput from "./components/ttmfe-text-input/ttmfe-text-input";
import TTMFEModal from "./components/ttmfe-modal/ttmfe-modal";
import TTMFETabel from "./components/ttmfe-table/ttmfe-table";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div className="ttmfe:flex ttmfe:flex-col ttmfe:items-center ttmfe:justify-center ttmfe:h-screen ttmfe:bg-gray-100">
      <div className="ttmfe:font-bold ">TTMFE Component Lib</div>
      <div className="ttmfe:mt-4 ttmfe:flex ttmfe:flex-col">
        <TTMFEButton
          label="Click to open modal"
          onClick={() => setModalOpen(true)}
        />
        <TTMFETextInput
          ref={ref}
          label="Enter text"
          onChange={(value) => console.log(value)}
        />
        <TTMFEButton
          label="Click to clear input"
          onClick={() => ref.current?.clear()}
        />
        <TTMFEModal
          title="Modal Title"
          open={modalOpen}
          closeLable="Close"
          onClose={() => setModalOpen(false)}
        >
          <div className="ttmfe:mt-4">
            <TTMFETextInput
              label="Enter text in modal"
              onChange={(value) => console.log(value)}
            />
          </div>
        </TTMFEModal>
        <TTMFETabel
          columns={["A", "B", "C"]}
          data={[
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
          ]}
        />
        <TTMFETabel columns={["Email"]} data={["1", "2", "3"]} />
      </div>
    </div>
  );
};

export default App;
