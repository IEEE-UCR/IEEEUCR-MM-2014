#define TELEMETRY 1
#include "mctrl.h" // include the class description of the mouse
void setup() {
  for (uint32_t i = 5; i <= 10; i++) { // use a for loop to init. the pins of the microcontroller
    pinMode (i, OUTPUT); 
  }
  pinMode (13, OUTPUT); // init the LED pin correctly
  pinMode (A0, INPUT);  // have the sensors 
  pinMode (A1, INPUT);
  pinMode (A2, INPUT);
  pinMode (A5, INPUT);
  pinMode (A6, INPUT);
  pinMode (0, OUTPUT);
  pinMode (1, INPUT);
  pinMode (11, INPUT);
  pinMode (12, INPUT);
  Serial1.begin(115200);
  digitalWrite(13, HIGH);
}
mCtrl ur_motor(7, 8, 9, 10);
/*
lmotor dir
rmotor dir
lmotor pwm
rmotor pwm
*/
int tmp = 0;
bool negative;
void loop() {
  if (Serial1.available()) {
    char c = Serial1.read();
    switch (c) {
      case ' ':
        tmp = 0;
        negative = 0;
      break;
      case 'l':
        if (!negative)
          ur_motor.setspeedl(tmp);
        else
          ur_motor.setspeedl(-tmp);
      break;
      case 'r':
        if (!negative)
          ur_motor.setspeedr(tmp);
        else
          ur_motor.setspeedr(-tmp);
      break;
      case '-':
        negative = 1;  
      break;
      default:
        if (c >= '0' && c <= '9') {
         tmp *= 10;
         tmp += c;
        } else {
          negative = 0;
          tmp = 0;
        }
      break;
    }
    Serial1.print(c);
  }
}
