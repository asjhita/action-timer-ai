ml.onStopDetailed(ml.event.Walking, function (duration) {
    basic.clearScreen()
    walktime += duration
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(walktime / 1000)
})
ml.onStopDetailed(ml.event.Clapping, function (duration) {
    basic.clearScreen()
    claptime += duration
})
ml.onStart(ml.event.Waving, function () {
    basic.showIcon(IconNames.Heart)
})
ml.onStart(ml.event.Running, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(claptime / 1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(runtime / 1000)
})
ml.onStopDetailed(ml.event.Running, function (duration) {
    basic.clearScreen()
    runtime += duration
})
ml.onStart(ml.event.Walking, function () {
    basic.showIcon(IconNames.SmallSquare)
})
ml.onStart(ml.event.Clapping, function () {
    basic.showIcon(IconNames.SmallHeart)
})
let runtime = 0
let walktime = 0
let claptime = 0
claptime = 0
walktime = 0
runtime = 0
