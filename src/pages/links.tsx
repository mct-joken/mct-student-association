import React, {memo} from "react";
import {Markdown} from "../components/markdown";


// Markdown形式で記述したテキストを表示する
// 書き方はこのリンクを参照 https://qiita.com/Qiita/items/c686397e4a0f4f11683d
const hometext = `
## リンク集

### ホームページ, SNSなど
松江高専に関連するホームページやSNSなどのリンクです。\n
[松江高専HP](https://www.matsue-ct.jp)  \n
[直野寮HP](https://ryo.matsue-ct.ac.jp)\n
[学生会Twitter](https://twitter.com/MctGakuseikai)\n
[学生会Instagram](https://www.instagram.com/mctgakuseikai/)\n

### 公式LINE
学生会への問い合わせは、学生会公式LINEにて受け付けています。\n
[学生会公式LINE](https://line.me/R/ti/p/%40580lnhut)

### メールアドレス
学生会の各局への問い合わせは以下のメールアドレスにお願いします。

- 風紀局: d2005@matsue-ct.jp
- 会計局: 準備中
- 体育局: d2016@matsue-ct.jp
- 報道局: 準備中
- 企画局: mct.kikaku@gmail.com
- 美化局: 準備中
- 総務局: mct.soumuinfo@gmail.com
- 文化局: e2035@matsue-ct.ac.jp

- - -

`

export function Links() {
    return (
      <div className={"page"}>
          <Markdown text={hometext} />
      </div>
);
}
