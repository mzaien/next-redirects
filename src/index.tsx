import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NextRedirects(
  href: string,
  condition?: boolean,
  fallBack?: string
) {
  const router = useRouter();
  if (condition !== undefined) {
    if (condition === true) {
      useEffect(() => {
        router.push(href);
      }, [condition]);
    } else {
      useEffect(() => {
        fallBack ? router.push(fallBack) : null;
      }, [condition]);
    }
  } else {
    useEffect(() => {
      router.push(href);
    }, []);
  }

  return null;
}
