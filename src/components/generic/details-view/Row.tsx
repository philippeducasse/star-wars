interface RowProps {
  title: string;
  value: string;
}

const Row = ({ title, value }: RowProps) => (
  <div className="grid grid-cols-2 py-3 gap-x-2 items-center border-border border-b last:border-b-0 text-sm leading-5 font-medium mx-8 my-2">
    <dt className="text-muted-foreground self-start">{title}</dt>
    <dd className="text-foreground">
      {value || <span className="text-muted-foreground/50">&mdash;</span>}
    </dd>
  </div>
);

export default Row;
