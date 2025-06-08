import Breadcrumb from "../../components/Breadcrumb";
import MainLayout from "../../layout/MainLayout";
import CardContent from "../../components/CardContent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataService } from "../../../application/services/dataService";
import Alert from "../../components/Alert";
import { translateGender, translateStatus } from "../homePage/default/translater";
import type { IDataDetailsResponse } from "../../../domain/IData";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Skelaton from "../../components/Skelaton";


const DetailPage = () => {
  const {id} = useParams<{id: string}>();
  const [data, setData] = useState<IDataDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataDetail = async () => {
      setLoading(true);
      try {
        if(!id) return;
        const response = await dataService.getDataById(id);

        setData(response)
        setError(null);
      } catch (error) {
        setError('Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.' + error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDataDetail();
  }, []);

  const details = [
    { label: "Status", value: translateStatus(data?.status)},
    { label: "Personagem", value: data?.name ?? "-"},
    { label: "Espécie", value: data?.species ?? "-" },
    { label: "Gênero", value: translateGender(data?.gender)},
    { label: "Origem", value: data?.origin?.name ?? "-"},
    { label: "Episódios", value: data?.episode?.length ?? "-"},
  ];

  return (
    <MainLayout>
     <CardContent>
        <h2 className="font-medium sm:font-semibold sm:text-2xl p-4 sm:p-8">
          Detalhes
        </h2>
        <div className="px-4 sm:px-8 pb-4">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Detalhes" },
            ]}
          />
        </div>
      </CardContent>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6">
            <h3 className=" text-base font-medium sm:text-2xl p-4 sm:px-8">
              <span className="text-indigo-500 px-2">#</span>
              ID: {loading ? <Skelaton/> : data?.id }
            </h3>
            <div className="px-4 sm:px-8 py-4 space-y-3 text-sm sm:text-base">
              {details.map((item, index) => (
                <p key={index}>
                  <strong>{item.label}:</strong> {loading ? <Skelaton/> : item.value}
                </p>
              ))}
            </div>
          </div>

          <div className="md:flex p-6 justify-center ">
            {
            loading ?
            <Skelaton width={300} height={100}/> 
            : data?.image ?
             <img
              src={data?.image}
              alt="Imagem do personagem"
              className="h-auto rounded"
            />
            :
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-center  py-5 rounded">
              <ExclamationTriangleIcon className="mx-auto mb-4 h-16 w-16 text-red-500" />
              Erro ao carregar imagem.
            </div>
            }
          </div>
        </div>

         {error && (
          <Alert
            type="error"
            message={error}
            onClose={() => setError(null)}
          />
        )}
      </CardContent>
    </MainLayout>
  );
};

export default DetailPage;
