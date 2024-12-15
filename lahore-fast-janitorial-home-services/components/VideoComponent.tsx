export default function VideoComponent() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/your-video.mp4" type="video/mp4" />
    </video>
  );
}
