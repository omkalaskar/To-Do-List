let input = document.getElementsByClassName("user_input")[0];
let btn = document.querySelector("button");
let tasks = document.getElementsByClassName("tasks")[0];
let img = ""

btn.addEventListener("click", taskmain);
input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        taskmain();
    }
});

function taskmain() {

    let user_inp = input.value;

    const div = document.createElement("div");
    div.className = "task";

    tasks.append(div);

    const text = document.createElement("h3");
    text.textContent = user_inp;
    text.setAttribute("name", user_inp);

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox"

    const bin = document.createElement("li");
    bin.className = "fa-solid fa-trash-can";
    bin.setAttribute("name", user_inp);


    const edit = document.createElement("li");
    edit.className = "fa-regular fa-pen-to-square";
    edit.setAttribute("name", user_inp)

    div.append(text);
    div.append(check);
    div.append(bin);
    div.append(edit);

    edit.addEventListener("click", () => {
        if (edit.getAttribute('name') === text.getAttribute('name')) {

            bin.style.display = "none";
            edit.style.display = "none";
            check.style.display = "none";
            text.style.display = "none";

            const new_inp = document.createElement("input");
            const tick = document.createElement("li");

            tick.className = "fa-solid fa-square-check";
            tick.style.fontStyle = "bold";
            new_inp.addEventListener('blur', () => {
                new_inp.focus();
            });
            div.prepend(tick);
            div.prepend(new_inp);
            new_inp.className = "newinpstyle";
            new_inp.value = text.textContent;
            new_inp.addEventListener("keydown", (event) => {
                if (event.key == "Enter") {
                        temp();
                    
                }
                
            })

            function temp(){
                text.textContent = new_inp.value;
                    text.style.display = "";
                    new_inp.style.display = "none";
                    tick.style.display = "none";
                    bin.style.display = "";
                    edit.style.display = "";
                    check.style.display = "";

            }

            tick.addEventListener("click",temp)

        }
    })

    bin.addEventListener("click", () => {
        if (bin.getAttribute('name') === text.getAttribute('name')) {

            div.style.display = "none";


        }
    })

    check.addEventListener('change', (event) => {
        if (event.target.checked) {
            text.classList.add("cut");

        } else {
            text.classList.remove("cut");
        }
    })
}

