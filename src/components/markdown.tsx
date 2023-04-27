import React, {memo} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
export function Markdown(props: { text: string })  {
   return (
       <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.text}</ReactMarkdown>
   );
}
