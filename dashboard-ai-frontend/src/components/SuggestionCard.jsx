import React from "react";

export default function SuggestionCard({ suggestion, onAdd }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      padding: 16,
      borderRadius: 8,
      background: "#ffffff",
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
    }}>
      <h4 style={{ margin: 0 }}>{suggestion.title}</h4>
      <p style={{ marginTop: 8 }}>{suggestion.insight}</p>
      <p style={{ fontSize: 13, color: "#6b7280" }}><b>Tipo:</b> {suggestion.chart_type}</p>

      <button
        onClick={onAdd}
        style={{
          marginTop: 10,
          padding: "8px 12px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer"
        }}>
        ➕ Agregar al Dashboard
      </button>
    </div>
  );
}
