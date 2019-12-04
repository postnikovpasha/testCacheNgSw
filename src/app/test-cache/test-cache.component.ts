import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-cache',
  templateUrl: './test-cache.component.html',
  styleUrls: ['./test-cache.component.css']
})
export class TestCacheComponent implements OnInit {

  @Input() text1;
  @Output() loadData  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  load() {
    this.loadData.emit();
  }
}














