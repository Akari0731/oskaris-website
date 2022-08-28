export const translations: TranslationProps = {
  en: {
    Animation: 'Animation',
    Video: 'Video',
    'Oskari Friman': 'Oskari Friman',
  },
  ja: {
    Animation: 'アニメーション',
    Video: '動画',
    'Oskari Friman': 'フリーマン・オスカリ',
  },
};

export type TranslationProps = {
  [key in 'en' | 'ja']: { [key: string]: string };
};
