import React, {memo} from "react";
import ReactMarkdown from "react-markdown";

export function Markdown(props: { text: string })  {
   return (
       <ReactMarkdown>{props.text}</ReactMarkdown>
   );
}
