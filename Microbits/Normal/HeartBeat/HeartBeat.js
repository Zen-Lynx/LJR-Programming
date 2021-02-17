basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # # #
        # . . # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
