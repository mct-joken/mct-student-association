import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-light.css';

export const Markdown = (props: { text: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-body">
    {props.text}
  </ReactMarkdown>
);
