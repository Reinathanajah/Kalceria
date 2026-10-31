import Image from "next/image";

/**
 * Smart responsive content image component.
 * Allows Next.js optimizer to downsample local static raster images to WebP/AVIF,
 * while safely preserving external URLs, animated GIFs, and SVGs as unoptimized.
 */
export default function ContentImage({ alt = "", loading = "lazy", unoptimized, ...props }) {
  if (props.src == null || props.src === "") {
    // Preserve the native empty-source behavior for incomplete API records.
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} loading={loading} {...props} />;
  }

  const srcStr = typeof props.src === "string" ? props.src : "";
  const isExternal = srcStr.startsWith("http://") || srcStr.startsWith("https://") || srcStr.startsWith("//");
  const isSvgOrGif = /\.svg($|\?)/i.test(srcStr) || /\.gif($|\?)/i.test(srcStr);
  const shouldUnoptimize = unoptimized ?? (isExternal || isSvgOrGif);

  return <Image alt={alt} unoptimized={shouldUnoptimize} loading={loading} {...props} />;
}
