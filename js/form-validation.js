//	Form Validation Functions

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

function minLen(element, value){
	if(element.val().length < value){
		element.parent().find('span.input-errors').text('This field must be more than ' + value);
		return true;
	} else {
		element.parent().find('span.input-errors').empty();
		return false;
	}
}














