#include <iostream>
#include <unistd.h>
#include <sys/mman.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdlib.h>

#include <linux/input.h>
#include <linux/joystick.h>

using namespace std;

int main() {
	int fd = open ("/dev/input/js0", O_RDONLY);
	int axis1 = 0;
	int axis3 = 0;

	while (1) {
		usleep (10000);
		struct js_event sEvent;
		read (fd, &sEvent, sizeof(sEvent));

		if (sEvent.type == 2 && (sEvent.number == 1 || sEvent.number == 3)) {
			if (sEvent.number == 1)
				axis1 = sEvent.value>>7;
			else if (sEvent.number == 3)
				axis3 = sEvent.value>>7;
			else
				continue;

			if (axis3 > 0) {
				if (axis1 > 0) {
					cout << ' ' << axis1 - abs(axis3) << 'r' << flush;
					cout << ' ' << axis1 << 'l' << flush;
				} else {
					cout << ' ' << axis1 << 'r' << flush;
					cout << ' ' << axis1 + abs(axis3) << 'l' << flush;
				}
			} else {
				if (axis1 > 0) {
					cout << ' ' << axis1 << 'r' << flush;
					cout << ' ' << axis1 - abs(axis3) << 'l' << flush;
				} else {
					cout << ' ' << axis1 + abs(axis3) << 'r' << flush;
					cout << ' ' << axis1 << 'l' << flush;
				}
			}
		} else {
			continue;
		}

	}

}
