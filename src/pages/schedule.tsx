import { Title } from '../components/title';

export const Schedule = () => (
  <>
    <center style={{ width: '100%' }} className={"page"}>
      <Title title="活動予定" />
      <table
        style={{
          border: '1px solid #000',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: '1px solid #000',
                backgroundColor: '#E55807',
                width: '10rem',
                color: "#fff",
              }}
            >
              <h3 style={{
                fontWeight: 'normal',
              }}
              >日付</h3>
            </th>
            <th
              style={{
                border: '1px solid #000',
                width: '20rem',
                backgroundColor: '#E55807',
                color: "#fff",
              }}
            >
              <h3 style={{
                fontWeight: 'normal',
              }}>活動内容</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((item) => (
            <tr key={item.date}>
              <td
                style={{
                  border: '1px solid #000',
                  backgroundColor: '#ECF8F9',
                }}
              >
                <p
                  style={{
                    textAlign: 'center',
                    fontStyle: 'normal',
                  }}
                >
                  {item.date}
                </p>
              </td>
              <td
                style={{
                  border: '1px solid #000',
                }}
              >
                <p
                  style={{
                    fontStyle: 'normal',
                  }}
                >
                  {item.content}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  </>
);

const schedules = [
  { date: '4月', content: '部活動紹介' },
  { date: '5月', content: '学生総会,インダストリとりイラストコンテスト' },
  { date: '6月', content: 'スポーツデー' },
  { date: '7月', content: 'e-sports大会, 七夕イベント' },
  { date: '8月', content: '高専祭準備' },
  { date: '9月', content: '高専祭準備' },
  { date: '10月', content: '高専祭, 秋期スポーツデー, ハロウィンイベント' },
  { date: '11月'},
  { date: '12月', content: 'スポーツデー'},
  { date: '1月', content: 'e-sports'},
  { date: '2月', content: '引き継ぎ会, バレンタインイベント'},
  { date: '3月', content: '卒業式'},
];
