# ⛔️ Please upgrade to V 2.0.0 and above ⛔️

- major changes for v2 instead of <NextRedirects/> you can use <Redirects/> 😆 for better DX

- Suppouted Preact in v2 so all next.js project can work with
  to install it
  ```zsh
  #using yarn
  yarn add Next-Redirects-preact
  #using npm
  npm i Next-Redirects-preact
  ```

# Next-Redirects-preact

Next-Redirects-preact is a small Redirect utility component for Next.js that has the ability to give fallback links for different conditions and with a small package size,that support Preact

## How to use Next-Redirects-preact

There is one component that can be used from the library , it can be used in two and hald ways

-1 If you have a switch or more than condition

```tsx
if (user.logedin) {
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

-2 Using Next-Redirects-preact component directry

```tsx
<Redirects href="/main" condition={auth.logedin} />
```

-2.5 you can also use it with a fallback link 😆

```tsx
<Redirects href="/main" condition={auth.logedin} fallback="/login" />
```

this is just and example you can use it for whatever usecases you can imagine 🛠
