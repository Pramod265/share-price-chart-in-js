$('select').on('change', function() {
  alert( this.value );
});

$(document).ready(function(){
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
			var open = [];
			var high = [];
			var low = [];
			var close = [];
			var volume = [];
			$.each(act_data, function(k, v) {
				date.push(k);
				open.push(v['1. open']);
				close.push(v['1. close']);
				high.push(v['1. high']);
				low.push(v['1. low']);
				volume.push(v['1. volume']);
			})
			
			$("#stockCanvas").empty();


		new Chart(document.getElementById("stockCanvas"), {
			type: 'line',
			data: {
				// labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
				labels: date,
				datasets: [{ 
						// data: [282,350,411,502,635,809,947,1402,3700,5267],
						data:open,
						label: ["Open"],
						borderColor: "#8e5ea2",
						fill: false,
					},
					{ 
						data:close,
						label: ["Close"],
						borderColor: "#8eAAAA",
						fill: false,
					},
					{ 
						data:high,
						label: ["high"],
						borderColor: "green",
						fill: false,
					},
					{ 
						data:low,
						label: ["low"],
						borderColor: "red",
						fill: false,
					},
					{ 
						data:volume,
						label: ["Volume"],
						borderColor: "volume",
						fill: false,			
					},

				]
			},
			options: {
				title: {
					display: true,
					zoomEnable: true,
					text: 'Stock Price In Past Few Months in USD($)	 '
				}
			}
		});

		});

	});


 });
