import React from "react";

import { Link } from "react-router-dom";
import { useMedia } from "use-media"

import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import "../css/footer.css"

export function Footer() {
    const isNarrow = useMedia({ maxWidth: "600px" });
    return (
        <footer className={`footer ${isNarrow ? "narrow" : ""}`}>
            <div className="links">
                <ul>
                    <li><Link to={"/schedule"}>活動予定</Link></li>
                    <li><Link to={"/club"}>部活動</Link></li>
                    <li><Link to={"/members"}>学生会メンバー</Link></li>
                    <li><Link to={"/links"} >リンク</Link></li>
                    <li><Link to={"/industry"}>インダストリ</Link></li>
                </ul>
            </div>
            {isNarrow &&
                <div className="icons">
                    <Link to={"https://twitter.com/MctGakuseikai"}><img src={TwitterLogo} alt={"松江高専学生会のTwitter"} /></Link>
                    <Link to={"https://www.instagram.com/mctgakuseikai/"}><img src={InstagramLogo} alt={"松江高専学生会のInstagram"} /></Link>
                </div>
            }
        </footer>
    )
}
