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
LIBS:SparkFun
LIBS:TPS62056_Reference-cache
EELAYER 27 0
EELAYER END
$Descr USLetter 11000 8500
encoding utf-8
Sheet 1 1
Title "TPS6205x-based Fixed Voltage Switching Regulator Module"
Date "23 jul 2013"
Rev "A"
Comp "UCR Micromouse"
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L TPS6205X U1
U 1 1 51E25A22
P 3850 2100
F 0 "U1" H 3400 2350 60  0000 C CNN
F 1 "TPS6205X" H 3850 1800 60  0000 C CNN
F 2 "" H 3050 2250 60  0000 C CNN
F 3 "" H 3050 2250 60  0000 C CNN
	1    3850 2100
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 51E31F90
P 1750 2300
F 0 "C1" H 1750 2400 40  0000 L CNN
F 1 "22uF" H 1756 2215 40  0000 L CNN
F 2 "~" H 1788 2150 30  0000 C CNN
F 3 "~" H 1750 2300 60  0000 C CNN
	1    1750 2300
	1    0    0    -1  
$EndComp
$Comp
L INDUCTOR L1
U 1 1 51E32405
P 5100 2100
F 0 "L1" V 5050 2100 40  0000 C CNN
F 1 "10uH" V 5200 2100 40  0000 C CNN
F 2 "~" H 5100 2100 60  0000 C CNN
F 3 "~" H 5100 2100 60  0000 C CNN
	1    5100 2100
	0    -1   -1   0   
$EndComp
Text Label 2850 2100 0    60   ~ 0
VIN
Text Label 2850 2300 0    60   ~ 0
EN
Text Label 8100 4700 1    60   ~ 0
EN
Text Label 8200 4700 1    60   ~ 0
VIN
Text Label 8300 4700 1    60   ~ 0
GND
$Comp
L GND #PWR01
U 1 1 51E32DEC
P 8300 4450
F 0 "#PWR01" H 8300 4450 30  0001 C CNN
F 1 "GND" H 8300 4380 30  0001 C CNN
F 2 "" H 8300 4450 60  0000 C CNN
F 3 "" H 8300 4450 60  0000 C CNN
	1    8300 4450
	-1   0    0    1   
$EndComp
Text Label 8400 4700 1    60   ~ 0
VOUT
Text Label 8500 4700 1    60   ~ 0
LBO
Text Label 4650 2500 0    60   ~ 0
PG
Text Label 4650 2700 0    60   ~ 0
LBO
$Comp
L C C2
U 1 1 51E3301B
P 5700 2300
F 0 "C2" H 5700 2400 40  0000 L CNN
F 1 "22uF" H 5706 2215 40  0000 L CNN
F 2 "~" H 5738 2150 30  0000 C CNN
F 3 "~" H 5700 2300 60  0000 C CNN
	1    5700 2300
	1    0    0    -1  
$EndComp
Text Label 4650 2300 0    60   ~ 0
FB
Text Label 4650 2100 0    60   ~ 0
SW
Text Label 2850 2500 0    60   ~ 0
LBI
Text Label 2850 2700 0    60   ~ 0
SYNC
$Comp
L GND #PWR02
U 1 1 51E33148
P 3750 3350
F 0 "#PWR02" H 3750 3350 30  0001 C CNN
F 1 "GND" H 3750 3280 30  0001 C CNN
F 2 "" H 3750 3350 60  0000 C CNN
F 3 "" H 3750 3350 60  0000 C CNN
	1    3750 3350
	1    0    0    -1  
$EndComp
$Comp
L CONN_5 P1
U 1 1 51E33199
P 8300 5150
F 0 "P1" V 8250 5150 50  0000 C CNN
F 1 "CONN_5" V 8350 5150 50  0000 C CNN
F 2 "" H 8300 5150 60  0000 C CNN
F 3 "" H 8300 5150 60  0000 C CNN
	1    8300 5150
	0    -1   1    0   
$EndComp
$Comp
L R R1
U 1 1 51E33412
P 6800 4800
F 0 "R1" V 6880 4800 40  0000 C CNN
F 1 "4.7M, 5%" V 6807 4801 40  0000 C CNN
F 2 "~" V 6730 4800 30  0000 C CNN
F 3 "~" H 6800 4800 30  0000 C CNN
	1    6800 4800
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR03
U 1 1 51E33424
P 6800 5050
F 0 "#PWR03" H 6800 5050 30  0001 C CNN
F 1 "GND" H 6800 4980 30  0001 C CNN
F 2 "" H 6800 5050 60  0000 C CNN
F 3 "" H 6800 5050 60  0000 C CNN
	1    6800 5050
	1    0    0    -1  
$EndComp
$Comp
L +BATT #PWR04
U 1 1 51E334F2
P 8200 4350
F 0 "#PWR04" H 8200 4300 20  0001 C CNN
F 1 "+BATT" H 8200 4450 30  0000 C CNN
F 2 "" H 8200 4350 60  0000 C CNN
F 3 "" H 8200 4350 60  0000 C CNN
	1    8200 4350
	1    0    0    -1  
$EndComp
$Comp
L GS2 J1
U 1 1 51E33527
P 6800 4050
F 0 "J1" H 6900 4200 50  0000 C CNN
F 1 "GS2" H 6900 3901 40  0000 C CNN
F 2 "" H 6800 4050 60  0000 C CNN
F 3 "" H 6800 4050 60  0000 C CNN
	1    6800 4050
	1    0    0    -1  
$EndComp
$Comp
L +BATT #PWR05
U 1 1 51E33544
P 6800 3850
F 0 "#PWR05" H 6800 3800 20  0001 C CNN
F 1 "+BATT" H 6800 3950 30  0000 C CNN
F 2 "" H 6800 3850 60  0000 C CNN
F 3 "" H 6800 3850 60  0000 C CNN
	1    6800 3850
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR06
U 1 1 51E3365B
P 6300 5050
F 0 "#PWR06" H 6300 5050 30  0001 C CNN
F 1 "GND" H 6300 4980 30  0001 C CNN
F 2 "" H 6300 5050 60  0000 C CNN
F 3 "" H 6300 5050 60  0000 C CNN
	1    6300 5050
	1    0    0    -1  
$EndComp
$Comp
L +BATT #PWR07
U 1 1 51E33661
P 6300 3850
F 0 "#PWR07" H 6300 3800 20  0001 C CNN
F 1 "+BATT" H 6300 3950 30  0000 C CNN
F 2 "" H 6300 3850 60  0000 C CNN
F 3 "" H 6300 3850 60  0000 C CNN
	1    6300 3850
	1    0    0    -1  
$EndComp
Text Notes 7050 4050 0    60   ~ 0
Short J1 to\nalways enable
Text Notes 6000 5300 0    60   ~ 0
Populate for latching\npushbutton power switch
$Comp
L GND #PWR08
U 1 1 51E3374F
P 1750 2500
F 0 "#PWR08" H 1750 2500 30  0001 C CNN
F 1 "GND" H 1750 2430 30  0001 C CNN
F 2 "" H 1750 2500 60  0000 C CNN
F 3 "" H 1750 2500 60  0000 C CNN
	1    1750 2500
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR09
U 1 1 51E33C6A
P 5700 2600
F 0 "#PWR09" H 5700 2600 30  0001 C CNN
F 1 "GND" H 5700 2530 30  0001 C CNN
F 2 "" H 5700 2600 60  0000 C CNN
F 3 "" H 5700 2600 60  0000 C CNN
	1    5700 2600
	1    0    0    -1  
$EndComp
$Comp
L +BATT #PWR010
U 1 1 51E33CB0
P 1450 2000
F 0 "#PWR010" H 1450 1950 20  0001 C CNN
F 1 "+BATT" H 1450 2100 30  0000 C CNN
F 2 "" H 1450 2000 60  0000 C CNN
F 3 "" H 1450 2000 60  0000 C CNN
	1    1450 2000
	1    0    0    -1  
$EndComp
$Comp
L R R2
U 1 1 51E34620
P 2350 2400
F 0 "R2" V 2430 2400 40  0000 C CNN
F 1 "510K" V 2357 2401 40  0000 C CNN
F 2 "~" V 2280 2400 30  0000 C CNN
F 3 "~" H 2350 2400 30  0000 C CNN
	1    2350 2400
	1    0    0    -1  
$EndComp
$Comp
L R R3
U 1 1 51E34626
P 2350 3000
F 0 "R3" V 2430 3000 40  0000 C CNN
F 1 "110K" V 2357 3001 40  0000 C CNN
F 2 "~" V 2280 3000 30  0000 C CNN
F 3 "~" H 2350 3000 30  0000 C CNN
	1    2350 3000
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR011
U 1 1 51E34646
P 2350 3300
F 0 "#PWR011" H 2350 3300 30  0001 C CNN
F 1 "GND" H 2350 3230 30  0001 C CNN
F 2 "" H 2350 3300 60  0000 C CNN
F 3 "" H 2350 3300 60  0000 C CNN
	1    2350 3300
	1    0    0    -1  
$EndComp
Text Notes 2200 2850 2    60   ~ 0
Low-battery trip at 6.82v.\n(3.41v per cell in a 2s Li-Po)\n\nTo disable, do not populate\nR2 and short R3.
Text Notes 7950 5450 0    60   ~ 0
3-pin regulator\npinout
$Comp
L LED D1
U 1 1 51E34F3D
P 6000 2900
F 0 "D1" H 6000 3000 50  0000 C CNN
F 1 "LED" H 6000 2800 50  0000 C CNN
F 2 "~" H 6000 2900 60  0000 C CNN
F 3 "~" H 6000 2900 60  0000 C CNN
	1    6000 2900
	0    1    1    0   
$EndComp
$Comp
L R R4
U 1 1 51E34F4A
P 6000 2400
F 0 "R4" V 6080 2400 40  0000 C CNN
F 1 "330" V 6007 2401 40  0000 C CNN
F 2 "~" V 5930 2400 30  0000 C CNN
F 3 "~" H 6000 2400 30  0000 C CNN
	1    6000 2400
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR012
U 1 1 51E34F59
P 6000 3150
F 0 "#PWR012" H 6000 3150 30  0001 C CNN
F 1 "GND" H 6000 3080 30  0001 C CNN
F 2 "" H 6000 3150 60  0000 C CNN
F 3 "" H 6000 3150 60  0000 C CNN
	1    6000 3150
	1    0    0    -1  
$EndComp
Text Notes 7150 4850 0    60   ~ 0
See datasheet for\npushbutton\nresistor value\ncalculation.
$Comp
L INDUCTOR L2
U 1 1 51E6F3B0
P 6750 2100
F 0 "L2" V 6700 2100 40  0000 C CNN
F 1 "82nH" V 6850 2100 40  0000 C CNN
F 2 "~" H 6750 2100 60  0000 C CNN
F 3 "~" H 6750 2100 60  0000 C CNN
	1    6750 2100
	0    -1   -1   0   
$EndComp
$Comp
L C C3
U 1 1 51E6F3B6
P 7150 2300
F 0 "C3" H 7150 2400 40  0000 L CNN
F 1 "22uF" H 7156 2215 40  0000 L CNN
F 2 "~" H 7188 2150 30  0000 C CNN
F 3 "~" H 7150 2300 60  0000 C CNN
	1    7150 2300
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR013
U 1 1 51E6F3BC
P 7150 2600
F 0 "#PWR013" H 7150 2600 30  0001 C CNN
F 1 "GND" H 7150 2530 30  0001 C CNN
F 2 "" H 7150 2600 60  0000 C CNN
F 3 "" H 7150 2600 60  0000 C CNN
	1    7150 2600
	1    0    0    -1  
$EndComp
$Comp
L GS2 J2
U 1 1 51E6F548
P 7150 1750
F 0 "J2" H 7250 1900 50  0000 C CNN
F 1 "GS2" H 7250 1601 40  0000 C CNN
F 2 "" H 7150 1750 60  0000 C CNN
F 3 "" H 7150 1750 60  0000 C CNN
	1    7150 1750
	0    -1   -1   0   
$EndComp
Text Notes 6400 2800 0    60   ~ 0
Optional additional output filtering\n~85 KHz = 10% switching frequency\n
Text Notes 6650 1550 0    60   ~ 0
Short to bypass filter
$Comp
L TAC_SWITCHSMD S2
U 1 1 51EDEB7B
P 6250 4750
F 0 "S2" H 6150 5000 50  0000 L BNN
F 1 "TAC_SWITCHSMD" H 5900 4500 50  0000 L BNN
F 2 "SparkFun-TACTILE_SWITCH_SMD" H 6450 4450 50  0001 C CNN
F 3 "" H 6250 4750 60  0000 C CNN
	1    6250 4750
	0    -1   -1   0   
$EndComp
$Comp
L TAC_SWITCHSMD S1
U 1 1 51EDEB95
P 6250 4150
F 0 "S1" H 6150 4400 50  0000 L BNN
F 1 "TAC_SWITCHSMD" H 6050 3900 50  0000 L BNN
F 2 "SparkFun-TACTILE_SWITCH_SMD" H 6450 3850 50  0001 C CNN
F 3 "" H 6250 4150 60  0000 C CNN
	1    6250 4150
	0    -1   -1   0   
$EndComp
$Comp
L C C4
U 1 1 51EE3CFB
P 7450 2300
F 0 "C4" H 7450 2400 40  0000 L CNN
F 1 "22uF" H 7456 2215 40  0000 L CNN
F 2 "~" H 7488 2150 30  0000 C CNN
F 3 "~" H 7450 2300 60  0000 C CNN
	1    7450 2300
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR014
U 1 1 51EE3D01
P 7450 2600
F 0 "#PWR014" H 7450 2600 30  0001 C CNN
F 1 "GND" H 7450 2530 30  0001 C CNN
F 2 "" H 7450 2600 60  0000 C CNN
F 3 "" H 7450 2600 60  0000 C CNN
	1    7450 2600
	1    0    0    -1  
$EndComp
$Comp
L R R5
U 1 1 51EE4D9A
P 8500 4250
F 0 "R5" V 8580 4250 40  0000 C CNN
F 1 "510K" V 8507 4251 40  0000 C CNN
F 2 "~" V 8430 4250 30  0000 C CNN
F 3 "~" H 8500 4250 30  0000 C CNN
	1    8500 4250
	1    0    0    -1  
$EndComp
Wire Wire Line
	4650 2100 4800 2100
Wire Wire Line
	2850 2300 3050 2300
Wire Wire Line
	8100 4450 8100 4750
Wire Wire Line
	8200 4350 8200 4750
Wire Wire Line
	8300 4750 8300 4450
Wire Wire Line
	8500 4750 8500 4500
Wire Wire Line
	4650 2500 4950 2500
Wire Wire Line
	4650 2700 4850 2700
Wire Wire Line
	4650 2300 5500 2300
Wire Wire Line
	2850 2700 3050 2700
Wire Wire Line
	2850 2700 2850 3200
Wire Wire Line
	2850 3200 4950 3200
Wire Wire Line
	4950 3200 4950 2500
Connection ~ 3950 3200
Connection ~ 3750 3200
Wire Wire Line
	3750 3200 3750 3350
Wire Wire Line
	6300 4450 8100 4450
Connection ~ 6800 4450
Wire Wire Line
	6800 4250 6800 4550
Wire Notes Line
	5900 5150 7100 5150
Wire Notes Line
	7100 5150 7100 4500
Wire Notes Line
	7100 4500 6550 4500
Wire Notes Line
	6550 4500 6550 3600
Wire Notes Line
	6550 3600 5900 3600
Wire Notes Line
	5900 3600 5900 5150
Connection ~ 1750 2100
Wire Wire Line
	5700 2500 5700 2600
Wire Wire Line
	1450 2000 1450 2100
Connection ~ 5700 2100
Wire Notes Line
	8200 5300 8200 5350
Wire Notes Line
	8200 5350 8400 5350
Wire Notes Line
	8400 5350 8400 5300
Wire Wire Line
	1450 2100 3050 2100
Connection ~ 2350 2100
Wire Wire Line
	2650 2500 3050 2500
Wire Wire Line
	2350 2150 2350 2100
Wire Wire Line
	2350 3300 2350 3250
Wire Wire Line
	2350 2650 2350 2750
Wire Wire Line
	2350 2700 2650 2700
Wire Wire Line
	2650 2700 2650 2500
Connection ~ 2350 2700
Wire Wire Line
	5400 2100 6450 2100
Wire Wire Line
	5500 2300 5500 2100
Connection ~ 5500 2100
Wire Wire Line
	6000 3150 6000 3100
Wire Wire Line
	6000 2700 6000 2650
Wire Wire Line
	6000 2150 6000 2100
Connection ~ 6000 2100
Wire Wire Line
	7050 2100 8400 2100
Wire Wire Line
	7150 2500 7150 2600
Connection ~ 7150 2100
Wire Notes Line
	6400 1950 7800 1950
Wire Notes Line
	7800 1950 7800 2700
Wire Notes Line
	7800 2700 6400 2700
Wire Notes Line
	6400 2700 6400 1950
Wire Wire Line
	6950 1750 6250 1750
Wire Wire Line
	6250 1750 6250 2100
Connection ~ 6250 2100
Wire Wire Line
	7350 1750 7950 1750
Connection ~ 7950 2100
Wire Wire Line
	6250 3950 6350 3950
Wire Wire Line
	6300 3950 6300 3850
Connection ~ 6300 3950
Wire Wire Line
	6250 4350 6350 4350
Wire Wire Line
	6300 4350 6300 4550
Wire Wire Line
	6250 4550 6350 4550
Connection ~ 6300 4350
Connection ~ 6300 4550
Connection ~ 6300 4450
Wire Wire Line
	6250 4950 6350 4950
Wire Wire Line
	6300 4950 6300 5050
Connection ~ 6300 4950
Wire Wire Line
	7950 1750 7950 2100
Wire Wire Line
	7450 2500 7450 2600
Connection ~ 7450 2100
Connection ~ 8400 4000
Wire Wire Line
	8400 4000 8500 4000
Wire Wire Line
	8400 2100 8400 4750
$EndSCHEMATC
