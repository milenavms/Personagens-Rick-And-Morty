import React, { useEffect, useState } from 'react';
import { mockCryptos, mockOptions } from './mockCryptos';
import Table from '../../components/Table';
import Autocomplete from '../../components/Autocomplete';
import MainLayout from '../../layout/MainLayout';
import CardContent from '../../components/CardContent';
import type { GetDataRequestDTO } from '../../../application/interfaces/dataDTO';
import { dataService } from '../../../application/services/dataService';
import type { IDataResponse } from '../../../domain/IData';

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

  const [allData, setAllData] = useState<IDataResponse | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query: GetDataRequestDTO = {
          page: 1,
        }
        const response = await dataService.getAllData(query)
        setAllData(response);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

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
          Informações gerais
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
