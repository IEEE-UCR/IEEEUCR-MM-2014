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
LIBS:3v3custom
LIBS:adc128s052
LIBS:altera_ep4ce15e22c
LIBS:drv8837
LIBS:JST-XH-BattBalance
LIBS:lp3987
LIBS:mic94345-4ycs
LIBS:s25fl064p
LIBS:SparkFun
LIBS:stm32f103rx
LIBS:tps6205x
LIBS:Nyan Mouse-cache
EELAYER 24 0
EELAYER END
$Descr USLetter 11000 8500
encoding utf-8
Sheet 1 5
Title "Nyan Mouse"
Date "24 apr 2014"
Rev "Alpha"
Comp "IEEE UCR"
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Sheet
S 4950 7350 550  400 
U 535488D9
F0 "3.3V led" 50
F1 "TPS62056_Production.sch" 50
F2 "VIN" O L 4950 7450 60 
F3 "GND" B L 4950 7550 60 
F4 "3.3VOUT" O L 4950 7650 60 
$EndSheet
$Comp
L CONN_2 P104
U 1 1 53548CC9
P 4550 7200
F 0 "P104" V 4500 7200 40  0000 C CNN
F 1 "CONN_2" V 4600 7200 40  0000 C CNN
F 2 "" H 4550 7200 60  0000 C CNN
F 3 "" H 4550 7200 60  0000 C CNN
	1    4550 7200
	-1   0    0    1   
$EndComp
$Comp
L CONN_2 P103
U 1 1 53548DF6
P 4550 6550
F 0 "P103" V 4500 6550 40  0000 C CNN
F 1 "CONN_2" V 4600 6550 40  0000 C CNN
F 2 "" H 4550 6550 60  0000 C CNN
F 3 "" H 4550 6550 60  0000 C CNN
	1    4550 6550
	-1   0    0    1   
$EndComp
$Comp
L GNDPWR #PWR114
U 1 1 53549116
P 4550 7650
F 0 "#PWR114" H 4550 7700 40  0001 C CNN
F 1 "GNDPWR" H 4550 7570 40  0000 C CNN
F 2 "" H 4550 7650 60  0000 C CNN
F 3 "" H 4550 7650 60  0000 C CNN
	1    4550 7650
	1    0    0    -1  
$EndComp
$Comp
L +3.3VP #PWR116
U 1 1 535491E8
P 4850 7650
F 0 "#PWR116" H 4900 7680 20  0001 C CNN
F 1 "+3.3VP" H 4850 7740 30  0000 C CNN
F 2 "" H 4850 7650 60  0000 C CNN
F 3 "" H 4850 7650 60  0000 C CNN
	1    4850 7650
	-1   0    0    1   
$EndComp
Wire Wire Line
	4950 7650 4850 7650
$Comp
L +3.3VA #PWR113
U 1 1 53549499
P 3800 7000
F 0 "#PWR113" H 3800 7120 20  0001 C CNN
F 1 "+3.3VA" H 3800 7090 30  0000 C CNN
F 2 "" H 3800 7000 60  0000 C CNN
F 3 "" H 3800 7000 60  0000 C CNN
	1    3800 7000
	1    0    0    -1  
$EndComp
Wire Wire Line
	4950 7550 4550 7550
Wire Wire Line
	4550 7550 4550 7650
Wire Wire Line
	4900 7550 4900 7300
Connection ~ 4900 7550
Wire Wire Line
	4900 6600 4900 7100
Wire Wire Line
	4900 6900 4950 6900
Connection ~ 4900 6900
Wire Wire Line
	4350 7000 4950 7000
$Comp
L INDUCTOR_SMALL L101
U 1 1 53549AE2
P 4100 7000
F 0 "L101" H 4100 7100 50  0000 C CNN
F 1 "INDUCTOR_SMALL" H 4100 6950 50  0000 C CNN
F 2 "" H 4100 7000 60  0000 C CNN
F 3 "" H 4100 7000 60  0000 C CNN
	1    4100 7000
	1    0    0    -1  
$EndComp
Connection ~ 4750 7000
$Comp
L +3.3VD #PWR115
U 1 1 53549C57
P 4750 7000
F 0 "#PWR115" H 4750 6960 30  0001 C CNN
F 1 "+3.3VD" H 4750 7110 30  0000 C CNN
F 2 "" H 4750 7000 60  0000 C CNN
F 3 "" H 4750 7000 60  0000 C CNN
	1    4750 7000
	1    0    0    -1  
$EndComp
Wire Wire Line
	3850 7000 3800 7000
$Comp
L AGND #PWR117
U 1 1 53549E16
P 4900 6600
F 0 "#PWR117" H 4900 6600 40  0001 C CNN
F 1 "AGND" H 4900 6530 50  0000 C CNN
F 2 "" H 4900 6600 60  0000 C CNN
F 3 "" H 4900 6600 60  0000 C CNN
	1    4900 6600
	-1   0    0    1   
$EndComp
Connection ~ 4900 6650
$Comp
L DGND #PWR118
U 1 1 53549E8D
P 5100 6500
F 0 "#PWR118" H 5100 6500 40  0001 C CNN
F 1 "DGND" H 5100 6430 40  0000 C CNN
F 2 "" H 5100 6500 60  0000 C CNN
F 3 "" H 5100 6500 60  0000 C CNN
	1    5100 6500
	1    0    0    -1  
$EndComp
Wire Wire Line
	5100 6500 5100 6450
Wire Wire Line
	5100 6450 4900 6450
$Comp
L BATTBALANCE-2S M101
U 1 1 5354B0E6
P 800 7550
F 0 "M101" H 650 7750 60  0000 C CNN
F 1 "BATTBALANCE-2S" H 975 7325 60  0000 C CNN
F 2 "" H 800 7550 60  0000 C CNN
F 3 "" H 800 7550 60  0000 C CNN
	1    800  7550
	1    0    0    -1  
$EndComp
$Comp
L AGND #PWR104
U 1 1 5354B262
P 1400 7850
F 0 "#PWR104" H 1400 7850 40  0001 C CNN
F 1 "AGND" H 1400 7780 50  0000 C CNN
F 2 "" H 1400 7850 60  0000 C CNN
F 3 "" H 1400 7850 60  0000 C CNN
	1    1400 7850
	1    0    0    -1  
$EndComp
Wire Wire Line
	1400 7650 1400 7850
Wire Wire Line
	1400 7650 1250 7650
$Comp
L +BATT #PWR103
U 1 1 5354B2BC
P 1400 7400
F 0 "#PWR103" H 1400 7350 20  0001 C CNN
F 1 "+BATT" H 1400 7500 30  0000 C CNN
F 2 "" H 1400 7400 60  0000 C CNN
F 3 "" H 1400 7400 60  0000 C CNN
	1    1400 7400
	1    0    0    -1  
$EndComp
Wire Wire Line
	1400 7400 1400 7450
Wire Wire Line
	1400 7450 1250 7450
$Comp
L CP1 C101
U 1 1 5356CBBC
P 700 6200
F 0 "C101" H 750 6300 50  0000 L CNN
F 1 "470uF" H 750 6100 50  0000 L CNN
F 2 "" H 700 6200 60  0000 C CNN
F 3 "" H 700 6200 60  0000 C CNN
	1    700  6200
	1    0    0    -1  
$EndComp
$Comp
L +BATT #PWR101
U 1 1 5356CC65
P 700 5900
F 0 "#PWR101" H 700 5850 20  0001 C CNN
F 1 "+BATT" H 700 6000 30  0000 C CNN
F 2 "" H 700 5900 60  0000 C CNN
F 3 "" H 700 5900 60  0000 C CNN
	1    700  5900
	1    0    0    -1  
$EndComp
$Comp
L AGND #PWR102
U 1 1 5356CEA2
P 700 6500
F 0 "#PWR102" H 700 6500 40  0001 C CNN
F 1 "AGND" H 700 6430 50  0000 C CNN
F 2 "" H 700 6500 60  0000 C CNN
F 3 "" H 700 6500 60  0000 C CNN
	1    700  6500
	1    0    0    -1  
$EndComp
Wire Wire Line
	700  6400 700  6500
Wire Wire Line
	700  5900 700  6000
$Comp
L CP1 C102
U 1 1 5356CFDB
P 1100 6200
F 0 "C102" H 1150 6300 50  0000 L CNN
F 1 "100uF" H 1150 6100 50  0000 L CNN
F 2 "" H 1100 6200 60  0000 C CNN
F 3 "" H 1100 6200 60  0000 C CNN
	1    1100 6200
	1    0    0    -1  
$EndComp
Wire Wire Line
	700  6450 1100 6450
Wire Wire Line
	1100 6450 1100 6400
Connection ~ 700  6450
Wire Wire Line
	1100 6000 1100 5950
Wire Wire Line
	1100 5950 700  5950
Connection ~ 700  5950
Text Notes 3450 7950 0    60   ~ 0
"Connectors" for ground plane common reference point
$Sheet
S 8850 2200 1150 500 
U 5356EB92
F0 "connectors and lights" 50
F1 "connectors_and_lights.sch" 50
F2 "SDI" O L 8850 2350 60 
F3 "nOE" O L 8850 2250 60 
F4 "RCLK" O L 8850 2650 60 
F5 "SCLK" O L 8850 2450 60 
F6 "SDO" I L 8850 2550 60 
$EndSheet
$Comp
L +BATT #PWR112
U 1 1 53574AB5
P 3500 6650
F 0 "#PWR112" H 3500 6600 20  0001 C CNN
F 1 "+BATT" H 3500 6750 30  0000 C CNN
F 2 "" H 3500 6650 60  0000 C CNN
F 3 "" H 3500 6650 60  0000 C CNN
	1    3500 6650
	1    0    0    -1  
$EndComp
Wire Wire Line
	4950 6800 3500 6800
Wire Wire Line
	3500 6650 3500 7450
Wire Wire Line
	3500 7450 4950 7450
Connection ~ 3500 6800
$Sheet
S 4950 6700 550  400 
U 53573052
F0 "3.3V logic" 50
F1 "TPS62056_Production.sch" 50
F2 "VIN" O L 4950 6800 60 
F3 "GND" B L 4950 6900 60 
F4 "3.3VOUT" O L 4950 7000 60 
$EndSheet
Wire Wire Line
	5600 2600 5200 2600
Wire Wire Line
	5600 2700 5200 2700
Wire Wire Line
	5600 2800 5200 2800
Wire Wire Line
	5600 2900 5200 2900
Wire Wire Line
	5600 3000 5200 3000
Wire Wire Line
	5600 3100 5200 3100
$Comp
L AGND #PWR119
U 1 1 5357AB90
P 5450 3400
F 0 "#PWR119" H 5450 3400 40  0001 C CNN
F 1 "AGND" H 5450 3330 50  0000 C CNN
F 2 "" H 5450 3400 60  0000 C CNN
F 3 "" H 5450 3400 60  0000 C CNN
	1    5450 3400
	0    1    1    0   
$EndComp
Wire Wire Line
	8850 2250 8700 2250
Wire Wire Line
	8700 2000 8700 2900
Wire Wire Line
	8700 2000 6400 2000
Wire Wire Line
	8850 2350 8650 2350
Wire Wire Line
	8650 2350 8650 2100
Wire Wire Line
	8650 2100 6400 2100
Wire Wire Line
	8850 2450 8600 2450
Wire Wire Line
	8600 2200 8600 3100
Wire Wire Line
	8850 2650 8550 2650
Wire Wire Line
	8550 2300 8550 3200
Wire Wire Line
	8550 2300 6400 2300
$Comp
L +3.3VD #PWR129
U 1 1 5357CEC1
P 8300 1400
F 0 "#PWR129" H 8300 1360 30  0001 C CNN
F 1 "+3.3VD" H 8300 1510 30  0000 C CNN
F 2 "" H 8300 1400 60  0000 C CNN
F 3 "" H 8300 1400 60  0000 C CNN
	1    8300 1400
	1    0    0    -1  
$EndComp
Wire Wire Line
	8300 1400 8300 1450
$Sheet
S 8850 2850 1150 500 
U 5357B85C
F0 "sensors" 50
F1 "BIGBOOM_SENSORS.sch" 50
F2 "nOE" O L 8850 2900 60 
F3 "RCLK" O L 8850 3200 60 
F4 "SCLK" O L 8850 3100 60 
F5 "SDI" O L 8850 3000 60 
F6 "re[1..6]" I L 8850 3300 60 
$EndSheet
Wire Wire Line
	8550 3200 8850 3200
Connection ~ 8550 2650
Wire Wire Line
	8600 3100 8850 3100
Connection ~ 8600 2450
Wire Wire Line
	8850 3000 8650 3000
Wire Wire Line
	8650 3000 8650 2550
Wire Wire Line
	8650 2550 8850 2550
Wire Wire Line
	8700 2900 8850 2900
Connection ~ 8700 2250
$Comp
L R R101
U 1 1 5357CE6B
P 8300 1700
F 0 "R101" V 8380 1700 40  0000 C CNN
F 1 "10k" V 8307 1701 40  0000 C CNN
F 2 "" V 8230 1700 30  0000 C CNN
F 3 "" H 8300 1700 30  0000 C CNN
	1    8300 1700
	1    0    0    -1  
$EndComp
Wire Wire Line
	8600 2200 6400 2200
Wire Wire Line
	8300 1950 8300 2000
Connection ~ 8300 2000
Text Notes 6500 2000 0    60   ~ 0
~output enable
Text Notes 6500 2100 0    60   ~ 0
SPI_SDI
Text Notes 6500 2200 0    60   ~ 0
SPI_SCK
Text Notes 6500 2300 0    60   ~ 0
SPI_Word
Text Label 5300 2600 0    60   ~ 0
re1
Text Label 5300 2700 0    60   ~ 0
re2
Text Label 5300 2800 0    60   ~ 0
re3
Text Label 5300 2900 0    60   ~ 0
re4
Text Label 5300 3000 0    60   ~ 0
re5
Text Label 5300 3100 0    60   ~ 0
re6
Wire Bus Line
	8850 3300 8600 3550
Wire Bus Line
	5100 3750 8600 3750
Wire Bus Line
	5100 2700 5100 3750
Entry Wire Line
	5100 2700 5200 2600
Entry Wire Line
	5100 2800 5200 2700
Entry Wire Line
	5100 2900 5200 2800
Entry Wire Line
	5100 3000 5200 2900
Entry Wire Line
	5100 3100 5200 3000
Entry Wire Line
	5100 3200 5200 3100
Text Label 5800 3750 0    60   ~ 0
re[1..6]
$Comp
L DGND #PWR122
U 1 1 53589B21
P 6500 3400
F 0 "#PWR122" H 6500 3400 40  0001 C CNN
F 1 "DGND" H 6500 3330 40  0000 C CNN
F 2 "" H 6500 3400 60  0000 C CNN
F 3 "" H 6500 3400 60  0000 C CNN
	1    6500 3400
	0    -1   -1   0   
$EndComp
Wire Wire Line
	6400 3400 6500 3400
Connection ~ 6450 3400
Wire Wire Line
	6400 3500 6450 3500
Wire Wire Line
	6400 1600 6450 1600
Wire Wire Line
	6400 1700 6500 1700
Connection ~ 6450 1700
Wire Wire Line
	6400 1800 6450 1800
$Comp
L +3.3VA #PWR120
U 1 1 5358A52D
P 5500 1700
F 0 "#PWR120" H 5500 1820 20  0001 C CNN
F 1 "+3.3VA" H 5500 1790 30  0000 C CNN
F 2 "" H 5500 1700 60  0000 C CNN
F 3 "" H 5500 1700 60  0000 C CNN
	1    5500 1700
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5600 1800 5550 1800
Wire Wire Line
	5550 1800 5550 1600
Wire Wire Line
	5550 1600 5600 1600
Wire Wire Line
	5600 1700 5500 1700
Connection ~ 5550 1700
$Comp
L DRV8837 U101
U 1 1 5358B7EF
P 7800 4650
F 0 "U101" H 7850 3800 60  0000 C CNN
F 1 "DRV8837" H 8000 4700 60  0000 C CNN
F 2 "" H 7800 4750 60  0000 C CNN
F 3 "" H 7800 4750 60  0000 C CNN
	1    7800 4650
	1    0    0    -1  
$EndComp
Wire Wire Line
	7450 5350 7500 5350
Wire Wire Line
	7450 4700 7450 5350
Wire Wire Line
	7450 4850 7500 4850
$Comp
L +BATT #PWR125
U 1 1 5358BF77
P 7350 4700
F 0 "#PWR125" H 7350 4650 20  0001 C CNN
F 1 "+BATT" H 7350 4800 30  0000 C CNN
F 2 "" H 7350 4700 60  0000 C CNN
F 3 "" H 7350 4700 60  0000 C CNN
	1    7350 4700
	-1   0    0    -1  
$EndComp
$Comp
L +3.3VD #PWR127
U 1 1 5358BF8B
P 7450 4700
F 0 "#PWR127" H 7450 4660 30  0001 C CNN
F 1 "+3.3VD" H 7450 4810 30  0000 C CNN
F 2 "" H 7450 4700 60  0000 C CNN
F 3 "" H 7450 4700 60  0000 C CNN
	1    7450 4700
	-1   0    0    -1  
$EndComp
Connection ~ 7450 4850
Wire Wire Line
	7500 4750 7350 4750
Wire Wire Line
	7350 4750 7350 4700
$Comp
L DGND #PWR130
U 1 1 5358C3F5
P 8950 5400
F 0 "#PWR130" H 8950 5400 40  0001 C CNN
F 1 "DGND" H 8950 5330 40  0000 C CNN
F 2 "" H 8950 5400 60  0000 C CNN
F 3 "" H 8950 5400 60  0000 C CNN
	1    8950 5400
	-1   0    0    -1  
$EndComp
Wire Wire Line
	8900 5350 8950 5350
Wire Wire Line
	8950 5350 8950 5400
$Comp
L DRV8837 U102
U 1 1 5358C8B9
P 7800 5650
F 0 "U102" H 7850 4800 60  0000 C CNN
F 1 "DRV8837" H 8000 5700 60  0000 C CNN
F 2 "" H 7800 5750 60  0000 C CNN
F 3 "" H 7800 5750 60  0000 C CNN
	1    7800 5650
	1    0    0    -1  
$EndComp
Wire Wire Line
	7450 6350 7500 6350
Wire Wire Line
	7450 5700 7450 6350
Wire Wire Line
	7450 5850 7500 5850
$Comp
L +BATT #PWR126
U 1 1 5358C8C2
P 7350 5700
F 0 "#PWR126" H 7350 5650 20  0001 C CNN
F 1 "+BATT" H 7350 5800 30  0000 C CNN
F 2 "" H 7350 5700 60  0000 C CNN
F 3 "" H 7350 5700 60  0000 C CNN
	1    7350 5700
	-1   0    0    -1  
$EndComp
$Comp
L +3.3VD #PWR128
U 1 1 5358C8C8
P 7450 5700
F 0 "#PWR128" H 7450 5660 30  0001 C CNN
F 1 "+3.3VD" H 7450 5810 30  0000 C CNN
F 2 "" H 7450 5700 60  0000 C CNN
F 3 "" H 7450 5700 60  0000 C CNN
	1    7450 5700
	-1   0    0    -1  
$EndComp
Connection ~ 7450 5850
Wire Wire Line
	7500 5750 7350 5750
Wire Wire Line
	7350 5750 7350 5700
$Comp
L DGND #PWR131
U 1 1 5358C8D1
P 8950 6400
F 0 "#PWR131" H 8950 6400 40  0001 C CNN
F 1 "DGND" H 8950 6330 40  0000 C CNN
F 2 "" H 8950 6400 60  0000 C CNN
F 3 "" H 8950 6400 60  0000 C CNN
	1    8950 6400
	-1   0    0    -1  
$EndComp
Wire Wire Line
	8900 6350 8950 6350
Wire Wire Line
	8950 6350 8950 6400
Text Notes 6500 3200 0    60   ~ 0
drvb2
Text Notes 6500 3100 0    60   ~ 0
drvb1
Text Notes 6500 3000 0    60   ~ 0
drva2
Text Notes 6500 2900 0    60   ~ 0
drva1
$Comp
L CONN_4 P102
U 1 1 53589A0D
P 8050 900
F 0 "P102" V 8000 900 50  0000 C CNN
F 1 "CONN_4" V 8100 900 50  0000 C CNN
F 2 "" H 8050 900 60  0000 C CNN
F 3 "" H 8050 900 60  0000 C CNN
	1    8050 900 
	1    0    0    -1  
$EndComp
$Comp
L +3.3VD #PWR123
U 1 1 53589A81
P 7650 700
F 0 "#PWR123" H 7650 660 30  0001 C CNN
F 1 "+3.3VD" H 7650 810 30  0000 C CNN
F 2 "" H 7650 700 60  0000 C CNN
F 3 "" H 7650 700 60  0000 C CNN
	1    7650 700 
	1    0    0    -1  
$EndComp
$Comp
L DGND #PWR124
U 1 1 53589B94
P 7650 1100
F 0 "#PWR124" H 7650 1100 40  0001 C CNN
F 1 "DGND" H 7650 1030 40  0000 C CNN
F 2 "" H 7650 1100 60  0000 C CNN
F 3 "" H 7650 1100 60  0000 C CNN
	1    7650 1100
	1    0    0    -1  
$EndComp
Wire Wire Line
	7700 850  7650 850 
Wire Wire Line
	7650 850  7650 1100
Wire Wire Line
	7700 750  7650 750 
Wire Wire Line
	7650 750  7650 700 
Text Notes 6500 2400 0    60   ~ 0
TX
Text Notes 6500 2500 0    60   ~ 0
RX
NoConn ~ 5600 2300
NoConn ~ 1250 7550
$Comp
L AGND #PWR105
U 1 1 5358DF21
P 1900 7800
F 0 "#PWR105" H 1900 7800 40  0001 C CNN
F 1 "AGND" H 1900 7730 50  0000 C CNN
F 2 "" H 1900 7800 60  0000 C CNN
F 3 "" H 1900 7800 60  0000 C CNN
	1    1900 7800
	1    0    0    -1  
$EndComp
$Comp
L DGND #PWR106
U 1 1 5358DFC5
P 2100 7800
F 0 "#PWR106" H 2100 7800 40  0001 C CNN
F 1 "DGND" H 2100 7730 40  0000 C CNN
F 2 "" H 2100 7800 60  0000 C CNN
F 3 "" H 2100 7800 60  0000 C CNN
	1    2100 7800
	1    0    0    -1  
$EndComp
$Comp
L GNDPWR #PWR107
U 1 1 5358E168
P 2300 7800
F 0 "#PWR107" H 2300 7850 40  0001 C CNN
F 1 "GNDPWR" H 2300 7720 40  0000 C CNN
F 2 "" H 2300 7800 60  0000 C CNN
F 3 "" H 2300 7800 60  0000 C CNN
	1    2300 7800
	1    0    0    -1  
$EndComp
$Comp
L +3.3VD #PWR108
U 1 1 5358E29C
P 2500 7500
F 0 "#PWR108" H 2500 7460 30  0001 C CNN
F 1 "+3.3VD" H 2500 7610 30  0000 C CNN
F 2 "" H 2500 7500 60  0000 C CNN
F 3 "" H 2500 7500 60  0000 C CNN
	1    2500 7500
	1    0    0    -1  
$EndComp
$Comp
L +3.3VA #PWR109
U 1 1 5358E2B0
P 2700 7500
F 0 "#PWR109" H 2700 7620 20  0001 C CNN
F 1 "+3.3VA" H 2700 7590 30  0000 C CNN
F 2 "" H 2700 7500 60  0000 C CNN
F 3 "" H 2700 7500 60  0000 C CNN
	1    2700 7500
	1    0    0    -1  
$EndComp
$Comp
L +3.3VP #PWR110
U 1 1 5358E71E
P 2900 7500
F 0 "#PWR110" H 2950 7530 20  0001 C CNN
F 1 "+3.3VP" H 2900 7590 30  0000 C CNN
F 2 "" H 2900 7500 60  0000 C CNN
F 3 "" H 2900 7500 60  0000 C CNN
	1    2900 7500
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG103
U 1 1 5358E9A2
P 2300 7500
F 0 "#FLG103" H 2300 7595 30  0001 C CNN
F 1 "PWR_FLAG" H 2300 7680 30  0000 C CNN
F 2 "" H 2300 7500 60  0000 C CNN
F 3 "" H 2300 7500 60  0000 C CNN
	1    2300 7500
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG102
U 1 1 5358E9B4
P 2100 7500
F 0 "#FLG102" H 2100 7595 30  0001 C CNN
F 1 "PWR_FLAG" H 2100 7680 30  0000 C CNN
F 2 "" H 2100 7500 60  0000 C CNN
F 3 "" H 2100 7500 60  0000 C CNN
	1    2100 7500
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG101
U 1 1 5358E9BF
P 1900 7500
F 0 "#FLG101" H 1900 7595 30  0001 C CNN
F 1 "PWR_FLAG" H 1900 7680 30  0000 C CNN
F 2 "" H 1900 7500 60  0000 C CNN
F 3 "" H 1900 7500 60  0000 C CNN
	1    1900 7500
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG104
U 1 1 5358E9CA
P 2500 7800
F 0 "#FLG104" H 2500 7895 30  0001 C CNN
F 1 "PWR_FLAG" H 2500 7980 30  0000 C CNN
F 2 "" H 2500 7800 60  0000 C CNN
F 3 "" H 2500 7800 60  0000 C CNN
	1    2500 7800
	-1   0    0    1   
$EndComp
$Comp
L PWR_FLAG #FLG105
U 1 1 5358E9D5
P 2700 7800
F 0 "#FLG105" H 2700 7895 30  0001 C CNN
F 1 "PWR_FLAG" H 2700 7980 30  0000 C CNN
F 2 "" H 2700 7800 60  0000 C CNN
F 3 "" H 2700 7800 60  0000 C CNN
	1    2700 7800
	-1   0    0    1   
$EndComp
$Comp
L PWR_FLAG #FLG106
U 1 1 5358EAA0
P 2900 7800
F 0 "#FLG106" H 2900 7895 30  0001 C CNN
F 1 "PWR_FLAG" H 2900 7980 30  0000 C CNN
F 2 "" H 2900 7800 60  0000 C CNN
F 3 "" H 2900 7800 60  0000 C CNN
	1    2900 7800
	-1   0    0    1   
$EndComp
Wire Wire Line
	2900 7500 2900 7800
Wire Wire Line
	2700 7500 2700 7800
Wire Wire Line
	2500 7500 2500 7800
Wire Wire Line
	2300 7500 2300 7800
Wire Wire Line
	2100 7500 2100 7800
Wire Wire Line
	1900 7500 1900 7800
$Comp
L +BATT #PWR111
U 1 1 5358FEC9
P 3100 7500
F 0 "#PWR111" H 3100 7450 20  0001 C CNN
F 1 "+BATT" H 3100 7600 30  0000 C CNN
F 2 "" H 3100 7500 60  0000 C CNN
F 3 "" H 3100 7500 60  0000 C CNN
	1    3100 7500
	1    0    0    -1  
$EndComp
Wire Wire Line
	3100 7500 3100 7800
$Comp
L PWR_FLAG #FLG107
U 1 1 5358FF8B
P 3100 7800
F 0 "#FLG107" H 3100 7895 30  0001 C CNN
F 1 "PWR_FLAG" H 3100 7980 30  0000 C CNN
F 2 "" H 3100 7800 60  0000 C CNN
F 3 "" H 3100 7800 60  0000 C CNN
	1    3100 7800
	-1   0    0    1   
$EndComp
Wire Wire Line
	5600 3200 5200 3200
Text Label 5300 3200 0    60   ~ 0
gyro_a
Wire Wire Line
	6400 2900 7250 2900
Wire Wire Line
	7250 2900 7250 5050
Wire Wire Line
	7200 3000 7200 5150
Wire Wire Line
	7200 3000 6400 3000
Wire Wire Line
	6400 3100 7100 3100
Wire Wire Line
	7100 3100 7100 6050
Wire Wire Line
	7050 3200 7050 6150
Wire Wire Line
	7050 3200 6400 3200
NoConn ~ 5600 2200
NoConn ~ 5600 2100
NoConn ~ 5600 2000
NoConn ~ 5600 1900
Wire Wire Line
	7350 1050 7700 1050
Wire Wire Line
	7300 950  7700 950 
Wire Wire Line
	6450 1800 6450 1600
$Comp
L +3.3VD #PWR121
U 1 1 53594C23
P 6500 1700
F 0 "#PWR121" H 6500 1660 30  0001 C CNN
F 1 "+3.3VD" H 6500 1810 30  0000 C CNN
F 2 "" H 6500 1700 60  0000 C CNN
F 3 "" H 6500 1700 60  0000 C CNN
	1    6500 1700
	0    1    1    0   
$EndComp
Wire Wire Line
	6450 3300 6400 3300
Wire Wire Line
	7350 2500 6400 2500
Wire Wire Line
	6400 2400 7300 2400
$Comp
L CONN_20X2 P101
U 1 1 53572DFB
P 6000 2550
F 0 "P101" H 6000 3600 60  0000 C CNN
F 1 "Controller Connector" V 6000 2550 50  0000 C CNN
F 2 "" H 6000 2550 60  0000 C CNN
F 3 "" H 6000 2550 60  0000 C CNN
	1    6000 2550
	1    0    0    -1  
$EndComp
Wire Bus Line
	8600 3750 8600 3550
Wire Wire Line
	5450 3400 5600 3400
Wire Wire Line
	5550 3300 5550 3500
Wire Wire Line
	5550 3300 5600 3300
Connection ~ 5550 3400
Wire Wire Line
	5550 3500 5600 3500
Wire Wire Line
	6450 3500 6450 3300
NoConn ~ 5600 2400
NoConn ~ 5600 2500
Wire Wire Line
	6400 2600 7150 2600
Wire Wire Line
	6400 2700 7150 2700
Wire Wire Line
	6400 2800 7150 2800
Text Label 6500 2600 0    60   ~ 0
I2S_SCK
Text Label 6500 2700 0    60   ~ 0
I2S_WS
Text Label 6500 2800 0    60   ~ 0
I2S_SD
Text Notes 7400 6650 0    60   ~ 0
kevin, have you finished the layout for these yet?
NoConn ~ 6400 1900
Text Notes 3250 5400 0    60   ~ 0
This is a todo section\n- Motor symbol & component\n- I2S DAC Symbol & Component\n- Audio Amplifier Symbol & Component\n- Speaker Wiring (Symbol & Component)\n- Gyro Symbol & Component
Text Notes 4200 3250 0    60   ~ 0
SPI Bus Layout from MSB\nX\nX\nIR 5\nIR 4\nIR 3\nIR 2\nIR 1\n\nX\nX\nX\nX\nLED Color 3\nLED Color 2\nLED Color 1\nLED Select 9\n\nLED Select 8\nLED Select 7\nLED Select 6\nLED Select 5\nLED Select 4\nLED Select 3\nLED Select 2\nLED Select 1
Wire Notes Line
	6200 5650 6200 8000
Wire Notes Line
	6200 5650 500  5650
Wire Notes Line
	500  5650 500  8000
Wire Notes Line
	500  8000 6200 8000
Text Notes 3150 5900 0    100  ~ 0
POWER
Wire Wire Line
	7250 5050 7500 5050
Wire Wire Line
	7200 5150 7500 5150
Wire Wire Line
	7100 6050 7500 6050
Wire Wire Line
	7050 6150 7500 6150
Wire Notes Line
	6350 3850 6350 6700
Wire Notes Line
	6350 6700 10450 6700
Wire Notes Line
	10450 6700 10450 3850
Wire Notes Line
	10450 3850 6350 3850
Text Notes 9450 4050 0    100  ~ 0
LOCOMOTION
Wire Wire Line
	7300 2400 7300 950 
Wire Wire Line
	7350 2500 7350 1050
Wire Notes Line
	6700 500  6700 1850
Wire Notes Line
	6700 1850 8200 1850
Wire Notes Line
	8200 1850 8200 500 
Wire Notes Line
	8200 500  6700 500 
Text Notes 6750 800  0    100  ~ 0
TELEMETRY
Wire Notes Line
	7150 1900 7150 3800
Wire Notes Line
	7150 3800 10450 3800
Wire Notes Line
	10450 3800 10450 1900
Wire Notes Line
	10450 1900 7150 1900
Text Notes 9000 3750 0    100  ~ 0
NYAN + CAT\n+ SENSORS
Text Notes 8350 1500 0    60   ~ 0
Pullup resistor for FPGA High-Z
$EndSCHEMATC
