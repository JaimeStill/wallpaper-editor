import {
  Injectable
} from '@angular/core';

import {
  fromEvent,
  map,
  BehaviorSubject,
  Subscription
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  private size = new BehaviorSubject<{ width: number, height: number } | null>(null);
  size$ = this.size.asObservable();

  init = (): Subscription =>
    fromEvent(window, 'resize')
      .pipe(
        map(() => { return { width: window.innerWidth, height: window.innerHeight } })
      )
      .subscribe(data => this.size.next(data));
}
