import { Component, OnInit } from '@angular/core';
import { FaceFramingService } from '../face-framing.service'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cniai',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './cniai.component.html',
  styleUrl: './cniai.component.css'
})
export class CniaiComponent implements OnInit {

  imageURL: string | ArrayBuffer | null = null;

  constructor(private faceFramingService: FaceFramingService) {}

  ngOnInit(): void {

    this.faceFramingService.getImage().subscribe(response => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageURL = reader.result;
      };
      reader.readAsDataURL(response);
    });
    
  }

}
