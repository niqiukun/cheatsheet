# Storage

A web application can store data on the client side using either one of the web storage API (`sessionStorage` and `localStorage`), cookies, or in the memory of JavaScript runtime (e.g. Redux).

## Session Storage

- Separates data for each origin (different subdomains are considered different origins)
- Separates data for each browser tab even for the same origin
- Data is not automatically sent to the server
- Server cannot automatically set session storage data
- Data persists as long as the browser tab is open, across page refreshes
- Data gets cleared when the browser tab closes
- Maximum storage size is 5MB
- Not possible to listen to changes

:::note Note

Session storage may persist when the browser tab is closed and then restored using some browser features. This depends on the implementation of different browsers.

:::

## Local Storage

- Separates data for each origin (different subdomains are considered different origins)
- Same origin browser tabs share the data
- Data is not automatically sent to the server
- Server cannot automatically set local storage data
- Data persists forever unless cleared manually (clearing browser cache, for example)
- Maximum storage size is the same or more than session storage (adjustable)
- Not possible to listen to changes

:::note Note

`StorageEvent` only fires when data in the same storage is changed in another document (e.g. another tab, of course with the same origin). Hence it is not possible to directly listen to local storage changes within the same document.

:::

## JavaScript Runtime Memory

- Data does not persist, gets cleared when page closes / refreshes
- Great storage size
- Changes managed with frameworks like Redux, can be listened to

## Cookies

- Separates data for each host, can be sent to other hosts
- Data is automatically sent to the same host (or the domain specified by `Domain`, including subdomains, and the path specified by `Path`) in `Cookie` header (cookies with `Secure` are only sent via HTTPS)
- Server can automatically set cookies via `Set-Cookie` header
- JavaScript can read and set cookies (only ones without `HttpOnly` attribute)

## Indexed DB
