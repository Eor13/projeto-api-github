import { baseUrl, repositoryQuantity } from "../variables.js"


async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoryQuantity}`)
    return  await response.json()
}

export{getEvent}