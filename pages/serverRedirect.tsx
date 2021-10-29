import { NextResponse, NextRequest } from "next/server";
type serverRedirectProps = {
  req: NextRequest;
  tokenName: string;
  url: string;
  statusCode?: number;
};
export function serverRedirect({
  req,
  tokenName,
  url,
  statusCode,
}: serverRedirectProps) {
  const token = req.cookies[tokenName];
  if (!token) {
    return NextResponse.redirect(url, statusCode);
  }
  return NextResponse.next();
}
