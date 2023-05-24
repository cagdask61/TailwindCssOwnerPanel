import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ImageService {


    private _urls: ReadonlyArray<string> = [
        'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
        'https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg',
        'https://images.pexels.com/photos/1933320/pexels-photo-1933320.jpeg',
        'https://images.pexels.com/photos/8190433/pexels-photo-8190433.jpeg',
        'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg',
        'https://images.pexels.com/photos/4072840/pexels-photo-4072840.jpeg',
        'https://images.pexels.com/photos/458863/pexels-photo-458863.jpeg',
        'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg',
        'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
        'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg'
    ];



    public get getAllUrls(): ReadonlyArray<string> {
        return this._urls;
    }

}