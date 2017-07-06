$(document).ready(function(){
	
	$(function(){
		var $PeopleTraveling = $('#PeopleTraveling'),
			$DaysTraveling = $('#DaysTraveling'),
			$TransportOptions = $('#TransportOptions');
		  
		$TransportOptions.mixItUp();
		  
		$PeopleTraveling.on('change', function(){
			$TransportOptions.mixItUp('filter', this.value);
		});
		  
		$DaysTraveling.on('change', function(){
			$TransportOptions.mixItUp('filter', this.value);
		});
	});
})