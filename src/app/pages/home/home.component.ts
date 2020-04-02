import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Paths } from 'src/app/helpers/app.constants';
import { PhotoService, PhotoImgUrl } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/photo.model';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    photoCollection: Array<[Photo, PhotoImgUrl]> = Array();

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private photoService: PhotoService,
        private messagingService: MessagingService
    ) { }

    ngOnInit() {
        console.log('home page');
        this.photoService.getPhotos().subscribe(response => {
            response.map(data => {
                const photo = data.payload.doc.data();
                this.photoService.getImgPhotoUrlFromPhoto(photo).subscribe(photoUrl => {
                    this.photoCollection.push([photo, photoUrl]);
                });
            });
        });
    }

    postPhoto() {
        this.router.navigate([Paths.POST_PHOTO]);
    }

    like(photo: Photo) {
        console.log('send like');
        console.log(photo);
        this.messagingService.sendMessage(photo.fcmToken).subscribe();
    }

    logout() {
        this.authenticationService.logout();
    }

}
