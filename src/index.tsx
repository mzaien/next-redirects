import { useEffect } from "react";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  status?: boolean;
  shallow?: boolean;
  fallBack?: string;
}

export function Redirects({
  href,
  status,
  fallBack,
  shallow,
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
          undefined,
          { shallow: shallow || false }
        )
      : router.push(href, undefined, { shallow: shallow || false });
  }, [status]);
  return null;
}
