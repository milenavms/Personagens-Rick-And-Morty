export type Crypto = {
  ID: number;
  Nome: string;
  Preço: string;
  Variação: string;
  Volume: string;
  Mercado: string;
};

export const mockCryptos: Crypto[] = Array.from({ length: 50 }, (_, i) => ({
  ID: i + 1,
  Nome: `Cripto ${i + 1}`,
  Preço: `$${(Math.random() * 1000).toFixed(2)}`,
  Variação: `${(Math.random() * 10 - 5).toFixed(2)}%`,
  Volume: `${(Math.random() * 1000000).toFixed(0)}`,
  Mercado: `#${Math.floor(Math.random() * 1000)}`,
}));
