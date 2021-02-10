input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    if (Horn > 0) {
        basic.showLeds(`
            # . # . #
            # . # # #
            # . # . #
            # . . . .
            # # # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            # # # . #
            # . # . #
            . . . . #
            . . # # #
            `)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
function ZenialLynx () {
    Horn = 5.010249514998555e+86
}
let Horn = 0
ZenialLynx()
