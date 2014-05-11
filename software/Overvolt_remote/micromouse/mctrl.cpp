#include "mctrl.h"

mCtrl::mCtrl(uint8_t lmotordir, uint8_t rmotordir, uint8_t lmotorpwm, uint8_t rmotorpwm):
  lmotordir(lmotordir),
  rmotordir(rmotordir),
  lmotorpwm(lmotorpwm),
  rmotorpwm(rmotorpwm)
{}

void mCtrl::setspeedl(int16_t lspeed) {
  if (lspeed > 0) {
    digitalWrite(lmotordir, HIGH);
    analogWrite(lmotorpwm, lspeed);
  } else {
    digitalWrite(lmotordir, LOW);
    analogWrite(lmotorpwm, -lspeed);
  }
}  
void mCtrl::setspeedr(int16_t rspeed) {
  if (rspeed > 0) {
    digitalWrite(rmotordir, HIGH);
    analogWrite(rmotorpwm, rspeed);
  } else {
    digitalWrite(rmotordir, LOW);
    analogWrite(rmotorpwm, -rspeed);
  }
}
