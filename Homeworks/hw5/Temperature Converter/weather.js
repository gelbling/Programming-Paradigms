// Gabriel Amodeo Elbling
// Prog. Paradigms
// HW5, Q3

function toCelsius(){

    // hide the display element to reset it each time
    document.getElementById("result-parent").style.visibility = "hidden";

	// grabs the input from the user
	let input =  document.getElementById("temperature").value;

    // check if the input is a number
    if (isNaN(input)){
        // if it is not, change the text, color and bold the text
        document.getElementById("result-parent").innerText = 'Please input a valid number!'
        document.getElementById("result-parent").style.color = "red"
        document.getElementById("result-parent").style.fontWeight = "bold";
    }
    else{
        // if it is a number:

        // converts the temperature to C
        let celsius = (input - 32) * 5/9;

        // since changing the innerText of result-parent deletes the span element
        // if the span element doesn't exist, reassign innerText to The Temperature in celsius is and the celcius value
        // if the span element still exists, just edit the span element's innerText to the celsius value
        if (document.getElementById("result")){
            document.getElementById("result").innerText = celsius;
        }
        else{
            document.getElementById("result-parent").style.color = "black"
            document.getElementById("result-parent").style.fontWeight = "normal";
            document.getElementById("result-parent").innerText = 'The Temperature in Celsius is ' + celsius;
        }

    }

    // display the output of the conversion or the error message
    document.getElementById("result-parent").style.visibility = "visible";
}