import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection;
  

  constructor(db: AngularFirestore) {
    this.projectsCollection = db.collection('projects');
  }

  async getProjectData(projectID: string): Promise<DocumentData> {
    const projectRef = this.projectsCollection.doc(projectID);
    return projectRef.valueChanges().toPromise();
  }
}
