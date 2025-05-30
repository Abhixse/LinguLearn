import React, { useState } from "react";

const languages = [
  { name: "Spanish", flag: "https://flagcdn.com/es.svg", popular: true },
  { name: "French", flag: "https://flagcdn.com/fr.svg", popular: true },
  { name: "German", flag: "https://flagcdn.com/de.svg", popular: false },
  { name: "Italian", flag: "https://flagcdn.com/it.svg", popular: false },
  { name: "Japanese", flag: "https://flagcdn.com/jp.svg", popular: true },
  { name: "Chinese", flag: "https://flagcdn.com/cn.svg", popular: true },
  { name: "Korean", flag: "https://flagcdn.com/kr.svg", popular: false },
  { name: "Portuguese", flag: "https://flagcdn.com/pt.svg", popular: false },
  { name: "Russian", flag: "https://flagcdn.com/ru.svg", popular: false },
];

const LanguageSelectionUI = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-4xl p-8">

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full w-1/4"></div> {/* 25% */}
          </div>
        </div>

        {/* Step and Title */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-6 h-6 flex items-center justify-center text-white text-lg bg-blue-600 rounded-full">1</div>
            <h2 className="text-lg font-semibold">Choose your language</h2>
          </div>
          <p className="text-sm text-gray-500">Select the language you want to learn</p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {languages.map((lang) => (
            <div
              key={lang.name}
              onClick={() => setSelected(lang.name)}
              className={`relative border rounded-md py-4 px-2 flex flex-col items-center justify-center transition cursor-pointer ${
                selected === lang.name
                  ? "border-green-500 shadow-md"
                  : "hover:shadow"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-8 h-6 mb-2 object-cover rounded-sm"
              />
              <span className="font-medium text-sm">{lang.name}</span>

              {/* Top Right Badge */}
              {selected === lang.name ? (
                <span className="absolute top-1 right-1 text-green-500 text-xs">✅</span>
              ) : (
                lang.popular && (
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )
              )}

              {/* Bottom Right Green Arrow on Select */}
              {selected === lang.name && (
                <span className="absolute bottom-1 right-1 text-green-500 text-lg font-bold">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
            ← Back
          </button>
          <button
            className={`px-5 py-2 rounded-md text-sm flex items-center gap-1 ${
              selected
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!selected}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionUI;
