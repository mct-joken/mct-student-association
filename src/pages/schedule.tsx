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
                backgroundColor: '#D9D9D9',
                width: '10rem',
              }}
            >
              <h3>日付</h3>
            </th>
            <th
              style={{
                border: '1px solid #000',
                width: '20rem',
              }}
            >
              <h3>活動内容</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((item) => (
            <tr key={item.date}>
              <td
                style={{
                  border: '1px solid #000',
                  backgroundColor: '#D9D9D9',
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
  { date: '4/5', content: '始業式・対面式' },
  { date: '4/9', content: '部活動紹介' },
  { date: '7/13~7/17', content: '学生総会' },
  { date: '10/17', content: 'オープンキャンパス' },
  { date: '11/21', content: '高専祭前夜祭' },
  { date: '11/22', content: '高専祭本祭' },
];
