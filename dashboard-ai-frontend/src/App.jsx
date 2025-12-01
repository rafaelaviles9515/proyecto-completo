import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import SuggestionCard from "./components/SuggestionCard";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import TypingLoading from "./components/TypingLoading";
import LoadingOverlay from "./components/LoadingOverlay";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [charts, setCharts] = useState([]);

  const handleFileUpload = async (file) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuggestions(res.data.suggestions || []);
    } catch (err) {
      console.error(err);
      alert("Error al subir el archivo. Revisa la consola.");
    } finally {
      setLoading(false);
    }
  };

  const addChartToDashboard = async (chartConfig) => {
    try {
      // chartConfig es el objeto sugerencia (tiene chart_type y parameters)
      const res = await axios.post(`${API_URL}/api/chart-data`, chartConfig, {
        headers: { "Content-Type": "application/json" },
      });

      // res.data debe ser el dataset formateado
      setCharts((prev) => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      alert("Error obteniendo datos del gráfico.");
    }
  };

  return (
    <div style={{ padding: 28, fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ marginBottom: 12 }}>📊 Análisis al Instante</h1>
      <button
        onClick={() => {
          setSuggestions([]);
          setCharts([]);
        }}
        style={{
          background: "#ef4444",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        🧹 Limpiar Todo
      </button>

      <FileUploader onUpload={handleFileUpload} />

      {loading && <LoadingOverlay />}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 16,
        marginTop: 20
      }}>
        {suggestions.map((s, i) => (
          <SuggestionCard key={i} suggestion={s} onAdd={() => addChartToDashboard(s)} />
        ))}
      </div>

      <Dashboard charts={charts} />
    </div>
  );
}

export default App;
