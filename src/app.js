import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

//Importing routes
import notesRoutes from './routes/notes.routes';

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/notes', notesRoutes);

app.get('/',(req,res)=>res.send("INDEX"))
export default app;


