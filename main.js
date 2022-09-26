
function on(){
  let text= "Bật công tắc";
  if(confirm(text)==true){
      document.getElementById("button1").style.backgroundImage = "linear-gradient(green,violet,green,yellow,violet)";
      document.getElementById("myImage").src= "light_on.png"
  }
}
function off(){
  let text= "Tắt công tắc";
  if(confirm(text)==true){
      document.getElementById("button1").style.backgroundImage = "linear-gradient(yellow,red)";
      document.getElementById("myImage").src= "light_off.gif"
  }
}

 Highcharts.chart('container', {

    title: {
      text: 'U.S Solar Employment Growth by Job Category, 2010-2020'
    },
  
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
  
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2020'
      }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
  
    series: [{
      name: 'Installation & Developers',
      data: [43934, 48656, 65165, 81827, 112143, 142383,
        171533, 165174, 155157, 161454, 154610]
    }, {
      name: 'Manufacturing',
      data: [24916, 37941, 29742, 29851, 32490, 30282,
        38121, 36885, 33726, 34243, 31050]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 30000, 16005, 19771, 20185, 24377,
        32147, 30912, 29243, 29213, 25663]
    }, {
      name: 'Operations & Maintenance',
      data: [null, null, null, null, null, null, null,
        null, 11164, 11218, 10077]
    }, {
      name: 'Other',
      data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
        17300, 13053, 11906, 10073]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
 
  function random(){
    var temp1 = Math.floor(Math.random()*100);
    //var humi1 = Math.floor(Math.random()*100);
    //var NDKK1 = Math.random(Math.random()*100);
    document.getElementById("temp1").innerHTML = temp1;
    /*document.getElementById("humi1").inerHTML = humi1;
    document.getElementById("NDKK1").innerHTML =NDKK1;*/
  
      if(temp1 >0 && temp1 <= 20 ){
        document.getElementById("nhietdo").style.backgroundImage = "linear-gradient(rgb(63, 239, 47),rgb(224, 238, 147))";
      }
      else if (temp1 > 20 && temp1 <=45){
        document.getElementById("nhietdo").style.backgroundImage = "linear-gradient(orange,gray,pink)";
       }
       else  {
        document.getElementById("nhietdo").style.backgroundImage = "liear-gradient(red,violet,red)";
       }
  }
  random();
