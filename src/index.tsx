import { useEffect, FC } from "react";
import { useRouter } from "next/router";

export type NextRedirectsProps = {
  /**
   * URL to your redirection.
   * And the boolean the decides
   * & fallback link for false condition
   */
  href: string;
  fallBack?: string;
  condition?: boolean;
};

const NextRedirects: FC<NextRedirectsProps> = ({
  href,
  condition,
  fallBack
}) => {
  const router = useRouter();
  if (condition) {
    useEffect(() => {
      router.push(href);
    }, [condition]);
  } else {
    useEffect(() => {
      router.push(fallBack);
    }, [condition]);
  }
  return null;
};
export default NextRedirects;
