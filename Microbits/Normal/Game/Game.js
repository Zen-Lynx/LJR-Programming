input.onButtonPressed(Button.A, function () {
    basic.showString("Win!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("End!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Try Again")
})
basic.showString("Click on a button")
