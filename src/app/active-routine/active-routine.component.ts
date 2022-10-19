import { Component, OnInit } from '@angular/core';

import { Routine, routineData } from '../routine-data';

@Component({
  selector: 'app-active-routine',
  templateUrl: './active-routine.component.html',
  styleUrls: ['./active-routine.component.scss']
})
export class ActiveRoutineComponent implements OnInit {

  routine: Routine = routineData;
  remainingTime: number[];
  active: boolean = false;
  activeTask: number = 0;
  timer: number | undefined;

  constructor() {
    this.remainingTime = routineData['tasks'].map(task => {
      return task['duration'];
    });
  }

  ngOnInit(): void {
  }

  startRoutine(): void {
    window.clearInterval(this.timer);
    this.active = true;
    this.timer = window.setInterval(() => {
      if (this.remainingTime[this.activeTask] <= 0) {
        this.nextTask();
      }
      this.remainingTime[this.activeTask]--;
    }, 1000);
  }

  nextTask(): void {
    this.activeTask++;
    if (undefined == this.routine['tasks'][this.activeTask]) {
      window.clearInterval(this.timer);
      this.active = false;
      this.activeTask = 0;
    }
  }

  startTask(taskIndex: number): void {
    this.activeTask = taskIndex;
    this.startRoutine();
  }

  resetTask(taskIndex: number): void {
    this.remainingTime[taskIndex] = this.routine['tasks'][taskIndex]['duration'];
  }

  pauseRoutine(): void {
    this.active = false;
    window.clearInterval(this.timer);
  }

  editTask(taskIndex: number): void {
return;
  }
}
