import { Component, OnInit } from '@angular/core';
import { fetchJson } from '../../untils/fetchJson';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetchJson()
  }

  onFetch() {
  }

}
