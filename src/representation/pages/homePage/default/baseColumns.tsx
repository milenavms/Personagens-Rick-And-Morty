import type { TableColumn } from "../../../components/Table";
import type { FormattedCharacter } from "./Types";

export const baseColumns: TableColumn<FormattedCharacter>[] = [
  { id: 'id', value: 'Id' },
  { id: 'image', value: 'Personagem', isAction: true },
  { id: 'name', value: 'Nome completo' },
  { id: 'status', value: 'Status', isAction: true},
  { id: 'species', value: 'Espécie' },
  { id: 'gender', value: 'Gênero' },
  { id: 'actions', value: '', isAction: true },
];
