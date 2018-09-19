var bitcoin = 0;      // var to be used in manipulating the bitcoin
function pacman() {     // function for the"pacman" game
	bitcoin = bitcoin + 10;    //increases the bitcoin once you play it
	window.open('https://pacman-e281c.firebaseapp.com');   // link for the "pacman"
	document.getElementById("bitcoin").innerHTML = +bitcoin;   //prints out the bitcoin
}
function promo() {          // function for the promo code
	var code = prompt("Please input the Promo Code you would like to redeem"); //asks the user for the promo code
	if (code == "arcade") {      //if-statement for the "arcade" promo code
		bitcoin = bitcoin + 20;			//adds up the bitcoin when promo code is used
		document.getElementById("bitcoin").innerHTML = +bitcoin;	// prints out the result

		document.getElementById(promocode.id).disabled = true;
		alert("Promo Code redeemed. You will not be able to redeem anymore Promo Codes.");		//alerts when done
	}else if (code == "gg-gaming") {		//else if-statement for the "gg-gaming" promo code
		bitcoin = bitcoin + 40;						// adds up the bitcoin
		document.getElementById("bitcoin").innerHTML = +bitcoin;	// prints out the result
		document.getElementById(promocode.id).disabled = true;
		alert("Promo Code redeemed. You will not be able to redeem anymore Promo Codes."); //alerts when done
	}else if (code == "promo2018") {		//for the "promo2018" promo code
		bitcoin = bitcoin + 10;					//adds up the bitcoin
		document.getElementById("bitcoin").innerHTML = +bitcoin;		//prints out the result
		document.getElementById(promocode.id).disabled = true;
		alert("Promo Code redeemed. You will not be able to redeem anymore Promo Codes.");	//alerts when done
	}

}
function profilename() {		//function for the username
	var name = prompt("Please input the username you would like.");
	while (name == "" || name == " " || name == "  " || name == "   " || name == "    " || name == "     ") {	//checks if there are spaces in the username
		name = prompt("Please input the username you would like.");// asks the user for the info
	}
	document.getElementById("profile").innerHTML = name;	//prints out the new name
}
function profilepic(id) {		//function for the profile pic
	var divworks = document.getElementById(id);	//default profile pic
	if (divworks.style.display == "none") {
		divworks.style.display = "block";
	}else {
		divworks.style.display = "none";
	}
}
function choosepic() {				//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic1.jpg";
}
function choosepic2() {					//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic2.png"
}
function choosepic3() {					//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic3.png"
}
function choosepic4() {						//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic4.png"
}
function choosepic5() {
	document.getElementById("profilepic").src = "assets/pics/pic5.png"
}
function choosepic6() {						//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic6.png"
}
function choosepic7() {						//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic7.png"
}
function choosepic8() {							//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic8.jpg"
}
function choosepic9() {						//a choice for the user to change their profile pic
	document.getElementById("profilepic").src = "assets/pics/pic9.png"
}
function codegive() {						//function for the promocodes(marquee)
 setTimeout(function(){ document.getElementById("info").innerHTML = "Promo: arcade"; }, 36000);		//changes the text at the specified milliseconds(1s=1000ms)
 setTimeout(function(){ document.getElementById("info").innerHTML = "Promo: gg-gaming"; }, 72000);//changes the text at the specified milliseconds(1s=1000ms)
 setTimeout(function(){ document.getElementById("info").innerHTML = "Promo: promo2018"; }, 108000);//changes the text at the specified milliseconds(1s=1000ms)
 setTimeout(function(){ document.getElementById("info").innerHTML = "Promo: arcade"; }, 144000);//changes the text at the specified milliseconds(1s=1000ms)
 setTimeout(function(){ document.getElementById("info").innerHTML = "Promo: gg-gaming"; }, 180000);//changes the text at the specified milliseconds(1s=1000ms)
 setTimeout(function(){ document.getElementById("info").innerHTML = "Promo: promo2018"; }, 216000);//changes the text at the specified milliseconds(1s=1000ms)
}

function goback() {			//go backs to the previous window
	window.close();
}
function brickbreak() {		//function for the "brickbreaker" game
	bitcoin = bitcoin + 10;		//adds bitcoin when you play it
	window.open('Firstgame.html');	//links into the file of the game
	document.getElementById("bitcoin").innerHTML = +bitcoin;		//prints out result
}
function tictactoe() {		//function for the "tictactoe" game
	bitcoin = bitcoin + 10;	//adds bitcoin when you play it
	window.open('tictactoe.html');	//opens up the file
	document.getElementById("bitcoin").innerHTML = +bitcoin;	//prints out the result
}
function cashout() {		//function for the cash out system
	localStorage.setItem("currency",bitcoin);	//saves up the current bitcoin
	alert("You have cashed out. Please visit the store and Cash in your winnings!");	//alerts the user for the next action
}
function cashin() {		//functionn for the cash in system
	document.getElementById("currency").innerHTML = localStorage.getItem("currency");	// pastes the "cashed out" bitcoin
}
var newbit = localStorage.getItem("currency");	// var to call for the bitcoin
function buyxtralife(id) {				//function for the shop item
  var costlife = 40;						//cost of the shop item
  var costlifetwo = 80;					//cost of the shop item when bought twice
  var costlifethree = 120;			//cost of the shop item when bought thrice
  var costlifefour = 160;				//cost of the shop item when bought fourth time
  var costlifefive = 200;				//cost of the shop item when bought fifth time
  var value = document.getElementById("xtra-life-amount").value;	//to buy the shop item
  if (value > 5) {				//a limit for the shopitem
    alert("You cannot buy more than 5 extra lifes.");	//alerts the user
  }else if (value == 1) {		//else-if statement for the limit
    if (newbit >= costlife ) {	//confirmation if the bitcoin is higher than the shop item's cost
      newbit = newbit - 40;		//subtracts the bitcoin when the user buys
      localStorage.setItem("newcurrency",newbit);		//to call out the new bitcoin
      document.getElementById("currency").innerHTML = newbit;		// pints out result
      alert("Thank you for your purchase! Your code is: LS4F");	//gives the user a promocode for the shopitem
    }else {
      alert("You do not have enough bitcoin!");		//alerts if the user has less bitcoin than the shopitem
    }
  }else if (value == 2) {
    if (newbit >= costlifetwo) {
      newbit = newbit - 80;
      localStorage.setItem("newcurrencytwo",newbit);
      document.getElementById("currency").innerHTML = newbit;
      alert("Thank you for your purchase! Your code is: LS8F");
    }else {
      alert("You do not have enough bitcoin!");
    }
  }else if (value == 3) {
		if (newbit >= costlifethree) {
			newbit = newbit - 120;
			localStorage.setItem("newcurrencythree",newbit);
			document.getElementById("currency").innerHTML = newbit;
      alert("Thank you for your purchase! Your code is: LS12F");
		}else {
			alert("You do not have enough bitcoin!");
		}
	}else if (value == 4) {
		if (newbit >= costlifefour) {
			newbit = newbit - 160;
			localStorage.setItem("newcurrencyfour",newbit);
			document.getElementById("currency").innerHTML = newbit;
      alert("Thank you for your purchase! Your code is: LS16F");
		}else {
			alert("You do not have enough bitcoin!");
		}
	}else if (value == 5) {
		if (newbit >= costlifefive) {
			newbit = newbit - 200;
			localStorage.setItem("newcurrencyfive",newbit);
			document.getElementById("currency").innerHTML = newbit;
			alert("Thank you for your purchase! Your code is: LS20F");
		}else {
			alert("You do not have enough bitcoin!");
		}
	}
  }
function boosting(id) {
	var costboostone = 100;
	var costboosttwo = 200;
	var costboostthree = 300;
	var costboostfour = 400;
	var costboostfive = 500;
	var value = document.getElementById("boost-amount").value;
	if (value > 5) {
		alert("You cannot purchase more than 5 boosts!");
	}else if (value == 1) {
		if (newbit >= costboostone) {
			newbit = newbit - 100;
			localStorage.setItem("newboostcurrency",newbit);
			document.getElementById("currency").innerHTML = newbit;
			alert("Thank you for your purchase! Your code is: BS1T");
		}else {
			alert("You do not have enough bitcoin!");
		}
	}else if (value == 2) {
		if (newbit >= costboosttwo) {
			newbit = newbit - 200;
			localStorage.setItem("newboostcurrencytwo",newbit);
			document.getElementById("currency").innerHTML = newbit;
			alert("Thank you for your purchase! Your code is: BS2T");
		}else {
			alert("You do not have enough bitcoin!");
		}
	}else if (value == 3) {
		if (newbit >= costboostthree) {
			newbit = newbit - 300;
			localStorage.setItem("newboostcurrencythree",newbit);
			document.getElementById("currency").innerHTML = newbit;
			alert("Thank you for your purchase! Your code is: BS3T");
		}else {
				alert("You do not have enough bitcoin!");
		}
	}else if (value == 4) {
		if (newbit >= costboostfour) {
			newbit = newbit - 400;
			localStorage.setItem("newboostcurrencyfour",newbit);
			document.getElementById("currency").innerHTML = newbit;
			alert("Thank you for your purchase! Your code is: BS4T");
		}else {
			alert("You do not have enough bitcoin!");
		}
	}else if (value == 5) {
		if (newbit >= costboostfive) {
			newbit = newbit - 500;
			localStorage.setItem("newboostcurrencyfive",newbit);
			document.getElementById("currency").innerHTML = newbit;
			alert("Thank you for your purchase! Your code is: BS5T");
		}else {
				alert("You do not have enough bitcoin!");
		}
	}
}
function styleone() {
	if (newbit >= 500) {
		newbit = newbit - 500;
		localStorage.setItem("fontstylecurrency",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: F0NT1STLE");
	}else {
		alert("You do not have enough bitcoin!");
	}
}
function styletwo() {
	if (newbit >= 500) {
		newbit = newbit - 500;
		localStorage.setItem("fontstylecurrencytwo",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: F0NT2STLE");
	}else {
		alert("You do not have enough bitcoin!");
	}
}
function stylethree() {
	if (newbit >= 500) {
		newbit = newbit - 500;
		localStorage.setItem("fontstylecurrencythree",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: F0NT3STLE");
	}else {
		alert("You do not have enough bitcoin!");
	}
}
function stylefour() {
	if (newbit >= 500) {
		newbit = newbit - 500;
		localStorage.setItem("fontstylecurrencyfour",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: F0NT4STLE");
	}else {
		alert("You do not have enough bitcoin!");
	}
}
function stylefive() {
	if (newbit >= 500) {
		newbit = newbit - 500;
		localStorage.setItem("fontstylecurrencyfive",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: F0NT5STLE");
	}else {
		alert("You do not have enough bitcoin!");
	}
}
function stylesix() {
	if (newbit >= 500) {
		newbit = newbit - 500;
		localStorage.setItem("fontstylecurrencysix",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: F0NT6STLE");
	}else {
		alert("You do not have enough bitcoin!");
	}
}
function changingfont() {
	var codes = prompt("Please input your font code!");
	if (codes == "F0NT1STLE") {
		var changefontstyle = document.getElementById("changefont1").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont2").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont3").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont4").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont5").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont6").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont7").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont8").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont9").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont10").style.fontFamily = "Patua One, cursive";
		var changefontstyle = document.getElementById("changefont11").style.fontFamily = "Patua One, cursive";
		document.getElementById("changefont").style.fontSize = "small";
	}
	else if (codes == "F0NT2STLE") {
		var fontstylechange = document.getElementById("changefont1").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont2").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont3").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont4").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont5").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont6").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont7").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont8").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont9").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont10").style.fontFamily = "Fredoka One, cursive";
		var fontstylechange = document.getElementById("changefont11").style.fontFamily = "Fredoka One, cursive";
		document.getElementById("changefont").style.fontSize = "xx-small";
	}else if (codes == "F0NT3STLE" ) {
		var fontfontchange = document.getElementById("changefont1").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont2").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont3").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont4").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont5").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont6").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont7").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont8").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont9").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont10").style.fontFamily = "Lobster, cursive";
		var fontfontchange = document.getElementById("changefont11").style.fontFamily = "Lobster, cursive";
		document.getElementById("changefont").style.fontSize = "xx-small";
	}else if (codes == "F0NT4STLE") {
		var stylechange = document.getElementById("changefont1").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont2").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont3").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont4").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont5").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont6").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont7").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont8").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont9").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont10").style.fontFamily = "Passion One, cursive";
		var stylechange = document.getElementById("changefont11").style.fontFamily = "Passion One, cursive";
		document.getElementById("changefont").style.fontSize = "xx-small";
	}else if (codes == "F0NT5STLE") {
		var chaningincham = document.getElementById("changefont1").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont2").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont3").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont4").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont5").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont6").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont7").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont8").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont9").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont10").style.fontFamily = "Merriweather, cursive";
		var chaningincham = document.getElementById("changefont11").style.fontFamily = "Merriweather, cursive";
		document.getElementById("changefont").style.fontSize = "xx-small";
	}else if (codes == "F0NT6STLE") {
		var fontfontchangee = document.getElementById("changefont1").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont2").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont3").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont4").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont5").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont6").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont7").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont8").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont9").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont10").style.fontFamily = "Playfair Display, cursive";
		var fontfontchangee = document.getElementById("changefont11").style.fontFamily = "Playfair Display, cursive";
	}else {
		alert("Invalid font code.");
	}
}
function changewall1() {
	if (newbit >= 200) {
		newbit = newbit - 200
		localStorage.setItem("wallpapercurrency",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: W4LLPWR1");
	}
	else {
		alert("You do not have enough bitcoin!");
	}
}
function changewall2() {
	if (newbit >= 200) {
		newbit = newbit - 200
		localStorage.setItem("wallpapercurrency1",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: W4LLPWR2");
	}
	else {
		alert("You do not have enough bitcoin!");
	}
}
function changewall3() {
	if (newbit >= 200) {
		newbit = newbit - 200
		localStorage.setItem("wallpapercurrency2",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: W4LLPWR3");
	}
	else {
		alert("You do not have enough bitcoin!");
	}
}
function changewall4() {
	if (newbit >= 200) {
		newbit = newbit - 200
		localStorage.setItem("wallpapercurrency3",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: W4LLPWR4");
	}
	else {
		alert("You do not have enough bitcoin!");
	}
}
function changingwall() {
	var inputwallcode = prompt("Please input your wallpaper code!");
	if (inputwallcode == "W4LLPWR1") {
document.getElementById("imgback").src = "assets/pics/wall1.gif";
	}else if (inputwallcode == "W4LLPWR2") {
document.getElementById("imgback").src = "assets/pics/wall2.gif";
	}else if (inputwallcode == "W4LLPWR3") {
document.getElementById("imgback").src = "assets/pics/wall3.gif";
	}else if (inputwallcode == "W4LLPWR4") {
document.getElementById("imgback").src = "assets/pics/wall4.gif";
	}else {
		alert("Invalid wallpaper code.");
	}
}
function coloruserchange1() {
	if (newbit >= 50) {
		newbit = newbit - 50;
		localStorage.setItem("usernamecolorchange1",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: US3RCHSNF1");
	}else {
		alert("You do not have enough bitcoin.");
	}
}
function coloruserchange2() {
	if (newbit >= 50) {
		newbit = newbit - 50;
		localStorage.setItem("usernamecolorchange2",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: US3RCHSNF2");
	}else {
		alert("You do not have enough bitcoin.");
	}
}
function coloruserchange3() {
	if (newbit >= 50) {
		newbit = newbit - 50;
		localStorage.setItem("usernamecolorchange3",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: US3RCHSNF3");
	}else {
		alert("You do not have enough bitcoin.");
	}
}
function coloruserchange4() {
	if (newbit >= 50) {
		newbit = newbit - 50;
		localStorage.setItem("usernamecolorchange4",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: US3RCHSNF4");
	}else {
		alert("You do not have enough bitcoin.");
	}
}
function changingusercolor() {
	var usercolor = prompt("Please input your Username color code!");
	if (usercolor == "1") {
		document.getElementById("profile").style.color = "white";
	}else if (usercolor == "2") {
			document.getElementById("profile").style.color = "#f80759";
	}else if (usercolor == "3") {
		document.getElementById("profile").style.color = "red";
	}else if (usercolor == "4") {
		document.getElementById("profile").style.color = "blue";
	}else {
		alert("Please input a valid Username color code.");
	}
	}
function racegame() {
	bitcoin = bitcoin + 20;	//adds bitcoin when you play it
	window.open('race game.html');	//opens up the file
	document.getElementById("bitcoin").innerHTML = +bitcoin;	//prints out the result
}
function slot() {
	bitcoin = bitcoin + 10;	//adds bitcoin when you play it
	window.open('slot.html');	//opens up the file
	document.getElementById("bitcoin").innerHTML = +bitcoin;	//prints out the result
}
function hideandseek() {
	bitcoin = bitcoin + 20;	//adds bitcoin when you play it
	window.open('game4.html');	//opens up the file
	document.getElementById("bitcoin").innerHTML = +bitcoin;	//prints out the result
}
function buycar1() {
	var priceofcar = 223;
	var buycar = prompt("The price of this car is 223Ƀ. Write Yes, if you would like to purchase.");
	if (buycar == "Yes" || buycar == "yes" || buycar == "yes " || buycar == "Yes " || buycar == "yEs" || buycar == "yeS") {
		if (newbit >= priceofcar) {
		newbit = newbit - 223;
		localStorage.setItem("buycar1currency",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: VSIAL1");
		}else {
			alert("You do not have enough Bitcoin");
		}
	}else {
		alert("We hope to see you again.");
	}
}
function buycar2() {
	var priceofcar = 440;
	var buycar = prompt("The price of this car is 440Ƀ. Write Yes, if you would like to purchase.");
	if (buycar == "Yes" || buycar == "yes" || buycar == "yes " || buycar == "Yes " || buycar == "yEs" || buycar == "yeS") {
		if (newbit >= priceofcar) {
		newbit = newbit - 440;
		localStorage.setItem("buycar2currency",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: VSIAL2");
		}else {
			alert("You do not have enough Bitcoin");
		}
	}else {
		alert("We hope to see you again.");
	}
}
function buycar3() {
	var priceofcar = 130;
	var buycar = prompt("The price of this car is 130Ƀ. Write Yes, if you would like to purchase.");
	if (buycar == "Yes" || buycar == "yes" || buycar == "yes " || buycar == "Yes " || buycar == "yEs" || buycar == "yeS") {
		if (newbit >= priceofcar) {
		newbit = newbit - 130;
		localStorage.setItem("buycar3currency",newbit);
		document.getElementById("currency").innerHTML = newbit;
		alert("Thank you for your purchase! Your code is: VSIAL3");
		}else {
			alert("You do not have enough Bitcoin");
		}
	}else {
		alert("We hope to see you again.");
	}
}
//document.getElementById
