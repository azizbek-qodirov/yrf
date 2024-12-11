import React, { useState } from 'react';
import { NotificationToast } from './Notification';

const RegistrationForm = ({ onBack }) => {
  const ageOptions = Array.from({ length: 8 }, (_, i) => 12 + i);
  const memberOptions = Array.from({ length: 3 }, (_, i) => i + 4);

  const [formData, setFormData] = useState({
    groupName: '',
    numberOfMembers: '',
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    telegramUsername: '',
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    // Group Name Validation
    if (!formData.groupName.trim()) {
      newErrors.groupName = 'Group name is required.';
    }

    // Number of Members Validation
    if (!formData.numberOfMembers) {
      newErrors.numberOfMembers = 'Please select the number of members.';
    }

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    // Age Validation
    if (!formData.age) {
      newErrors.age = 'Please select your age.';
    }

    // Phone Number Validation
    const phoneRegex = /^\+998(20|33|50|77|88|90|91|93|94|95|97|99)\d{7}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format.';
    }

    // Telegram Username Validation
    const telegramRegex = /^(@|https:\/\/t\.me\/).+/;
    if (!formData.telegramUsername.trim()) {
      newErrors.telegramUsername = 'Telegram username is required.';
    } else if (!telegramRegex.test(formData.telegramUsername)) {
      newErrors.telegramUsername = 'Telegram username must start with @ or https://t.me/';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      formData.numberOfMembers = parseInt(formData.numberOfMembers);
      formData.age = parseInt(formData.age);
      try {
        const response = await fetch('http://18.184.214.143:8088/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setNotification({
            message: "Ma'lumotlar muvaffaqiyatli yuborildi!",
            type: 'success',
          });
          setTimeout(() => {
            setNotification(null);
            onBack(); // Go back to the main menu after 3 seconds
          }, 3000); // Notification stays for 3 seconds
        } else {
          setNotification({
            message: "Ma'lumotlar yuborilmadi. Iltimos qayta urinib ko'ring!",
            type: 'error',
          });
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        }
      } catch (error) {
        setNotification({
          message: "Ma'lumotlar yuborilmadi. Iltimos qayta urinib ko'ring!",
          type: 'error',
        });
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-4 lg:px-8">
      {/* Notification Toast */}
      {notification && (
        <NotificationToast
          message={notification.message}
          type={notification.type}
          duration={3000} // Notification stays for 3 seconds
          onClose={() => setNotification(null)}
        />
      )}

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-4 lg:p-8 shadow-2xl border border-cyan-400/20">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Ro'yxatdan o'tish</h1>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-200">Guruh nomi</label>
              <input
                type="text"
                name="groupName"
                placeholder="Guruh nomini kiriting"
                value={formData.groupName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
              />
              {errors.groupName && <p className="text-red-500 text-sm">{errors.groupName}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-200">Guruh a'zolari soni</label>
              <select
                name="numberOfMembers"
                value={formData.numberOfMembers}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
              >
                <option value="" disabled>A'zolar sonini tanlang</option>
                {memberOptions.map((num) => (
                  <option key={num} value={num} style={{ backgroundColor: '#1D2432' }}>{num}</option>
                ))}
              </select>
              {errors.numberOfMembers && <p className="text-red-500 text-sm">{errors.numberOfMembers}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-200">Ism</label>
              <input
                type="text"
                name="firstName"
                placeholder="Guruh liderining ismini kiriting"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-200">Familya</label>
              <input
                type="text"
                name="lastName"
                placeholder="Guruh liderining familyasini kiriting"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-200">Yosh</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
              >
                <option value="" disabled>Yoshingizni tanlang</option>
                {ageOptions.map((age) => (
                  <option key={age} value={age} style={{ backgroundColor: '#1D2432' }}>{age}</option>
                ))}
              </select>
              {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-200">Telefon raqam</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+998xx1234567"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-200">Telegram Username</label>
            <input
              type="text"
              name="telegramUsername"
              placeholder="@username"
              value={formData.telegramUsername}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700"
            />
            {errors.telegramUsername && <p className="text-red-500 text-sm">{errors.telegramUsername}</p>}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 hover:bg-gray-600 transition duration-300"
            >
              Orqaga
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
            >
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
