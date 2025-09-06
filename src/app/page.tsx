'use client'

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center animated-bg">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold animated-text mb-4">
            Hola a Todos! 👋
          </h1>
          <p className="text-xl md:text-2xl text-white/80 animate-pulse">
            Página de prueba con colores animados
          </p>
          <div className="mt-8 text-sm text-white/60">
            ¡Publicada para todo el mundo! 🌍
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animated-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 4s ease infinite;
        }
        
        .animated-text {
          background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: rainbow 3s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes rainbow {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 100%;
          }
          75% {
            background-position: 100% 0%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  )
}