import { characterColumns } from "@/utils/characterUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";
import { Character } from "@/types/characters";

const CharacterTable = async () => {
  const data = await get("people");

  return <DataTable data={data.results as Character[]} columns={characterColumns} />;
};

export default CharacterTable;
