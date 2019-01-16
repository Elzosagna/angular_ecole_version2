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


    this.http.get("http://elhadjiibrahimas.promo-21.codeur.online/ecole/src/app/api/api.php")
    .subscribe((data) => this.displaydata(data));
    
 }
 displaydata(data)
 {
   this.httpdata = data;
   console.log(Array.of(data))

}
 onSelect(data){
this.router.navigate(['/entreprise',data.id])

 }


}
