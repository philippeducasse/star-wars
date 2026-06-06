import { filmColumns } from "@/utils/filmUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";

const FilmsTable = async () => {
  const data = await get("films");

  return <DataTable data={data.results} columns={filmColumns} />;
};

export default FilmsTable;
