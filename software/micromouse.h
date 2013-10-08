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
enum turn_direction {left = 0, right = 1};

/*
 * Another thing that should be set forth is the direction that our mice would face...
 **/
enum face_direction {north = 0, east = 1, south = 2, west = 3};

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

#endif // from MICROMOUSE_HEADER
