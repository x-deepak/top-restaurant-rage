
export const load_about = function(){
    let content = document.querySelector("#content");
    content.innerText = "";

    let heading = document.createElement("h1");
    heading.innerText = "About Us";

    let para_body = document.createElement("p");
    para_body.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, velit dignissimos, fugiat blanditiis illum";

    content.append(heading,para_body);
}