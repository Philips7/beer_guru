import {injectGlobal} from 'styled-components';
import {cardType} from '../components/Card';

const base = {
    fontColor: '#747474',
    bgColor: '#F8F8F8',
    mainColor: '#F5C34C',
    containerWidth: '700px',
    modalWidth: '500px',
};

const theme = {
    ...base,
    card: {
        [cardType.default]: {
            background: '#FFF',
            headingColor: base.mainColor,
            paragraphColor: '#BABABA',
            baseSize: '13px',
        },
        [cardType.lite]: {
            background: '#FFF',
            baseSize: '12px',
        }
    },
    loader: {
        indicator: base.mainColor,
        background: '#EAEAEA',
    }
};

// Global styles
injectGlobal`
  body {
    background: ${theme.bgColor};
    color: ${theme.fontColor};
  }
`;

export {theme};
