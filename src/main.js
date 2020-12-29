import { Grass } from "./block.js"

const canvas = document.querySelector("canvas");
const width = canvas.width = 1008;
const height = canvas.height = 1008;
const offset = 8;
const ctx = canvas.getContext("2d");
ctx.lineWidth = offset;
ctx.strokeStyle="#FF0000";
ctx.strokeRect(0, 0, width, height);

const game = {
    init() {
        //this.placeGrass(canvas, ctx);
        this.drawBoxes();
        this.addClickListeners();
    },
    drawBoxes() {
        const boxSideLength = 50;
        const horizontal_box_count = width / boxSideLength;
        const vertical_box_count = width / boxSideLength;
        const projectedBoxes = horizontal_box_count * vertical_box_count;
        // console.log("There are " + horizontal_box_count + " horizontal boxes.");
        // console.log("There are " + vertical_box_count + " vertical boxes.");
        let xPos = 0 + 4;
        let yPos = 0 + 4;
        for (let i = 1; i < projectedBoxes - 6; i++) {
            this.drawBox(xPos, yPos, boxSideLength);
            xPos += boxSideLength;
            if (xPos > 1000) {
                xPos = 0 + 4;
                yPos += 50;
            }
        }
    },
    drawBox(xPos, yPos, boxSideLength) {
        ctx.fillStyle = "white";
        ctx.lineWidth = 2;
        ctx.strokeStyle="black";
        ctx.strokeRect(xPos, yPos, boxSideLength, boxSideLength);
        ctx.fillRect(xPos, yPos, boxSideLength, boxSideLength);
    },

    placeGrass(ctx) {
        let xPos = 0;
        for (let i = 0; i < 16; i++) {
            const block = new Grass(ctx, xPos, height - 100);
            xPos += block.width;
        }
    },

    addClickListeners() {
        canvas.addEventListener("click", (e) => {
            console.log(e.clientX);
            console.log(e.clientY);
        });
    }
}

game.init();

