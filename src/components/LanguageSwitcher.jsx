import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Fonction pour basculer entre 'fr' et 'en'
  const toggleLanguage = () => {
    const nextLng = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLng);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50/50 hover:bg-purple-50 hover:border-purple-300 text-sm font-medium text-purple-950 transition-all duration-200 shadow-sm"
    >
      {/* Globe ou icône optionnelle */}
      <span className="text-xs text-purple-400">🌐</span>
      
      {/* Affiche 'EN' si la langue actuelle est française, et inversement */}
      <span className="uppercase">
        {i18n.language === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;