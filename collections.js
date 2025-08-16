var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

sidenav.addEventListener("click", function () {
    sidenav.style.display = "none"
})


var productContainer = document.getElementById("pc")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (let count = 0; count < productlist.length; count++) {
        var productName = productlist[count].querySelector("h3").textContent.toUpperCase()

        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})

var checkboxes = document.getElementsByName("check");
var productContainer = document.getElementById("pc");
var productList = productContainer.querySelectorAll("div");

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
        var selected = [];
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                selected.push(checkboxes[j].value.toUpperCase());
            }
        }

        for (let k = 0; k < productList.length; k++) {
            var productName = productList[k].querySelector("h3").textContent.toUpperCase();

            if (selected.length === 0) {
                productList[k].style.display = "block";
            } else {

                var match = selected.some(val => productName.includes(val));
                productList[k].style.display = match ? "block" : "none";
            }
        }
    });
}

var arrivalFilters = document.getElementsByName("arrival");
var productContainer = document.getElementById("pc");
var productList = productContainer.querySelectorAll("div");

for (let i = 0; i < arrivalFilters.length; i++) {
    arrivalFilters[i].addEventListener("change", function () {
        // Collect all checked values
        let checkedValues = [];
        for (let j = 0; j < arrivalFilters.length; j++) {
            if (arrivalFilters[j].checked) {
                checkedValues.push(arrivalFilters[j].value.toLowerCase()); // "new" or "old"
            }
        }

        for (let k = 0; k < productList.length; k++) {
            let img = productList[k].querySelector("img");
            if (!img) continue;

            let src = img.getAttribute("src");

            if (checkedValues.length === 0) {
                productList[k].style.display = "block";
            } else {
                let isNew = src.includes("na");
                let isOld = src.includes("mw");

                let shouldShow =
                    (checkedValues.includes("new") && isNew) ||
                    (checkedValues.includes("old") && isOld);

                productList[k].style.display = shouldShow ? "block" : "none";
            }
        }
    });
}

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