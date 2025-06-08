import type { TableColumn } from "../../../components/Table";
import type { FormattedCharacter } from "./Types";

export const baseColumns: TableColumn<FormattedCharacter>[] = [
  { id: 'id', value: 'Identificador' },
  { id: 'image', value: 'Imagem', isAction: true },
  { id: 'name', value: 'Nome completo' },
  { id: 'status', value: 'Status', isAction: true},
  { id: 'species', value: 'Espécie' },
  { id: 'gender', value: 'Gênero' },
  { id: 'actions', value: '', isAction: true },
];
