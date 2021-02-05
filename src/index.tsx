import { useEffect } from "react";
import { useRouter } from "next/router";

type nextRedirectsprop = {
  href: string;
  condition: boolean;
  fallBack?: string;
};

export default function NextRedirects({
  href,
  condition,
  fallBack,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    router.push(condition === true ? href : fallBack);
  }, [condition]);
  return null;
}
