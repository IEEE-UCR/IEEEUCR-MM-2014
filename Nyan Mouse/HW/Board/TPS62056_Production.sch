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
LIBS:tps6205x
LIBS:stm32f103rx
LIBS:SparkFun
LIBS:JST-XH-BattBalance
LIBS:drv8837
LIBS:3v3custom
LIBS:altera_ep4ce15e22c
LIBS:Nyan Mouse-cache
EELAYER 24 0
EELAYER END
$Descr USLetter 11000 8500
encoding utf-8
Sheet 2 4
Title "Nyan Mouse"
Date "20 Apr 2014"
Rev "Alpha"
Comp "IEEE UCR"
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L TPS6205X U?
U 1 1 535478BD
P 3300 2500
AR Path="/53547798/535478BD" Ref="U?"  Part="1" 
AR Path="/535488D9/535478BD" Ref="U?"  Part="1" 
F 0 "U?" H 2850 2750 60  0000 C CNN
F 1 "TPS6205X" H 3300 2200 60  0000 C CNN
F 2 "" H 2500 2650 60  0000 C CNN
F 3 "" H 2500 2650 60  0000 C CNN
	1    3300 2500
	1    0    0    -1  
$EndComp
$Comp
L CP1 C?
U 1 1 5354790A
P 1100 2700
AR Path="/53547798/5354790A" Ref="C?"  Part="1" 
AR Path="/535488D9/5354790A" Ref="C?"  Part="1" 
F 0 "C?" H 1150 2800 50  0000 L CNN
F 1 "22uF" H 1150 2600 50  0000 L CNN
F 2 "" H 1100 2700 60  0000 C CNN
F 3 "" H 1100 2700 60  0000 C CNN
	1    1100 2700
	1    0    0    -1  
$EndComp
$Comp
L R R?
U 1 1 5354793A
P 1550 2750
AR Path="/53547798/5354793A" Ref="R?"  Part="1" 
AR Path="/535488D9/5354793A" Ref="R?"  Part="1" 
F 0 "R?" V 1630 2750 40  0000 C CNN
F 1 "510K" V 1557 2751 40  0000 C CNN
F 2 "" V 1480 2750 30  0000 C CNN
F 3 "" H 1550 2750 30  0000 C CNN
	1    1550 2750
	1    0    0    -1  
$EndComp
$Comp
L R R?
U 1 1 5354794E
P 1550 3350
AR Path="/53547798/5354794E" Ref="R?"  Part="1" 
AR Path="/535488D9/5354794E" Ref="R?"  Part="1" 
F 0 "R?" V 1630 3350 40  0000 C CNN
F 1 "110K" V 1557 3351 40  0000 C CNN
F 2 "" V 1480 3350 30  0000 C CNN
F 3 "" H 1550 3350 30  0000 C CNN
	1    1550 3350
	1    0    0    -1  
$EndComp
Wire Wire Line
	1550 3000 1550 3100
Connection ~ 1100 2500
Connection ~ 1550 2500
Wire Wire Line
	2500 2900 1700 2900
Wire Wire Line
	1700 2900 1700 3050
Wire Wire Line
	1700 3050 1550 3050
Connection ~ 1550 3050
Wire Wire Line
	2500 2700 2400 2700
Wire Wire Line
	2400 2700 2400 2500
Wire Wire Line
	2500 2500 950  2500
Connection ~ 2400 2500
Wire Wire Line
	2500 3100 2500 3600
Wire Wire Line
	5350 3600 1100 3600
Connection ~ 3200 3600
Wire Wire Line
	4250 3600 4250 2900
Wire Wire Line
	4250 2900 4100 2900
Connection ~ 3400 3600
$Comp
L R R?
U 1 1 535479CB
P 4850 2750
AR Path="/53547798/535479CB" Ref="R?"  Part="1" 
AR Path="/535488D9/535479CB" Ref="R?"  Part="1" 
F 0 "R?" V 4930 2750 40  0000 C CNN
F 1 "510k" V 4857 2751 40  0000 C CNN
F 2 "" V 4780 2750 30  0000 C CNN
F 3 "" H 4850 2750 30  0000 C CNN
	1    4850 2750
	1    0    0    -1  
$EndComp
Wire Wire Line
	4100 3100 4850 3100
Wire Wire Line
	1100 3600 1100 2900
$Comp
L INDUCTOR_SMALL L?
U 1 1 53547A93
P 4450 2500
AR Path="/53547798/53547A93" Ref="L?"  Part="1" 
AR Path="/535488D9/53547A93" Ref="L?"  Part="1" 
F 0 "L?" H 4450 2600 50  0000 C CNN
F 1 "10uH" H 4450 2450 50  0000 C CNN
F 2 "" H 4450 2500 60  0000 C CNN
F 3 "" H 4450 2500 60  0000 C CNN
	1    4450 2500
	1    0    0    -1  
$EndComp
Wire Wire Line
	4100 2500 4200 2500
Wire Wire Line
	4700 2500 5500 2500
Wire Wire Line
	4100 2700 4750 2700
Wire Wire Line
	4850 3100 4850 3000
Connection ~ 4850 2500
Wire Wire Line
	4750 2700 4750 2500
Connection ~ 4750 2500
Wire Wire Line
	5100 2900 5100 3600
$Comp
L CP1 C?
U 1 1 53547BCD
P 5100 2700
AR Path="/53547798/53547BCD" Ref="C?"  Part="1" 
AR Path="/535488D9/53547BCD" Ref="C?"  Part="1" 
F 0 "C?" H 5150 2800 50  0000 L CNN
F 1 "22uF" H 5150 2600 50  0000 L CNN
F 2 "" H 5100 2700 60  0000 C CNN
F 3 "" H 5100 2700 60  0000 C CNN
	1    5100 2700
	1    0    0    -1  
$EndComp
Connection ~ 5100 2500
Text Notes 2150 1900 0    60   ~ 0
the power output here will not be defined for ultimate flexibility
Connection ~ 2500 3600
Connection ~ 1550 3600
Connection ~ 4250 3600
Connection ~ 5100 3600
Text HLabel 950  2500 0    60   Output ~ 0
VIN
Text HLabel 5350 3600 2    60   BiDi ~ 0
GND
Text HLabel 5500 2500 2    60   Output ~ 0
3.3VOUT
Text Notes 1300 4050 0    60   ~ 0
Low battery trip @ 6.82v.\nTOO CONSERVATIVE.\nKevin - make this less!
$EndSCHEMATC
