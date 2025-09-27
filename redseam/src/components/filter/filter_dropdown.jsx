import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react"; 
import "./filter.css";

const FilterDropdown = ({ onApply }) => {
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = () => {
    onApply({ from, to });
    setOpen(false);
  };

  return (
    <div className="filter-container" ref={dropdownRef}>
      <button className="filter-btn" onClick={() => setOpen(!open)}>
        <SlidersHorizontal size={18} />
        <span>Filter</span>
      </button>

      {open && (
        <div className="filter-dropdown">
          <h4>Select price</h4>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="From *"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="number"
              placeholder="To *"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <button className="apply-btn" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;