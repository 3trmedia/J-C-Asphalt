export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', name, params);
  } catch {
    // gtag can throw under some blocker/consent configurations; never break the caller.
  }
}
