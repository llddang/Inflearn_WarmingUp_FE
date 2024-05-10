import { Octokit } from "https://esm.sh/octokit";

const octokit = new Octokit({
  auth: 'insert your github token'
})

const profileResult = document.querySelector('.ProfileResult');
const lastRepo = document.querySelector('.LastRepo');

const alertArea = document.querySelector('.alertArea');

let goProfileHref = "";
const goProfileBtn = document.querySelector('#goProfileBtn');
goProfileBtn.addEventListener('click', () => {
  window.open(goProfileHref);
})

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
  const username = e.target.value;
  
  getUser(username)
    .then((response) => {
      createProfile(response.data);
    })
    .catch((e) => {
      console.log("error getUser");
      
      const div = document.createElement('div');
      div.setAttribute('class', 'alertToast');
      div.innerText = "User Not Found";
      alertArea.appendChild(div);

      setTimeout(() => {div.remove()}, 1000);
    })
  
  getLastRepo(username)
    .then((response) => {
      createLastRepo(response.data);
    })
    .catch((e) => {
      console.log("error getLastRepo");
    })
})


async function getUser(name) {
  const response = await octokit.request('GET /users/{username}', {
    username: name,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return response;
}

async function getLastRepo(name) {
  const response = await octokit.request('GET /users/{username}/repos', {
    username: name,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return response;
}

const createProfile = (data) => {
  profileResult.style.display = 'flex';

  const profileImg = document.querySelector('#profileImg');
  profileImg.src = data.avatar_url;
  goProfileHref = data.html_url;

  const repoCount = document.querySelector('#repoCount');
  const gistCount = document.querySelector('#gistCount');
  const followers = document.querySelector('#followers');
  const following = document.querySelector('#following');

  const company = document.querySelector('#company');
  const blog = document.querySelector('#blog');
  const location = document.querySelector('#location');
  const member = document.querySelector('#member');

  repoCount.textContent = "Public Repos: " + data.public_repos;
  gistCount.textContent = "Public Gists: " + data.public_gists;
  followers.textContent = "Followers: " + data.followers;
  following.textContent = "Following: " + data.following;

  company.textContent = data.company ? data.company : 'empty';
  blog.textContent = data.blog ? data.blog : 'empty';
  location.textContent = data.location ? data.location : 'empty';
  member.textContent = data.created_at? data.created_at : 'empty';
}

const createLastRepo = (data) => {
  lastRepo.style.display = 'block';

  const repoLists = document.querySelector('.repoLists'); 
  repoLists.innerHTML = '';
  data.map((repo) => {
    const repoE = document.createElement('div');
    repoE.className = 'repo';

    const repoTitle = document.createElement('a');
    repoTitle.innerText = repo.name;
    repoTitle.setAttribute('href', repo.html_url);

    const repoExtra = document.createElement('ul');
    repoExtra.className = 'buttonList';
    repoExtra.innerHTML += `<li>Stars: ${repo.stargazers_count}</li>`;
    repoExtra.innerHTML += `<li>Watchers: ${repo.watchers_count}</li>`;
    repoExtra.innerHTML += `<li>Forks: ${repo.forks_count}</li>`;

    repoE.appendChild(repoTitle);
    repoE.appendChild(repoExtra);

    repoLists.appendChild(repoE);
  })
}