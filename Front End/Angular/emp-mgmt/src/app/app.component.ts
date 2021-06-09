import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp-mgmt';
  logged: boolean = false;

  ngOnInit(){
    if(localStorage.getItem('user')!=null)
      this.logged=true;
    else{
      this.logged=false;
    }  
  }

  logout(){

    localStorage.removeItem('user');
    console.log('Logged Out');
    location.reload();
  }
}
