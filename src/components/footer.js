import React from 'react';
import ACMLogo from './acmlogo';
const Footer = () => {
    return (
        <div className="flex justify-center items-center py-10  bg-opacity-75 h-[8vh]">
            <div className="flex mx-auto items-center justify-center space-x-4 h-[4vh]">
                <div className="flex mx-auto text-white text-lg font-semibold">
                    Join us in our mission to create a sustainable future! 🌍
                </div>
                <div className="flex align-right transform scale-75 overflow-none">
                    <a href="https://www.acmvit.in/ ">
                        <ACMLogo />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;