import { OrganizationCard } from '../components/organizationCard';
import { Organization } from '../components/organization';

import '../css/member.css';
import { Title } from '../components/title';

export const Members = () => (
  <div className={"page"}>
    <div id="members">
      {orgs.map((org) => (
        <OrganizationCard org={org} key={org.name} />
    ))}
    </div>
    <div id="gikai">
      <OrganizationCard org={{name: "議会", work: "学生会活動の承認", president: "議長:福島日向", vicePresident: "副議長:永吉琉人"}}/>
    </div>
  </div>
);

const orgs: Organization[] = [
  {
    name: '執行部',
    work: '学生会の頭脳',
    president: '学生会長:小林広武',
    vicePresident: '学生副会長:水津創',
  },
  {
    name: '総務局',
    work: '学生会の事務手続き、ホームページを管轄',
    president: '局長:渡辺蒼流',
    vicePresident: '副局長:山﨑輝望',
  },
  {
    name: '会計局',
    work: '学生会予算の管理、会計処理を管轄',
    president: '局長:関島悠月',
    vicePresident: '副局長:平田悠真',
  },
  {
    name: '文化局',
    work: '文化系部活動の支援、文化系イベントの企画運営を管轄',
    president: '局長:矢田遼太郎',
    vicePresident: '副局長:高橋幸之助',
  },
  {
    name: '美化局',
    work: '学校の美化活動を管轄',
    president: '局長:福間陽基',
    vicePresident: '副局長:片岡直哉',
  },
  {
    name: '報道局',
    work: '学生会の広報活動を管轄',
    president: '局長:川井柚希',
    vicePresident: '副局長:細田諒',
  },
  {
    name: '体育局',
    work: '体育系部活動の支援、体育系イベントの企画運営を管轄',
    president: '局長:佐々木陽生',
    vicePresident: '副局長:熊崎友莉',
  },
  {
    name: '風紀局',
    work: '学校の風紀維持を管轄',
    president: '局長:伊藤向希',
    vicePresident: '副局長:濱口紘生',
  },
  {
    name: '企画局',
    work: '学生会のイベント企画運営を管轄',
    president: '局長:石畑温々弥',
    vicePresident: '副局長:錦織未来',
  },
];
