export default eventHandler((event) => {
  setHeader(
    event,
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  setHeader(event, "X-Frame-Options", "SAMEORIGIN");
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "Referrer-Policy", "strict-origin-when-cross-origin");
  setHeader(
    event,
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  setHeader(
    event,
    "Content-Security-Policy",
    // Объединённая CSP — если нужно, можешь её дополнить
    "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; frame-src https://www.youtube.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
  );
});
