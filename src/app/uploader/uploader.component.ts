import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;
  isHovering2: boolean;

  file: File;
  thumbnails: File;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: File) {
    this.file = files[0];
    console.log(this.file);
    console.log(this.file.name);

    this.startUpload();
  }

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  startUpload() {
    const path = `video/${Date.now()}_${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('files').add({ downloadURL: this.downloadURL, path });
      }),
    );
    console.log(this.downloadURL);
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  toggleHover2(event: boolean) {
    this.isHovering2 = event;
  }

  onDrop2(thumbnails: File) {
    this.thumbnails = thumbnails[0];
    console.log(this.thumbnails);
    console.log(this.thumbnails.name);
    this.startUploadThumbnail();
  }

  task2: AngularFireUploadTask;
  percentage2: Observable<number>;
  snapshot2: Observable<any>;
  downloadURL2: string;

  startUploadThumbnail() {
    const path = `thumbnail/${Date.now()}_${this.thumbnails.name}`;
    const ref = this.storage.ref(path);
    this.task2 = this.storage.upload(path, this.thumbnails);
    this.percentage2 = this.task2.percentageChanges();
    this.snapshot2 = this.task2.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.downloadURL2 = await ref.getDownloadURL().toPromise();

        this.db.collection('files').add({ downloadURL: this.downloadURL2, path });
      }),
    );
    console.log(this.downloadURL2);
  }

  isActive2(snapshot2) {
    return snapshot2.state === 'running' && snapshot2.bytesTransferred < snapshot2.totalBytes;
  }
}
