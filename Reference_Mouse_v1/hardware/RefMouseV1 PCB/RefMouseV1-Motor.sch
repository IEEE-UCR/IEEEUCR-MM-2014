EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:special
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:stm32f103rx
LIBS:SparkFun
LIBS:tps6205x
LIBS:JST-XH-BattBalance
LIBS:drv8837
LIBS:RefMouseV1-cache
EELAYER 27 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 3 3
Title ""
Date "5 sep 2013"
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L DRV8837 U?
U 1 1 5227D4B1
P 5300 2400
F 0 "U?" H 5350 1550 60  0000 C CNN
F 1 "DRV8837" H 5500 2450 60  0000 C CNN
F 2 "" H 5300 2500 60  0000 C CNN
F 3 "" H 5300 2500 60  0000 C CNN
	1    5300 2400
	1    0    0    -1  
$EndComp
$Comp
L DRV8837 U?
U 1 1 5227D4BE
P 5300 3800
F 0 "U?" H 5350 2950 60  0000 C CNN
F 1 "DRV8837" H 5500 3850 60  0000 C CNN
F 2 "" H 5300 3900 60  0000 C CNN
F 3 "" H 5300 3900 60  0000 C CNN
	1    5300 3800
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR?
U 1 1 5227D4D5
P 6400 3200
F 0 "#PWR?" H 6400 3200 30  0001 C CNN
F 1 "GND" H 6400 3130 30  0001 C CNN
F 2 "" H 6400 3200 60  0000 C CNN
F 3 "" H 6400 3200 60  0000 C CNN
	1    6400 3200
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR?
U 1 1 5227D4E2
P 6400 4600
F 0 "#PWR?" H 6400 4600 30  0001 C CNN
F 1 "GND" H 6400 4530 30  0001 C CNN
F 2 "" H 6400 4600 60  0000 C CNN
F 3 "" H 6400 4600 60  0000 C CNN
	1    6400 4600
	1    0    0    -1  
$EndComp
Wire Wire Line
	6400 4500 6400 4600
Wire Wire Line
	6400 3100 6400 3200
Text HLabel 4900 2800 0    60   Input ~ 0
MOTOR_A1
Text HLabel 4900 2900 0    60   Input ~ 0
MOTOR_A2
Text HLabel 4900 4200 0    60   Input ~ 0
MOTOR_B1
Text HLabel 4900 4300 0    60   Input ~ 0
MOTOR_B2
Wire Wire Line
	4900 2800 5000 2800
Wire Wire Line
	4900 2900 5000 2900
Wire Wire Line
	4900 4200 5000 4200
Wire Wire Line
	4900 4300 5000 4300
Wire Wire Line
	4000 4000 5000 4000
Wire Wire Line
	4000 4500 5000 4500
Wire Wire Line
	4000 2600 4000 3100
Wire Wire Line
	4000 3100 4000 4000
Wire Wire Line
	4000 4000 4000 4500
Wire Wire Line
	4000 3100 5000 3100
Connection ~ 4000 4000
Wire Wire Line
	3700 2600 4000 2600
Wire Wire Line
	4000 2600 5000 2600
Connection ~ 4000 3100
Connection ~ 4000 2600
Text HLabel 3700 2600 0    60   Input ~ 0
V_LOGIC
Wire Wire Line
	3700 2500 4200 2500
Wire Wire Line
	4200 2500 5000 2500
Wire Wire Line
	4200 2500 4200 3900
Wire Wire Line
	4200 3900 5000 3900
Connection ~ 4200 2500
Text HLabel 3700 2500 0    60   Input ~ 0
V_MOTOR
$EndSCHEMATC
