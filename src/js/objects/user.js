const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName:'',
    repositories:[],
    setInfo(gitHubUser){//atribuir as os valores a propriedades
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}