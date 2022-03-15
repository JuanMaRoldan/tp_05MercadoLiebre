/* DEPENDENCIES */const express = require(`express`)
const path = require(`path`);
const app = express();
const port = 3030;

/*MIDDLEWARES*/
app.use(express.static(`public`))

/*ROUTES*/
app.get(`/`, (req,res) => res.sendFile(path.resolve(__dirname, `views`, `home.html`)))

/*SERVER*/
app.listen(port, () => console.log(`Server running in http://localhost:${port}`))