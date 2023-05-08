input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("HOLA")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
radio.setGroup(17)
basic.forever(function () {
	
})
