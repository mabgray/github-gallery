//targeting where profile info goes

const profileInfo = document.querySelector(".overview");
const userName = "mabgray";
const repoDisplay = document.querySelector(".repo-list");


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
    myGitRepos();
}


const myGitRepos = async function(){

  const fetchRepos = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated&per_page=100`);

  
  const myData = await fetchRepos.json();
 
  showRepos(myData);

}


const showRepos = async function(repos){
  for(const repo of repos){
    const item = document.createElement("li");
    item.classList.add("repo");
    item.innerHTML = `<h3>${repo.name}</h3>`;
    repoDisplay.append(item);

  }

}