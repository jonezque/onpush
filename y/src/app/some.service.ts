import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SomeService {
  private value$ = new BehaviorSubject({ name: 'hello world' });

  getValue$ = this.value$.asObservable();

  updateValue(value: { name: string }) {
      const v = this.value$.getValue();
      v.name = value.name;
  }
}
