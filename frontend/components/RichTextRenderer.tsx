import Image from "next/image";
import React from "react";

interface Block {
  type: "paragraph" | "heading" | "list" | "image";
  level?: number;
  format?: "ordered" | "unordered";
  url?: string;
  alt?: string;
  children: { text: string }[];
}

interface RichTextRendererProps {
  content?: string | Block[];
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  if (!content) return null;

  if (typeof content === "string") {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  if (Array.isArray(content)) {
    return (
      <div className="prose max-w-none">
        {content.map((block, index) => {
          if (!block || !block.type) return null;

          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className="mb-4">
                  {block.children?.[0]?.text || ""}
                </p>
              );

            case "heading":
              return React.createElement(
                `h${block.level || 2}`,
                { key: index, className: "font-bold text-xl my-4" },
                block.children?.[0]?.text || ""
              );

            case "list":
              return block.format === "ordered" ? (
                <ol key={index} className="list-decimal pl-5">
                  {block.children?.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ol>
              ) : (
                <ul key={index} className="list-disc pl-5">
                  {block.children?.map((item, i) => (
                    <li key={i}>{item.text}</li>
                  ))}
                </ul>
              );

            case "image":
              return (
                <Image
                  key={index}
                  src={block.url || ""}
                  alt={block.alt || "Image"}
                  className="w-full my-4 rounded-lg"
                />
              );

            default:
              return null;
          }
        })}
      </div>
    );
  }

  return <p className="text-red-500">⚠️ Unsupported content format</p>;
};

export default RichTextRenderer;
