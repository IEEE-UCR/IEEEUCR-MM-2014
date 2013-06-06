#include "Arduino.h"
#include "mctrl.h"
#define DEBUGMODE 0

/* This is the constructor function.
 * 
 * The constructor should take arguments and make them work properly.
 * The .h file has better data on what everything here actually does and things of that sort.
 **/
mCtrl::mCtrl(const byte iMotorSpeed, const boolean oDirection,
 const byte bMotorLeftPin, const byte bMotorRightPin,
 const byte bMotorLeftPWM, const byte bMotorRightPWM, 
 const unsigned long bMillisDelay, const float fP, 
 const byte bSampleSize) {
  /* for a detailed documentation on what each one of these values
  is, I suggest you read the .h file. */
  this->bMotorLeftPin = bMotorLeftPin;
  this->bMotorRightPin = bMotorRightPin;
  this->bMotorLeftPWM = bMotorLeftPWM;
  this->bMotorRightPWM = bMotorRightPWM;
  this->bMotorLeftSpeedGoal = iMotorSpeed;
  this->bMotorRightSpeedGoal = iMotorSpeed;
  this->switchDirection(oDirection); // call the switchDirection function to put the motors in the correct direction
  this->bMillisDelay = bMillisDelay;
  this->fP = fP;
  this->bSampleSize = bSampleSize;
  this->calibrateSensors();  // Calibrate the sensors.  That's what we'll have to initially do
}


/*
 * This is the switch direction function.
 *
 * I have gone through and there really is no reason to have signed motor control unless I were completely insane.
 * I'm not saying that I'm not completely insane, just to clarify.
 **/
void mCtrl::switchDirection(const boolean oDirection) {
  this->oDirection = oDirection;
  if (this->oDirection == 1) { // Clearly, the "right" direction is backwards.
    digitalWrite(this->bMotorLeftPin, LOW); // these are the pin settings to get everything to go backward
    digitalWrite(this->bMotorRightPin, LOW);
  } else {
    digitalWrite(this->bMotorLeftPin, HIGH); // these are the pin settings to make everything go forward
    digitalWrite(this->bMotorRightPin, HIGH);
  }
}


/*
 * This is the motor speed return statement.  This basically takes two of the motorSpeedGoals
 * and divides them by two to get the motor speed for everything. 
 **/
const byte mCtrl::motorSpeedGoal() const{
  unsigned int iReturn = ((this->bMotorLeftSpeedGoal + this->bMotorRightSpeedGoal) / 2);

  // Return the average speed.
  return iReturn;
}


/*
 * This is the actual motor speed.  Ideally, we should have the microcontroller set it at the goal all the time, but this is not possible because of system error.
 **/
const byte mCtrl::motorSpeedAt() const{
  unsigned int iReturn = ((this->bMotorLeftCurrent + this->bMotorRightCurrent) / 2);
  return iReturn; // return the average value of the motors' current set speed
}

void mCtrl::speedUp() {
  unsigned long lLastMillis = millis();; // use the elapsedMillis datatype to simplify coding for these sorts of things
  for (byte i = this->motorSpeedAt(); i <= this->motorSpeedGoal(); i++) {

    // for each value until the set value, speed up the motors uniformly
    this->bMotorLeftCurrent = i;
    this->bMotorRightCurrent = i;

    // Write the values to the motors.
    analogWrite(this->bMotorLeftPWM, this->bMotorLeftCurrent);
    analogWrite(this->bMotorRightPWM,this->bMotorRightCurrent);

    // This is just the delay that we use before the task scheduler is implemented... which it will be some day...
    do {} while (lLastMillis - millis() <= bMillisDelay);
    lLastMillis = millis();
  }
}

void mCtrl::slowDown() {
  // Set a variable to store our run time
  unsigned long lLastMillis = millis();

  // Slow things down until they are zero.
  for (byte i = this->motorSpeedAt(); i != 255; i--) {

    // Set the speed of the motors.
    this->bMotorLeftCurrent = i;
    this->bMotorRightCurrent = i;

    // Write the speed of the motors.
    analogWrite(this->bMotorLeftPWM, bMotorLeftCurrent);
    analogWrite(this->bMotorRightPWM, bMotorRightCurrent);

    // We use our processor consuming loop once again... SAY, WHERE THE HECK IS THAT SCHEDULER?
    do { } while (lLastMillis - millis() <= bMillisDelay);
    lLastMillis = millis();
  }
}

/*
 * Here we have the almighty P algorithm.
 * (I and D should be coming back from the depths of oblivion eventually...)
 *
 **/
void mCtrl::straightLine(const uint32_t & lSensorRead, const uint32_t & rSensorRead) { // here's the interesting stuff with proportional control.

  /*
   * Here we have variable.
   *
   * First, we have the delay variable.
   * Second, we have the mouse error variable.
   *
   **/
  unsigned long ePassedMillis = millis();
  static int iMouseError = 0;

#if DEBUGMODE
  Serial1.print("R: ");
  Serial1.print(rSensorRead);
  Serial1.print("L: ");
  Serial1.print(lSensorRead);
#endif

  // Here come the conditions in which the sensors can reach
  // In this condition, we ignore everything because the sensors are out of range.
  if (lSensorRead > 150 && rSensorRead > 150) {
    iMouseError = 0;
#if DEBUGMODE
    Serial1.print(" IGRONING ALL SENSORS.");
#endif
  // In this condition, we assume that the left wall is missing.
  } else if (lSensorRead > 150 && rSensorRead <= 150) {
    iMouseError = -(rSensorRead - this->rightSensorCalibrate );
#if DEBUGMODE
    Serial1.print(" Ignoring left sensor.");
#endif
  // In this condition, we assume that the right wall is missing.
  } else if (rSensorRead > 150 && lSensorRead <= 150) {
    iMouseError = (lSensorRead - this->leftSensorCalibrate );
#if DEBUGMODE
    Serial1.print(" Ignoring right sensor.");
#endif
  // If all is good, we use both sensors... LIKE A BOSS.
  } else {
    iMouseError = ((lSensorRead - this->leftSensorCalibrate) - (rSensorRead - this->rightSensorCalibrate)); 
    iMouseError /= (2);
#if DEBUGMODE
    Serial1.print(" Using all sensors.");
#endif
  }

  // Let's calculate and initiatie the correction factor.
  int32_t correctionFactor = (this->fP * iMouseError);

#if DEBUGMODE
  Serial1.print("E: ");
  Serial1.print(correctionFactor);
#endif

  /*
   * We tell the motors things about how to behave depending on the mouse error.
   *
   * We do this in order to prevent interger overflow and erratic behavior from the functions that set up PWM.
   *
   **/
  if (bMotorLeftSpeedGoal + correctionFactor > 0 && bMotorRightSpeedGoal - correctionFactor > 0) {
    this->bMotorLeftCurrent = this->bMotorLeftSpeedGoal + correctionFactor;
    this->bMotorRightCurrent = this->bMotorRightSpeedGoal - correctionFactor;
  // So if everything is not normal and the correction factor (which is positive in the Left direction) is positive... set everything to extreme left.
  } else if (correctionFactor > 0) {
    this->bMotorLeftCurrent = this->bMotorLeftSpeedGoal;
    this->bMotorRightCurrent = 0;
  // And of course we have this around so that things that go in the extreme right are not left out either.
  } else {
    this->bMotorLeftCurrent = 0;
    this->bMotorRightCurrent = this->bMotorRightSpeedGoal;
  }

  // Now we output the values to the motors.
  analogWrite(this->bMotorLeftPWM, this->bMotorLeftCurrent);
  analogWrite(this->bMotorRightPWM, this->bMotorRightCurrent);
#if DEBUGMODE
  Serial1.println();
#endif
  // delay everything for a bit...
  do { } while (ePassedMillis - millis() < this->bMillisDelay);
}

/*
 * With the friction stop program, we set all motors to zero and hope that they slow down... they might not.
 *
 **/
void mCtrl::frictionStop() {

  // Set the current speeds to zero.
  this->bMotorLeftCurrent = 0;
  this->bMotorRightCurrent = 0;

  // Write zero to the motors.
  analogWrite(this->bMotorLeftPWM, this->bMotorLeftCurrent);
  analogWrite(this->bMotorRightPWM, this->bMotorRightCurrent);
}

/*
 * When we start everything, we need to set the ideal values for the mouse.
 *
 * With this funciton, we can set the ideal values using the starting positions of the mouse.
 **/
void mCtrl::calibrateSensors() {
  unsigned int leftSensorCalibrateArray[this->bSampleSize];
  unsigned int rightSensorCalibrateArray[this->bSampleSize];
  for (byte i = 0; i < this->bSampleSize; i++) { // insert the initial values into the array
    unsigned int an0 = analogRead(A0);
    unsigned int an1 = analogRead(A2);
    leftSensorCalibrateArray[i] = an0;
    rightSensorCalibrateArray[i] = an1;
  }
  this->leftSensorCalibrate = 0; // and from now take the average of the array and put it into the calibration value that we have
  this->rightSensorCalibrate = 0;
  for (byte i = 0; i < this->bSampleSize; i++) {
    this->leftSensorCalibrate += leftSensorCalibrateArray[i];
    this->rightSensorCalibrate += rightSensorCalibrateArray[i];
  }
  this->leftSensorCalibrate /= this->bSampleSize;
  this->rightSensorCalibrate /= this->bSampleSize;
}

/*
 * This gives the turning directions to the motors.
 *
 * oDirection gives the direction of turning.
 *
 * 0 is left
 * 1 is right
 *
 **/
void mCtrl::turnAround(const boolean oDirection) {
  if (!oDirection) {

    // This makes things turn left.
    digitalWrite(this->bMotorLeftPin, HIGH);
    digitalWrite(this->bMotorRightPin, LOW);
  } else {

    // This makes things turn right.
    digitalWrite(this->bMotorLeftPin, LOW);  // these are the pin settings to get everything to turn to the right
    digitalWrite(this->bMotorRightPin, HIGH);
  }
}

/*
 * This funciton sets the default speed for the motor.
 *
 * We should not pass the speeds to the motor immediately.
 **/
void mCtrl::changeSpeed(const byte speedGoal) {

  // Set the motor speed goal... and hope that PID corrects motor speeds.  Also, have fun... that's important.
  this->bMotorLeftSpeedGoal = speedGoal;
  this->bMotorRightSpeedGoal = speedGoal;
}


void mCtrl::layInSpeed() {
  this->bMotorLeftCurrent = this->bMotorLeftSpeedGoal;
  this->bMotorRightCurrent = this->bMotorRightSpeedGoal;
  analogWrite(this->bMotorLeftPWM, this->bMotorLeftCurrent);
  analogWrite(this->bMotorRightPWM, this->bMotorRightCurrent);
}
