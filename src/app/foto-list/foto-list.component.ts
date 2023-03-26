import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Foto } from '../models/album';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent {
  constructor(
    private fotoService: AlbumService,
    private route: ActivatedRoute) { }

  fotos: Foto[] = []

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.getPhotoList(Number(id));

  }

  getPhotoList(albumId: number) {

    this.fotoService.getPhotos(albumId).subscribe(res => 
      {this.fotos = res});    //oooooooooooooo
  };

}
