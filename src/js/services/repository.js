import { baseUrl,repositoryQuantaty } from "../variables.js"


async function getRepository(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoryQuantaty}`)
    return  await response.json()
}

export{getRepository}