#!/usr/bin/env python
import RPi.GPIO as GPIO
import time
import requests
#url = "http://localhost:2345"
#reponse = requests.post(url)
#print(reponse)

colors =[0xFF0000 , 0x00FF00 , 0x0000FF , 0xFFFF00 , 0x00FFFF , 0xFF00FF , 0xFFFFFF, 0x9400D3]
pins = {'pin_R': 2, 'pin_G': 3, 'pin_B': 4} #définition des pins de la carte
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)


GPIO.setup(pins['pin_R'], GPIO.OUT)
#GPIO.PWM(pins['pin_R'], 2000)
GPIO.setup(pins['pin_G'], GPIO.OUT)
GPIO.setup(pins['pin_B'], GPIO.OUT)

GPIO.output(pins['pin_R'], GPIO.HIGH)
GPIO.output(pins['pin_G'], GPIO.HIGH)
GPIO.output(pins['pin_B'], GPIO.HIGH)

p_R = GPIO.PWM(pins['pin_R'], 2000) #choix de la fréquence
p_G = GPIO.PWM(pins['pin_G'], 2000)
p_B = GPIO.PWM(pins['pin_B'], 2000)

p_R.start(0)
p_G.start(0)
p_B.start(0)


def map(x, in_min, in_max, out_min, out_max):
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

def setColor(col):
    R_val = int((col & 0xFF0000)>>16)/255 *100
    G_val = int((col & 0x00FF00) >> 8)/255 *100
    B_val = int((col & 0x0000FF) >> 0)/255 *100
    print(R_val)
    print(G_val)
    print(B_val)
    R_val = map(R_val, 100, 50, 100, 50)
    G_val = map(G_val,100, 50, 100, 50)
    B_val = map(B_val,100, 50, 100, 50)

    p_R.ChangeDutyCycle(100-R_val)
    p_G.ChangeDutyCycle(100-G_val)
    p_B.ChangeDutyCycle(100-B_val)

try:
    while True:
        for col in colors:
            setColor(col)
            time.sleep(2.0)
except KeyboardInterrupt:
    p_R.stop()
    p_G.stop()
    p_B.stop()
    for i in pins:
        GPIO.outpout(pins[i], GPIO.HIGHT)
    GPIO.cleanup()