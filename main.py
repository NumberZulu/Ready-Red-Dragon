def start():
    def bird():
        return game.create_sprite(0, 2)
    while True:
        images.create_big_image("""
            # . # . # . . . # .
            # . . . # . . . . .
            . . . . . . # . . .
            . . # . . . # . # .
            # . # . # . # . # .
            """).scroll_image(1, 600)
    while input.button_is_pressed(Button.A):
        bird.change(LedSpriteProperty.Y, 1)
        break
    while input.button_is_pressed(Button.B):
        bird.change(LedSpriteProperty.Y, -1)
        break
input.on_button_pressed(Button.A, start)

Github c'est bien
