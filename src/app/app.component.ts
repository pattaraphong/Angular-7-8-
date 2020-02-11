import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'helloAngular';
  mDataArray:any[] = []
  constructor(private http:HttpClient){

  }

  onSubmit(data){
    
    //let postData = {username: data.email, feedback: data.feedback};
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result=>{
    //alert(JSON.stringify(result));
    this.getFeedback();
    });

  }

  getFeedback(){
    this.http.get<any>('http://localhost:3000/api').subscribe(result=>{
      //alert(JSON.stringify(result));
      this.mDataArray = result.data;
      
    });
}

  ngOnInit(): void {
    this.getFeedback();
  }

}
