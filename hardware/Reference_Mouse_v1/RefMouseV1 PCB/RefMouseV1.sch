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
LIBS:RefMouseV1-cache
EELAYER 27 0
EELAYER END
$Descr USLetter 11000 8500
encoding utf-8
Sheet 1 2
Title ""
Date "26 aug 2013"
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L STM32F103RX U?
U 1 1 521A8AA1
P 5450 3700
F 0 "U?" H 5500 3500 60  0000 C CNN
F 1 "STM32F103RX" H 5500 3800 60  0000 C CNN
F 2 "~" H 3750 4400 60  0000 C CNN
F 3 "~" H 3750 4400 60  0000 C CNN
	1    5450 3700
	1    0    0    -1  
$EndComp
$Sheet
S 1050 850  650  950 
U 521A8DE2
F0 "RefMouseV1-Power" 50
F1 "RefMouseV1-Power.sch" 50
F2 "VBATT_SW" I R 1700 1000 60 
F3 "+3.3V" I R 1700 1200 60 
$EndSheet
$Comp
L GND #PWR?
U 1 1 521ABF7B
P 4850 1800
F 0 "#PWR?" H 4850 1800 30  0001 C CNN
F 1 "GND" H 4850 1730 30  0001 C CNN
F 2 "" H 4850 1800 60  0000 C CNN
F 3 "" H 4850 1800 60  0000 C CNN
	1    4850 1800
	-1   0    0    1   
$EndComp
Wire Wire Line
	4850 1800 4850 2000
$EndSCHEMATC
