import React, {memo} from "react";
import {Markdown} from "../components/markdown";
import { Title } from '../components/title';
import "../css/links.css";

export function Links() {
  return (
    <div className={"page"}>
      <div id={"links"}>
        <center>
          <Title title={"リンク集"} />
        </center>
        <p>松江高専に関連するホームページやSNSのリンクなどです</p>
        <ul>
          <li><a href={"https://www.matsue-ct.jp"} target={"_blank"}>松江高専HP</a></li>
          <li><a href={"https://www.matsue-ct.jp"} target={"_blank"}>直野寮HP</a></li>
          <li><a href={"https://www.matsue-ct.jp"} target={"_blank"}>学生会Twitter</a></li>
          <li><a href={"https://www.matsue-ct.jp"} target={"_blank"}>学生会Instagram</a></li>
        </ul>
        <h2>公式LINE</h2>
        <p>学生会への問い合わせは、学生会公式LINEにて受け付けています。</p>
        <a href={"https://line.me/R/ti/p/%40580lnhut"}>学生会公式LINE</a>
        <ul>
          <li>風紀局: <span>d2005@matsue-ct.jp</span></li>
          <li>会計局: 準備中</li>
          <li>体育局: <span>d2016@matsue-ct.jp</span></li>
          <li>報道局: 準備中</li>
          <li>企画局: <span>mct.kikaku@gmail.com</span></li>
          <li>美化局: 準備中</li>
          <li>総務局: <span>mct.soumuinfo@gmail.com</span></li>
          <li>文化局: <span>e2035@matsue-ct.ac.jp</span></li>
        </ul>
      </div>
    </div>
  );
}
