import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NextRedirects(
  href: string,
  condition: boolean
  // fallBack: string
) {
  const router = useRouter();
  useEffect(() => {
    router.push(href);
  }, [condition]);
  return null;
}
