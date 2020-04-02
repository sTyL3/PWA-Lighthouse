import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
    selector: 'app-post-photo',
    templateUrl: './post-photo.component.html',
    styleUrls: ['./post-photo.component.scss']
})
export class PostPhotoComponent implements OnInit {

    public photoForm: FormGroup;

    constructor(
        private location: Location,
        private formBuilder: FormBuilder,
        private photoService: PhotoService,
        private messagingService: MessagingService,
       // private snackbar: MatSnackBar
    ) { }

    get formControls() { return this.photoForm.controls; }

    ngOnInit() {
        console.log('post photo page');
        this.photoForm = this.formBuilder.group({
            photo: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.photoForm.valid) {
            const photo = new Photo(this.formControls.description.value, this.messagingService.token);
            this.photoService.createPhoto(photo, this.formControls.photo.value.files[0]).then(value => {
                this.location.back();
                // this.router.navigate([Paths.HOME]);
            }).catch(error => {
               // this.snackbar.open(error, null, { duration: 3000 });
                console.log('rejected', error);
            });
        }
    }
}
