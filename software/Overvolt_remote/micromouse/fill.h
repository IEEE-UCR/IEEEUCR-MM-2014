#ifndef fill_h
#define fill_h
#include "Arduino.h"
#include "fill.cpp"
#define I_SIZE 16
#define J_SIZE 16
#define STACK_SIZE 128
struct cell_t {
  uint32_t iIndex;
  uint32_t jIndex;
};
class fill{
  public:
    //fill();
    uint32_t decide();
    void wallUp (uint32_t wallConfigLR);
    void wallFront ();
    void turnedLeft();
    void turnedRight();
    void turnedU();
  private:
    uint32_t wall[I_SIZE][J_SIZE];
    uint32_t working[I_SIZE][J_SIZE];
    cell_t stack[STACK_SIZE];
    uint32_t stack_size;
    uint32_t iPlace;
    uint32_t jPlace;
    boolean searched[I_SIZE][J_SIZE];
    void initiate(uint32_t &iPos, uint32_t &jPos);
};
#endif
