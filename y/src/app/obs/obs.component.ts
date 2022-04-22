import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObsComponent {
  constructor(private someSerivce: SomeService) {}
  data$ = this.someSerivce.getValue$;
}
