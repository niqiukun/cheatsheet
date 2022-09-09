# Caching

## Types of Caching

### Private Caches

Private caches refer to caches that are private to a specific user and a client (such as a browser). Another user, or another client would not be able to access the cache. It can be set using the following response header:

```
Cache-Control: private
```

Note that response of requests with `Authorization` header cannot be cached (unless with `Cache-Control: public`).

### Shared Cache

A shared cache exists between the origin server and clients, usually in proxies or CDNs. Shared caches can be accessed by all users and clients.

## Cache Control

```
Cache-Control: max-age=3600
```

Cache expires after 1 hour, after which revalidation is required to use the cache. Expired caches can be used when offline without revalidation. To prevent this, use `Cache-Control: max-age=xxx, must-revalidate`.

```
Cache-Control: no-store
```

Do not store cache. However, existing cache stored remains unaffected.

```
Cache-Control: private
```

Do not share the cache with others.

```
Cache-Control: no-cache
```

Cache can be used but must always be revalidated with the server.

## Validation

Validation is for the client to check with the server whether a cache can be reused. There are two ways for validation:

### If-Modified-Since

In the server response, the server gives a `Last-Modified` value:

```
HTTP/1.1 200 OK
...
Date: YYYYYY
Last-Modified: XXXXXX
Cache-Control: max-age=3600
```

Then, after the cache has expired, the client sends the following for validation:

```
GET /index.html HTTP/1.1
...
If-Modified-Since: XXXXXX
```

The time should equal to the `Last-Modified` field in the previous response. If there has not been any modification since the specified time, the server responds `304 Not Modified` and the client can safely reuse the cache.

```
HTTP/1.1 304 Not Modified
...
Date: ZZZZZZ
Last-Modified: XXXXXX
Cache-Control: max-age=3600
```

### If-None-Match

In the server response, the server gives an `ETag` value, which is typically a hash or a version number based on the content.

```
HTTP/1.1 200 OK
...
Date: YYYYYY
ETag: "XXXXXX"
Cache-Control: max-age=3600
```

Then, after the cache has expired, the client sends the following for validation:

```
GET /index.html HTTP/1.1
...
If-None-Match: "XXXXXX"
```

The tag should equal to the `ETag` field in the previous response. If there has not been any modification and the `ETag` did not change, the server responds `304 Not Modified` and the client can safely reuse the cache.

```
HTTP/1.1 304 Not Modified
...
Date: ZZZZZZ
ETag: "XXXXXX"
Cache-Control: max-age=3600
```
