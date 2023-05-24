import React, {memo} from "react";
import {Markdown} from "../components/markdown";


// Markdown形式で記述したテキストを表示する
// 書き方はこのリンクを参照 https://qiita.com/Qiita/items/c686397e4a0f4f11683d
const hometext = `

## 当サイトの概要

当サイトでは松江高専学生会のメンバー紹介や活動報告、近況報告を行います。

また、メールアドレスを記載してありますので、意見・要望・質問などしていただければ幸いです。

外部の方に、もっと松江高専のことを知ってもらえればいいと思い、日々更新していこうと思っています。

松江高専のHP、また、学生会によるtwitterやInstagramも併せてよろしくお願いします。

[松江高専HP](https://www.matsue-ct.jp)  
[学生会Twitter](https://twitter.com/MctGakuseikai)
- - -
ここに記事をおく予定 まだバックエンドできてないからごめん
`

export function Home() {
    return (
        <Markdown text={hometext} />
    );
}
