import { Link } from 'react-router-dom';

import Instagram from '../assets/InstagramLogo.svg';
import Twitter from '../assets/TwitterLogo.svg';
import Website from '../assets/website.png';
import Facebook from '../assets/facebook.png';

export type Club = {
  name: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  homepage?: string;
};

export const ClubCard = (props: { club: Club }) => (
  <div
    style={{
      display: 'flex',
      width: '80%',
      minWidth: '300px',
      maxWidth: '300px',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <p>{props.club.name}</p>
    <SocialIcons club={props.club} />
  </div>
);

const SocialIcons = (props: { club: Club }) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <SocialIcon to={props.club.twitter} icon={Twitter} alt="twitter" />
    <SocialIcon to={props.club.instagram} icon={Instagram} alt="instagram" />
    <SocialIcon to={props.club.facebook} icon={Facebook} alt="facebook" />
    <SocialIcon to={props.club.homepage} icon={Website} alt="homepage" />
  </div>
);

const SocialIcon = (props: IconProps) =>
  props.to ? (
    <Link to={props.to}>
      <img src={props.icon} alt={props.alt} style={{ height: '1rem' }} />
    </Link>
  ) : (
    <></>
  );

type IconProps = {
  to?: string;
  icon: string;
  alt: string;
};
