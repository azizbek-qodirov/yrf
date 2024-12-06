const LeftSection = ({ setIsModalOpen, setIsRegistrationVisible }) => {
    return (
      <LeftSectionDiv setIsModalOpen={setIsModalOpen} setIsRegistrationVisible={setIsRegistrationVisible} />
    );
  };
  
  const LeftSectionDiv = ({ setIsModalOpen, setIsRegistrationVisible }) => {
    return (
      <div className="max-w-xl ml-0 md:ml-20 mb-0 md:mb-10">
        {/* Text Section */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00ffff] pb-8">
          Young Researchers of the Future
        </h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl pb-8">
          O'z kelajagingizga befarq bo'lmaganingizdan biz xursandmiz, bu loyiha aynan siz uchun.
        </p>
  
        {/* Buttons */}
        <div className="flex gap-4 mt-4 lg:mt-6 justify-start lg:justify-left">
          <button
            onClick={() => setIsRegistrationVisible(true)}
            className="bg-[#00ffff] text-gray-900 px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#00ffff]/90 transition-colors"
          >
            Ro'yxatdan o'tish
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#00ffff] text-[#00ffff] px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#00ffff]/10 transition-colors"
          >
            Batafsil
          </button>
        </div>
      </div>
    );
  };
  
  export default LeftSection;
  