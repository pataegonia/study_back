const images = ["bg1.jpg", "bg2.jpg"]

const imageChosen = images[Math.floor(Math.random()*images.length)]

const image = document.createElement("img");

image.src = `./img/${imageChosen}`

document.body.appendChild(image);