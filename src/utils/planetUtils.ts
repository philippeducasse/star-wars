import { Column } from "@/components/generic/table/DataTable";
import { Planet } from "@/types/planets";
import { RowData } from "@/components/generic/details-view/DetailsView";
import { getIdFromUrl } from "@/lib/utils";

export const planetColumns: Column<Planet>[] = [
  {
    header: "Name",
    accessor: "name",
    getHref: (planet) => `/planets/${getIdFromUrl(planet.url)}`,
  },
  { header: "Diameter", accessor: "diameter" },
  { header: "Climate", accessor: "climate" },
  { header: "Terrain", accessor: "terrain" },
];

export const planetToRows = (planet: Planet): RowData[] => [
  { title: "Diameter", value: planet.diameter },
  { title: "Rotation Period", value: planet.rotation_period },
  { title: "Orbital Period", value: planet.orbital_period },
  { title: "Gravity", value: planet.gravity },
  { title: "Climate", value: planet.climate },
  { title: "Terrain", value: planet.terrain },
  { title: "Surface Water", value: planet.surface_water },
  { title: "Population", value: planet.population },
];
