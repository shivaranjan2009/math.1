
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
loccalstroage.set("player_1_name",player1_name)
loccalstroage.set("player_2_name",player2_name)
    window.location = "game_page.html";
}

