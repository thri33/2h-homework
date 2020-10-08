import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  showModal: boolean;
  description: string;

  constructor(private router: Router, private readonly backendService: BackendService) {
    this.showModal = false;
    this.description = '';
  }

  public toggleModalTicket() {
    this.showModal = !this.showModal;
  }

  public cancel() {
    this.showModal = false;
    this.description = '';
  }

  public addTicket(event: any) {
    this.showModal = false;
    this.backendService.newTicket({description: this.description})
    .subscribe(
      (ticket) => {
        console.log(ticket);
        this.description = '';
      },
      (e) => {
        console.log(e);
      }
    )
  }

  public goToDetails(idTicket: any) {
    this.router.navigate(['/details', { id: idTicket }]);
  }

}
