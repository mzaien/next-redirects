import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

export type nextRedirectsprop = {
  href: string;
  asPath?: string;
  condition?: boolean;
  shallow?: boolean;
  fallBack?: string;
};

export function Redirects({
  href,
  condition,
  fallBack,
  shallow,
  asPath,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      condition !== undefined
        ? (router.prefetch(condition === true ? href : `${fallBack}`),
          router.push(
            condition === true ? href : fallBack ? fallBack : router.asPath,
            asPath,
            { shallow: shallow !== undefined ? shallow : false }
          ))
        : (router.prefetch(href),
          router.push(href, asPath, {
            shallow: shallow !== undefined ? shallow : false,
          }));
    }
  }, [condition]);
  return null;
}

export function serverRewrite(condition: boolean, url: string) {
  if (condition) {
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export function serverRedirect(
  condition: boolean,
  url: string,
  statusCode?: number
) {
  if (condition) {
    return NextResponse.redirect(url, statusCode);
  }
  return NextResponse.next();
}
