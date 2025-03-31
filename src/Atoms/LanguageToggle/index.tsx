export const LanguageToggle = ({ isEnglish, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="py-2 px-4 bg-yellow-500 text-black font-bold rounded border-none"
    >
      {isEnglish ? "Switch to Ukrainian" : "Switch to English"}
    </button>
  );
};
