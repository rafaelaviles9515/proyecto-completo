import React from "react";
import { Bar, Line, Pie, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement, LineElement, ArcElement, PointElement,
  CategoryScale, LinearScale, Tooltip, Legend
);

// >>> Colores automáticos para todas las gráficas <<<
const COLORS = [
  "#6366F1", // Indigo
  "#EF4444", // Red
  "#10B981", // Green
  "#F59E0B", // Yellow
  "#3B82F6", // Blue
  "#EC4899", // Pink
  "#14B8A6", // Teal
  "#A855F7", // Purple
];

export default function Dashboard({ charts }) {
  if (!charts || charts.length === 0) return null;

  return (
    <div style={{ marginTop: 36 }}>
      <h2>📈 Dashboard</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
        gap: 20,
        marginTop: 16
      }}>

        {charts.map((chart, i) => {

          // ------ BARRAS ------
          if (chart.type === "bar") {
            return (
              <Bar key={i}
                data={{
                  labels: chart.x,
                  datasets: [{
                    label: "Valores",
                    data: chart.y,
                    backgroundColor: COLORS,
                    borderColor: COLORS,
                  }]
                }}
              />
            );
          }

          // ------ LINEA ------
          if (chart.type === "line") {
            return (
              <Line key={i}
                data={{
                  labels: chart.x,
                  datasets: [{
                    label: "Valores",
                    data: chart.y,
                    borderColor: COLORS[0],
                    backgroundColor: `${COLORS[0]}55`,
                    tension: 0.3
                  }]
                }}
              />
            );
          }

          // ------ PIE / DONA ------
          if (chart.type === "pie") {
            return (
              <Pie key={i}
                data={{
                  labels: chart.labels,
                  datasets: [{
                    data: chart.values,
                    backgroundColor: COLORS,
                    borderColor: "#fff"
                  }]
                }}
              />
            );
          }

          // ------ SCATTER ------
          if (chart.type === "scatter") {
            return (
              <Scatter key={i}
                data={{
                  datasets: [{
                    label: "Puntos",
                    data: chart.x.map((x, idx) => ({ x, y: chart.y[idx] })),
                    backgroundColor: COLORS[2],
                  }]
                }}
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
