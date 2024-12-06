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
                <h3 className="text-2xl font-bold text-white mb-4">Loyiha haqida</h3>
                <div className="text-gray-300 space-y-4">
                    <p>
                        “Young Researchers of the Future” dasturi ilmiy tafakkurning keyingi avlodini tarbiyalashga qaratilgan. Bizning keng qamrovli tadqiqot o'quvchilarga iqtisod va geografiya bo'yicha mazmunli tadqiqotlar o'tkazish, tanqidiy fikrlash qobiliyatlarini rivojlantirish va real muammolarni hal qilishda amaliy tajriba bilan ta'minlaydi.
                    </p>
                    <p>
                        Ishtirokchilar ekspert maslahatidan, eng zamonaviy manbalardan va yosh tadqiqotchilarni qo‘llab-quvvatlovchi hamjamiyatidan foydalanish imkoniyatiga ega bo‘ladilar. Dastur individual o'sishga va hamkorlikda o'rganishga urg'u beradi, bu har bir talaba o'zining noyob tadqiqot qiziqishlarini rivojlantirishni ta'minlaydi, shu bilan birga qimmatli jamoada ishlash ko'nikmalarini shakllantiradi.
                    </p>
                    <p>
                        Dastur davomida talabalar muhim tadqiqot metodologiyalari, ma'lumotlarni tahlil qilish usullari va taqdimot ko'nikmalarini o'rganadilar. Ularning ishining yakuni yakuniy taqdimot tadbirimizda namoyish etiladi, u yerda ular o‘z topilmalarini tengdoshlari, o‘qituvchilari va soha mutaxassislari bilan baham ko‘rish imkoniyatiga ega bo‘ladilar.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreModal;