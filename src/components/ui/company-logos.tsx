export const SwechaLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-white rounded-xl p-2 flex items-center justify-center shadow-lg`}>
    <svg viewBox="0 0 100 50" className="w-full h-full">
      {/* Decorative birds/waves at top - thicker */}
      <path 
        d="M 10 6 Q 17 1 24 6 Q 31 1 38 6" 
        stroke="#000" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M 42 3 Q 49 -2 56 3 Q 63 -2 70 3" 
        stroke="#000" 
        strokeWidth="3" 
        fill="none"
      />
      {/* Swecha text - much larger and bolder */}
      <text 
        x="10" 
        y="28" 
        fontSize="14" 
        fontWeight="900" 
        fill="#000"
        fontFamily="Arial Black, sans-serif"
      >
        Swecha
      </text>
      {/* Telangana text - larger */}
      <text 
        x="10" 
        y="42" 
        fontSize="8" 
        fontWeight="600"
        fill="#333"
        fontFamily="Arial, sans-serif"
      >
        Telangana
      </text>
    </svg>
  </div>
);

export const InfosysLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-white rounded-xl p-2 flex items-center justify-center shadow-lg`}>
    <svg viewBox="0 0 100 50" className="w-full h-full">
      {/* Infosys text - much larger and bolder */}
      <text 
        x="8" 
        y="20" 
        fontSize="13" 
        fontWeight="900" 
        fill="#0073e6"
        fontFamily="Arial Black, sans-serif"
      >
        Infosys
      </text>
      {/* Springboard text - larger and bolder */}
      <text 
        x="8" 
        y="35" 
        fontSize="9" 
        fontWeight="700" 
        fill="#e67300"
        fontFamily="Arial, sans-serif"
      >
        Springboard
      </text>
    </svg>
  </div>
);

export const AutonomOpsLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg`}>
    <span className="text-4xl font-black">A</span>
  </div>
);
