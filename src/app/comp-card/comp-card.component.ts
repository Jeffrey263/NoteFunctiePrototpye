
import { Component, OnInit, Input } from '@angular/core';
import { WindowObserverService } from '../modal-window/window-observer.service';


@Component({
  selector: 'app-comp-card',
  templateUrl: './comp-card.component.html',
  styleUrls: ['./comp-card.component.css']
})
export class CompCardComponent implements OnInit {
  
  @Input() name: string;
  @Input() maker: string;
  @Input() image: string;

  
  constructor(protected windowService:WindowObserverService) {}

  ngOnInit(): void {
  }

  openWindow(){
    console.log("ja gaat lkekker maaannn");
    this.windowService.myEventEmiter.emit();
  }

}


