function initMap() {

	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
			
			center:{
			//  This is where the map will be positioned when loaded
			lat: -41.3508692,
			lng: 174.6383904
			},
		//  This is how far the map will be zoomed in
		zoom: 8,
		//  Enabling the user to drag around the map
		draggable: true,
		//  Disabling the double click zoom (NOT NEEDED FOR MOBILE)
		disableDoubleClickZoom: true,
		//  Disabling the use of a scroll wheel (NOT NEEDED FOR MOBILE)
		scrollwheel: false,
		//  Disabling toggling between the different map types
		//  eg. Map and satellite
		mapTypeControl: false,
		//  Disabling the ability to open the map fullscreen
		fullscreenControl: false,
			//  Changing the position of the zoom control buttons
			zoomControl: true,
				zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
		});
//	Directions (Starting Point to End Point)
directionsDisplay.setMap(map);

	var onChangeHandler = function() {
	calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.getElementById('start').addEventListener('change', onChangeHandler);
	document.getElementById('end').addEventListener('change', onChangeHandler);
	}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
	origin: document.getElementById('start').value,
	destination: document.getElementById('end').value,
	travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			//	Fix this (Some how remove)
			('Directions request failed due to no end point' + status);
		}
	});
}

//	Form Validation
$(document).ready(function(){

	//	By default all of the input fields won't be valid as they would be empty
	//	Set all varaibles to false
	var ValidNumberOfPeople = false;
	var ValidStartingPoint = false;
	var ValidEndPoint = false;
	var ValidFirstName = false;
	var ValidLastName = false;
	var ValidEmail = false;
	var ValidConfirmEmail = false;

	//	When the submit button is pressed
	$("#ContinueToPayment").click(function(event){
		event.preventDefault();
		//The form should only submit when all of the input field variables are true
		if(ValidNumberOfPeople === true && ValidStartingPoint === true && ValidEndPoint === true && ValidFirstName === true && ValidLastName === true && ValidEmail === true && ValidConfirmEmail === true){
			$("#FormValidation").submit();
		}
	});

	//	Starting Point
	$("#start")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidStartingPoint = false;
				return;
			} else if(minLen($(this), 1)){
				ValidStartingPoint = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidStartingPoint = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 1)) return;
			ValidStartingPoint = true;
		})

	//	End Point
	$("#end")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidEndPoint = false;
				return;
			} else if(minLen($(this), 1)){
				ValidEndPoint = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidEndPoint = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 1)) return;
			ValidEndPoint = true;
		})

	//	Number of People
		$("#NumberOfPeople")
			.focus(function(){
				//For if statements you dont need to give a = value
				//If you leave it then the code will assume you want it to be true
				//if(x=true) and if(x) both mean the same thing and are expecting the value of true
				//This line calls the required function and passes through the current element (Go to required function) 
				if(required($(this))){
					//If the value of true gets returned from the required function then proceed with these lines
					ValidNumberOfPeople = false;
					return;
				} else if(minLen($(this), 1)){
					ValidNumberOfPeople = false;
					return;
				}
				//If all of the functions return a value of false then it will skip all of the if statements
				//Then we just want to turn ValidFirstName to true;
				ValidNumberOfPeople = true;
			}).blur(function(){

			}).keyup(function(){
				//This is another short hand way of writing an if statement.
				//all it says is if the function returns a value of true then to return out of the keyup function
				//does the exact same thing as the if statements above
				if(required($(this))) return;
				if(minLen($(this), 1)) return;
				ValidNumberOfPeople = true;
			})

	//	First Name
	$("#FirstName")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidFirstName = false;
				return;
			} else if(minLen($(this), 1)){
				ValidFirstName = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidFirstName = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 1)) return;
			ValidFirstName = true;
		})

	//	Last Name
	$("#LastName")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidLastName = false;
				return;
			} else if(minLen($(this), 1)){
				ValidLastName = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidLastName = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 1)) return;
			LastName = true;
		})

	//	Email
	$("#Email")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidEmail = false;
				return;
			} else if(minLen($(this), 1)){
				ValidEmail = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidEmail = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 1)) return;
			ValidEmail = true;
		})

	//	ConfirmEmail
	$("#ConfirmEmail")
		.focus(function(){
			//For if statements you dont need to give a = value
			//If you leave it then the code will assume you want it to be true
			//if(x=true) and if(x) both mean the same thing and are expecting the value of true
			//This line calls the required function and passes through the current element (Go to required function) 
			if(required($(this))){
				//If the value of true gets returned from the required function then proceed with these lines
				ValidConfirmEmail = false;
				return;
			} else if(minLen($(this), 1)){
				ValidConfirmEmail = false;
				return;
			}
			//If all of the functions return a value of false then it will skip all of the if statements
			//Then we just want to turn ValidFirstName to true;
			ValidConfirmEmail = true;
		}).blur(function(){

		}).keyup(function(){
			//This is another short hand way of writing an if statement.
			//all it says is if the function returns a value of true then to return out of the keyup function
			//does the exact same thing as the if statements above
			if(required($(this))) return;
			if(minLen($(this), 1)) return;
			ValidConfirmEmail = true;
		})


});

function required(element){
	//the required function is looking for a value to be passed through it
	//we have been passing $(this) which means that whatever value you pass through it becomes element
	if(element.val().length === 0){
		//Check to see if there is anything in the input field
		//If there isnt then add the error code
		element.parent().find('span.input-errors').text('This field is required');
		//Because we are writing a short hand if statement, it is looking for a value of true to be able
		//to continue with the statement.
		//What we are doing is we want to return a value back to it and it should be true or false
		//if we return true then we are saying that there is errors so then whatever is in the if statement will run
		return true;
	} else {
		//If the value is more than 0 characters then we want to empty the span
		element.parent().find('span.input-errors').empty();
		//Because we are writing a short hand if statement, it is looking for a value of true to be able
		//to continue with the statement.
		//What we are doing is we want to return a value back to it and it should be true or false
		//if we return false then we are saying that there are no errors so then whatever is in the if statement won't run
		return false;
	}
}

//	Mix it Up

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

//	Only having one check box checked at a time

	// the selector will match all input controls of type :checkbox
	// and attach a click event handler 
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

//	Number of People Traveling (Plus and Minus)

//	Variables
var increase = $("#plus");
var decrease = $("#minus");
var inputValue = $("#NumberOfDays")[0].value;
var NumberOfDays = $("#NumberOfDays")[0];
//	Max
var max = NumberOfDays.max;
//	Min
var min = NumberOfDays.min;

//	Plus
increase.click(function(){
	inputValue = Number(inputValue);
	if(inputValue < max){
		inputValue += 1;
		NumberOfDays.value = "";
		NumberOfDays.value = inputValue;
		return;
	}
});

//	Minus
decrease.click(function(){
	if(inputValue > min){
		inputValue -= 1;
		NumberOfDays.value = "";
		NumberOfDays.value = inputValue;
		return;
	}
});

//	Transport

//	Petrol Price as of Friday 30th June - $1.859/L
//	Motorbike 1 person – $109/day - min 1 day, max 5 days, 3.7L/100km
//	Small car 1-2 people – $129/day - min 1 day, max 10 days, 8.5L/100km
//	Large car 1-5 people – $144/day - min 3 days, max 10 days, 9.7L/100km
//	Motor home 2-6 people – $200/day - min 2 days, max 15 days, 17L/100km

//	Put all Vehicles into an array and give them a min and a max
//	for how many days your can be traveling in them for










