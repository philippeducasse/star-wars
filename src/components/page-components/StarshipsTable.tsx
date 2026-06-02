import { starshipColumns } from "@/utils/starshipUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";

const StarshipsTable = async () => {
  const data = await get("starships");

  return <DataTable data={data.results} columns={starshipColumns} />;
};

export default StarshipsTable;
