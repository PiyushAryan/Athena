import React, { useEffect, useState } from "react";

function Sidebar() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after a short delay (you can adjust the delay)
        const animationTimeout = setTimeout(() => {
            setAnimate(true);
        }, 500); // Adjust the delay (in milliseconds) as needed

        return () => clearTimeout(animationTimeout);
    }, []);

    return (
        <div className="h-screen w-1/3 bg-teal-500 ml-auto">
            <img src="cloud1.svg" className={`pt-40 transition-transform ${animate ? "translate-y-0" : "translate-y-full" }`}
                alt="Cloud" />
        </div>
    );
}

export default Sidebar;
