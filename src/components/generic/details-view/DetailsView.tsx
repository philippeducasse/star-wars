import Row from "./Row";

export type RowData = {
  title: string;
  value: string;
};

const DetailsView = ({ data }: { data: RowData[] }) =>
  data.map((d, idx) => <Row key={`${d.title}/${idx}`} title={d.title} value={d.value} />);

export default DetailsView;
