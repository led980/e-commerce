import "./order.css";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* Modal content */}
      <div className="modal-content">
        {/* Close button */}
        <button onClick={onClose} className="modal-close">
          X
        </button>

        {/* Checkmark */}
        <div className="modal-check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="check-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="modal-title">Congrats!</h2>
        <p className="modal-subtitle">Your order is placed successfully!</p>

        {/* Button */}
        <button onClick={onClose} className="modal-btn">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;