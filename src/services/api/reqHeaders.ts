export function reqHeaders(
    method: 'GET' | 'POST',
    headers?: HeadersInit_,
    body?: BodyInit_,
    credentials?: RequestCredentials_
): RequestInit {
    return {
        method,
        headers,
        body,
        credentials
    }
}