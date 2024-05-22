import { colors } from '@src/constants/tokens';
import { useEffect, useState } from 'react';
import { getColors } from 'react-native-image-colors';
import { AndroidImageColors } from 'react-native-image-colors/build/types';

export const usePlayerBackground = (imageUrl: string) => {
  const [imageColors, setImageColors] = useState<AndroidImageColors | null>(null);

  useEffect(() => {
    getColors(imageUrl, {
      fallback: colors.background,
      cache: true,
      key: imageUrl,
    }).then((colors) => {
      console.log('colors', colors);
      return setImageColors(colors as AndroidImageColors);
    });
  }, [imageUrl]);

  return { imageColors };
};
