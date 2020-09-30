import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowObserverService {
  myEventEmiter: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
}
