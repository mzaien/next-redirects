# Next-Redirects
Redirect compoent for Next.js

**## How to use Next-redirects

There is one component that can be used from the library , it can be used in two ways 


-1  If you have a  switch or more than condition

```jsx
if(user.logedin){
<NextRedirects href="/Dashboard" />
}
switch(condistionX) {
  case admin:
    <NextRedirects href="/Dashboard" />
    break;
  case anonymous:
    <NextRedirects href="/Login" />
    break;
  default:
     <NextRedirects href="/main" />
}
```

-2 Using NextRedirects component directry 

```tsx
<NextRedirects href="/main" condition={auth.logedin}  />
```

-2.1 you can also use it with a fallback link 😆

```tsx
<NextRedirects href="/main" condition={auth.logedin} fallback="/login"  />
```

thats is just and example you can use it for whatever condistion you **want ** 🥳 
