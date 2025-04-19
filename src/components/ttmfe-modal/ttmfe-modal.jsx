import { useEffect, useState } from "react";

import TTMFEButton from "../ttmfe-button/ttmfe-button";

const TTMFEModal = ({ title, open, closeLable, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="ttmfe:bg-gray-800/30 ttmfe:fixed ttmfe:inset-0 ttmfe:flex ttmfe:items-center ttmfe:justify-center ttmfe:z-50">
      <div className="ttmfe:bg-white ttmfe:rounded-lg ttmfe:shadow-lg ttmfe:p-6 ttmfe:w-1/3">
        <div className="ttmfe:font-bold ttmfe:font-lg" role="title">
          {title}
        </div>
        {children}
        <div className="ttmfe:flex ttmfe:justify-end">
          <TTMFEButton label={closeLable} onClick={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default TTMFEModal;
