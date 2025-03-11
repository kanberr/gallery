// Function called when mouse hovers over an image
function upDate(previewPic) {
    console.log("Mouse over:", previewPic.alt); // Debugging
    console.log("Image source:", previewPic.src); // Debugging

    let displayArea = document.getElementById("image");
    displayArea.style.backgroundImage = "url('" + previewPic.src + "')";
    displayArea.innerHTML = previewPic.alt;
}

// Function called when mouse leaves the image
function unDo() {
    let displayArea = document.getElementById("image");
    displayArea.style.backgroundImage = "url('')";
    displayArea.innerHTML = "Hover over an image below to display here.";
}
