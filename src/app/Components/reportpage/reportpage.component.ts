import { Component } from '@angular/core';

@Component({
  selector: 'app-reportpage',
  templateUrl: './reportpage.component.html',
  styleUrls: ['./reportpage.component.scss']
})
export class ReportpageComponent {
  selectedFileName: string | undefined;

  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;
    const selectedFile = fileInput.files?.[0];

    if (selectedFile) {
      console.log('Selected File:', selectedFile);
      this.selectedFileName = selectedFile.name.substring(0, 8);
    } else {
      this.selectedFileName = undefined;
    }
  }
}
