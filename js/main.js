const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ca96d8becmsh5953ec3291f5a01p125f9djsn4dcbe2c7ba1d",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIPInfo = (ip) => {
  return fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    OPTIONS
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};

const $form = document.querySelector("#form");
const $input = document.querySelector("#text");
const $submit = document.querySelector("#submit");
const $results = document.querySelector("#results");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { value } = $input;

  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIPInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
