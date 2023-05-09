import { useMediaQuery } from 'react-responsive';

import { WideHeader } from './ResponsiveHeader/wideHeader';
import { NarrowHeader } from './ResponsiveHeader/narrowHeader';

type Props = {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
};

export const Header = (props: Props) => {
  const isNarrow = useMediaQuery({ maxWidth: 800 });

  return isNarrow ? <NarrowHeader navOpen={props.navOpen} setNavOpen={props.setNavOpen} /> : <WideHeader />;
};
