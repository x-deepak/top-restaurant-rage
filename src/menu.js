import rajmaImg from "./rajma.png";
import biryaniImg from "./biryani.webp";
import halwaImg from "./gaajar_halwa.webp";


export const load_menu = function () {
    // Better! : could have created objects
    let dish_names = ["Rajma Chawal", "Biryani", "Gaajar Halwa"];
    let dish_images = [rajmaImg, biryaniImg, halwaImg];
    let rajma_desc = "Rajma is comfort food at its best. I like rajma best with simple jeera (cumin) rice.";
    let biryani_desc = "Chicken biryani is a delicious Pakistani/Indian rice dish that's typically reserved for special occasions such as weddings, parties, or holidays such as Ramadan. It has a lengthy preparation, but the work is definitely worth it. For biryani, basmati rice is the ideal variety to use.";
    let halwa_desc = "Served warm, gajar ka halwa (carrot halwa) is a sweet pudding of simmered carrots, milk, sugar, and cardamom. There are several types of halwa in South Asia and this carrot halwa is especially popular during both Diwali and Eid.";
    let dish_descriptions = [rajma_desc,biryani_desc,halwa_desc];

    let content = document.querySelector("#content");
    content.innerHTML = "";
    for(let i=0; i<3; i++){

        let div_dish_container = document.createElement("div");
        div_dish_container.classList.add("dish-container");

        let heading = document.createElement("h3");
        heading.innerText = dish_names[i];

        let img = document.createElement("img");
        img.src = dish_images[i];

        let desc_para = document.createElement("p");
        desc_para.innerText = dish_descriptions[i];


        div_dish_container.append(heading,img,desc_para);
        content.appendChild(div_dish_container);
    }
}