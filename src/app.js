import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

app.get('/',(req,res)=>res.send("INDEX"));

//Importing routes
import notesRoutes  from './routes/notes.routes';
import userRoutes from './routes/auth.routes';

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/notes',notesRoutes);
app.use('/api/users',userRoutes);


export default app;


