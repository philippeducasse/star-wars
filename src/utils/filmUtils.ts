import { Column } from "@/components/generic/table/DataTable";
import { Film } from "@/types/films";

export const filmColumns: Column<Film>[] = [
  { header: "Title", accessor: "title" },
  { header: "Episode", accessor: "episode_id" },
  { header: "Director", accessor: "director" },
  { header: "Release Date", accessor: "release_date" },
];
