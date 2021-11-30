import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camper-models',
  templateUrl: './camper-models.component.html',
  styleUrls: ['./camper-models.component.scss']
})
export class CamperModelsComponent implements OnInit {
  file:any="";
  fileName:string=''
  campers:any=[]
  rows:string[]=[];
  columns:object[]=[
    {prop:'camperMake'},
    {prop:'camperModel'},
    {prop:'camperSleeps'},
    {prop:'camperPrice'},
];
  camperFilter:string[]=[];
  columnsWithSearch:any[] =[];

  constructor() { }

  onFileSelected(event:any){
      const file: File = event.target.files[0];
      this.file = file;
      if (file) {
        this.fileName = file.name;
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          let csvAsText = <string>reader.result;
          const rows = csvAsText.split(/\n/).slice(1);
          rows.forEach((element) => {
            if(typeof element ===undefined || element === ""){
              rows.filter(function( element ) {
                return element !== undefined;
             });

            } else {
            const row = element.split(',');
            const parsedObj = {
              camperMake: row[0],
              camperModel: row[1],
              camperSleeps: row[2],
              camperPrice: row[3],
            };
             this.campers.push(parsedObj);
             this.rows=this.campers
             this.camperFilter = this.campers
             if (this.rows.length > 0) {
              this.columnsWithSearch = Object.keys(this.rows[0]);
            }
          }
          });
        };
        reader.onerror = function() {
          console.log(reader.error, 'reader error');
        };
      }
    
  }
  filterDatatable(event:any) {
    let filter = event.target.value.toLowerCase();
    this.rows = this.camperFilter.filter(item => {
      for (let i = 0; i < this.columnsWithSearch.length; i++) {
        var colValue = item[this.columnsWithSearch[i]];
        if (
          !filter ||
          (!!colValue &&
            colValue
              .toString()
              .toLowerCase()
              .indexOf(filter) !== -1)
        ) {
          return true;
        }
      }
    return});
  }


  ngOnInit(): void {
  }

}
