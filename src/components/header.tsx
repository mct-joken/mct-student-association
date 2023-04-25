import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import "../css/header.css";
type Props = {
    setNavOpen: (value: boolean) => void;
}
export const Header:React.FC<Props> = ({
    setNavOpen,
}) => {
    // ブラウザの幅を取得
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [openNav, setOpenNav] = useState(false);
    return (
        <header style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            height: "30px",
            alignItems: "center",
        }}>
            {windowWidth >= 800 ? (
                <>
                    <div style={{
                        alignItems: "center",
                        flexGrow: 1,
                        width: "auto",
                    }}>
                        <Link
                            to={"/"}
                            style={{
                                fontSize: "1.5rem",
                                textDecoration: "none",
                                color: "#000",
                            }}
                        >
                            松江高専　学生会
                        </Link>
                    </div>
                    <div
                        style={{
                            flexGrow: 4,
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            fontSize: "0.8rem",
                        }}
                    >
                        <Link to={"/schedule"} className={"headerlink"}>
                            活動予定
                        </Link>
                        <Link to={"/club"} className={"headerlink"}>
                            部活動
                        </Link>
                        <Link to={"/members"} className={"headerlink"}>
                            学生会メンバー
                        </Link>
                        <Link to={"/links"} className={"headerlink"}>
                            リンク
                        </Link>
                        <Link to={"industry"} className={"headerlink"}>
                            インダストリ
                        </Link>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            flexGrow: 1,
                            alignItems: "center",
                        }}
                    >
                        <Link to={"https://twitter.com/MctGakuseikai"}>
                            <img
                                src={TwitterLogo}
                                style={{ height: "25px" }}
                                alt={"松江高専学生会のTwitter"}
                            />
                        </Link>
                        <Link to={"https://www.instagram.com/mctgakuseikai/"}>
                            <img
                                src={InstagramLogo}
                                style={{ height: "25px" }}
                                alt={"松江高専学生会のInstagram"}
                            />
                        </Link>
                    </div>
                </>
            ) : (
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <div style={{ alignItems: "center" }}>
                        <Link
                            to={"/"}
                            style={{
                                fontSize: "1.5rem",
                                textDecoration: "none",
                                color: "#000",
                            }}
                        >
                            松江高専　学生会
                        </Link>
                    </div>

                        {!openNav ? (
                            <div
                                onClick={() => {
                                    setOpenNav(true)
                                    setNavOpen(true)
                                }}
                            >
                                Menu⬇︎
                            </div>
                        ) : (
                            <div
                                onClick={() => {
                                    setOpenNav(false)
                                    setNavOpen(false)
                                }}>
                                Close⬆︎
                            </div>
                        )}
                </div>
            )}
        </header>
    );
}
