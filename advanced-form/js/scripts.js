// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);
// console.log(myInfo.get("first"));
// console.log(myInfo.get("last"));
// console.log(myInfo.get("email"));
// console.log(myInfo.get("phone"));
// console.log(myInfo.get("ordinance"));
// console.log(myInfo.get("date"));
// console.log(myInfo.get("location"));

document.querySelector('#results').innerHTML = `<p>Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Email: ${myInfo.get("email")}</p>
<p>Phone: ${myInfo.get("phone")}</p>
<p>Ordinance: ${myInfo.get("ordinance")}</p>
<p>Date: ${myInfo.get("date")}</p>
<p>Location: ${myInfo.get("location")}</p>`;