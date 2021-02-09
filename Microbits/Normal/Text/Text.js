input.onButtonPressed(Button.A, function () {
    basic.showString("YES")
})

input.onButtonPressed(Button.AB, function () {
    basic.showString("MAYBE")
})

input.onButtonPressed(Button.B, function () {
    basic.showString("NO")
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("MAYBE")
})

basic.showString("ASK ME A QUESTION")
