import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { getDownloadURL } from '@firebase/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  constructor(private fireStorage: AngularFireStorage) { }
  ImageThumnail: any = [];
  private basePath = '/uploads';
  ImageList: any = [];
  uploadImg(dataFile: any) {
    const filePath = `${this.basePath}/${dataFile.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    this.fireStorage
      .upload(filePath, dataFile)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadUrl) => {
            this.ImageThumnail = downloadUrl;
            localStorage.setItem('imgThum', this.ImageThumnail);
          });
        })
      )
      .subscribe();
  }
}
