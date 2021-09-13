import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() type: string = 'IO';
  @Output() onSearch = new EventEmitter();

  constructor(private readonly _searchService: SearchService) {}

  // Search query
  query = '';

  selected_filters: Map<String, boolean> = new Map<string, boolean>();

  filters = [
    {
      label: 'Projects',
      code: 'projects'
    },
    {
      label: 'Consolidation',
      code: 'consolidation'
    },
    {
      label: 'Groupings',
      code: 'groupings'
    }
  ];

  ngOnInit() {}

  updateFilters(code: string) {
    const isSelected = this.selected_filters.get(code);
    if (typeof isSelected == 'undefined') {
      this.selected_filters.set(code, true);
    } else {
      this.selected_filters.set(code, !isSelected);
    }
  }

  isSelected = (code: string) => {
    return this.selected_filters.get(code);
  };

  search($event) {
    var filters = {};
    this.selected_filters.forEach((val, key) => {
      if (!!val) {
        filters[key.toLowerCase()] = val;
      }
    });
    if (this.type === 'IO') this.onSearch.emit({ query: this.query, filters });
    else {
      this._searchService.change({ query: this.query, filters });
    }
  }
}
