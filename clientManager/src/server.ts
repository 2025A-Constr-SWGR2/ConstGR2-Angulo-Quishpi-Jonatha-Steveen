import express, { Request, Response } from "express";
import { clientes, Cliente } from "./mockData";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/clientes", (req: Request, res: Response) => {
  res.json(clientes);
});

app.post("/api/clientes", (req: Request, res: Response) => {
  const nuevoCliente: Cliente = {
    id: clientes.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
  };
  clientes.push(nuevoCliente);
  res.json(nuevoCliente);
});

app.delete("/api/clientes/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = clientes.findIndex((c) => c.id === id);
  if (index >= 0) {
    clientes.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
