import { useState } from "react";
import SuccessModal from "./success.jsx";
const Order = () => {
const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Place Order</button>
      <SuccessModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );}