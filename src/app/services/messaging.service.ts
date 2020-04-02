import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class MessagingService {
    currentMessage = new BehaviorSubject(null);
    token: string = undefined;
    constructor(private afMessaging: AngularFireMessaging, private http: HttpClient) { }

    requestPermission() {
        this.afMessaging.requestPermission
            .pipe(mergeMapTo(this.afMessaging.tokenChanges))
            .subscribe(
                (token) => {
                    console.log('Permission granted! Save to the server!', token);
                    this.token = token;
                },
                (error) => {
                    console.error(error);
                },
            );
    }

    listen() {
        this.afMessaging.messages
            .subscribe((message) => { console.log(message); });
    }

    sendMessage(token: string) {
        console.log(environment.urlApiFcm);
        const url = `${environment.urlApiFcm}/notification`;
        const params = new HttpParams()
            .set('token', token);
        return this.http.post(url, undefined, { params } );
    }
}
