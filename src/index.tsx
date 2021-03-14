import { useEffect } from "react";
import { useRouter } from "next/router";

export interface nextRedirectsprop {
  href: string;
  status?: boolean;
  fallBack?: string;
}

export function Redirects({ href, status, fallBack }: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch(href);
  }, []);
  fallBack !== undefined
    ? useEffect(() => {
        router.prefetch(href);
      }, [])
    : null;
  useEffect(() => {
    status !== undefined
      ? router.push(
          status === true ? href : fallBack ? fallBack : router.asPath
        )
      : router.push(href);
  }, [status]);
  return null;
}
