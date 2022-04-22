import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SomeService } from '../some.service';

@Component({
  selector: 'app-obs2',
  templateUrl: './obs2.component.html',
  styleUrls: ['./obs2.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Obs2Component implements OnInit {
  data = { name: '' };
  constructor(
    private someService: SomeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.someService.getValue$.subscribe((v) => {
      this.data = v;
   //   this.cdr.markForCheck();
    });
  }
}
