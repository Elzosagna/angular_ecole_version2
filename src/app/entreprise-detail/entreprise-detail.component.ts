import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-entreprise-detail',
  templateUrl: './entreprise-detail.component.html',
  styleUrls: ['./entreprise-detail.component.css']
})
export class EntrepriseDetailComponent implements OnInit {

  public entrepriseId;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router ) { }

  httpdata;
  ngOnInit() {
    this.http.get("http://elhadjiibrahimas.promo-21.codeur.online/ecole/src/app/api/api.php")
    .subscribe((data) => this.displaydata(data));


    this.route.paramMap.subscribe((params:ParamMap) =>{
         let id = parseInt(params.get('id'));
            this.entrepriseId=id;
      });
  }


  gotoEntreprise() {
    let selectedId = this.entrepriseId ? this.entrepriseId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
  displaydata(data) {this.httpdata = Array.of( data[this.entrepriseId-1]);

  }

  goPrevious() {
    let previousId = this.entrepriseId - 1;
    this.router.navigate(['/entreprise', previousId]);
  }

  goNext() {
    let nextId = this.entrepriseId + 1;
    this.router.navigate(['/entreprise', nextId]);
  }


}
