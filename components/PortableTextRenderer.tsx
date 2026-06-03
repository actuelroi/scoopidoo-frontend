// components/PortableTextRenderer.tsx

import { PortableText } from "@portabletext/react";

const components = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-gray-700">{children}</li>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="leading-relaxed">{children}</p>
    ),
  },
};

export default function PortableTextRenderer({
  value,
}: {
  value: any;
}) {
  return <PortableText value={value} components={components} />;
}