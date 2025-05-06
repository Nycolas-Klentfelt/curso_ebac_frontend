document.addEventListener('DOMContentLoaded',function () {
    const profileAvatar = document.getElementById('profile-avatar');
    const profileName = document.getElementById('profile-name');
    const profileUsername = document.getElementById('profile-username');
    const numberRepository = document.getElementById('number-repository');
    const numberFollowers = document.getElementById('number-followers');
    const numberFollowings = document.getElementById('number-following');
    const profileLink = document.getElementById('profile-link');

    fetch('https://api.github.com/users/nycolas-klentfelt')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            profileAvatar.src = json.avatar_url;
            profileName.innerText = json.name;
            profileUsername.innerText = json.login;
            numberRepository.innerText = json.public_repos;
            numberFollowers.innerText = json.followers;
            numberFollowings.innerText = json.following;
            profileLink.href = json.html_url;
        });
        
})