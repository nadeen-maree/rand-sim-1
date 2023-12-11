// BAD PRACTICE - not proper MVC. Should be separated to files.
const postModel = new post()

const render = function (todos) {
    $("#todos").empty()
    let source = $(`#post-container-template`).html()
    let template = Handlebars.compile(source)
    let HTMLToAdd = template({todos})
    $(`#todos`).append(HTMLToAdd)
}

const add = function () {
    postModel.addPost($("#todo-input").val())
    console.log(postModel.getPosts());
    render(postModel.getPosts())
}

$("#todos").on("click", "#checkIcon", function () {
    const id = $(this).closest(".todo").attr('id')    
    postModel.makeCompleted(id)
    render(postModel.getPosts())

})

$("#todos").on("click", ".fa-trash", function () {
    const id = $(this).closest(".todo").attr('id')
    console.log(id)
    postModel.removePost(id)
    render(postModel.getPosts())

})

