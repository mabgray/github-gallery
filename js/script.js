//targeting where profile info goes
const profileInfo = document.querySelector(".overview");
const userName = "mabgray";


const myGitHubAPI = async function(){
    const mabInfo = await fetch(`https://api.github.com/users/${userName}`);
    const data = await mabInfo.json();
    console.log(data);
    displayGitHubData(data);
}

myGitHubAPI();

const displayGitHubData = function(data) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("user-info");
    newDiv.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Username:</strong> ${data.name}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;
    profileInfo.append(newDiv);
}