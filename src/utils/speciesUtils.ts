import { Column } from "@/components/generic/table/DataTable";
import { Species } from "@/types/species";
import { RowData } from "@/components/generic/details-view/DetailsView";
import { getIdFromUrl } from "@/lib/utils";

export const speciesColumns: Column<Species>[] = [
  {
    header: "Name",
    accessor: "name",
    getHref: (species) => `/species/${getIdFromUrl(species.url)}`,
  },
  { header: "Classification", accessor: "classification" },
  { header: "Average Height", accessor: "average_height" },
  { header: "Language", accessor: "language" },
];

export const speciesToRows = (species: Species): RowData[] => [
  { title: "Classification", value: species.classification },
  { title: "Designation", value: species.designation },
  { title: "Average Height", value: species.average_height },
  { title: "Average Lifespan", value: species.average_lifespan },
  { title: "Eye Colors", value: species.eye_colors },
  { title: "Hair Colors", value: species.hair_colors },
  { title: "Skin Colors", value: species.skin_colors },
  { title: "Language", value: species.language },
  ...(species.homeworld
    ? [
        {
          title: "Homeworld",
          value: `Planet ${getIdFromUrl(species.homeworld)}`,
          href: `/planets/${getIdFromUrl(species.homeworld)}`,
        },
      ]
    : []),
];
