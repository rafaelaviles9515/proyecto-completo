import React, { useState, useRef } from "react";

export default function FileUploader({ onUpload }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onUpload(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current && inputRef.current.click()}
      style={{
        padding: 32,
        border: dragging ? "2px solid #4f46e5" : "2px dashed #d1d5db",
        borderRadius: 10,
        textAlign: "center",
        cursor: "pointer",
        background: "#fff"
      }}
    >
      <h3>📁 Arrastra tu archivo (.csv o .xlsx) aquí</h3>
      <p>o haz clic para seleccionar</p>
      <input
        ref={inputRef}
        type="file"
        accept=".csv,.xlsx"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <small>Soporta .csv y .xlsx</small>
    </div>
  );
}
