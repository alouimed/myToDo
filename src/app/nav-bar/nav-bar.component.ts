import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  
  isLinkActive(link: string): boolean {
    return this.router.isActive(link, true);
  }

}
