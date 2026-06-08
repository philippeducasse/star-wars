import { Column } from "@/components/generic/table/DataTable";
import { Starship } from "@/types/starships";
import { RowData } from "@/components/generic/details-view/DetailsView";
import { getIdFromUrl } from "@/lib/utils";

export const starshipColumns: Column<Starship>[] = [
  {
    header: "Name",
    accessor: "name",
    getHref: (starship) => `/starships/${getIdFromUrl(starship.url)}`,
  },
  { header: "Model", accessor: "model" },
  { header: "Manufacturer", accessor: "manufacturer" },
  { header: "Class", accessor: "starship_class" },
];

export const starshipToRows = (starship: Starship): RowData[] => [
  { title: "Model", value: starship.model },
  { title: "Manufacturer", value: starship.manufacturer },
  { title: "Class", value: starship.starship_class },
  { title: "Cost in Credits", value: starship.cost_in_credits },
  { title: "Length", value: starship.length },
  { title: "Crew", value: starship.crew },
  { title: "Passengers", value: starship.passengers },
  { title: "Cargo Capacity", value: starship.cargo_capacity },
  { title: "Max Speed", value: starship.max_atmosphering_speed },
  { title: "Hyperdrive Rating", value: starship.hyperdrive_rating },
  { title: "MGLT", value: starship.MGLT },
  { title: "Consumables", value: starship.consumables },
];
