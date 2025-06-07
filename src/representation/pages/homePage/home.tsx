import React, { useState } from 'react';
import { mockCryptos, mockOptions } from './mockCryptos';
import Table from '../../components/Table';
import Autocomplete from '../../components/Autocomplete';
import MainLayout from '../../layout/MainLayout';
import CardContent from '../../components/CardContent';

const columns = ['ID', 'Nome', 'Preço', 'Variação', 'Volume', 'Mercado'];

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSelect = (value: string) => {
    setSearchValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Fazer busca na API
    setSearchValue(e.target.value);
  };

  return (
    <MainLayout
      searchButton={
        <Autocomplete
          options={mockOptions}
          value={searchValue}
          onChange={handleChange}
          onSelect={handleSelect}
        />
      }
    >
      <CardContent>
        <h2 className="text-lg font-medium sm:font-semibold sm:text-2xl p-4 sm:p-8">
          Preço das criptomoedas por valor de mercado
        </h2>
      </CardContent>
      
       <CardContent>
        <div className="overflow-x-auto">
          <Table columns={columns} data={mockCryptos} rowsPerPage={10} />
        </div>
       </CardContent>

    </MainLayout>
  );
};

export default HomePage;
