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
        <td><a>✖️</a></td>
    </tr>`
  );
  //adaugare in pagina
  document.querySelector("#teams tbody").innerHTML = teamsHtml.join("");
}

function onSubmit(e) {
  e.preventDefault();
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
      console.info("status", status.success, status.id);
      if (status.success) {
        window.location.reload();
      }
    });
}

function removeTeamRequest(id) {
  fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
}

function initEvent() {
  const form = document.getElementById("editForm");
  form.addEventListener("submit", onSubmit);
  document.querySelector("tbody").addEventListener("click");
}

initEvent();
