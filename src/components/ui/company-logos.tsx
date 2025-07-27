export const SwechaLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-white rounded-xl p-2 flex items-center justify-center shadow-lg overflow-hidden`}>
    <img 
      src="/swecha-logo.png" 
      alt="Swecha Telangana Logo" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const InfosysLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-white rounded-xl p-2 flex items-center justify-center shadow-lg overflow-hidden`}>
    <img 
      src="/infosys-springboard-logo.png" 
      alt="Infosys Springboard Logo" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const AutonomOpsLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-white rounded-xl p-2 flex items-center justify-center shadow-lg overflow-hidden`}>
    <img 
      src="/autonomops-logo.png" 
      alt="AutonomOps AI Logo" 
      className="w-full h-full object-contain"
    />
  </div>
);
