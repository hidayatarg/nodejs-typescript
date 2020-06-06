import express, {Application, Request, Response} from 'express';

const app: Application = express();
const port: number = 3000;
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Server is Working');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
})