import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonical?: string;
  jsonLd?: object | object[];
}

export function SEO({ title, description, ogTitle, ogDescription, keywords, canonical, jsonLd }: SEOProps) {
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
}
