import { useMediaQuery } from 'react-responsive';

import { WideFooter } from './ResponsiveFooter/wideFooter';
import { NarrowFooter } from './ResponsiveFooter/narrowFooter';
type Props = {
  setNavOpen: (value: boolean) => void;
}
export const Footer = (props: Props) => {
  const isNarrow = useMediaQuery({ maxWidth: 600 });

  return isNarrow ? <NarrowFooter setNavOpen={props.setNavOpen}/> : <WideFooter />;
};
