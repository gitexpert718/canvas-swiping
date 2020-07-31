
function init() {
    drawImageOnCanvas(140, 300, [72, 10], "swinger-img1");
}


function drawImageOnCanvas(imgWidth, imgHeight, tipsPoint, imgId) {
    document.getElementById("canvasDiv").innerHTML = `
        <canvas id="swingImgDraw" width="${imgWidth}px" height="${imgHeight}px"></canvas>
    `;

    let c = document.getElementById("swingImgDraw"),
        ctx = c.getContext("2d"),
        img = document.getElementById(imgId);
        
    img.style.width = imgWidth + "px";
    img.style.height = imgHeight + "px";
    c.style.marginLeft = "-" + tipsPoint[0] + "px";
    c.style.marginTop = "-" + tipsPoint[1] + "px";
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
}


function startSwingImg() {
    document.getElementById("canvasDiv").classList.add("swinging");
}


function stopSwingImg() {
    document.getElementById("canvasDiv").classList.remove("swinging");
}


function ChangeImage() {
    key = parseInt(document.getElementById("selectItem").value);
    switch (key) {
        case 1:
            drawImageOnCanvas(140, 300, [72, 10], "swinger-img1");
            break;
        case 2:
            drawImageOnCanvas(300, 299, [150, 0], "swinger-img2");
            break;
        case 3:
            drawImageOnCanvas(127, 300, [64, 0], "swinger-img3");
            break;
        case 4:
            drawImageOnCanvas(81, 300, [41, 0], "swinger-img4");
            break;
        case 5:
            drawImageOnCanvas(86, 300, [40, 0], "swinger-img5");
            break;
        default:
            break;
    }
}


init();