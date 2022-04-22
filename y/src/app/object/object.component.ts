import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectComponent  {
  @Input() data?: { data: string };
}
