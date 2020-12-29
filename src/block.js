class block {
    constructor(ctx, xPos, yPos) {
        this.width = 50;
        this.height = 50;
        //ctx.fillRect(xPos, yPos, 50, 50);
    }

    drawBorder(ctx, xPos, yPos) {
        ctx.lineWidth = 2;
        ctx.strokeStyle="black";
        ctx.strokeRect(xPos, yPos, this.width, this.height);
    }
}

export class Grass extends block {
    constructor(ctx, xPos, yPos) {
        ctx.fillStyle = "green";
        super(ctx, xPos, yPos);
        const grassImage = this.getImage();
        grassImage.onload = () => { ctx.drawImage(grassImage, xPos, yPos, this.width, this.height); }
        //this.drawBorder(ctx, xPos, yPos);
    }
    getImage() {
        var image = new Image();
        image.src = "../textures/grass_block.png";
        return image;
    }
}