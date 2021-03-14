import { useEffect } from "react";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  status?: boolean;
  shallow?: boolean;
  fallBack?: string;
  asPath?: string;
}

export function Redirects({
  href,
  status,
  fallBack,
  shallow,
  asPath,
}: nextRedirectsprop) {
  const router = useRouter();
  status !== undefined && status === true
    ? useEffect(() => {
        router.prefetch(href);
      }, [])
    : useEffect(() => {
        router.prefetch(`${fallBack}`);
      }, []);
  useEffect(() => {
    status !== undefined
      ? router.push(
          status === true ? href : fallBack ? fallBack : router.asPath,
          asPath === undefined ? undefined : status === true ? href : fallBack,
          { shallow: shallow !== undefined ? shallow : false }
        )
      : router.push(href, href, {
          shallow: shallow !== undefined ? shallow : false,
        });
  }, [status]);
  return null;
}
