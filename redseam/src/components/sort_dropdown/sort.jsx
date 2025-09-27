import React, { useState, useRef, useEffect } from "react";
import "./sort.css";

const SortDropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSort = (value) => {
    onSortChange && onSortChange(value);
    setIsOpen(false);
  };
  return (
    <div className="sort-container" ref={dropdownRef}>
      <button className="sort-btn" onClick={() => setIsOpen(!isOpen)}>
        Sort by ▼
      </button>

      {isOpen && (
        <div className="sort-dropdown">
          <h4>Sort by</h4>
          <ul>
            <li onClick={() => handleSort("new")}>New products first</li>
            <li onClick={() => handleSort("low-to-high")}>Price, low to high</li>
            <li onClick={() => handleSort("high-to-low")}>Price, high to low</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;