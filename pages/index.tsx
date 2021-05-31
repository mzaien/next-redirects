import { useEffect } from "react";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  asPath?: string;
  status?: boolean;
  shallow?: boolean;
  fallBack?: string;
}

export function Redirects({
  href,
  status,
  fallBack,
  shallow,
  asPath,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      status !== undefined
        ? (router.prefetch(status === true ? href : `${fallBack}`),
          router.push(
            status === true ? href : fallBack ? fallBack : router.asPath,
            asPath,
            { shallow: shallow !== undefined ? shallow : false }
          ))
        : (router.prefetch(href),
          router.push(href, asPath, {
            shallow: shallow !== undefined ? shallow : false,
          }));
    }
  }, []);
  return null;
}
