
function init() {
    const teamList = JSON.parse(sessionStorage.getItem('teamList'));
    const teamDropdown = document.getElementById('team');

    // Populate the team dropdown with team names and IDs
    teamList.forEach(team => {
        const option = document.createElement('option');
        option.value = team.id;
        option.textContent = team.name;
        teamDropdown.appendChild(option);
    });
}

function addPlayerFromUI() {
    debugger;
    var name = document.getElementById("name").value;
    var photo = document.getElementById("photo").value;
    var team = document.getElementById("team").value;
    var price = document.getElementById("price").value;
    var playingStatus = ""; // Get the selected playing status
    var role = ""; // Get the selected role

    // Create a new Player object
    var player = new Player(name, photo, team, price, playingStatus, role);

    
    addPlayer(player);
    console.log(player);
    window.location.reload();
}

// Constructor for player
function Player(name, photo, team, price, playingStatus, role) {
    this.name = name;
    this.photo = photo;
    this.team = team;
    this.price = price;
    this.playingStatus = playingStatus;
    this.role = role;
}