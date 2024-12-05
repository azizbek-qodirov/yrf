import { CircleX } from 'lucide-react';
import React from 'react';


const LearnMoreModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative border border-white/10">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white/70 hover:text-white"
                >
                    <CircleX size={24} />
                </button>
                <h3 className="text-2xl font-bold text-white mb-4">About the Program</h3>
                <div className="text-gray-300 space-y-4">
                    <p>
                        The "Young Researchers of the Future" program is designed to nurture the next generation of scientific minds. Our comprehensive research initiative provides students with hands-on experience in conducting meaningful research in economics and geography, developing critical thinking skills, and solving real-world problems.
                    </p>
                    <p>
                        Participants will have access to expert mentorship, state-of-the-art resources, and a supportive community of fellow young researchers. The program emphasizes both individual growth and collaborative learning, ensuring that each student develops their unique research interests while building valuable teamwork skills.
                    </p>
                    <p>
                        Throughout the program, students will learn essential research methodologies, data analysis techniques, and presentation skills. The culmination of their work will be showcased at our final presentation event, where they'll have the opportunity to share their findings with peers, educators, and industry experts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreModal;