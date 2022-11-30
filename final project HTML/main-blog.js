const bar = document.getElementById("bars");
const closing = document.getElementById("barssClose");
const MyList = document.getElementById("list");
bar.addEventListener("click", () => {
    bar.classList.add("hide");
    closing.classList.remove("hide");
    MyList.classList.remove("hide");
})

closing.addEventListener("click", () => {
    closing.classList.add("hide");
    bar.classList.remove("hide");
    MyList.classList.add("hide")
})