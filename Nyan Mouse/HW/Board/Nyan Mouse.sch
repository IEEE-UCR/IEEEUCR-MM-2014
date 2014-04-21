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
LIBS:altera_ep4ce15e22c*n
LIBS:Nyan Mouse-cache
EELAYER 24 0
EELAYER END
$Descr USLetter 11000 8500
encoding utf-8
Sheet 1 4
Title "Nyan Mouse"
Date "20 Apr 2014"
Rev "Alpha"
Comp "IEEE UCR"
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Sheet
S 9200 5500 550  400 
U 53547798
F0 "3.3V logic" 50
F1 "TPS62056_Production.sch" 50
F2 "VIN" O L 9200 5600 60 
F3 "GND" B L 9200 5700 60 
F4 "3.3VOUT" O L 9200 5800 60 
$EndSheet
$Sheet
S 9200 6150 550  400 
U 535488D9
F0 "3.3V led" 50
F1 "TPS62056_Production.sch" 50
F2 "VIN" O L 9200 6250 60 
F3 "GND" B L 9200 6350 60 
F4 "3.3VOUT" O L 9200 6450 60 
$EndSheet
$Comp
L CONN_2 P?
U 1 1 53548CC9
P 8800 6000
F 0 "P?" V 8750 6000 40  0000 C CNN
F 1 "CONN_2" V 8850 6000 40  0000 C CNN
F 2 "" H 8800 6000 60  0000 C CNN
F 3 "" H 8800 6000 60  0000 C CNN
	1    8800 6000
	-1   0    0    1   
$EndComp
$Comp
L CONN_2 P?
U 1 1 53548DF6
P 8800 5350
F 0 "P?" V 8750 5350 40  0000 C CNN
F 1 "CONN_2" V 8850 5350 40  0000 C CNN
F 2 "" H 8800 5350 60  0000 C CNN
F 3 "" H 8800 5350 60  0000 C CNN
	1    8800 5350
	-1   0    0    1   
$EndComp
$Comp
L GNDPWR #PWR?
U 1 1 53549116
P 8800 6450
F 0 "#PWR?" H 8800 6500 40  0001 C CNN
F 1 "GNDPWR" H 8800 6370 40  0000 C CNN
F 2 "" H 8800 6450 60  0000 C CNN
F 3 "" H 8800 6450 60  0000 C CNN
	1    8800 6450
	1    0    0    -1  
$EndComp
$Comp
L +3.3VP #PWR?
U 1 1 535491E8
P 9100 6450
F 0 "#PWR?" H 9150 6480 20  0001 C CNN
F 1 "+3.3VP" H 9100 6540 30  0000 C CNN
F 2 "" H 9100 6450 60  0000 C CNN
F 3 "" H 9100 6450 60  0000 C CNN
	1    9100 6450
	-1   0    0    1   
$EndComp
Wire Wire Line
	9200 6450 9100 6450
$Comp
L +3.3VA #PWR?
U 1 1 53549499
P 9000 5800
F 0 "#PWR?" H 9000 5920 20  0001 C CNN
F 1 "+3.3VA" H 9000 5890 30  0000 C CNN
F 2 "" H 9000 5800 60  0000 C CNN
F 3 "" H 9000 5800 60  0000 C CNN
	1    9000 5800
	1    0    0    -1  
$EndComp
Wire Wire Line
	9200 6350 8800 6350
Wire Wire Line
	8800 6350 8800 6450
Wire Wire Line
	9150 6350 9150 6100
Connection ~ 9150 6350
Wire Wire Line
	9150 5400 9150 5900
Wire Wire Line
	9150 5700 9200 5700
Connection ~ 9150 5700
Wire Wire Line
	8600 5800 9200 5800
$Comp
L INDUCTOR_SMALL L?
U 1 1 53549AE2
P 8350 5800
F 0 "L?" H 8350 5900 50  0000 C CNN
F 1 "INDUCTOR_SMALL" H 8350 5750 50  0000 C CNN
F 2 "" H 8350 5800 60  0000 C CNN
F 3 "" H 8350 5800 60  0000 C CNN
	1    8350 5800
	1    0    0    -1  
$EndComp
Connection ~ 9000 5800
$Comp
L +3.3VD #PWR?
U 1 1 53549C57
P 8050 5800
F 0 "#PWR?" H 8050 5760 30  0001 C CNN
F 1 "+3.3VD" H 8050 5910 30  0000 C CNN
F 2 "" H 8050 5800 60  0000 C CNN
F 3 "" H 8050 5800 60  0000 C CNN
	1    8050 5800
	1    0    0    -1  
$EndComp
Wire Wire Line
	8100 5800 8050 5800
$Comp
L AGND #PWR?
U 1 1 53549E16
P 9150 5400
F 0 "#PWR?" H 9150 5400 40  0001 C CNN
F 1 "AGND" H 9150 5330 50  0000 C CNN
F 2 "" H 9150 5400 60  0000 C CNN
F 3 "" H 9150 5400 60  0000 C CNN
	1    9150 5400
	-1   0    0    1   
$EndComp
Connection ~ 9150 5450
$Comp
L DGND #PWR?
U 1 1 53549E8D
P 9350 5300
F 0 "#PWR?" H 9350 5300 40  0001 C CNN
F 1 "DGND" H 9350 5230 40  0000 C CNN
F 2 "" H 9350 5300 60  0000 C CNN
F 3 "" H 9350 5300 60  0000 C CNN
	1    9350 5300
	1    0    0    -1  
$EndComp
Wire Wire Line
	9350 5300 9350 5250
Wire Wire Line
	9350 5250 9150 5250
$Comp
L BATTBALANCE-2S M?
U 1 1 5354B0E6
P 7100 5900
F 0 "M?" H 6950 6100 60  0000 C CNN
F 1 "BATTBALANCE-2S" H 7275 5675 60  0000 C CNN
F 2 "" H 7100 5900 60  0000 C CNN
F 3 "" H 7100 5900 60  0000 C CNN
	1    7100 5900
	1    0    0    -1  
$EndComp
$Comp
L AGND #PWR?
U 1 1 5354B262
P 7700 6050
F 0 "#PWR?" H 7700 6050 40  0001 C CNN
F 1 "AGND" H 7700 5980 50  0000 C CNN
F 2 "" H 7700 6050 60  0000 C CNN
F 3 "" H 7700 6050 60  0000 C CNN
	1    7700 6050
	1    0    0    -1  
$EndComp
Wire Wire Line
	7700 6050 7700 6000
Wire Wire Line
	7700 6000 7550 6000
$Comp
L +BATT #PWR?
U 1 1 5354B2BC
P 7700 5750
F 0 "#PWR?" H 7700 5700 20  0001 C CNN
F 1 "+BATT" H 7700 5850 30  0000 C CNN
F 2 "" H 7700 5750 60  0000 C CNN
F 3 "" H 7700 5750 60  0000 C CNN
	1    7700 5750
	1    0    0    -1  
$EndComp
Wire Wire Line
	7700 5750 7700 5800
Wire Wire Line
	7700 5800 7550 5800
$Sheet
S 7500 2450 2350 1850
U 5354B86F
F0 "fpga" 50
F1 "fpga_not_sane.sch" 50
$EndSheet
$EndSCHEMATC