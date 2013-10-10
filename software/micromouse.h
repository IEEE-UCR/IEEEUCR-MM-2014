/*
 *  ___      ___      __________      ________
 * |   |    |   |    /          |    |        \
 * |   |    |   |   /     .-----'    |  #####  |
 * |   |    |   |  |      |          |        /
 * |   |____|   |  |      |          | .----\ \
 * |            |   \     '-----.    | |     \ \
 * \____________/    \__________|    |_|      \_\
 *
 *                  Micromouse
 *                 Lineup  2013
 *                     and
 *                 Mouse Layout
 **/

#ifndef MICROMOUSE_HEADER
#define MICROMOUSE_HEADER

/*
 * Let's lay down a few ground rules to make our micromice run well.
 * The first thing is that our turn directions should follow this format...
 **/
enum eTurnDirection {left = 0, right = 1};

/*
 * Another thing that should be set forth is the direction that our mice would face...
 **/
enum eFaceDirection {north = 0, east = 1, south = 2, west = 3,
    northEast = 4, southEast = 5, southWest = 6, northWest = 7};

/*
 * What basically will go on from now is the declaration of our mouse IDs 
 * which will then define how our mice will be treated by the compiler 
 * (and ultimately save computation and human editing times)
 **/

#ifndef MOUSE_ID
/*
 * At the time that this code is written, it is written to run on Overvolt, so you have to bear with me.
 *
 * I should remind whoever is reading this that Overvolt is a generation 0 micromouse.  Generation 1
 * will probably begin with Nylon (Nylon's reserved MOUSE_ID is 0x1000...).
 * The leading HEX represents the generation number...
 **/
#define MOUSE_ID 0x0000
#endif 

/*
 * Here are some of the actual nylon pinouts...
 * Bear in mind that these are not intended for STM32 yet. (STM32 should come a bit later...)
 **/

#if MOUSE_ID = 0x0000

#define generation 0
#define layout 0

#define UARTtx 0
#define UARTrx 1

#define lMotorDir 7
#define rMotorDir 8
#define lMotorEn 9
#define rMotorEn 10

#define sensorPinL "A0"
#define sensorPinC "A1"
#define sensorPinR "A2"

#define lMotorEnc 11
#define rMotorEnc 12

#endif // from MOUSE_ID = 0x0000

#endif // from MICROMOUSE_HEADER
