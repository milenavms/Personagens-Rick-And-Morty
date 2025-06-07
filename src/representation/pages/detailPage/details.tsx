import Breadcrumb from "../../components/Breadcrumb";
import MainLayout from "../../layout/MainLayout";
import ImagemCripto from "../../../assets/cripto.png";
import CardContent from "../../components/CardContent";


const DetailPage = () => {
  const cryptoInfo = [
    { label: "Preço atual", value: "R$ 200.000" },
    { label: "Capitalização de mercado", value: "R$ 1.5T" },
    { label: "Volume nas últimas 24h", value: "R$ 80B" },
    { label: "Variação (24h)", value: "+5.2%" },
    { label: "Ranking global", value: "#1" },
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
              Nome
            </h3>
            <div className="px-4 sm:px-8 py-4 space-y-3 text-sm sm:text-base">
              {cryptoInfo.map((item, index) => (
                <p key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </div>

          <div className="hidden md:flex p-6 justify-center">
            <img
              src={ImagemCripto}
              alt="Imagem"
            />
          </div>
        </div>
      </CardContent>

      
    </MainLayout>
  );
};

export default DetailPage;
