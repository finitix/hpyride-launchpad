import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords = "hpyride, car pooling India, ride sharing India, driver pooling, ride booking app, car rental India",
  canonicalUrl,
  ogImage = "https://hpyride.com/og-image.jpg",
  ogType = "website",
  noIndex = false,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string, attribute = "content") => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement("meta");
        const [attrName, attrValue] = selector.replace("meta[", "").replace("]", "").split("=");
        element.setAttribute(attrName, attrValue.replace(/"/g, ""));
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update standard meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[name="robots"]', noIndex ? "noindex, nofollow" : "index, follow");

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:type"]', ogType);
    updateMetaTag('meta[property="og:image"]', ogImage);
    if (canonicalUrl) {
      updateMetaTag('meta[property="og:url"]', canonicalUrl);
    }

    // Update Twitter tags
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', ogImage);

    // Update canonical link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.href = canonicalUrl;
      } else {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        canonicalLink.href = canonicalUrl;
        document.head.appendChild(canonicalLink);
      }
    }

    // Cleanup function to reset to default on unmount
    return () => {
      document.title = "HpyRide - Car Pooling, Ride Sharing & Car Rental in India";
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, noIndex]);

  return null;
};

export default SEO;
