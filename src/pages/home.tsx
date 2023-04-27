import React, {memo} from "react";
import {Markdown} from "../components/markdown";


// Markdown形式で記述したテキストを表示する
// 書き方はこのリンクを参照 https://qiita.com/Qiita/items/c686397e4a0f4f11683d
const hometext = "# 当サイトの概要\n" +
    "\n" +
    "当サイトでは松江高専学生会のメンバー紹介や活動報告、近況報告を行います。\n" +
    "\n" +
    "また、メールアドレスを記載してありますので、意見・要望・質問などしていただければ幸いです。\n" +
    "\n" +
    "外部の方に、もっと松江高専のことを知ってもらえればいいと思い、日々更新していこうと思っています。\n" +
    "\n" +
    "松江高専のHP、また、学生会によるtwitterも併せてよろしくお願いします。\n" +
    "\n" +
    "[松江高専HP](https://www.matsue-ct.jp) \n\n" +
    "[学生会Twitter](https://twitter.com/MctGakuseikai) \n" +
    "- - - \n" +
    "ここに記事をおく予定 まだバックエンドできてないからごめん木島無能"
export function Home() {
    return (
        <Markdown text={hometext} />
    );
}
