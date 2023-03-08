// fetch("teams.json")
//   .then((r) => {
//     return r.json();
//   })
//   .then((r) => {
//     console.log("r", r);
//   });

fetch("teams.json")
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
    </tr>`
  );
  //adaugare in pagina
  document.querySelector("#teams tbody").innerHTML = teamsHtml.join("");
  console.log("display", teamsHtml, teams);
}
