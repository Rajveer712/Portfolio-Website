export default function LoadingScreen() {
  return (
    <div
      className="loading-screen"
      role="status"
      aria-label="Loading portfolio"
    >
      <span className="loading-logo">O.</span>

      <div className="loading-bar" />

      <span className="loading-caption">
        PREPARING YOUR EXPERIENCE
      </span>
    </div>
  );
}