input.onButtonPressed(Button.A, function start() {
    let bird = game.createSprite(0, 2)
    while (true) {
        images.createBigImage(`
            # . # . # . . . # .
            # . . . # . . . . .
            . . . . . . # . . .
            . . # . . . # . # .
            # . # . # . # . # .
            `).scrollImage(1, 600)
    }
    while (input.buttonIsPressed(Button.A)) {
        bird.change(LedSpriteProperty.Y, 1)
        break
    }
    while (input.buttonIsPressed(Button.B)) {
        bird.change(LedSpriteProperty.Y, -1)
        break
    }
})
