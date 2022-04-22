import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrayComponent {
  @Input() data: { name: string }[] = [];
}
