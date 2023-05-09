import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';

export function Markdown(props: { text: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body">
      {props.text}
    </ReactMarkdown>
  );
}
