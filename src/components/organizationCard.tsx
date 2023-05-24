import '../css/member.css';
import { Organization } from './organization';

type Props = {
  org: Organization;
};

export const OrganizationCard = (props: Props) => (
  <div className="org-card">
    <h2>{props.org.name}</h2>
    <p>{props.org.president}</p>
    <p>{props.org.vicePresident}</p>
    <p>業務内容</p>
    <p>{props.org.work}</p>
  </div>
);
