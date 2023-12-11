class post{
    constructor(){
        this.posts = []
        this._postIdCounter = 0
    }
    addPost(textF){
        let idF = this._postIdCounter+1 
        let array = ["low", "mid","high"]
        let randomPro= array[Math.floor(Math.random() * array.length)]
        let post = {id: "p"+idF, text: textF, priority:randomPro, complete:false}
        this.posts.push(post)
        this._postIdCounter++
        
    }
    removePost(postID){
        this.posts.splice(this.posts.findIndex(x => x.id === postID), 1);
        this._postIdCounter--
    }
    getPosts(){
        return this.posts
    }
    makeCompleted(postID){
        let WantedPost = this.posts.find((elem)=>elem.id == postID)
        WantedPost.complete = true
    }
    changePriority(postID, pro){
        let WantedPost = this.posts.find((elem)=>elem.id == postID)
        WantedPost.priority = pro
    }
}
