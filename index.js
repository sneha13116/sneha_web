const products = [
  {
    name: "Auto Face Tracking",
    price: "Rs. 4,200",
    image: "products/face tracking.jpg",
    ratings:"4",
    description: [
      "360° auto rotation",
      "Face recognition technology",
      "Rechargeable battery"
    ]
  },
  {
    name: "CCTV Camera",
    price: "Rs. 6,500",
    image: "products/cctv.jpg",
    ratings:"5",
    description: [
      "1080p HD night vision",
      "Motion detection",
      "Cloud storage support"
    ]

  },
  {
    name: "GAX-N8 Recording Sound Card",
    price: "Rs. 5,200",
    image: "products/gax n8 recording sound card.jpg",
    ratings:"3",
    description:[
      "Multi-effect sound card",
      "Bluetooth compatible",
      "Supports live streaming"

    ]

  },
  {
    name: "Maono S22 LTE USB Audio",
    price: "Rs. 12,200",
    image: "products/maono ps22 lte usb.jpg",
    ratings:"5",
    description:[
      "Studio quality and audio",
      "USB and LTE support",
      "clear bass boost"
    ]
  },
  {
    name: "Portable Bluetooth Speaker",
    price: "Rs. 2,500",
    image: "products/portable bluetooth speaker.jpg",
    ratings:"4",
    description:[
      "10 hours playtime",
      "Water-resistant",
      "Loud stereo sound"
    ]
  },
  {
    name: "USB External Sound Card",
    price: "Rs. 3,500",
    image: "products/usb external sound card.jpg",
    ratings:"5",
    description:[
      "Plug and play",
      "3D stereo sound",
      "Compatible with all OS"
    ]
  },
  {
    name: "V9 Live Sound Card",
    price: "Rs. 5,500",
    image: "products/v9 live sound card.jpg",
    ratings:"5",
    description:[
      "Live karaoke support",
      "Multiple sound effects",
      "Built-in battery"
    ]
  },
  {
    name: "V9 Sound Card Live Karaoke",
    price: "Rs. 7,500",
    image: "products/v9 sound card live karaoke.jpg",
    ratings:"4",
    description:[
      "High quality reverb",
      "Dual mic input",
      "Bluetooth and USB input"
    ]
  }
];
function getStars(ratings){
  let stars ="";
  for(let i=1; i<=5; i++){
    stars += i <= ratings ? "&#9733;": "&#9734;";
    
  }
  return stars;
}
const productGrid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  const descHTML = product.description.map(point => `<li>${point}</li>`).join("");
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p class="ratings">${getStars(product.ratings)}</p>
    <ul class="description"> ${descHTML} </ul>
  `;
  productGrid.appendChild(card);
});