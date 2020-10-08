import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ticket: Ticket;

  constructor(private route: ActivatedRoute, private readonly backendService: BackendService, private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('ticket');
    this.backendService.ticket(Number(id)).subscribe(
      (ticket) => {
        this.ticket = ticket;
      },
      (e) => {
        console.log(e);
      }
    );
  }

  public back() {
    this.location.back();
  }
}
