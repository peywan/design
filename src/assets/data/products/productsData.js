/* mi 20 products */
/* Hardcoded data that will be used in this project to populate products-page, etc.  */
/* Five Main categories
Fordon
Elektronik
Hem och Hushåll
Hobby och Fritid
Kläder och Leksaker
*/
/* Subcategories
Fordon: Cyklar och mopeder (3) > Bilar (2) > Båtar > Reservdelar > Övrigt.
Elektronik: TV och Video (5)> Dator och tillbehör (1)> Telefoner > Hifi och Musikspelare > Övrigt.
Hem och Hushåll: Möbler (10)> Vitvaror (4)> Verktyg, Övrigt
Hobby och Fritid: Sport > Musik > Film > Böcker > Spel > Övrigt
Kläder och Leksaker: Herrkläder > Damkläder > Leksaker och barnartiklar > Övrigt
*/

import image from "../../images/productImages/tvattmaskin_1.jpg";

const products = [
  {
    id: "a9390fc8-62cb-11ed-9b6a-0242ac120002",
    title: "Tvättmaskin",
    img: image,
    dateCreated: "2022-10-19",
    textContent: "till salu!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Hem & Hushåll",
    subCategory: "Vitvaror",
  },
  {
    id: "a93914b4-62cb-11ed-9b6a-0242ac120002",
    title: "Soffa",
    img: image,
    dateCreated: "2022-10-21",
    textContent: "till salu!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Hem & Hushåll",
    subCategory: "Möbler",
  },
  {
    id: "a9391626-62cb-11ed-9b6a-0242ac120002",
    title: "Hantlar 20kg",
    img: image,
    dateCreated: "2022-10-21",
    textContent: "till salu!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Hobby & Fritid",
    subCategory: "Sport",
  },
  {
    id: "a9391806-62cb-11ed-9b6a-0242ac120002",
    title: "Toyota A86",
    img: image,
    dateCreated: "2022-10-21",
    textContent: "till salu!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Fordon",
    subCategory: "Bilar",
  },

  {
    id: "a939195a-62cb-11ed-9b6a-0242ac120002",
    title: "Cykel",
    img: image,
    dateCreated: "2022-10-21",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat nemo nostrum rerum, recusandae cumque. Soluta, quis. Accusamus eos ratione facilis et quos dolorum dolores voluptatum ex provident culpa? Animi voluptatem sunt nesciunt quod possimus cupiditate amet laboriosam voluptas blanditiis, modi at fugit eum, recusandae rem eius quis aspernatur? Voluptates!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Fordon",
    subCategory: "Cyklar & Mopeder",
  },

  {
    id: "a9391f5e-62cb-11ed-9b6a-0242ac120002",
    title: "Bord IKEA",
    img: image,
    dateCreated: "2022-10-21",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat nemo nostrum rerum, recusandae cumque. Soluta, quis. Accusamus eos ratione facilis et quos dolorum dolores voluptatum ex provident culpa? Animi voluptatem sunt nesciunt quod possimus cupiditate amet laboriosam voluptas blanditiis, modi at fugit eum, recusandae rem eius quis aspernatur? Voluptates!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Hem & Hushåll",
    subCategory: "Möbler",
  },
  {
    id: "a93920ee-62cb-11ed-9b6a-0242ac120002",
    title: 'TV Samsung "44',
    img: image,
    dateCreated: "2022-10-21",
    textContent: "till salu!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Elektronik",
    subCategory: "TV & Video",
  },
  {
    id: "a93922d8-62cb-11ed-9b6a-0242ac120002",
    title: "MacBook Pro M2 2022",
    img: image,
    dateCreated: "2022-10-21",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat nemo nostrum rerum, recusandae cumque. Soluta, quis. Accusamus eos ratione facilis et quos dolorum dolores voluptatum ex provident culpa? Animi voluptatem sunt nesciunt quod possimus cupiditate amet laboriosam voluptas blanditiis, modi at fugit eum, recusandae rem eius quis aspernatur? Voluptates!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Elektronik",
    subCategory: "Dator & Tillbehör",
  },
  {
    id: "a939253a-62cb-11ed-9b6a-0242ac120002",
    title: "Kläder bebis Size 24",
    img: image,
    dateCreated: "2022-10-21",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat nemo nostrum rerum, recusandae cumque. Soluta, quis. Accusamus eos ratione facilis et quos dolorum dolores voluptatum ex provident culpa? Animi voluptatem sunt nesciunt quod possimus cupiditate amet laboriosam voluptas blanditiis, modi at fugit eum, recusandae rem eius quis aspernatur? Voluptates!",
    contactMail: "admin@werecycle.se",
    contactPhone: "076-xx-xxx-xx",
    user: "admin",
    mainCategory: "Kläder & Leksaker",
    subCategory: "Leksaker & Barnartiklar",
  },
];

export default products;
