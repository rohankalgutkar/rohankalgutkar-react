export default function tag() {
  const origin = window.origin;
  const referrer = document.referrer;

  fetch("https://poc-analytics-production.up.railway.app/tag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ origin, referrer }),
  });
}
