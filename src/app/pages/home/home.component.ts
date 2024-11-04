import { Component } from '@angular/core';
import { ICard } from '../../types/card.model'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards : ICard[] = [
    {
      image: './assets/asset1.jpg',
      title: 'The Waves are high and beautyful',
      description : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore ad corrupti eaque mollitia commodi molestiae earum 
        dolorum. Explicabo numquam, a laborum adipisci maxime vitae 
        commodi tempore! Recusandae veniam esse repellendus.
      `
    },
    {
      image: './assets/asset2.jpg',
      title: 'The Beach  is better to take vacation',
      description : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore ad corrupti eaque mollitia commodi molestiae earum 
        dolorum. Explicabo numquam, a laborum adipisci maxime vitae 
        commodi tempore! Recusandae veniam esse repellendus.
      `
    },
    {
      image: './assets/asset3.jpg',
      title: 'You can Skate and fun in Snow',
      description : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore ad corrupti eaque mollitia commodi molestiae earum 
        dolorum. Explicabo numquam, a laborum adipisci maxime vitae 
        commodi tempore! Recusandae veniam esse repellendus.
      `
    },
    {
      image: './assets/asset4.jpg',
      title: 'Visit Our Hotels and get a promotion',
      description : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore ad corrupti eaque mollitia commodi molestiae earum 
        dolorum. Explicabo numquam, a laborum adipisci maxime vitae 
        commodi tempore! Recusandae veniam esse repellendus.
      `
    }
  ]
}
