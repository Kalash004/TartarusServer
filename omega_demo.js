import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { router as pagesrouter } from "./server/routing/pagerouting.js"
import { router as apirouter } from "./server/routing/apirouting.js"

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", apirouter)
app.use("/", pagesrouter)



app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port http://localhost:${process.env.APP_PORT}`)
})
