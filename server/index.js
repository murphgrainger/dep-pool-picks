const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/build.index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})