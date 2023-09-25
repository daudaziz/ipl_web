function goToTeamDetails(teamName) {
    window.location.href = `team-details.html?team=${teamName}`;
}
const players = [
    { name: 'Player 1', team: 'MI' },
    { name: 'Player 2', team: 'RR' },
    { name: 'Player 3', team: 'CSK' },
    // Add more player data as needed
];


let teams = [
    { name: 'MI', icon: 'https://wallpapers.com/images/hd/mumbai-indians-stylized-lettering-logo-9y583dm0eo8zc31a.jpg' },
    { name: 'RR', icon: 'rr-icon.png' },
    
];



function addPlayer() {
    const newPlayerName = prompt('Enter the new player name:');
    const newPlayerTeam = prompt('Enter the team for the new player:');
    
    if (newPlayerName && newPlayerTeam) {
        players.push({ name: newPlayerName, team: newPlayerTeam });
        displayPlayers();
    }
}

function displayTeams() {
    debugger;
    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = '';

    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('team-card');
        teamCard.innerHTML = `
            <img src="images/${team.icon}" alt="${team.name} Icon">
            <h2>${team.name}</h2>
        `;
        teamContainer.appendChild(teamCard);
    });
}


// Function to display players on the screen
function displayPlayers() {
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = '';

    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
            <h2>${player.name}</h2>
            <p>Team: ${player.team}</p>
        `;
        playerContainer.appendChild(playerCard);
    });
}


// Initialize the screen with teams and players
// displayTeams();
// displayPlayers();

addEventListener("load", (event) => {
    displayTeams();
    displayPlayers();
});


// Add event listeners to the Add Team and Add Player buttons
document.getElementById('add-team-button').addEventListener('click', addTeam);
document.getElementById('add-player-button').addEventListener('click', addPlayer);



// Function to filter and display players based on team code
function searchPlayers() {
    debugger;
    const teamCode = document.getElementById('team-code').value.toUpperCase();
    const searchResults = players.filter(player => player.team === teamCode);

    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (searchResults.length === 0) {
        resultsContainer.innerHTML = '<p>No matching players found.</p>';
    } else {
        searchResults.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');
            playerCard.innerHTML = `
                <h2>${player.name}</h2>
                <p>Team: ${player.team}</p>
            `;
            resultsContainer.appendChild(playerCard);
        });
    }
}


/*test code for search*/
function searchPlayers() {
    // Get the input value
    const teamCode = document.getElementById('team-code').value.trim();

    // Get the search results element
    const searchResults = document.getElementById('search-results');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Perform the search if the team code is not empty
    if (teamCode !== '') {
        
        const results = [
            { name: 'Player 1' },
            { name: 'Player 2' },
            { name: 'Player 3' },
        ];

        // Display the search results
        if (results.length > 0) {
            results.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card');
                playerCard.textContent = player.name;

                // Add an event listener to handle clicks on search results
                playerCard.addEventListener('click', function () {
                    goToPlayerDetails(player.name);
                });

                searchResults.appendChild(playerCard);
            });
        } else {
            searchResults.textContent = 'No results found.';
        }
    }
}


function goToPlayerDetails(playerName) {
   
}


document.addEventListener('DOMContentLoaded', function () {
   
});

function addPlayer() {
    window.location.href = 'addPlayer.html';
    debugger;
}
function addTeam() {
    debugger;
}



/*testing */

// Load existing data from local storage (if any)
let teamsPlayers = JSON.parse(localStorage.getItem('teamsPlayers')) || [];

// Function to display teams and players
function displayData() {
    const dataContainer = document.querySelector('.data-container');
    dataContainer.innerHTML = '';

    teamsPlayers.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'team-player';
        div.innerHTML = `
            <h2>${item.playerName}</h2>
            <p>Team: ${item.from}</p>
            <p>Price: ${item.price}</p>
            <p>Playing: ${item.isPlaying ? 'Yes' : 'No'}</p>
            <p>Description: ${item.description}</p>
        `;
        dataContainer.appendChild(div);
    });
}

// Function to add a new team/player
function addTeamPlayer() {
    const playerName = prompt('Enter player name:');
    const team = prompt('Enter team name:');
    const price = prompt('Enter price:');
    const isPlaying = confirm('Is the player currently playing?');
    const description = prompt('Enter player description:');

    const newTeamPlayer = {
        id: teamsPlayers.length,
        playerName,
        from: team,
        price,
        isPlaying,
        description,
    };

    teamsPlayers.push(newTeamPlayer);
    localStorage.setItem('teamsPlayers', JSON.stringify(teamsPlayers));
    displayData();
}

// Add event listener to the "Add Team/Player" button
const addButton = document.getElementById('addTeamPlayer');
addButton.addEventListener('click', addTeamPlayer);

// Initial data display
displayData();


