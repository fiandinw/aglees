import { Icon } from "@iconify/react";
import { useState } from "react";

export default function LandingCard({ icon, title, children }) {
  const [hover, setHover] = useState(false);

  const hoverToggle = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="relative h-16">
        <div
          onMouseEnter={hoverToggle}
          onMouseLeave={hoverToggle}
          className="absolute flex flex-col border-2 bg-white rounded-lg p-2 cursor-pointer w-full"
        >
          <div className="flex flex-row items-center">
            <div>
              <Icon className="text-4xl text-primary" icon={icon} />
            </div>
            <div className="font-lato font-bold text-center w-full">
              {title}
            </div>
          </div>
          <div
            className={`${
              hover ? "h-fit" : "h-0"
            } overflow-clip transition-all text-sm`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

// export default function LandingCard({ icon, title, children }) {
//   const [hover, setHover] = useState(false);

//   const hoverToggle = () => {
//     setHover(!hover);
//   };
//   return (
//     <>
//       <div className="relative h-32">
//         <div
//           onMouseEnter={hoverToggle}
//           onMouseLeave={hoverToggle}
//           className={`absolute flex flex-col w-32 ${
//             hover ? "h-fit" : "h-32"
//           } p-4 shadow-xl bg-white overflow-clip border-2 rounded-lg items-center justify-center gap-2 transition-all`}
//         >
//           <div>
//             <Icon className="text-4xl text-primary" icon={icon} />
//           </div>
//           <div className="text-center">{title}</div>
//           <div
//             className={`${
//               hover ? "h-fit" : "h-0"
//             } text-sm overflow-clip transition-all`}
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
