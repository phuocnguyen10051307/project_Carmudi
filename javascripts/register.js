const exit = document.getElementById("exit");

exit.addEventListener("click", function () {
    document.querySelector(".register").style.display = "none";
});


const checkInput = ()=>{
    const dataInput = document.getElementById("disabledTextInput");
    const btnsubmit = document.getElementById("btnSubmit");

    if (dataInput.value.length == 10) {
        btnsubmit.classList.remove("btn-secondary");
        btnsubmit.classList.add("btn-primary");
    } else {
        btnsubmit.classList.remove("btn-primary");
        btnsubmit.classList.add("btn-secondary")
    }
}
