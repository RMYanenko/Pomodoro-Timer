import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  workDuration = 25;
  breakDuration = 5;
  titleDuration = 'Time to Work!';
  minutes =  this.workDuration - 1;
  seconds = 60;
  interval: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseDuration() {
    this.workDuration += 1;
    this.minutes = this.workDuration + 1;
  }

  decreaseDuration() {
    this.workDuration -= 1;
    this.minutes = this.workDuration - 1;
  }

  counter = () => {
    this.seconds --;
    if (this.seconds == -1) {
      this.minutes--
      this.seconds = 60;
      if (this.minutes == -1) {
        this.titleDuration = 'Time to Break!'
      }
    }
    if(this.seconds < 10) {
      // this.seconds.toString().padStart(2, '0');
    }
  }

  startTime() {
    this.interval = setInterval(() => {
      this.counter();
    }, 1000)
  }

  stopTime() {
    clearInterval(this.interval);
  }

}
