import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
})
export class Example2Component {
  data = [{ name: 'Hello' }, { name: 'world' }];

  addElement() {
    this.data.push({ name: Math.random().toString() });
  }

  deleteLast() {
    this.data.pop();
  }

  updateFirst() {
    if (this.data.length) {
      this.data[0].name = Math.random().toString();
    } else {
      this.addElement();
    }
  }
}
