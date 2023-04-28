import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from "../assets/InstagramLogo.svg";
import Twitter from "../assets/TwitterLogo.svg";
import Website from "../assets/website.png";
import Facebook from "../assets/facebook.png";


export interface Props {
  name: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  homepage?: string;
}

export function Club_card(props: Props) {
  return (
    <div style={{
      display: "flex",
      width: "80%",
      minWidth: "300px",
      maxWidth: "300px",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <p>{props.name}</p>
      {props.twitter ? (
        <Link to={props.twitter}>
          <img src={Twitter} alt="twitter" style={{height: "1rem"}}/>
        </Link>
      ) : (
        <></>
      )}
      {props.instagram ? (
        <Link to={props.instagram}>
          <img src={Instagram} alt="instagram" style={{height: "1rem"}}/>
        </Link>
      ) : (
        <></>
      )}
      {props.facebook ? (
        <Link to={props.facebook}>
          <img src={Facebook} alt="facebook" style={{height: "1rem"}}/>
        </Link>
      ) : (
        <></>
      )}
      {props.homepage ? (
        <Link to={props.homepage}>
          <img src={Website} alt="homepage" style={{height: "1rem"}}/>
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
}
