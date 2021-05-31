# Next-Redirects

<p align="center">
  <a href="https://www.npmjs.org/package/next-redirects">
    <img src="https://img.shields.io/npm/v/next-redirects/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/next-redirects">
    <img src="https://img.shields.io/npm/dm/next-redirects.svg" alt="Monthly download on NPM" />
  </a>
</p>

Next-Redirects is a small Redirect utility component for Next.js that can give fallback links for different conditions and with a small package size

## Features

- 🔥 Small and Fast
- 🛠 Fully supports esm
- 💜 supported Preact in v2 so all next.js project using Preact [Next-redirects-preact](https://www.npmjs.com/package/next-redirects-preact)

## How to install

```zsh
  #using yarn
  yarn add Next-Redirects
  #using npm
  npm i Next-Redirects
```

## How to use

There is one component that can be used, it can be used in more than one way

You can use all these props with `<Redirects>` component

| Prop     |                                                                usage                                                                | type                                                     |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------- |
| href     |                                                  The link you want to redirect to                                                   | String                                                   |
| status   |                                             The boolean that decides to redirect or not                                             | boolean                                                  |
| fallBack |                                       (optional) The Fallback link if the condition is false                                        | String                                                   |
| asPath   |                           (optional) The path mask if you want to show a different url than the real one                            | string                                                   |
| shallow  |            (optional) The shallow option in next router for [more info](https://nextjs.org/docs/routing/shallow-routing)            | boolean                                                  |
| query    | (optional) This props gives you the ability to send data with the direct you can access it via router.query.url on the other page | String, Number, Boolean as an array or as a single value |

```tsx
<Redirects href="/main" status={auth.loggedin} />
```

If you have a switch or more than the status

```tsx
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

This is just an example you can use it for whatever use cases you can imagine 🛠
