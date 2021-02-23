import { useEffect } from "react";
import { useRouter } from "next/router";

interface nextRedirectsprop {
  href: string;
  status?: boolean;
  fallBack?: string;
}

export default function Redirects({
  href,
  status,
  fallBack,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    status !== undefined
      ? router.replace(
          status === true ? href : fallBack ? fallBack : router.asPath
        )
      : router.replace(href);
  }, [status]);
  return null;
}
