import React, {memo} from "react";
import {Markdown} from "../components/markdown";


// Markdown形式で記述したテキストを表示する
// 書き方はこのリンクを参照 https://qiita.com/Qiita/items/c686397e4a0f4f11683d
const membertext = `
ここでは学生会メンバーを紹介しています。

|a|b|c|
|:-:|:-:|:-:|
|1|2|3|
`

export function Member() {
    return (
        <Markdown text={membertext} />
    );
}
