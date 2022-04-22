import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1Component {
  dataObject = { data: 'object type' };
  data = 'string type';

  model1 = '';
  model2 = '';

  updateString(value: string) {
    this.data = value;
  }

  updateObject(value: string) {
    this.dataObject.data = value;
  }
}
