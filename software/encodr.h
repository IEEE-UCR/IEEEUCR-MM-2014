#ifndef encodr_h
#define encodr_h

#include "Arduino.h"

class encodr{
  public:
    boolean cellMark();
    uint32_t forceMark();
    boolean turnOk();
    void lMotorInc();
    void rMotorInc();
    encodr(const uint32_t wall, const uint32_t hafwal, const uint32_t wallLimit);
  private:
    volatile uint32_t lMotorEnc;
    volatile uint32_t rMotorEnc;
    uint32_t wallLength;
    uint32_t halfWall;
    uint32_t wallLim;
};

#endif
