# HTTP

## Status Codes

HTTP response status codes have the following categories:

### Information (1xx)

(Rarely used)

### Success (2xx)

- **`200 OK`**

  The operation is completed with the result included in the response. Cacheable.

### Redirection (3xx)

- **`301 Moved Permanently`**

  The url of the requested resource has been changed permanently with the new url included in the response. Cacheable.

- **`302 Found`**

  The url of the requested resource is changed temporarily with the new url included in the response. The new url may change in future so the original requested url should be used again. Not cacheable.

### Client Error (4xx)

- **`400 Bad Request`**

  The request format is invalid and will not be processed by the server. Not cacheable.

- **`401 Unauthorized`**

  The request did not provide any credentials when authentication is required. Not cacheable.

- **`403 Forbidden`**

  The request did provide credentials but does not have the right to access the resource. Not cacheable.

- **`404 Not Found`**

  The requested resource cannot be found. Cacheable.

- **`418 I'm a teapot`**

  The server refuses the attempt to brew coffee with a teapot. Not cacheable.

### Server Error (5xx)

- **`500 Internal Server Error`**

  The server has encountered an error that cannot be handled. Not cacheable.

- **`502 Bad Gateway`**

  The server serving as the gateway obtained an invalid response from the upstream server. Not cacheable.

- **`503 Service Unavailable`**

  The server is not ready to handle the request. Not cacheable.

- **`504 Gateway Timeout`**

  The server did not receive a response from the upstream server. Not cacheable.
