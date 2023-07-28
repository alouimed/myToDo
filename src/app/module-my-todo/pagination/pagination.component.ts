import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage!: number ;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({length: this.totalPages }, (_, index) => index + 1);
  }

  goToPage(page: number) {
    this.pageChange.emit(page);
  }
}
