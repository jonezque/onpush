import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example3Component {
  constructor(public someService: SomeService) {}
  mutate() {
    this.someService.updateValue({ name: Math.random().toString() });
  }
}
