import "../css/member.css";
type Props = {
  name: string;
  work: string;
  president: string;
  vicePresident: string;
}

export function OrgPanel(props: Props) {
  return (
      <div id="org-panel">
        <h2>{props.name}</h2>
        <p>{props.president}</p>
        <p>{props.vicePresident}</p>
        <p>業務内容</p>
        <p>{props.work}</p>
      </div>
  );
}
