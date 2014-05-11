#ifndef mCtrl_h
#define mCtrl_h

#include "Arduino.h"

class mCtrl{
  public:
    mCtrl(uint8_t lmotordir, uint8_t rmotordir, uint8_t lmotorpwm, uint8_t rmotorpwm); 
    // simple constructor that sets everything to zero
    void setspeedl(int16_t lspeed);
    void setspeedr(int16_t rspeed);
  private:
    uint8_t lmotordir;
    uint8_t rmotordir;
    uint8_t lmotorpwm;
    uint8_t rmotorpwm;
};
#endif
