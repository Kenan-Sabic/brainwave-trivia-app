// controllers/playerController.js
const fs = require('fs');
const path = require('path');

// Function to read player data from the JSON file
function readPlayersFromFile() {
    const filePath = path.join(__dirname, '..', 'data', 'players.json');
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

// Function to write player data to the JSON file
function writePlayersToFile(players) {
    const filePath = path.join(__dirname, '..', 'data', 'players.json');
    fs.writeFileSync(filePath, JSON.stringify(players, null, 2));
}

// Create a new player
exports.createPlayer = (req, res) => {
    const { name } = req.body;
    const players = readPlayersFromFile();

    // Generate a unique player ID
    const id = Math.random().toString(36).substr(2, 9);

    const newPlayer = { id, name, score: 0 };
    players.push(newPlayer);
    writePlayersToFile(players);

    res.json(newPlayer);
};

// Get player by ID
exports.getPlayerById = (req, res) => {
    const playerId = req.params.id;
    const players = readPlayersFromFile();

    const player = players.find(player => player.id === playerId);
    if (!player) {
        return res.status(404).json({ error: 'Player not found' });
    }

    res.json(player);
};

// Update player by ID
exports.updatePlayerById = (req, res) => {
    const playerId = req.params.id;
    const { name, score } = req.body;
    const players = readPlayersFromFile();

    const playerIndex = players.findIndex(player => player.id === playerId);
    if (playerIndex === -1) {
        return res.status(404).json({ error: 'Player not found' });
    }

    players[playerIndex] = { ...players[playerIndex], name, score };
    writePlayersToFile(players);

    res.json(players[playerIndex]);
};

// Delete player by ID
exports.deletePlayerById = (req, res) => {
    const playerId = req.params.id;
    const players = readPlayersFromFile();

    const updatedPlayers = players.filter(player => player.id !== playerId);
    if (players.length === updatedPlayers.length) {
        return res.status(404).json({ error: 'Player not found' });
    }

    writePlayersToFile(updatedPlayers);

    res.json({ message: 'Player deleted successfully' });
};
