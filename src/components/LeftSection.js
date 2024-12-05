import React from 'react';

const LeftSection = ({ setIsModalOpen }) => {
    return (
        <LeftSectionDiv setIsModalOpen={setIsModalOpen} />
    );
};

export default LeftSection;

const LeftSectionDiv = ({ setIsModalOpen }) => {
    return (
        <div className="max-w-xl">
            {/* Logo Section */}
            <div className="flex items-center gap-4 pb-12 ">
                <img
                    src="./images/yrf.png"
                    alt="YRF Logo"
                    className="h-30 md:h-40"
                    style={{
                        paddingTop: "60px"
                    }}
                />
                <img
                    src="./images/oxus.png"
                    alt="Oxus Logo"
                    className="h-30 md:h-80"
                    style={{
                        paddingTop: "100px"
                    }
                    }
                />

            </div>

            {/* Text Section */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00ffff] pb-8">
                Young Researchers of the Future
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl pb-8">
                O'z kelajagingizga befarq bo'lmaganingizdan biz xursandmiz, bu loyiha aynan siz uchun.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4 lg:mt-6 justify-start lg:justify-left">
                <button className="bg-[#00ffff] text-gray-900 px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#00ffff]/90 transition-colors">
                    Register Now
                </button>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="border border-[#00ffff] text-[#00ffff] px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#00ffff]/10 transition-colors"
                >
                    Learn More
                </button>
            </div>


        </div>
    );
};
