import { Home, Search, ArrowLeft } from 'lucide-react';

export default function Page404Modal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-md overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Contenido del modal */}
      <div className="relative z-99 w-[90%] max-w-3xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-8 md:p-10 text-center animate-fadeInUp">
          
          {/* Icono ilustrativo */}
          <div className="flex justify-center mb-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-5 sm:p-6">
                <Search className="w-10 h-10 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Código 404 */}
          <div className="text-center mb-6">
            <h1 className="text-6xl sm:text-8xl md:text-[5rem] font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-none mb-4">
              404
            </h1>
            <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
          </div>

          {/* Mensaje */}
          <div className="text-center mb-10 px-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Página no encontrada
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto">
              Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => (window.location.href = '/')}
              className="cursor-pointer group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Ir al inicio
            </button>
            
            <button 
              onClick={() => window.location.href= '/'}
              className="cursor-pointer group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Volver atrás
            </button>
          </div>

          {/* Puntos decorativos */}
          <div className="mt-12 flex justify-center gap-4 sm:gap-8 opacity-50">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Texto de ayuda */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          ¿Necesitas ayuda? Contacta con soporte o verifica la URL.
        </p>
      </div>
    </div>
  );
}
