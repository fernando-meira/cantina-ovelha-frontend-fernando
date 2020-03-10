import { pxToRem } from '../functions';

function getDynamicSize(size) {
  const windowSize = window.innerWidth;

  const fontSize = {
    '768': size + 4,
    '1024': size + 6,
  };

  return fontSize[windowSize] || size;
}

export default {
  maxWidth: pxToRem(1300),
  borderRadius: (multiplier = 1) => pxToRem(3 * multiplier),
  baseSpacing: (multiplier = 1) => pxToRem(getDynamicSize(8) * multiplier),
};
