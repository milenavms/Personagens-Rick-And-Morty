import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import { mockCryptos, mockOptions } from './mockCryptos';
import Table from '../../components/Table';
import Autocomplete from '../../components/Autocomplete';

const columns = ['ID', 'Nome', 'Preço', 'Variação', 'Volume', 'Mercado'];

const HomePage: React.FC = () => {
  const [searchValue,setSearchValue] = useState<string>('');

  const handleSelect = (value: string) => {
     setSearchValue(value);
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: pesquisa na API
    setSearchValue(e.target.value);
  };

  return (
  <div className="font-poppins bg-gray-100 text-gray-900 overflow-x-hidden min-h-screen">
    <Navbar 
      links={[]}  
      searchButton={
        <Autocomplete
        options={mockOptions}
        value={searchValue}
        onChange={handleChange}
        onSelect={handleSelect}
      />
      }
    />

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
</div>

  );
};

export default HomePage;