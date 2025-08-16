var sidenav1 = document.getElementById("sidenav1")
var menuicon1 = document.getElementById("menuicon1")
var closenav1 = document.getElementById("closenav1")

menuicon1.addEventListener("click", function()
{
    sidenav1.style.right=0
})

closenav1.addEventListener("click", function()
{
    sidenav1.style.right="-30%"
})