import React, { useEffect, useState } from 'react';

import { dataService } from '../../../application/services/dataService';
import type { GetDataRequestDTO } from '../../../application/interfaces/dataDTO';

import Table, { type TableColumn } from '../../components/Table';
import Autocomplete from '../../components/Autocomplete';
import MainLayout from '../../layout/MainLayout';
import CardContent from '../../components/CardContent';

import { mockOptions } from './mockCryptos';
import type { FormattedCharacter } from './default/Types';
import { baseColumns } from './default/baseColumns';
import DropdownMenu from '../../components/DropdownMenu';
import DropdownActionWrapper from '../../components/DropdownActionWrapper';
import TableSkeleton from '../../components/TableSkeleton';
import Alert from '../../components/Alert';
import { translateGender, translateStatus } from './default/translater';


const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [allData, setAllData] = useState<FormattedCharacter[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (value: string) => setSearchValue(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Fazer busca na API
    setSearchValue(e.target.value);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const query: GetDataRequestDTO = {
          page: 1,
        }
        const response = await dataService.getAllData(query)
    
        const formattedData: FormattedCharacter[] = response?.results?.map((char) => ({
          id: char.id,
          image: char.image,
          name: char.name,
          status: translateStatus(char.status),
          species: char.species,
          gender: translateGender(char.gender),
        })) || [];


        setAllData(formattedData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.'+ error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const columns: TableColumn<FormattedCharacter>[] = baseColumns.map(col => {
    if (col.id === 'actions') {
      return {
        ...col,
        render: (row: FormattedCharacter) => (
          <DropdownActionWrapper item={row}>
            {(item) => (
              <DropdownMenu
                item={item}
                visible={true}
                items={[
                  {
                    label: 'Ver detalhes',
                    to: `/detalhes/${item.id}`,
                  },
                ]}
              />
            )}
          </DropdownActionWrapper>
        ),
      };
    }

    if (col.id === 'status') {
      return {
        ...col,
        render: (row: FormattedCharacter) => {
        let colorClass = 'bg-gray-200 text-gray-800';

        if (row.status === 'Vivo') colorClass = 'bg-green-200 text-green-800';
        else if (row.status === 'Morto') colorClass = 'bg-red-200 text-red-800';

        return (
          <span className={`px-2 py-1 text-xs rounded-full font-medium ${colorClass}`}>
            {row.status}
          </span>
        );
      },
      };
    }

    if (col.id === 'image') {
      return {
        ...col,
        render: (row: FormattedCharacter) => {
      
        return (
          <img
              src={row.image}
              alt="Imagem do personagem"
                className="w-10 h-auto rounded"
          />
        );
      },
      };
    }
    return col;
  });

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
            {loading ? (
              <TableSkeleton columnsCount={columns.length} />
            ) : (
              <Table columns={columns} data={allData} rowsPerPage={20} />
            )}
          </div>
        </CardContent>

        {error && (
          <Alert
          type="error"
          message={error}
          onClose={() => setError(null)}
        />
        )}

    </MainLayout>
  );
};

export default HomePage;
