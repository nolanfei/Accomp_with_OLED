input.onButtonPressed(Button.A, function () {
    time = 200
})
input.onButtonPressed(Button.AB, function () {
    time = 1000
})
input.onButtonPressed(Button.B, function () {
    time = 500
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    OLED12864_I2C.clear()
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        if (input.compassHeading() < 8 || input.compassHeading() > 352) {
            OLED12864_I2C.showString(
            2,
            2,
            " N",
            0
            )
        } else {
            OLED12864_I2C.showString(
            2,
            2,
            "N",
            1
            )
        }
    } else if (input.compassHeading() < 135 && input.compassHeading() > 45) {
        if (input.compassHeading() < 98 && input.compassHeading() > 82) {
            OLED12864_I2C.showString(
            2,
            2,
            " E",
            0
            )
        } else {
            OLED12864_I2C.showString(
            2,
            2,
            "E",
            1
            )
        }
    } else if (input.compassHeading() < 225 && input.compassHeading() > 135) {
        if (input.compassHeading() < 188 && input.compassHeading() == 172) {
            OLED12864_I2C.showString(
            2,
            2,
            " S",
            0
            )
        } else {
            OLED12864_I2C.showString(
            2,
            2,
            "S",
            1
            )
        }
    } else if (input.compassHeading() < 315 && input.compassHeading() > 225) {
        if (input.compassHeading() < 278 && input.compassHeading() > 263) {
            OLED12864_I2C.showString(
            2,
            2,
            " W",
            0
            )
        } else {
            OLED12864_I2C.showString(
            2,
            2,
            "W",
            1
            )
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    time = 2000
})
let time = 0
time = 1000
OLED12864_I2C.init(60)
basic.forever(function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    0,
    0,
    "x:" + ("" + Math.round(input.acceleration(Dimension.X) / 1024 * 9.8)) + " m/S^2",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "y:" + ("" + Math.round(input.acceleration(Dimension.Y) / 1024 * 9.8)) + " m/S^2",
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "z:" + ("" + Math.round(input.acceleration(Dimension.Z) / 1024 * 9.8)) + " m/S^2",
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "Temp:" + ("" + input.temperature()) + " C",
    1
    )
    basic.pause(time)
})
