import { get } from "@/lib/api";
import { Film } from "@/types/films";
import FilmDetails from "@/components/page-components/FilmDetails";

const FilmDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const film: Film = await get(`films/${id}`);
  return <FilmDetails film={film} />;
};

export default FilmDetailPage;
