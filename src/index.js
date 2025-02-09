import express from "express";
import cors from 'cors';
import music from '../data/songs.json' assert {type:"json"};
const app = express();
const PORT = process.env.PORT || 2323;
const allowedOrigins = ['https://music-player-kappa-orcin.vercel.app', 'http://localhost:5173','http://localhost:4173'];
app.use(cors({
  methods:'GET',
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.disable('x-powered-by')
app.use(express.json());
app.get("/", async (req, res) => {
  res.status(200).send(music);
});
// app.get("/albums/:id",async( req,res) => {
//   const {id} = req.params
// })
app.get('/songs',async(req,res) => {
  const songs = music.flatMap((album) => album.canciones)
  res.json(songs)
})
app.use(async(req, res) => {
  res.status(404).send("404 NOT FOUND");
});
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
