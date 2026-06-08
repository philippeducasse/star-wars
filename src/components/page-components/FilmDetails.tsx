import Link from "next/link";
import DetailsViewSection from "@/components/generic/details-view/DetailsViewSection";
import { Film } from "@/types/films";
import { filmToRows } from "@/utils/filmUtils";

const FilmDetails = ({ film }: { film: Film }) => (
  <div className="max-w-3xl mx-auto p-6">
    <Link href="/films" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-foreground mb-6 inline-block">
      ← Back
    </Link>
    <h1 className="text-2xl font-bold mb-6 dark:text-foreground">{film.title}</h1>
    <DetailsViewSection title="Details" data={filmToRows(film)} />
  </div>
);

export default FilmDetails;
