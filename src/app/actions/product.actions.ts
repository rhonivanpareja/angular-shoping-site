import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export namespace ProductActions {
  export class GetProducts {
    static readonly type = '[Products] Fetch';
  }

  export class SearchProductData {
    static readonly type = '[Products] Search';
    constructor(public searchText: string) { }
  }
}
