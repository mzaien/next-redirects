import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
  status !== undefined && status === true
    ? useEffect(() => {
        router.prefetch(href);
      }, [status])
    : useEffect(() => {
        router.prefetch(`${fallBack}`);
      }, [status]);
  useEffect(() => {
    status !== undefined
      ? router.push(
          status === true ? href : fallBack ? fallBack : router.asPath,
          asPath,
          { shallow: shallow !== undefined ? shallow : false }
        )
      : router.push(href, asPath, {
          shallow: shallow !== undefined ? shallow : false,
        });
  }, [status]);
  return (
    <Head>
      {/* Redirects with meta refresh if no JavaScript support */}
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${href}`} />
      </noscript>
    </Head>
  );
}
