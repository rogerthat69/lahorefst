export default function AnimatedLogo({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <>
      <style>
        {`
        /* Define custom properties with @property */
        @property --r2 {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        @property --x {
          syntax: "<length>";
          inherits: false;
          initial-value: 20px;
        }

        /* Animated button styles */

        .rotation-animation {
          animation: rotationKeyFrames -.64s linear 3s infinite, translationKeyFrames -.64s linear 3s infinite
        }

        /* Keyframes for rotation */
        @keyframes rotationKeyFrames {
          0% {
            --r2: 0deg;
          }
          32.8228% {
            --r2: 0deg;
          }
          50% {
            --r2: 180deg;
          }
          82.8228% {
            --r2: 180deg;
          }
          100% {
            --r2: 360deg;
          }
        }

        /* Keyframes for x movement */
        @keyframes translationKeyFrames {
          0% {
            --x: 20px;
          }
          32.8228% {
            --x: 180px;
          }
          50% {
            --x: 180px;
          }
          82.8228% {
            --x: 20px;
          }
          100% {
            --x: 20px;
          }
        }
      `}
      </style>
      <button
        className={`rotation-animation z-50 conic-gradient transform-gpu cursor-pointer rounded-full p-px shadow-[0_0_20px_0_rgba(245,48,107,0.1)] hue-rotate-[190deg] invert transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_3px_rgba(245,49,108,.2)] dark:hue-rotate-0 dark:invert-0 ${className || ''}`}
        style={{
          background:
            "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, #a5c7ec 20%, transparent 25%), #243245",
        }}
        type="button"
      >
        <span className="pointer-events-none flex h-7 flex-nowrap items-center gap-2 rounded-full bg-black px-3 py-1 font-medium text-sky-300 text-sm tracking-tighter">
         {children}
        </span>
      </button>
    </>
  );
}
