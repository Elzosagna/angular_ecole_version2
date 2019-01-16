import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router, ActivatedRoute ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  public selectedId;
  

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) { }
  httpdata;
  ngOnInit() {

    
    this.http.get("https://babacars.promo-21.codeur.online/symfony/public/api/entreprises.json")
    .subscribe((data) => this.displaydata(data)); 
    this.route.paramMap.subscribe((params:ParamMap) =>{ 
      let id = parseInt(params.get('id'));
         this.selectedId=id;     
   });   
 }
 displaydata(data) 
 {
   this.httpdata = data;
   console.log(Array.of(data))

}
 onSelect(data)
 {
this.router.navigate(['/entreprise',data.id])

 }
 isSelected(data) { return data === this.selectedId; }

}
