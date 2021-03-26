import { useEffect } from "react";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  asPath?: string;
  status?: boolean;
  shallow?: boolean;
  fallBack?: string;
  query?:
    | string
    | number
    | boolean
    | readonly string[]
    | readonly number[]
    | readonly boolean[]
    | null
    | undefined;
}

export function Redirects({
  href,
  status,
  fallBack,
  shallow,
  asPath,
  query,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      status !== undefined
        ? (router.prefetch(status === true ? href : `${fallBack}`),
          router.push(
            {
              pathname:
                status === true ? href : fallBack ? fallBack : router.asPath,
              query: { state: query },
            },
            asPath,
            { shallow: shallow !== undefined ? shallow : false }
          ))
        : (router.prefetch(href),
          router.push({ pathname: href, query: { state: query } }, asPath, {
            shallow: shallow !== undefined ? shallow : false,
          }));
    }
  }, [status]);
  return null;
}
