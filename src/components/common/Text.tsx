import { COLORS, FONTS } from '@src/constants/themes';
import { FC } from 'react';
import { StyleProp, TextProps, Text as TextRN, TextStyle } from 'react-native';

export interface ITextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: string | number | React.ReactNode;
  type?: 'primary' | 'secondary';

  variant?:
    | 'heading-1'
    | 'heading-1-medium'
    | 'heading-2'
    | 'heading-3'
    | 'label-1'
    | 'label-2'
    | 'label-2-medium'
    | 'label-3'
    | 'label-3-medium'
    | 'body-1'
    | 'body-2'
    | 'body-3';
}

const Text: FC<ITextProps> = ({ children, style, type, variant, ...rest }) => {
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  const textStyle = () => {
    let textStyle: {} = '';

    switch (variant) {
      case 'heading-1':
        textStyle = FONTS.heading1;
        break;
      case 'heading-1-medium':
        textStyle = FONTS.heading1Medium;
        break;
      case 'heading-2':
        textStyle = FONTS.heading2;
        break;
      case 'heading-3':
        textStyle = FONTS.heading3;
        break;
      case 'label-1':
        textStyle = FONTS.label1;
        break;
      case 'label-2':
        textStyle = FONTS.label2;
        break;
      case 'label-2-medium':
        textStyle = FONTS.label2Medium;
        break;
      case 'label-3':
        textStyle = FONTS.label3;
        break;
      case 'label-3-medium':
        textStyle = FONTS.label3Medium;
        break;
      case 'body-1':
        textStyle = FONTS.body1;
        break;
      case 'body-2':
        textStyle = FONTS.body2;
        break;
      case 'body-3':
        textStyle = FONTS.body3;
        break;
    }

    return textStyle;
  };
  return (
    <TextRN
      {...rest}
      allowFontScaling={false}
      style={[
        {
          color: type === 'secondary' ? COLORS.dark[300] : COLORS.dark[500],
        },

        textStyle(),
        { ...passedStyles },
      ]}
    >
      {children}
    </TextRN>
  );
};

export default Text;
