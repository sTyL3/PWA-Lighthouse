import { v4 as uuidv4 } from 'uuid';

export class Photo {
    id: string;
    description: string;
    photoStorageUUID: string;
    fcmToken: string;

    constructor(description: string, fcmToken: string) {
        this.description = description;
        this.photoStorageUUID = uuidv4();
        this.fcmToken = fcmToken;
    }
}
