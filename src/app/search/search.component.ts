import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchItem: string = ''
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      if (data.searchItem) {
        this.searchItem = data.searchItem;

      }
    })
  }
  search(): void {
    if (this.searchItem) {
      this.router.navigateByUrl('/search/' + this.searchItem)
    }
    else {
      this.router.navigateByUrl('/')
    }
  }

}
