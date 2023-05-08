input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("HOLA")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendString("Messirve")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendValue("name", 0)
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Heart)
})
radio.setGroup(17)
