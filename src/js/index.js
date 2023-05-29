// li's
const optionsToTables = document.querySelectorAll(".option");
console.log(optionsToTables);

const optionSubtitle = document.querySelectorAll(".ladies-and-gentlemen");
console.log(optionSubtitle);

optionsToTables.forEach(function(option){
    // console.log(option);
    option.addEventListener("click", () => {
        const currentActiveOption = document.querySelector(".active");
        if(currentActiveOption){
            currentActiveOption.classList.remove("active");
        }
        option.classList.add("active");
    });
});

optionSubtitle.forEach(function(option){
    option.addEventListener("click", () => {
        const currentActiveLadiesGentlemen = document.querySelector(".show");
        if(currentActiveLadiesGentlemen){
            currentActiveLadiesGentlemen.classList.remove("show");
        };
        option.classList.add("show");
    })
});