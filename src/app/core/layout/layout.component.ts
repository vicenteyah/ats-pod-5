import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatIconModule,CommonModule,RouterOutlet,NavbarComponent, FooterComponent,ModalComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isModalOpen = false

  openModal() {
    this.isModalOpen = true
  }

  closeModal() {
    this.isModalOpen = false 
  }
}
