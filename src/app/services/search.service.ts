import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
  // Create the subject
  // The subject is an observable. It must have the ability to emit a stream of values
  searchSub = new Subject();

  // Convert it to an Observable to subscribe to it in components
  searchObs = this.searchSub.asObservable();

  constructor() {}

  // Create a function to emit a new value in the stream
  change(resources) {
    this.searchSub.next(resources);
  }
}
