import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() queries;
  @Input() type = 'IO'

  obsQueries;

  constructor(private readonly _searchService: SearchService) {}

  // Search Subscription
  searchSub: Subscription;

  // Using the Input/Output to detect changes between parent/child
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
  }

  ngOnInit() {
    // Subscribe to the subject observable
    // This will detect new changes from the search query
    // It does not have to be in a relationship (=P) with the search component
    this.searchSub = this._searchService.searchSub.subscribe(val => {
      console.log('Val: ', val);
      this.obsQueries = val;
    });
  }

  ngOnDestroy() {
    // Kill the subscription
    this.searchSub.unsubscribe();
  }
}
