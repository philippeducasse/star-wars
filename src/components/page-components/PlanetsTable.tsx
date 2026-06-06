import { planetColumns } from "@/utils/planetUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";

const PlanetsTable = async () => {
  const data = await get("planets");

  return <DataTable data={data.results} columns={planetColumns} />;
};

export default PlanetsTable;
