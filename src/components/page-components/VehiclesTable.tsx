import { vehicleColumns } from "@/utils/vehicleUtils";
import { DataTable } from "../generic/table/DataTable";
import { get } from "@/lib/api";

const VehiclesTable = async () => {
  const data = await get("vehicles");

  return <DataTable data={data.results} columns={vehicleColumns} />;
};

export default VehiclesTable;
