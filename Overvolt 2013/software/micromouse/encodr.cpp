#include "encodr.h"
#include "Arduino.h"

encodr::encodr(const uint32_t wall, const uint32_t hafwall, const uint32_t wallLimit) {
                                               // set the mouse information into the encoder interface
  this->wallLength = wall;
  this->halfWall = hafwall;
  this->wallLim = wallLimit;
  this->lMotorEnc = 0;
  this->rMotorEnc = 0;
  
}

void encodr::lMotorInc() {                     // increment left motor
  this->lMotorEnc++;
}

void encodr::rMotorInc() {                     // increment right motor
  this->rMotorEnc++;
}

boolean encodr::cellMark() {
  if (this->lMotorEnc >= wallLength 
    && this->rMotorEnc >= wallLength ) {       // mark if greater than or equal to wall length
    this->rMotorEnc = this->rMotorEnc - wallLength;
    this->lMotorEnc = this->lMotorEnc - wallLength;
    return 1;
  }
  return 0;
}



uint32_t encodr::forceMark() {                 // forcibly marks a cell based (usually) on sensor readings
  boolean returnV = 0;
  int32_t lMotorDif = (rMotorEnc-wallLength);
  int32_t rMotorDif = (rMotorEnc-wallLength);
  if (abs(lMotorDif) < wallLim && abs(rMotorDif) < wallLim) {
    returnV = (lMotorDif + rMotorDif)/2;
  }
   this->rMotorEnc = 0;
   this->lMotorEnc = 0;
   return returnV;
}

boolean encodr::turnOk() {                     // makes it okay to turn...
  if ( (abs(rMotorEnc-halfWall) < 10) || (abs(lMotorEnc-halfWall) < 10) ) {
    return 1;
  }
  return 0;
}
