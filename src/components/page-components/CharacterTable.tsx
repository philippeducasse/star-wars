import { characterColumns } from "@/utils/characterUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";

const CharacterTable = async () => {
  const data = await get("people");

  return <DataTable data={data.results} columns={characterColumns} />;
};

export default CharacterTable;
