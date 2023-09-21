export const fetcher = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => fetch(input, init).then((res) => res.json());
