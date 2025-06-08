export const translateStatus = (status?: string): string => {

  if(!status) return "-";

  const statusMap: Record<string, string> = {
    Alive: 'Vivo',
    Dead: 'Morto',
    unknown: 'Desconhecido',
  };
  return statusMap[status] || status;
};


export const translateGender = (gender?: string): string => {
  
  if(!gender) return "-";

  const genderMap: Record<string, string> = {
    Female: 'Feminino',
    Male: 'Masculino',
    Genderless: 'Sem Gênero',
    unknown: 'Desconhecido',
  };
  return genderMap[gender] || gender;
};