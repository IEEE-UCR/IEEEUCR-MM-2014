#ifndef encodr_h
#define encodr_h

// Read the .cpp file for an explanation of what this all is.

#include "Arduino.h"

class encodr{
  public:
    boolean cellMark();
    uint32_t forceMark();
    boolean turnOk();
    void lMotorInc();
    void lMotorDec();
    void rMotorInc();
    void rMotorDec();
    encodr(const uint32_t wall, const uint32_t hafwal, const uint32_t wallLimit);
    volatile uint32_t lMotorEnc;
    volatile uint32_t rMotorEnc;
  private:
    uint32_t wallLength;
    uint32_t halfWall;
    uint32_t wallLim;
};

#endif
