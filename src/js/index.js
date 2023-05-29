// li's
const optionsToTables = document.querySelectorAll(".option");
console.log(optionsToTables);

// h3's of the li
// const optionTitle = document.querySelectorAll(".optionTitle");
// console.log(optionTitle);

optionsToTables.forEach(function(option){
    // console.log(option);
    option.addEventListener("click", function() {
        const currentActiveOption = document.querySelector(".active");
        if(currentActiveOption){
            currentActiveOption.classList.remove("active")
        }
        option.classList.add("active");
    });
});