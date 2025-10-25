// import React from "react";

// interface HeroProps {
//     icon: React.ReactNode;
//     title: string;
//     subtitle: string;
//     gradientFrom: string;
//     gradientTo: string;
//     textColor?: string;
// }

// const Hero: React.FC<HeroProps> = ({
//     icon,
//     title,
//     subtitle,
//     gradientFrom,
//     gradientTo,
//     textColor = "text-blue-100",
// }) => {
//     return (
//         <section
//             className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white py-20 flex items-center`}
//         >
//             <div className="container mx-auto px-6 md:px-10 lg:px-16">
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
//                     {/* Icon and Text */}
//                     <div className="flex flex-col items-center md:items-start text-center md:text-left">
//                         <div className="flex items-center mb-4 justify-center md:justify-start">
//                             {icon}
//                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold ml-3">
//                                 {title}
//                             </h1>
//                         </div>
//                         <p className={`text-lg sm:text-xl ${textColor} max-w-2xl`}>
//                             {subtitle}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

import React from "react";

interface HeroProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    gradientFrom: string;
    gradientTo: string;
    textColor?: string;
}

const Hero: React.FC<HeroProps> = ({
    icon,
    title,
    subtitle,
    gradientFrom,
    gradientTo,
    textColor = "text-blue-100",
}) => {
    return (
        <section
            className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white flex items-center`}
            style={{ minHeight: "400px" }} // <-- fixed min-height
        >
            <div className="container mx-auto px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                    {/* Icon and Text */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center mb-4 justify-center md:justify-start">
                            {icon}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold ml-3">{title}</h1>
                        </div>
                        <p className={`text-lg sm:text-xl ${textColor} max-w-2xl`}>
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
