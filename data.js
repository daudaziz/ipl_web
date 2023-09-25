var teamList = [
    {
        name: 'MI',
        id: 1,
        playerCount: 3,
        topBatsman: 3,
        topBowler: 4,
        championshipWon: 2
    },
    {
        name: 'RCB',
        id: 2,
        playerCount: 3,
        topBatsman: 3,
        topBowler: 4,
        championshipWon: 2
    },
    {
        name: 'KKR',
        id: 2,
        playerCount: 3,
        topBatsman: 3,
        topBowler: 4,
        championshipWon: 2
    },
    {
        name: 'RR',
        id: 2,
        playerCount: 2,
        topBatsman: 3,
        topBowler: 4,
        championshipWon: 1
    }
];

var playerList = [
    {
        name: 'hardik pandya',
        photo: 'http://',
        team: 1,
        price: 320,
        playingStatus: 'Playing',
        role: 'Batsman'
    },
    {
        name: 'virat kohli',
        photo: 'http://',
        team: 1,
        price: 320,
        playingStatus: 'Playing',
        role: 'Batsman'
    },
    {
        name: 'rohit sharma',
        photo: 'http://',
        team: 1,
        price: 320,
        playingStatus: 'Playing',
        role: 'Batsman'
    }
];
var teamIdMap = {};
var teamNameMap = {};
teamList.forEach(team => {
    teamIdMap[team.id] = team;
});

teamList.forEach(team => {
    teamNameMap[team.name] = team;
});

var playerIdMap = {};
var playerNameMap = {};
playerList.forEach(player => {
    playerIdMap[player.id] = player;
});

playerList.forEach(player => {
    playerNameMap[player.name] = player;
});

/*
localStorage.setItem('teamList', JSON.stringify(teamList));
localStorage.setItem('playerList', JSON.stringify(playerList));
localStorage.setItem('teamIdMap', JSON.stringify(teamIdMap));
localStorage.setItem('teamNameMap', JSON.stringify(teamNameMap));
localStorage.setItem('playerIdMap', JSON.stringify(playerIdMap));
localStorage.setItem('playerNameMap', JSON.stringify(playerNameMap));
localStorage.setItem('maxTeamId', 0);
localStorage.setItem('maxPlayerId', 0);
*/

if (!localStorage.getItem('teamList')) {
    localStorage.setItem('teamList', JSON.stringify(teamList));
}

if (!localStorage.getItem('playerList')) {
    localStorage.setItem('playerList', JSON.stringify(playerList));
}

if (!localStorage.getItem('teamIdMap')) {
    localStorage.setItem('teamIdMap', JSON.stringify(teamIdMap));
}

if (!localStorage.getItem('teamNameMap')) {
    localStorage.setItem('teamNameMap', JSON.stringify(teamNameMap));
}

if (!localStorage.getItem('playerIdMap')) {
    localStorage.setItem('playerIdMap', JSON.stringify(playerIdMap));
}

if (!localStorage.getItem('playerNameMap')) {
    localStorage.setItem('playerNameMap', JSON.stringify(playerNameMap));
}

if (!localStorage.getItem('maxTeamId')) {
    localStorage.setItem('maxTeamId', '0');
}

if (!localStorage.getItem('maxPlayerId')) {
    localStorage.setItem('maxPlayerId', '0');
}


function getAllPlayers() {
    return JSON.parse(localStorage.getItem('playerList'));
}

function addPlayer(player) {
    let playerNameMap = JSON.parse(localStorage.getItem('playerNameMap'));
    if (!(player.name in playerNameMap)) {
        let maxId = parseInt(localStorage.getItem('maxPlayerId'));
        player.id = maxId + 1;
        playerList = JSON.parse(localStorage.getItem('playerList'));
        playerList.push(player);
        // localStorage.setItem('teamList', JSON.stringify(playerList));
        let playerNameMap = JSON.parse(localStorage.getItem('playerNameMap'));
        playerNameMap[player.name] = player;
        localStorage.setItem('playerNameMap', JSON.stringify(playerNameMap));
        let playerIdMap = JSON.parse(localStorage.getItem('playerIdMap'));
        playerIdMap[player.id] = player;
        localStorage.setItem('playerIdMap', JSON.stringify(playerIdMap));
        localStorage.setItem('playerList', JSON.stringify(playerList));
        maxId++;
        localStorage.setItem('maxPlayerId', maxId);
    }
}
function getTeamById(id) {
    debugger;
    if (id) {
        let teamIdMap = JSON.parse(localStorage.getItem('teamIdMap'));
        let team = teamIdMap[id];
        if (team) {
            return team;
        } else {
            throw new Error('No team found with id: '+id);
        }
    } else {
        throw new Error('Provide correct id: '+id);
    }
}

function getTeamByName(name) {
    debugger;
    if (name) {
        let teamNameMap = JSON.parse(localStorage.getItem('teamNameMap'));
        let team = teamNameMap[name];
        if (team) {
            return team;
        } else {
            throw new Error('No team found with name: '+name);
        }
    } else {
        throw new Error('Provide correct team name: '+name);
    }
}



