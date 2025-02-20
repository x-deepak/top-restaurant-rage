
import restImg from "./rest.jpeg";

export const load_home = function(){
    let content = document.querySelector("#content");
    content.innerHTML = "";

    let heading = document.createElement("h1");
    heading.innerHTML = "Peaceful Restaurant";

    let img = document.createElement("img");
    img.src= restImg;

    let para = document.createElement("p");
    para.classList.add("home-para");
    para.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, velit dignissimos, fugiat blanditiis illum\
            commodi veniam consequatur sequi, explicabo voluptatibus rem praesentium. Nihil, pariatur magnam perferendis\
            necessitatibus iure et odio omnis odit repellendus error a repudiandae quidem, quibusdam iste laborum! Optio\
            voluptatibus atque accusantium error officiis, quae esse. Ea, aperiam."
    
    content.append(heading,img,para);
}