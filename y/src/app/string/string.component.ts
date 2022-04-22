import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StringComponent  {
  @Input() data: string | undefined;

  constructor() {}

}
