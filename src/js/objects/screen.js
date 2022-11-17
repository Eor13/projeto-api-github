const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML =`<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                                        <div class="data">
                                            <h1>${user.name ?? `Não possui nome cadastrado`}</h1>
                                            <p>${user.bio ?? `Não possui bio cadastrado`}</p>
                                            <p >👥<strong>${user.followers}</strong> Followers | 👥<strong>${user.following}</strong> Following</p>
                                        </div
                                        
                                    </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => {
            repositoriesItens +=`<section>
                                    <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                                    <div>
                                        <i>🍴 ${repo.forks_count} </i>
                                        <i>⭐ ${repo.stargazers_count} </i>
                                        <i>👀 ${repo.watchers_count} </i>
                                        <i>📂 ${repo.language ?? "Sem linguagem definida"} </i>
                                    </div>
                                </section>`
        })
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
        
        let eventsItens = ""
        user.events.forEach(event =>{
            if(event.payload.commits === undefined){
                eventsItens += `<li class="notMessage"><h3>${event.repo.name} </h3> <p> - no commit</p></li>`
            }else{
                eventsItens += `<li class="message"><h3>${event.repo.name} </h3> <p> - ${event.payload.commits[0].message}</p></li>`
            }
        })

        
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class=" events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado.</h3>"
    }
}

export {screen}