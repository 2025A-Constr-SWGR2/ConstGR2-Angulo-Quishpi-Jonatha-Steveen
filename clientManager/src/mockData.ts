export interface Cliente {
  id: number;
  nombre: string;
  email: string;
}

export const clientes: Cliente[] = [
  { id: 1, nombre: "Juan Perez", email: "juan@mail.com" },
  { id: 2, nombre: "Maria Lopez", email: "maria@mail.com" },
];
