import React from "react";
import { Title } from '../components/title';
import "../css/schedule.css"
const data = [
  { data: "4/5", content: "始業式・対面式" },
  { data: "4/9", content: "部活動紹介" },
  { data: "7/13~7/17", content: "学生総会" },
  { data: "10/17", content: "オープンキャンパス" },
  { data: "11/21", content: "高専祭前夜祭"},
  { data: "11/22", content: "高専祭本祭" },
]

export function Schedule() {
  return (
    <>
      <center style={{width: "100%"}}>
        <Title title="活動予定" />
        <table style={{
          border: "1px solid #000",
          borderCollapse: "collapse",
        }}>
          <thead>
          <tr>
            <th style={{
              border: "1px solid #000",
              borderCollapse: "collapse",
              backgroundColor: "#D9D9D9",
              width: "10rem",
            }}><h3>日付</h3></th>
            <th
              style={{
                border: "1px solid #000",
                borderCollapse: "collapse",
                width: "20rem",
              }}
            ><h3>活動内容</h3></th>
          </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr>
              <td style={{
                border: "1px solid #000",
                borderCollapse: "collapse",
                backgroundColor: "#D9D9D9",
              }}><p>{item.data}</p></td>
              <td style={{
                border: "1px solid #000",
              }}><p>{item.content}</p></td>
            </tr>
          ))}
          </tbody>
        </table>
      </center>
    </>
  )
}
