/**
 * DC motor connected to M!
 */
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
let SerialData = ""
SuperBit.MotorStopAll()
basic.showIcon(IconNames.Duck)
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
bluetooth.startUartService()
/**
 * LCD Screen Wiring Colour Code
 * 
 * Red     ----->     3V
 * 
 * Black   ----->     GND
 * 
 * Green   ----->     SCL
 * 
 * Blue    ----->     SDA
 */
basic.forever(function () {
    SerialData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (SerialData == "A") {
        lcdDisplay.lcdSetBgIamge("fruit.png")
        SuperBit.MotorRun(SuperBit.enMotors.M1, 138)
    } else if (SerialData == "B") {
        lcdDisplay.lcdSetBgIamge("building.png")
        SuperBit.MotorStopAll()
    }
})
