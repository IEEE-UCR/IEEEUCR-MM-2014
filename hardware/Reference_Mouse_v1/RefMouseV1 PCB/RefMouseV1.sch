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
Date "30 aug 2013"
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L STM32F103RX U2
U 1 1 521A8AA1
P 5450 3700
F 0 "U2" H 5500 3500 60  0000 C CNN
F 1 "STM32F103RX" H 5500 3800 60  0000 C CNN
F 2 "~" H 3750 4400 60  0000 C CNN
F 3 "~" H 3750 4400 60  0000 C CNN
	1    5450 3700
	1    0    0    -1  
$EndComp
$Sheet
S 750  700  600  500 
U 521A8DE2
F0 "RefMouseV1-Power" 50
F1 "RefMouseV1-Power.sch" 50
F2 "VBATT_SW" I R 1350 950 60 
F3 "+3.3V" I R 1350 1100 60 
F4 "VBATT" I R 1350 800 60 
$EndSheet
$Comp
L GND #PWR01
U 1 1 521ABF7B
P 4850 1800
F 0 "#PWR01" H 4850 1800 30  0001 C CNN
F 1 "GND" H 4850 1730 30  0001 C CNN
F 2 "" H 4850 1800 60  0000 C CNN
F 3 "" H 4850 1800 60  0000 C CNN
	1    4850 1800
	-1   0    0    1   
$EndComp
Wire Wire Line
	4850 1800 4850 2000
$Comp
L TEST-POINT3X5 TP1
U 1 1 52206320
P 2700 2550
F 0 "TP1" H 2800 2650 50  0000 C CNN
F 1 "TEST-POINT3X5" H 2800 2450 50  0000 C CNN
F 2 "SparkFun-PAD.03X.05" H 2800 2350 50  0001 C CNN
F 3 "" H 2700 2550 60  0000 C CNN
	1    2700 2550
	1    0    0    -1  
$EndComp
$Comp
L TEST-POINT3X5 TP2
U 1 1 52206458
P 2400 3150
F 0 "TP2" H 2500 3250 50  0000 C CNN
F 1 "TEST-POINT3X5" H 2500 3050 50  0000 C CNN
F 2 "SparkFun-PAD.03X.05" H 2500 2950 50  0001 C CNN
F 3 "" H 2400 3150 60  0000 C CNN
	1    2400 3150
	1    0    0    -1  
$EndComp
Text Notes 2100 3400 0    60   ~ 0
XTAL test point /\nExt. clock override
$EndSCHEMATC
