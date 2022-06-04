let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let dice6 = document.getElementById('dice6');
let red_figure1 = document.createElement('i');
let red_figure2 = document.createElement("i");
let red_figure3 = document.createElement("i");
let red_figure4 = document.createElement("i");
let blue_figure1 = document.createElement("i");
let blue_figure2 = document.createElement("i");
let blue_figure3 = document.createElement("i");
let blue_figure4 = document.createElement("i");
let start_game = false;
red_figure1.className = "fas fa-chess-pawn";
red_figure2.className = "fas fa-chess-pawn";
red_figure3.className = "fas fa-chess-pawn";
red_figure4.className = "fas fa-chess-pawn";
blue_figure1.className = "fas fa-chess-pawn";
blue_figure2.className = "fas fa-chess-pawn";
blue_figure3.className = "fas fa-chess-pawn";
blue_figure4.className = "fas fa-chess-pawn";
red_figure1.setAttribute('id', "red_piece1");
red_figure2.setAttribute('id', "red_piece2");
red_figure3.setAttribute('id', "red_piece3");
red_figure4.setAttribute('id', "red_piece4");
blue_figure1.setAttribute('id', "blue_piece1");
blue_figure2.setAttribute('id', "blue_piece2");
blue_figure3.setAttribute('id', "blue_piece3");
blue_figure4.setAttribute('id', "blue_piece4");
red_figure1.style = 'color: #ea4c63; font-size:50px; margin-top:10%';
red_figure2.style = 'color: #ea4c63; font-size:50px; margin-top:10%';
red_figure3.style = 'color: #ea4c63; font-size:50px; margin-top:10%';
red_figure4.style = 'color: #ea4c63; font-size:50px; margin-top:10%';
blue_figure1.style = 'color: #40a6d5; font-size:50px; margin-top:10%';
blue_figure2.style = 'color: #40a6d5; font-size:50px; margin-top:10%';
blue_figure3.style = 'color: #40a6d5; font-size:50px; margin-top:10%';
blue_figure4.style = 'color: #40a6d5; font-size:50px; margin-top:10%';
let red_btn = document.getElementById('btn');
let blue_btn = document.getElementById('btn-blue');
let red_figure_start_position1 = document.getElementsByClassName('red_figure_start_position')[0];
let red_figure_start_position2 = document.getElementsByClassName('red_figure_start_position')[1];
let red_figure_start_position3 = document.getElementsByClassName('red_figure_start_position')[2];
let red_figure_start_position4 = document.getElementsByClassName('red_figure_start_position')[3];
let blue_figure_start_position1 = document.getElementsByClassName('blue_figure_start_position')[0];
let blue_figure_start_position2 = document.getElementsByClassName('blue_figure_start_position')[1];
let blue_figure_start_position3 = document.getElementsByClassName('blue_figure_start_position')[2];
let blue_figure_start_position4 = document.getElementsByClassName('blue_figure_start_position')[3];
let message_to_player = document.getElementById('message_to_player');
let red_goal1 = document.getElementById('red_goal1');
let red_goal2 = document.getElementById('red_goal2');
let red_goal3 = document.getElementById('red_goal3');
let red_goal4 = document.getElementById('red_goal4');
let blue_goal1 = document.getElementById('blue_goal1');
let blue_goal2 = document.getElementById('blue_goal2');
let blue_goal3 = document.getElementById('blue_goal3');
let blue_goal4 = document.getElementById('blue_goal4');
var number;

let count = 0;
message_to_player.style = "color : #ea4c63;"
message_to_player.innerHTML = "Red player turn! Please roll the dice and than click on the piece you want to move";


function isEven(value) {
    if (value % 2 == 0)
        return true;
    else
        return false;
}

function roll_dice(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    number_of_dice = Math.floor(Math.random() * (max - min + 1)) + min;
    red_btn.innerHTML = "Roll the Dice"
    if (number_of_dice == 1) {
        dice1.style = 'display: inline-block';
        dice2.style = 'display: none';
        dice3.style = 'display: none';
        dice4.style = 'display: none';
        dice5.style = 'display: none';
        dice6.style = 'display: none';
    }
    else if (number_of_dice == 2) {
        dice1.style = 'display: none';
        dice2.style = 'display: inline-block';
        dice3.style = 'display: none';
        dice4.style = 'display: none';
        dice5.style = 'display: none';
        dice6.style = 'display: none';
    }
    else if (number_of_dice == 3) {
        dice1.style = 'display: none';
        dice2.style = 'display: none';
        dice3.style = 'display: inline-block';
        dice4.style = 'display: none';
        dice5.style = 'display: none';
        dice6.style = 'display: none';
    }
    else if (number_of_dice == 4) {
        dice1.style = 'display: none';
        dice2.style = 'display: none';
        dice3.style = 'display: none';
        dice4.style = 'display: inline-block';
        dice5.style = 'display: none';
        dice6.style = 'display: none';
    }
    else if (number_of_dice == 5) {
        dice1.style = 'display: none';
        dice2.style = 'display: none';
        dice3.style = 'display: none';
        dice4.style = 'display: none';
        dice5.style = 'display: inline-block';
        dice6.style = 'display: none';
    }
    else if (number_of_dice == 6) {
        dice1.style = 'display: none';
        dice2.style = 'display: none';
        dice3.style = 'display: none';
        dice4.style = 'display: none';
        dice5.style = 'display: none';
        dice6.style = 'display: inline-block';
    }

    count++;
    if (number_of_dice == 6) {
        count -= 1;
    }
    if (isEven(count) == false) {

        message_to_player.style = "color : #40a6d5";
        message_to_player.innerHTML = "Blue player turn to roll the dice!  Please roll the dice and than click on the piece you want to move";

    } else {
        message_to_player.style = "color : #ea4c63;"
        message_to_player.innerHTML = "Red player turn to roll the dice!  Please roll the dice and than click on the piece you want to move";

    }



    number = number_of_dice;
    return number;
}

dice1.style = 'display: inline-block';
dice2.style = 'display: none';
dice3.style = 'display: none';
dice4.style = 'display: none';
dice5.style = 'display: none';
dice6.style = 'display: none';

red_figure_start_position1.appendChild(red_figure1);
red_figure_start_position2.appendChild(red_figure2);
red_figure_start_position3.appendChild(red_figure3);
red_figure_start_position4.appendChild(red_figure4);
blue_figure_start_position1.appendChild(blue_figure1);
blue_figure_start_position2.appendChild(blue_figure2);
blue_figure_start_position3.appendChild(blue_figure3);
blue_figure_start_position4.appendChild(blue_figure4);


// here i am making list that represent path for red and blue player
let red_player_road = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 29, 28, 27, 26, 32, 34, 38, 45, 44, 43, 37, 33, 31, 25, 24, 23, 22, 21, 11, 12, 13, 14, 15]
let blue_player_road = [30, 29, 28, 27, 26, 32, 34, 38, 45, 44, 43, 37, 33, 31, 25, 24, 23, 22, 21, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 19, 18, 17, 16]
// starting position for figures
let positions = {
    "red_piece1": ["red", 35, null],
    "red_piece2": ["red", 36, null],
    "red_piece3": ["red", 41, null],
    "red_piece4": ["red", 42, null],
    "blue_piece1": ["blue", 39, null],
    "blue_piece2": ["blue", 40, null],
    "blue_piece3": ["blue", 46, null],
    "blue_piece4": ["blue", 47, null]}

function move(position, number, id) {


    if (roads[parseInt(position)].hasChildNodes()) {

        let child = roads[parseInt(position)].firstChild;
        if (child.parentElement.getAttribute("id") == "parent" && number != 6) {
            message_to_player.style = "color : #93b549;"
            message_to_player.innerHTML = "To bring a piece into the game a you must throw a six."
        }
        else if (child.parentElement.getAttribute("id") == "parent" && number == 6) {
            roads[parseInt(position)].removeChild(child);
            if (positions[id][0] == "red") {
                if (roads[red_player_road[0]].hasChildNodes()) {

                    for (let piece in positions) {
                        if (roads[red_player_road[0]].firstChild.getAttribute("id") == piece) {
                            let e = roads[red_player_road[0]].firstChild;

                            roads[red_player_road[0]].removeChild(e);
                            roads[positions[piece][1]].appendChild(e);
                            roads[red_player_road[0]].appendChild(child);
                            positions[piece][2] = null;
                        }
                    }
                }
                else {
                    roads[red_player_road[0]].appendChild(child);
                }
            }
            else if (positions[id][0] == "blue") {
                if (roads[blue_player_road[0]].hasChildNodes()) {
                    for (let piece in positions) {
                        if (roads[blue_player_road[0]].firstChild.getAttribute("id") == piece) {
                            let e = roads[blue_player_road[0]].firstChild;

                            roads[blue_player_road[0]].removeChild(e);
                            roads[positions[piece][1]].appendChild(e);
                            roads[blue_player_road[0]].appendChild(child);
                            positions[piece][2] = null;
                        }
                    }
                }
                else {
                    roads[blue_player_road[0]].appendChild(child);
                }
            }
        }
        else {
            
            positions[id][2] += number;
            if (positions[id][2] > red_player_road.length-1) {
                message_to_player.innerHTML = "You can't exit from the board!";
                return;
               
            }
            roads[parseInt(position)].removeChild(child);
            if (positions[id][0] == "red") {
                if (roads[red_player_road[positions[id][2]]].hasChildNodes()) {
                    for (let piece in positions) {
                        if (roads[red_player_road[positions[id][2]]].firstChild.getAttribute("id") == piece) {
                            let eaten_piece = roads[red_player_road[positions[id][2]]].firstChild;
                            roads[red_player_road[positions[id][2]]].removeChild(eaten_piece);
                            roads[positions[piece][1]].appendChild(eaten_piece);
                            roads[red_player_road[positions[id][2]]].appendChild(child);
                            positions[piece][2] = null;
                        }
                    }
                } else {
                    roads[red_player_road[positions[id][2]]].appendChild(child);
                }


            }
            else if (positions[id][0] == "blue") {
                if (roads[blue_player_road[positions[id][2]]].hasChildNodes()) {
                    for (let piece in positions) {
                        if (roads[blue_player_road[positions[id][2]]].firstChild.getAttribute("id") == piece) {
                            let eaten_piece = roads[blue_player_road[positions[id][2]]].firstChild;
                            roads[blue_player_road[positions[id][2]]].removeChild(eaten_piece);
                            roads[positions[piece][1]].appendChild(eaten_piece);
                            roads[blue_player_road[positions[id][2]]].appendChild(child);
                            positions[piece][2] = null;
                        }
                    }
                }
                else {
                    roads[blue_player_road[positions[id][2]]].appendChild(child);
                }
            }
        }
    }
    // cheking if all figures are on the goals position then the player is one
    if (red_goal1.hasChildNodes() && red_goal2.hasChildNodes() && red_goal3.hasChildNodes() && red_goal4.hasChildNodes()) {
        message_to_player.innerHTML = "Red player won!"
    }
    if (blue_goal1.hasChildNodes() && blue_goal2.hasChildNodes() && blue_goal3.hasChildNodes() && blue_goal4.hasChildNodes()) {
        message_to_player.innerHTML = "Blue player won!"
    }
}

let roads = document.querySelectorAll('.road');
for (let i = 0; i < roads.length; i++) {
    roads[i].addEventListener("click", () => { move(i, number, roads[i].firstChild.getAttribute("id")) });
}

