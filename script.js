$('select').on('change', function() {
  alert( this.value );
});

$(document).ready(function(){
 // $("#view").click(function(){
 //       var cmp = $('#companies option:selected').val();
 //       alert(cmp);
 //    });


 	$('select').on('change', function() {
  		var cmp = this.value;
  		// alert( cmp );

  		var apikey="RWMKXA9V59OGM2NM";
  		var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+cmp+"&apikey=RWMKXA9V59OGM2NM";
  		$.getJSON(url, function(data) {
		    //data is the JSON string
		    console.log(data);
		    var formData = data['Meta Data'];
		    console.log(formData);
			
			$('#id_information').text(formData['1. Information']);
			$('#id_symbol').text(formData['2. Symbol']);
			$('#id_last_refreshed').text(formData['3. Last Refreshed']);
			$('#id__time_zone').text(formData['5. Time Zone']);
		
			var act_data = data['Time Series (Daily)'];
			console.log(act_data);
			var date = []; 
			$.each(act_data, function(i, item) {
				date.push(act_data[item]);
			})


		// 	var lineChart = new Chart(stockCanvas, {
		// 		type: 'line',
		// 		data: stockData,
		// 		options: chartOptions
		// 	});

		// 	var stockData = {
		// 		labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
		// 		datasets: [{
		// 		  label: "Car Speed",
		// 		  data: [0, 59, 75, 20, 20, 55, 40],
		// 		}]
		// 	  };

		// 	  var chartOptions = {
		// 		legend: {
		// 		  display: true,
		// 		  position: 'top',
		// 		  labels: {
		// 			boxWidth: 80,
		// 			fontColor: 'black'
		// 		  }
		// 		}
		// 	  };

		new Chart(document.getElementById("stockCanvas"), {
			type: 'line',
			data: {
				labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
				datasets: [{ 
						data: [282,350,411,502,635,809,947,1402,3700,5267],
						label: "Asia",
						borderColor: "#8e5ea2",
						fill: false
					},
				]
			},
			options: {
				title: {
					display: true,
					text: 'World population per region (in millions)'
				}
			}
		});

		});

	});


 });
