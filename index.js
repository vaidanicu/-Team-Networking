// fetch("teams.json")
//   .then((r) => {
//     return r.json();
//   })
//   .then((r) => {
//     console.log("r", r);
//   });

fetch("http://localhost:3000/teams-json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((r) => r.json())
  .then((teams) => {
    displayTeams(teams); // apelam functia
  });

function displayTeams(teams) {
  // map = transformare din json in string
  const teamsHtml = teams.map(
    (team) => `
    <tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
        <td>${team.name}</td>
        <td>${team.url}</td>
        <td></td>
    </tr>`
  );
  //adaugare in pagina
  document.querySelector("#teams tbody").innerHTML = teamsHtml.join("");
}

function onSubmit(e) {
  e.preventDefault();
  console.warn("submit", e);
  fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      promotion: promotion.value,
      members: members.value,
      name: name1.value,
      url: url.value,
    }),
  })
    .then((r) => r.json())
    .then((status) => {
      console.warn("status", status.success, status.id);
      if (status.success) {
        window.location.reload();
      }
    });
}

// functia a rol de a face lagaturi intre evenimente.

function initEvents() {
  const form = document.getElementById("editForm");
  form.addEventListener("submit", onSubmit);
}

initEvents();
