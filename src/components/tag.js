export default function tag(event) {
  const origin = window.origin;
  const referrer = document.referrer;
  const timestamp = Date.now();

  const tagBody = { ...event, origin, timestamp, referrer };
  fetch("https://poc-analytics-production.up.railway.app/tag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tagBody),
  });
}
