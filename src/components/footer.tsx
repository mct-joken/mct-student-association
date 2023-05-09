import { useMediaQuery } from 'react-responsive';

import { WideFooter } from './ResponsiveFooter/wideFooter';
import { NarrowFooter } from './ResponsiveFooter/narrowFooter';

export const Footer = () => {
  const isNarrow = useMediaQuery({ maxWidth: 600 });

  return isNarrow ? <NarrowFooter /> : <WideFooter />;
};
