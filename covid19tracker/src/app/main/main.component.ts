import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import $, { each } from "jquery";
import * as moment from 'moment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  main = "Main Component"

  constructor() { 
    this.countries();
  }

  public letsFind() {

    let country = $('.form-select option:selected').text();
    let fecha = moment().subtract(1, 'day').utc().format();

    $('#covidCases #confirmedCases').empty();
    $('#covidCases #activeCases').empty();
    $('#covidCases #deathCases').empty();

    $.get('https://api.covid19api.com/live/country/'+country+'/status/confirmed/date/'+fecha, function(data){
      $.each(data, function(index, value){
        
        $('#covidCases #confirmedCases').append("Confirmados "+value.Province+" [ "+value.Confirmed+"]<br>");
        $('#covidCases #activeCases').append("Activos "+value.Province+" ["+value.Active+"]<br>");
        $('#covidCases #deathCases').append("Muertos "+value.Province+" ["+value.Deaths+"]<br>");
        

      });

      
    });

    

  }

  
  public countries() {
    $.get('https://api.covid19api.com/countries', function(data){
      $.each(data, function(index, value){
        console.log(value.Country);
        $('.form-select').append("<option>"+value.Country+"</option>");
      });
    });
  }
  
  ngOnInit(): void {
  }

  
}
