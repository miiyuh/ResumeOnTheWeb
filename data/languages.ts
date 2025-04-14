import type { Language } from "types/Sections";

const languagesList: Language[] = [
  {
    id: 1,
    language: "English",
    text: "I use English on a daily basis.",
  },
  {
    id: 2,
    language: "Malay",
    text: "Bahasa Melayu adalah bahasa ibunda saya.",
    translation: "Malay is my native language.",
  },
  {
    id: 3,
    language: "Japanese",
    text: "進撃の巨人などのアニメを見て日本語を少し知っています。",
    translation: "I know Japanese a bit from watching anime such as Attack on Titan",
  },
  {
    id: 4,
    language: "Arabic",
    text: "أعرف اللغة العربية القليل منذ الصغر",
    translation: "I know a little Arabic since I was young.",
  },
];

export default languagesList;
