import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ca', label: 'CA', name: 'Català' },
    { code: 'gl', label: 'GL', name: 'Galego' },
    { code: 'eu', label: 'EU', name: 'Euskera' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'de', label: 'DE', name: 'Deutsch' }    
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-800/90"
        >
          <FaGlobe className="text-blue-400 text-xl" />
          <span className="text-white font-medium text-sm">
            {currentLanguage?.label || 'ES'}
          </span>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden min-w-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center justify-between gap-3 transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-bold text-sm">{lang.label}</span>
                  <span className="text-sm">{lang.name}</span>
                </span>
                {i18n.language === lang.code && (
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}