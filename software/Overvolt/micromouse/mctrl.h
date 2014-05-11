#ifndef mCtrl_h
#define mCtrl_h

#include "Arduino.h"

class mCtrl{
  public:
    mCtrl(const byte iMotorSpeed, const boolean oDirection,
     const byte bMotorLeftPin, const byte bMotorRightPin,
     const byte bMotorLeftPWM, const byte bMotorRightPWM, 
     const unsigned long bMillisDelay, const float fP, const byte bSampleSize);
    /*
      as a constructor, we need many values to get everything to work:
      default motor speed, default motor direction
      l motor pin0, l motor pin1, r motor pin0, r motor pin1,
      l motor pwm, r motor pwm, milliseconds to delay for soft starting/stopping and pid,
      proportional constant, integral constant, derivative constant,
      initial sample size
    */
    void straightLine(const uint32_t&, const uint32_t&);                 // use a control algorithm to make everything go straight
    void slowDown();                     // slowdown
    void speedUp();                      // speedup
    void emergencyStop();                // HARD slowdown!  (requires the motor encoders for active braking before implementation)
    void changeSpeed(const byte);        // change the speed "goals"
    void turnLeft();                     // turns one wheel off and uses the other for "soft turns"
    void turnRight();                    // turns one wheel off and uses the other for "soft turns"
    void turnAround(const boolean);
    void switchDirection(const boolean); // only has forward or backward at this time, requires more implementation
    void frictionStop();                 // use the natural friction generated to stop the mouse.  it's not a very elegant way to stop, but it works
    const byte motorSpeedGoal() const;   // calculate the motor speed goal
    const byte motorSpeedAt() const;     // calculate the current motor speed
    void calibrateSensors();             // calibrate sensors
    void setSensorRange(const int lsensorRange, const int rsensorRange);
    void layInSpeed();
  private:
    byte bMotorLeftSpeedGoal;
    byte bMotorRightSpeedGoal;
      // the goal speeds are the speeds that we *want* the motors
    byte bMotorLeftCurrent;
    byte bMotorRightCurrent;
      // the current speeds are where the motors are set at for now
    boolean oDirection;
      // the direction of course is the direction in which the mouse is going
    byte bMotorLeftPin;
    byte bMotorRightPin;
      // these pins determine the rotational direction of the motors
    byte bMotorLeftPWM;
    byte bMotorRightPWM;
      // these pins are for the speed control of the motors
    unsigned long bMillisDelay;
      // this is for the delay between speed steps
    unsigned int leftSensorCalibrate;
    unsigned int rightSensorCalibrate;
      // this is for the calibrated sensor values
    float fP;
      // These are floating point values that determine how the PID control works.
    byte bSampleSize;
      // so we know how many samples to take at the beginning
    int lSensorPIDIgnore;
    int rSensorPIDIgnore;
};
#endif
