import React from 'react';
import Navbar from '../../components/NavBar';

const HomePage: React.FC = () => {
  return (
    <body className="font-roboto bg-gray-100 text-gray-900">

    <Navbar links={['Home', 'Mercado', 'Sobre']} />

   
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-4">Preço das criptomoedas por valor de mercado</h2>
    </main>
  </body>
  );
};

export default HomePage;