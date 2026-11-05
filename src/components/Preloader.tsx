
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const hidePreloader = () => {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1400);
    };

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader, { once: true });
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", hidePreloader);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#080B16]"
        >
          <div className="flex flex-col items-center">

            {/* Animated Logo */}
            <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-violet-500"
              />

              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-xl font-bold text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                RM
              </motion.div>
            </div>

            {/* Portfolio Name */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-extrabold tracking-[0.25em] text-white"
            >
              MARUP<span className="text-purple-400">.</span>
            </motion.h2>

            <p className="mt-3 text-xs tracking-[0.2em] text-gray-500">
              FULL-STACK DEVELOPER
            </p>

            {/* Loading Bar */}
            <div className="mt-9 h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-fuchsia-400"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mt-4 text-xs font-medium tracking-widest text-purple-300"
            >
              LOADING PORTFOLIO...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
