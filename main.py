def on_logo_touched():
    OLED12864_I2C.clear()
    if input.compass_heading() < 45 or input.compass_heading() > 315:
        if input.compass_heading() < 8 or input.compass_heading() > 352:
            OLED12864_I2C.show_string(2, 2, " N", 0)
        else:
            OLED12864_I2C.show_string(2, 2, "N", 1)
    elif input.compass_heading() < 135 and input.compass_heading() > 45:
        if input.compass_heading() < 98 and input.compass_heading() > 82:
            OLED12864_I2C.show_string(2, 2, " E", 0)
        else:
            OLED12864_I2C.show_string(2, 2, "E", 1)
    elif input.compass_heading() < 225 and input.compass_heading() > 135:
        if input.compass_heading() < 188 and input.compass_heading() == 172:
            OLED12864_I2C.show_string(2, 2, " S", 0)
        else:
            OLED12864_I2C.show_string(2, 2, "S", 1)
    elif input.compass_heading() < 315 and input.compass_heading() > 225:
        if input.compass_heading() < 278 and input.compass_heading() > 263:
            OLED12864_I2C.show_string(2, 2, " W", 0)
        else:
            OLED12864_I2C.show_string(2, 2, "W", 1)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

OLED12864_I2C.init(60)

def on_forever():
    OLED12864_I2C.clear()
    OLED12864_I2C.show_string(0,
        0,
        "x:" + str(Math.round(input.acceleration(Dimension.X) / 1024 * 9.8)) + " m/S^2",
        1)
    OLED12864_I2C.show_string(0, 1, "y:" + str(Math.round(input.acceleration(Dimension.Y) / 1024 * 9.8)) + " m/S^2", 1)
    OLED12864_I2C.show_string(0, 2, "z:" + str(Math.round(input.acceleration(Dimension.Z) / 1024 * 9.8)) + " m/S^2", 1)
    OLED12864_I2C.show_string(0, 3, "Temp:" + str(input.temperature()) + " C", 1)
    basic.pause(1000)
basic.forever(on_forever)
