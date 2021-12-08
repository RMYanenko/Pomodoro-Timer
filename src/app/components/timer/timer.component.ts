import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  workDuration = 25;
  breakDuration = 5;

  constructor() { }

  ngOnInit(): void {
  }

  increaseDuration() {
    this.workDuration += 1
  }

  decreaseDuration() {
    this.workDuration -= 1
  }

}
