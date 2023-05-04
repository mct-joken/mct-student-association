import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";

const SmallListStyle = {
    marginTop: "1rem",
    width: "auto",
    color: "#000",
    textDecoration: "underline",
}
const LargeListStyle = {
    marginTop: "1rem",
    width: "auto",
    color: "#000",
    textDecoration: "none",
    padding: "0.25rem 1rem",
}
export function Footer() {
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
    return (
        <footer style={{
            display: "grid",
            justifyContent: "center",
            width: "100%",
        }}>
            {windowWidth >= 600 ?
                <>
                    <div style={{
                        height: "auto",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    >
                        <ul style={{
                            listStyleType: "none",
                            display: "flex",
                            float: "none",
                            flexWrap: "wrap",
                            margin: "1rem 0",
                        }}>
                            <li><Link to={"/schedule"} style={LargeListStyle}>活動予定</Link></li>
                            <li><Link to={"/club"} style={LargeListStyle}>部活動</Link></li>
                            <li><Link to={"/members"} style={LargeListStyle}>学生会メンバー</Link></li>
                            <li><Link to={"/links"} style={LargeListStyle} >リンク</Link></li>
                            <li><Link to={"/industori"} style={LargeListStyle}>インダストリ</Link></li>
                        </ul>
                    </div>
                </> : <>
                    <div style={{
                        width: "100%",
                    }}>
                        <div style={{
                            height: "auto",
                            width: "100%",
                            display: "list-item",
                        }}
                        >
                            <ul style={{
                                listStyleType: "none",
                                padding: 0,
                                overflow: "hidden",
                                float: "none",
                                display: "flex",
                                marginTop: "1rem",
                                marginBottom: "1rem",
                                flexWrap: "wrap",
                                width: "100%",
                            }}>
                                <li style={{width: "40%", marginBottom: "0.5rem"}} ><Link to={"/schedule"} style={SmallListStyle}>活動予定</Link></li>
                                <li style={{width: "40%", marginBottom: "0.5rem"}}><Link to={"/club"} style={SmallListStyle}>部活動</Link></li>
                                <li style={{width: "40%", marginBottom: "0.5rem"}}><Link to={"/members"} style={SmallListStyle}>学生会メンバー</Link></li>
                                <li style={{width: "40%", marginBottom: "0.5rem"}}><Link to={"/links"} style={SmallListStyle} >リンク</Link></li>
                                <li style={{width: "40%", marginBottom: "0.5rem"}}><Link to={"/industori"} style={SmallListStyle}>インダストリ</Link></li>
                            </ul>
                        </div>
                        <div style={{
                            width: "5rem",
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Link to={"https://twitter.com/MctGakuseikai"}><img src={TwitterLogo} style={{height: "25px"}} alt={"松江高専学生会のTwitter"}/></Link>
                            <Link to={"https://www.instagram.com/mctgakuseikai/"}><img src={InstagramLogo} style={{height: "25px"}} alt={"松江高専学生会のInstagram"}/></Link>
                        </div>
                    </div>
                </>
            }
        </footer>
    )
}
