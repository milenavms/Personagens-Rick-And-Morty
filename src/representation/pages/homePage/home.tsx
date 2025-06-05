import React from 'react';
import Navbar from '../../components/NavBar';
import { mockCryptos } from './mockCryptos';
import Table from '../../components/Table';

const HomePage: React.FC = () => {

  const columns = ['ID', 'Nome', 'Preço', 'Variação', 'Volume', 'Mercado'];

  return (
  <body className="font-poppins bg-gray-100 text-gray-900 overflow-x-hidden">
    <Navbar links={['Home', 'Mercado', 'Sobre']} />

    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-6">
     
      <div className="bg-white rounded-2xl">
        <h2 className="text-lg font-medium sm:font-semibold sm:text-2xl p-4 sm:p-8">
          Preço das criptomoedas por valor de mercado
        </h2>
      </div>

     
      <div className="bg-white rounded-2xl overflow-x-auto">
        <Table columns={columns} data={mockCryptos} rowsPerPage={10} />
      </div>
    </main>
</body>

  );
};

export default HomePage;