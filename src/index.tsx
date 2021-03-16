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
  status !== undefined && status === true;
  useEffect(() => {
    status !== undefined
      ? (router.push(
          status === true ? href : fallBack ? fallBack : router.asPath,
          asPath,
          { shallow: shallow !== undefined ? shallow : false }
        ),
        router.prefetch(status === true ? href : `${fallBack}`))
      : (router.push(href, asPath, {
          shallow: shallow !== undefined ? shallow : false,
        }),
        router.prefetch(href));
  }, [status]);
  return null;
}
