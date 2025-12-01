import { useEffect, useState } from "react";
import "./typing.css";

export default function TypingLoading() {
  const text = "⏳ La IA está analizando tus datos...";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40); // velocidad de escritura
    return () => clearInterval(interval);
  }, []);

  return <p className="typing-effect">{displayed}</p>;
}
