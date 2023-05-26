import React, {memo} from "react";
import {Markdown} from "../components/markdown";


// Markdown形式で記述したテキストを表示する
// 書き方はこのリンクを参照 https://qiita.com/Qiita/items/c686397e4a0f4f11683d
const hometext = `
# リンク集

## ホームページ, SNSなど
松江高専に関連するホームページやSNSなどのリンクです。
[松江高専HP](https://www.matsue-ct.jp)  
[直野寮HP](https://ryo.matsue-ct.ac.jp)
[学生会Twitter](https://twitter.com/MctGakuseikai)
[学生会Instagram](https://www.instagram.com/mctgakuseikai/)

## 公式LINE
学生会への問い合わせは、学生会公式LINEにて受け付けています。
[学生会公式LINE](https://line.me/R/ti/p/%40580lnhut)

## メールアドレス
学生会の各局への問い合わせは以下のメールアドレスにお願いします。

※現在準備中です
- 風紀局:
- 会計局:
- 体育局:
- 報道局:
- 企画局:
- 美化局:
- 総務局:
- 文化局:

- - -

`

export function Links() {
    return (
      <div className={"page"}>
          <Markdown text={hometext} />
      </div>
);
}
