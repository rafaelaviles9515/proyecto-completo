import TypingLoading from "./TypingLoading";
import "./overlay.css";

export default function LoadingOverlay() {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <TypingLoading />
      </div>
    </div>
  );
}
