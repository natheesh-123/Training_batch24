import { Component } from '@angular/core';
import { CommonData } from '../constant/constantData';
import { ItemsserviceService } from '../shared/services/itemsservice.service';

@Component({
  selector: 'app-item',
  imports: [ ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj=new ItemsserviceService();

  myitems:any[]=[

    {name:"bike",price:50,description:"nice bike",imgPath:CommonData.bike},     
    {name:"nissan",price:5000,description:"nice car",imgPath:CommonData.nissan},     
    {name:"bike",price:50,description:"nice bike",imgPath:CommonData.bike},     
    {name:"bike",price:50,description:"nice bike",imgPath:CommonData.bike},     
    {name:"bike",price:50,description:"nice bike",imgPath:CommonData.bike},     
  ]
}
