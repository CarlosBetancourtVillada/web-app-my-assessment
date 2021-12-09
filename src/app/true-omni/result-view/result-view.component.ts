import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { ListingModel } from 'src/app/core/Models/listingModel';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html'
})
export class ResultViewComponent implements OnInit {

  isPortrait: boolean = true;
  list: ListingModel[];
  newList: ListingModel[];
  message: string = "";

  constructor(private listingService: ListingService) { }

  async ngOnInit() {
    this.message = "Waiting for results...";
    this.listingService.getListing()
    .subscribe((result) => {
      this.list = result;
      this.message = "";
      this.list.forEach(element => {
        console.log(element.image_List);
      });
      this.mapList(this.list);
      //console.log(this.lista);
    });
  }

  changeView(){
    let view = this.isPortrait ? "Portrait view" : "Landscape view";
    console.log(view);
    this.isPortrait = !this.isPortrait;
  }

  mapList(currentList: ListingModel[]){
    this.list.forEach(listing => {
      console.log(listing);
      let temp = listing;
      temp.image_List = temp.image_List.includes("|") ?
            temp.image_List.substring(0, temp.image_List.indexOf("|")) :
            temp.image_List;
      this.newList.push(temp)
    });
    console.log("Tamaño: " + this.newList.length);
    console.log("Nueva lista: %o", this.newList.slice(0, 30));
  }
}
