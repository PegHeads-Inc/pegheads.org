import Head from "next/head";

export interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
}

export default function SEO({ title, description, keywords, url, image }: SEOProps) {
  return (
    <Head>
      <title key="title">{title}</title>
      <link rel="icon" href={image} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:sitename" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
    </Head>
  );
}

SEO.defaultProps = {
  title: "Home | PegHeads.org",
  description: "PegHeads.org is an AI platform that helps you learn how to develop and train AI to automate 3D animation through open source code.",
  keywords: "ai, ml, deeplearning, blockchain, learning, opensource, inft, inftgenerator, nfts, sol, solana, eth, ethereum, crypto, pegcoin, botpeg, pegheads, pegheads.org, pegheads.ai",
  url: "https://pegheads.org/",
  image: "/static/images/botpeg.jpg",
};