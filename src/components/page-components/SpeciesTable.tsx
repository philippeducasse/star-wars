import { speciesColumns } from "@/utils/speciesUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";

const SpeciesTable = async () => {
  const data = await get("species");

  return <DataTable data={data.results} columns={speciesColumns} />;
};

export default SpeciesTable;
