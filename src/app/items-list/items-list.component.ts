import { Model } from './../Model/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  //declarations
  public model: Model;
  p: number = 1;
  titleSearch: string = '';

  constructor() {}

  ngOnInit(): void {
    //calling the fetch data
    this.model = new Model();
    this.fetchData();
  }

  fetchData() {
    this.model.data = [];

    //using fetch to request resource
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then((response) => {
    //checks if http response code is successful or not     
        if (!response.ok) {
          throw Error(response.statusText);
      }
    //call response object to get the data
        return response.json();
      })
      .then((myJson) => {
    //passing the data to my array
        this.model.data = myJson;
    //check if users title search is not empty
        if(this.titleSearch != '')
        {
    //filter data array and check if it includes user's searched title
          this.model.data = this.model.data.filter((element) =>
          element.title.includes(this.titleSearch)
        );
        }
      })
      .catch(function(error) {
        this.errorMsg = 'error';
        console.log(error);
    });
  }

  onSubmit() {
  //Search button clicked, fetch data to filter
    this.fetchData();
    console.log('Search button has been clicked!');  
    return this.titleSearch;
  }
}
