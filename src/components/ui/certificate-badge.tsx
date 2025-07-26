import { MouseEvent, useEffect, useRef, useState } from "react";

interface CertificateBadgeProps {
  name: string;
  organization: string;
  platform: string;
  date: string;
  link: string;
  index: number;
}

const identityMatrix =
  "1, 0, 0, 0, " +
  "0, 1, 0, 0, " +
  "0, 0, 1, 0, " +
  "0, 0, 0, 1";

const maxRotate = 0.15;
const minRotate = -0.15;
const maxScale = 1.02;
const minScale = 0.98;

// Gradient backgrounds for different certificates
const backgroundGradients = [
  "from-blue-500 to-purple-600",
  "from-green-500 to-teal-600", 
  "from-orange-500 to-red-600",
  "from-purple-500 to-pink-600",
  "from-indigo-500 to-blue-600",
  "from-teal-500 to-green-600",
  "from-red-500 to-orange-600",
  "from-pink-500 to-purple-600"
];

export const CertificateBadge = ({ name, organization, platform, date, link, index }: CertificateBadgeProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [firstOverlayPosition, setFirstOverlayPosition] = useState<number>(0);
  const [matrix, setMatrix] = useState<string>(identityMatrix);
  const [currentMatrix, setCurrentMatrix] = useState<string>(identityMatrix);
  const [disableInOutOverlayAnimation, setDisableInOutOverlayAnimation] = useState<boolean>(true);
  const [disableOverlayAnimation, setDisableOverlayAnimation] = useState<boolean>(false);
  const [isTimeoutFinished, setIsTimeoutFinished] = useState<boolean>(false);
  const enterTimeout = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeout1 = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeout2 = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeout3 = useRef<NodeJS.Timeout | null>(null);

  const getDimensions = () => {
    const left = ref?.current?.getBoundingClientRect()?.left || 0;
    const right = ref?.current?.getBoundingClientRect()?.right || 0;
    const top = ref?.current?.getBoundingClientRect()?.top || 0;
    const bottom = ref?.current?.getBoundingClientRect()?.bottom || 0;

    return { left, right, top, bottom };
  };

  const getMatrix = (clientX: number, clientY: number) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    const scale = [
      maxScale - (maxScale - minScale) * Math.abs(xCenter - clientX) / (xCenter - left),
      maxScale - (maxScale - minScale) * Math.abs(yCenter - clientY) / (yCenter - top),
      maxScale - (maxScale - minScale) * (Math.abs(xCenter - clientX) + Math.abs(yCenter - clientY)) / (xCenter - left + yCenter - top)
    ];

    const rotate = {
      x1: 0.15 * ((yCenter - clientY) / yCenter - (xCenter - clientX) / xCenter),
      x2: maxRotate - (maxRotate - minRotate) * Math.abs(right - clientX) / (right - left),
      x3: 0,
      y0: 0,
      y2: maxRotate - (maxRotate - minRotate) * (top - clientY) / (top - bottom),
      y3: 0,
      z0: -(maxRotate - (maxRotate - minRotate) * Math.abs(right - clientX) / (right - left)),
      z1: (0.1 - (0.1 + 0.3) * (top - clientY) / (top - bottom)),
      z3: 0
    };
    return `${scale[0]}, ${rotate.y0}, ${rotate.z0}, 0, ` +
      `${rotate.x1}, ${scale[1]}, ${rotate.z1}, 0, ` +
      `${rotate.x2}, ${rotate.y2}, ${scale[2]}, 0, ` +
      `${rotate.x3}, ${rotate.y3}, ${rotate.z3}, 1`;
  };

  const getOppositeMatrix = (_matrix: string, clientY: number, onMouseEnter?: boolean) => {
    const { top, bottom } = getDimensions();
    const oppositeY = bottom - clientY + top;
    const weakening = onMouseEnter ? 0.7 : 4;
    const multiplier = onMouseEnter ? -1 : 1;

    return _matrix.split(", ").map((item, index) => {
      if (index === 2 || index === 4 || index === 8) {
        return -parseFloat(item) * multiplier / weakening;
      } else if (index === 0 || index === 5 || index === 10) {
        return "1";
      } else if (index === 6) {
        return multiplier * (maxRotate - (maxRotate - minRotate) * (top - oppositeY) / (top - bottom)) / weakening;
      } else if (index === 9) {
        return (maxRotate - (maxRotate - minRotate) * (top - oppositeY) / (top - bottom)) / weakening;
      }
      return item;
    }).join(", ");
  };

  const onMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    if (leaveTimeout1.current) {
      clearTimeout(leaveTimeout1.current);
    }
    if (leaveTimeout2.current) {
      clearTimeout(leaveTimeout2.current);
    }
    if (leaveTimeout3.current) {
      clearTimeout(leaveTimeout3.current);
    }
    setDisableOverlayAnimation(true);

    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setDisableInOutOverlayAnimation(false);
    enterTimeout.current = setTimeout(() => setDisableInOutOverlayAnimation(true), 350);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFirstOverlayPosition((Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 2);
      });
    });

    const matrix = getMatrix(e.clientX, e.clientY);
    const oppositeMatrix = getOppositeMatrix(matrix, e.clientY, true);

    setMatrix(oppositeMatrix);
    setIsTimeoutFinished(false);
    setTimeout(() => {
      setIsTimeoutFinished(true)
    }, 200);
  };

  const onMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const { left, right, top, bottom } = getDimensions();
    const xCenter = (left + right) / 2;
    const yCenter = (top + bottom) / 2;

    setTimeout(() => setFirstOverlayPosition((Math.abs(xCenter - e.clientX) + Math.abs(yCenter - e.clientY)) / 2), 150);

    if (isTimeoutFinished) {
      setCurrentMatrix(getMatrix(e.clientX, e.clientY));
    }
  };

  const onMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const oppositeMatrix = getOppositeMatrix(matrix, e.clientY);

    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
    }

    setCurrentMatrix(oppositeMatrix);
    setTimeout(() => setCurrentMatrix(identityMatrix), 200);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDisableInOutOverlayAnimation(false);
        leaveTimeout1.current = setTimeout(() => setFirstOverlayPosition(-firstOverlayPosition / 4), 150);
        leaveTimeout2.current = setTimeout(() => setFirstOverlayPosition(0), 300);
        leaveTimeout3.current = setTimeout(() => {
          setDisableOverlayAnimation(false);
          setDisableInOutOverlayAnimation(true);
        }, 500);
      });
    });
  };

  useEffect(() => {
    if (isTimeoutFinished) {
      setMatrix(currentMatrix);
    }
  }, [currentMatrix, isTimeoutFinished]);

  const overlayAnimations = [...Array(6).keys()].map((e) => (
    `
    @keyframes certOverlayAnimation${e + 1} {
      0% {
        transform: rotate(${e * 15}deg);
      }
      50% {
        transform: rotate(${(e + 1) * 15}deg);
      }
      100% {
        transform: rotate(${e * 15}deg);
      }
    }
    `
  )).join(" ");

  const bgGradient = backgroundGradients[index % backgroundGradients.length];

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-auto cursor-pointer group"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <style>
        {overlayAnimations}
      </style>
      <div
        style={{
          transform: `perspective(1000px) matrix3d(${matrix})`,
          transformOrigin: "center center",
          transition: "transform 200ms ease-out"
        }}
        className="relative"
      >
        <div className={`bg-gradient-to-br ${bgGradient} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm`}>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
                {date}
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">
              {name}
            </h3>

            <div className="space-y-1 mb-4">
              <p className="text-white/90 font-medium text-sm">
                {organization}
              </p>
              <p className="text-xs text-white/70">
                {platform}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">
                Certificate
              </span>
              <div className="flex items-center gap-1 text-white/80 group-hover:text-white transition-colors">
                <span className="text-xs font-medium">View</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>

          {/* Animated overlay effects */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div style={{
              transform: `rotate(${firstOverlayPosition}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 300ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "certOverlayAnimation1 8s infinite",
              willChange: "transform"
            }} className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-30" />
            
            <div style={{
              transform: `rotate(${firstOverlayPosition + 20}deg)`,
              transformOrigin: "center center",
              transition: !disableInOutOverlayAnimation ? "transform 300ms ease-out" : "none",
              animation: disableOverlayAnimation ? "none" : "certOverlayAnimation2 8s infinite",
              willChange: "transform"
            }} className="absolute inset-0 bg-gradient-to-l from-white/3 to-transparent opacity-40" />
          </div>
        </div>
      </div>
    </a>
  );
};
