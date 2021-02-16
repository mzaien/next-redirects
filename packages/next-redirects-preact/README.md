# ⛔️ Please upgrade to V 1.9.0 and above ⛔️

# Next-Redirects-preact

Next-Redirects-preact is a small Redirect utility component for Next.js that has the ability to give fallback links for different conditions and with a small package size,that support Preact

## How to use Next-Redirects-preact

There is one component that can be used from the library , it can be used in two and hald ways

-1 If you have a switch or more than condition

```tsx
if (user.logedin) {
  <NextRedirects href="/Dashboard" />;
}
switch (condistionX) {
  case admin:
    <NextRedirects href="/Dashboard" />;
    break;
  case anonymous:
    <NextRedirects href="/Login" />;
    break;
  default:
    <NextRedirects href="/main" />;
}
```

-2 Using NextRedirects component directry

```tsx
<NextRedirects href="/main" condition={auth.logedin} />
```

-2.5 you can also use it with a fallback link 😆

```tsx
<NextRedirects href="/main" condition={auth.logedin} fallback="/login" />
```

this is just and example you can use it for whatever usecases you can imagine 🛠
