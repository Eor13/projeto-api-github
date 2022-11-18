import {getUser} from "../services/user"
import{getRepository} from "../services/repository.js"
import {getEvent} from "../services/event.js"
import {user} from "../objects/user.js"
import{screen} from "../objects/screen.js"

const searchBtn = document.querySelector("#btn-search")
const searchInput = document.querySelector("#input-search")

searchBtn.addEventListener('click', () =>{
    const userName = searchInput.value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

searchInput.addEventListener('keyup', (enter) =>{
    const userName = enter.target.value
    const key = enter.which || enter.keyCode
    const isEnterKeyPressed = key === 13
    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)

    }
})


function validateEmptyInput(userName){
    if(userName.length === 0){
        alert("Preencha o campo com o nome do usuário do GitHub")
        return true
    }
}

async function getUserData(userName){
    const userResponse = await getUser(userName)
    
    if( userResponse.message ==="Not Found"){
        screen.renderNotFound()
        return
    }
    
    const repositoriesResponse = await getRepository(userName)
    const eventResponse = await getEvent(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventResponse)
    screen.renderUser(user)
}


