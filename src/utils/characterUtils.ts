import { Column } from "@/components/generic/table/DataTable";
import { Character } from "@/types/characters";
import { RowData } from "@/components/generic/details-view/DetailsView";
import { getIdFromUrl } from "@/lib/utils";

export const characterColumns: Column<Character>[] = [
  {
    header: "Name",
    accessor: "name",
    getHref: (char) => `/characters/${getIdFromUrl(char.url)}`,
  },
  { header: "Height", accessor: "height" },
  { header: "Gender", accessor: "gender" },
  { header: "Birth Year", accessor: "birth_year" },
];

export const characterToRows = (character: Character): RowData[] => [
  { title: "Height", value: character.height },
  { title: "Mass", value: character.mass },
  { title: "Birth Year", value: character.birth_year },
  { title: "Gender", value: character.gender },
  { title: "Hair Color", value: character.hair_color },
  { title: "Skin Color", value: character.skin_color },
  { title: "Eye Color", value: character.eye_color },
  {
    title: "Homeworld",
    value: `Planet ${getIdFromUrl(character.homeworld)}`,
    href: `/planets/${getIdFromUrl(character.homeworld)}`,
  },
];
