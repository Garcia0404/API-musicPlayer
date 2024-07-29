import express from "express";
import cors from 'cors';
import { music } from '../data/songs.js';
const app = express();
const PORT = process.env.PORT || 2323;
app.use(cors({
  methods:'GET',
  origin:'*'
}));
app.disable('x-powered-by')
app.use(express.json());
app.get("/", async (req, res) => {
  res.status(200).send(music);
});
app.use((req, res) => {
  res.status(404).send("404 NOT FOUND");
});
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
