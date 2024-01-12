const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let windows = [
    { id: 0, name: "Window 1", status: "Open", roomId: 0},
    { id: 1, name: "Window 2", status: "Closed", roomId: 0},
    { id: 2, name: "Window 3", status: "Open", roomId: 1},
    { id: 3, name: "Window 4", status: "Closed", roomId: 1},
    { id: 4, name: "Window 5", status: "Open", roomId: 2},
    { id: 5, name: "Window 6", status: "Closed", roomId: 2},
];

let rooms = [
    { id: 0, name: 'Room 401', floor: 1 },
    { id: 1, name: 'Room 402', floor: 1 },
    { id: 2, name: 'Room 403', floor: 1 },
    { id: 3, name: 'Room 404', floor: 1 }
];

app.get('/api/windows', (req, res) => {
    res.json(windows);
});

app.post('/api/windows', (req, res) => {

    const newWindow = {
        id: windows.length,
        name: req.body.name,
        status: "Closed",
        roomId: parseInt(req.body.roomId)
    };

    windows.push(newWindow);
    res.status(201).send(newWindow);
});


app.delete('/api/windows/:id', (req, res) => {
    const windowId = parseInt(req.params.id);

    // Check if window with given ID exists
    const windowExists = windows.some(window => window.id === windowId);

    if (!windowExists) {
        return res.status(404).send({ error: 'Window not found' });
    }

    // Delete the window
    windows = windows.filter(window => window.id !== windowId);
    res.status(200).send({ message: 'Window deleted successfully' });
});


app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

const PORT = 3014;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
