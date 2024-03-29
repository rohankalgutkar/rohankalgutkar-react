export default function tag(event) {
  const sid = sessionStorage.getItem("sid");
  const origin = window.origin;
  const docReferrer = document.referrer;
  const timestamp = Date.now();
  const ua = navigator.userAgentData || "";

  const tagBody = { ...event, origin, timestamp, docReferrer, sid, ua };
  fetch("https://rk-analytics-dashboard.up.railway.app/tag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tagBody),
  });
}
