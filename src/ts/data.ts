interface members {
  id: number;
  nombre: string;
  rol?: string;
  extra?: string;
  img?: string;
}

export const directivos: members[] = [
  {
    id: 1,
    nombre: "Marcelo Ferraris",
    rol: "Presidente",
    extra: "Provincia de Salta",
  },
  {
    id: 2,
    nombre: "Alcira Brizuela",
    rol: "Vicepresidente",
    extra: "Provincia de La Rioja",
  },
  {
    id: 3,
    nombre: "Juan Ignacio Ciancaglini",
    rol: "Secretario",
    extra: "Provincia de Rio Negro",
  },
];
