import { useEffect, useState } from 'react';

export default function HtmlFromFile({ filePath }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((data) => setHtmlContent(data));
  }, [filePath]);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
