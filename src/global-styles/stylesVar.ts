type FontString = 'normal' | 'bold';
type FontNumber = 100 | 200 | 300 | 500 | 600 | 900;

export default {
  colorVariable: {
    white: '#FFF',
    black: '#000',
    text1: '#3A544F',
    icon: '#B8B8B8',
    blue: '#176FF2',
    searchInput: '#F3F8FE',
    blueLow: 'rgba(23, 111, 242, 0.05)',
    skeletonBg: '#adadad',
    skeletonHighlight: '#ffffff',
  },
  gradient: {
    blue: {
      colors: ['#176FF2', '#196EEE'],
      degree: 271,
    },
  },
  fontFamily: (values: FontNumber | FontString) => {
    switch (values) {
      case 100:
        return 'Montserrat-Thin';
      case 200:
        return 'Montserrat-ExtraLight';
      case 300:
        return 'Montserrat-Light';
      case 500:
        return 'Montserrat-Medium';
      case 600:
        return 'Montserrat-SemiBold';
      case 900:
        return 'Montserrat-Black';
      case 'bold':
        return 'Montserrat-Bold';
      case 'normal':
        return 'Montserrat-Regular';
      default:
        return 'Montserrat-Regular';
    }
  },
};
