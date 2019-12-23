import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Pet } from 'src/app/_models/pet';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PetService } from 'src/app/_services/pet.service';
import { AuthService } from 'src/app/_services/auth.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  pet: Pet;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private petService: PetService, public authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pet = data['pet'];
    })
  }
  updatePet() {
    this.petService.updatePet(this.authService.decodedToken.nameid, this.pet).subscribe(next => {
      this.alertify.success('Pet updated successfully');
      this.editForm.reset(this.pet);
    }, error => {
      this.alertify.error(error);
    })
  }
}
