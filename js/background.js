const images = [
    "0.jpg", "1.jpg", "2.jpg"
];

//랜덤으로 이미지 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

// 배경 이미지를 설정
document.body.style.backgroundImage = `url(img/${chosenImage})`;
// 배경 이미지의 반복 여부 설정
document.body.style.backgroundRepeat = "no-repeat";
// 배경 이미지를 화면에 꽉 채우도록 설정
document.body.style.backgroundSize = "cover";