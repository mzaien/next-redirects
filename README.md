# Next-Redirects

<p align="center">
  <a href="https://www.npmjs.org/package/next-redirects">
    <img src="https://img.shields.io/npm/v/next-redirects/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/next-redirects">
    <img src="https://img.shields.io/npm/dm/next-redirects.svg" alt="Monthly download on NPM" />
  </a>
</p>

Next-Redirects is a small Redirect utility for client & serve side for Next.js, with a small package size

<hr/>

⚠️ version **3.x** and above is needs next.js **v12** at least ⚠️

## Features

- ⚛️ Client and Server side
- 🔥 Small and Fast
- 🛠 Fully supports esm
- 💜 supported Preact so all next.js project using Preact [Next-redirects-preact](https://www.npmjs.com/package/next-redirects-preact)

## How to install

```zsh
  #using yarn
  yarn add Next-Redirects
  #using npm
  npm i Next-Redirects
```

## How to use

### For the client side, you can use the following code

You can use all these props with `<Redirects>` component

| Prop      |                                                     usage                                                     | type    |
| :-------- | :-----------------------------------------------------------------------------------------------------------: | ------- |
| href      |                                       The link you want to redirect to                                        | String  |
| condition |                                  The boolean that decides to redirect or not                                  | boolean |
| fallBack  |                            (optional) The Fallback link if the condition is false                             | String  |
| asPath    |                (optional) The path mask if you want to show a different url than the real one                 | string  |
| shallow   | (optional) The shallow option in next router for [more info](https://nextjs.org/docs/routing/shallow-routing) | boolean |

```tsx
//X.tsx
import { Redirects } from "next-redirects";
<Redirects href="/main" condition={auth.loggedin} />;
```

If you have a switch or more than the condition

```tsx
//X.tsx
import { Redirects } from "next-redirects";
if (user.loggedin) {
  <Redirects href="/Dashboard" />;
}
switch (condistionX) {
  case admin:
    <Redirects href="/Dashboard" />;
    break;
  case anonymous:
    <Redirects href="/Login" />;
    break;
  default:
    <Redirects href="/main" />;
}
```

### For the server side, you can use the following code

You can use all these props with `serverRedirect()` funcation

| Prop      |                    usage                    | type    |
| :-------- | :-----------------------------------------: | ------- |
| condition | The boolean that decides to redirect or not | boolean |
| url       |      The link you want to redirect to       | String  |

```tsx
//inside _middleware.ts
import { serverRedirect } from "next-redirects";
export async function middleware(req: NextRequest) {
  const admin = req.cookies.role == "admin";
  return serverRedirect(admin, "/Upload");
}
```

This is just an example you can use it for whatever use cases you can imagine 🛠
