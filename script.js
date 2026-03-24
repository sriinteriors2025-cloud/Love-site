const text = "Happy Birthday My Love 💖 Priya ❤️";
let index = 0;

function typeEffect() {
    let el = document.getElementById("typingText");
    if (!el) return;

    if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

function openGift(){
    document.getElementById("giftBox").style.display = "flex";
}

function closeGift(){
    document.getElementById("giftBox").style.display = "none";
}