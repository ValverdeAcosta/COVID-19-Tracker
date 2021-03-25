import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import $, { each } from "jquery";
import * as moment from 'moment';
import { faExclamationTriangle, faSkull, faVirus  } from '@fortawesome/free-solid-svg-icons';

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
      $('#covidCases #confirmedCases').append(
        "<div style='color:black; font-style: italic;'>Confirmados: <i style='color:goldenrod' class='fas fa-exclamation-triangle'></i><br>"+ 
        "Activos: <i style='color:green' class='fas fa-virus'></i><br>"+ 
        "Muertos: <i style='color:red' class='fas fa-skull'></i>" 
        +"</div><br>"
      );
      $.each(data, function(index, value){
        
        $('#covidCases #confirmedCases').append("<i class='fas fa-exclamation-triangle'></i> "+value.Province+" [ "+value.Confirmed+"]<br>");
        $('#covidCases #activeCases').append("<i class='fas fa-virus'></i> "+value.Province+" ["+value.Active+"]<br>");
        $('#covidCases #deathCases').append("<i class='fas fa-skull'></i> "+value.Province+" ["+value.Deaths+"]<br>");
        

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
