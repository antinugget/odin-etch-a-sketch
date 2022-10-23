const container = document.querySelector('.squares');
const div = document.createElement('div');
div.setAttribute('style', 'border: 1px solid black;');

const containerWidth = container.offsetWidth;
const switchBtn = document.querySelector('input[type="submit"]');

let squaresPerSide;
let width;
let height;

makeGrid(16);
letColor();

switchBtn.addEventListener("click", () => {
    squaresPerSide = document.querySelector('input[type="number"]').value;
    if (squaresPerSide > 100) {
        return
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        };
        makeGrid(squaresPerSide);
        letColor();
    }
})

function makeGrid(squaresPerSide) {
    width = containerWidth/squaresPerSide -2;
    height = width;

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    for (let i = squaresPerSide; i > 0; --i) {
        for (let j = squaresPerSide; j > 0; --j) {
            container.appendChild(div.cloneNode(true));
        }
    };
};

function letColor() {
    const divs = document.querySelectorAll('div > div');
    divs.forEach((div) => {
        div.addEventListener("mouseover", function(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.opacity = 0.7;
            e.target.style.background = `#${randomColor}`;
        });
    });
}
