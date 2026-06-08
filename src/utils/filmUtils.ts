import { Column } from "@/components/generic/table/DataTable";
import { Film } from "@/types/films";
import { RowData } from "@/components/generic/details-view/DetailsView";
import { getIdFromUrl } from "@/lib/utils";

export const filmColumns: Column<Film>[] = [
  {
    header: "Title",
    accessor: "title",
    getHref: (film) => `/films/${getIdFromUrl(film.url)}`,
  },
  { header: "Episode", accessor: "episode_id" },
  { header: "Director", accessor: "director" },
  { header: "Release Date", accessor: "release_date" },
];

export const filmToRows = (film: Film): RowData[] => [
  { title: "Episode", value: String(film.episode_id) },
  { title: "Director", value: film.director },
  { title: "Producer", value: film.producer },
  { title: "Release Date", value: film.release_date },
  { title: "Opening Crawl", value: film.opening_crawl },
];
