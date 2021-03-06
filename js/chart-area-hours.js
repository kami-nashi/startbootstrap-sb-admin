// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var myLineChart;
var chartLabels = [];
var iceTimes = [];
var coachTimes = [];

/**
 * 
 */
var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON('http://journal.kami-nashi.com/skatetrax.core/chart-skate_time.php', function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    for (let i=0; i<data.length; ++i) {
      chartLabels.push(data[i].date);
      iceTimes.push(Number.parseFloat(data[i].ice_time));
      coachTimes.push(Number.parseFloat(data[i].coach_time));
    }

    myLineChart = new Chart(document.getElementById("myAreaChart"), {
      type: 'line',
      data: {
        labels: chartLabels,
        datasets: [{
          label: "Ice Time",
	  lineColor: "red",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
   	      borderColor: "rgba(2,117,216,1)",
   	      pointRadius: 5,
   	      pointBackgroundColor: "rgba(2,117,216,1)",
   	      pointBorderColor: "rgba(255,255,255,0.8)",
   	      pointHoverRadius: 5,
   	      pointHoverBackgroundColor: "rgba(2,117,216,1)",
   	      pointHitRadius: 50,
   	      pointBorderWidth: 2,
   	      data: iceTimes,
   	    },
   	    {
   	      label: "Coach Time",
   	      lineTension: 0.3,
   	      backgroundColor: "rgba(141, 93, 162, 0.5)",
   	      borderColor: "rgb(142,94,162)",
   	      pointRadius: 5,
   	      pointBackgroundColor: "rgb(142,60,165)",
   	      pointBorderColor: "rgba(255,255,255,0.8)",
   	      pointHoverRadius: 5,
   	      pointHoverBackgroundColor: "rgba(2,117,216,1)",
   	      pointHitRadius: 50,
   	      pointBorderWidth: 2,
   	      data: coachTimes,
   	    }],
   	  },
   	  options: {
   	    scales: {
   	      xAxes: [{
   	        time: {
   	          unit: 'date'
   	        },
   	        gridLines: {
   	          display: false
   	        },
   	        ticks: {
   	          maxTicksLimit: 7
   	        }
   	      }],
   	      yAxes: [{
   	        ticks: {
              min: 0,
              max: Math.max.apply(Math, iceTimes)+1,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: true
        }
   	  }
    });
  }
});
