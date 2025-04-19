import { useState } from "react";

import TTMFEButton from "./components/ttmfe-button/ttmfe-button";
import TTMFETextInput from "./components/ttmfe-text-input/ttmfe-text-input";
import TTMFEModal from "./components/ttmfe-modal/ttmfe-modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="ttmfe:flex ttmfe:flex-col ttmfe:items-center ttmfe:justify-center ttmfe:h-screen ttmfe:bg-gray-100">
      <div className="ttmfe:font-bold ">TTMFE Component Lib</div>
      <div className="ttmfe:mt-4 ttmfe:flex ttmfe:flex-col">
        <TTMFEButton
          label="Click to open modal"
          onClick={() => setModalOpen(true)}
        />
        <TTMFETextInput
          label="Enter text"
          onChange={(value) => console.log(value)}
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
      </div>
    </div>
  );
};

export default App;
