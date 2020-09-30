import { Component, OnInit } from '@angular/core';
import { WindowObserverService } from './window-observer.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(protected windowService:WindowObserverService) { }

  ngOnInit(): void {
    this.windowService.myEventEmiter.subscribe(
      () => { 
        console.log("YEET");
        document.getElementById('myModal').style.display="block";
      }
    );
  }

  closeWindow(){
    document.getElementById('myModal').style.display="none";
  }

}
