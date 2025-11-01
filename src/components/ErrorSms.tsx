import { useEffect, useState, type PropsWithChildren } from "react";

export default function ErrorSms({children}: PropsWithChildren) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    // auto-cierre después de 3 segundos
    const timer = setTimeout(() => handleClose(), 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
     <div
      className={`fixed top-4 right-4 flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-5 pointer-events-none"
      }`}
    >
      <div className="cursor-context-menu flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-3 shadow-lg shadow-black/30">
        <div className="flex gap-2 items-center">
          <div className="text-blue-600 bg-white/5 backdrop-blur-xl p-1 rounded-lg">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-blue-300 uppercase">Tienes una Alerta</p>
            <p className="text-white">{children}</p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-white hover:bg-white/10 p-1 cursor-pointer rounded-md transition-colors ease-linear"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    </>
  )
}

