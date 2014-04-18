#include "encodr.h"
#include "Arduino.h"

encodr::encodr(const uint32_t wall, const uint32_t hafwall, const uint32_t wallLimit) {
  this->wallLength = wall;
  this->halfWall = hafwall;
  this->wallLim = wallLimit;
  this->lMotorEnc = 0;
  this->rMotorEnc = 0;
  
}

void encodr::lMotorInc() {
  this->lMotorEnc++;
}

void encodr::rMotorInc() {
  this->rMotorEnc++;
}

boolean encodr::cellMark() {
  if (this->lMotorEnc >= wallLength && this->rMotorEnc >= wallLength ) {
    this->rMotorEnc = this->rMotorEnc - wallLength;
    this->lMotorEnc = this->lMotorEnc - wallLength;
    return 1;
  }
  return 0;
}



uint32_t encodr::forceMark() {
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

boolean encodr::turnOk() {
  if ( abs(rMotorEnc-halfWall) + abs(lMotorEnc-halfWall) < 20) {
    return 1;
  }
  return 0;
}
