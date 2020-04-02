import { AngularFirestore, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
import { Photo } from '../models/photo.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { convertObject } from '../helpers/firebase.helper';

export type PhotoImgUrl = string;

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private firestore: AngularFirestore, private fireStorage: AngularFireStorage) { }

    getPhotos(): Observable<DocumentChangeAction<Photo>[]> {
        return this.firestore.collection<Photo>('photos').snapshotChanges();
    }

    getImgPhotoUrlFromPhoto(photo: Photo): Observable<PhotoImgUrl | null> {
        return this.getImgPhotoUrl(photo.photoStorageUUID);
    }

    getImgPhotoUrl(uuid: string): Observable<PhotoImgUrl | null> {
        const ref = this.fireStorage.ref('photos/' + uuid);
        return ref.getDownloadURL();
    }

    createPhoto(photo: Photo, file: File): Promise<DocumentReference> {
        console.log(photo);
        console.log(file);
        return this.fireStorage.upload('photos/' + photo.photoStorageUUID, file).then(value => {
            this.firestore.collection('photos').add(convertObject(photo));
        });
    }

    updatePhoto(photo: Photo): Promise<void> {
        delete photo.id;
        return this.firestore.doc('photos/' + photo.id).update(photo);
    }
}
