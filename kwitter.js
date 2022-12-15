function addUser()
{
    userName = document.getElementById("user_name").value
    localStorage.setItem("userName" , userName)
    window.location = "kwitter_room.html"
}