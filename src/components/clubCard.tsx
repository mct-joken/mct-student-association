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

export function ClubCard(club: Club) {
  return (
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
      <p>{club.name}</p>
      {club.twitter ? (
        <Link to={club.twitter}>
          <img src={Twitter} alt="twitter" style={{ height: '1rem' }} />
        </Link>
      ) : (
        <></>
      )}
      {club.instagram ? (
        <Link to={club.instagram}>
          <img src={Instagram} alt="instagram" style={{ height: '1rem' }} />
        </Link>
      ) : (
        <></>
      )}
      {club.facebook ? (
        <Link to={club.facebook}>
          <img src={Facebook} alt="facebook" style={{ height: '1rem' }} />
        </Link>
      ) : (
        <></>
      )}
      {club.homepage ? (
        <Link to={club.homepage}>
          <img src={Website} alt="homepage" style={{ height: '1rem' }} />
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
