import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navigationItems = [
    { label: 'home', route: '/'},
    { label: 'About', route: '/about'},
    { label: 'All', route: '/all' },
    { label: 'Travel', route: '/travel' },
    { label: 'LifeStyle', route: '/lifestyle' },
    { label: 'Business', route: '/business' }
  ]

  selectedItem: string = ''

  selectItem (label: string) : void{
    this.selectedItem = label
  }
}
