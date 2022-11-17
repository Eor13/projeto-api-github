import { baseUrl,repositoryQuantaty} from "/src/js/variables.js"


async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoryQuantaty}`)
    return  await response.json()
}

export{getEvent}