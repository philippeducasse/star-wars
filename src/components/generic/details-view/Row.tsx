interface RowProps {
  title: string;
  value: string;
}

const Row = ({ title, value }: RowProps) => (
  <div className="grid grid-cols-2 py-3 gap-x-2 items-center border-gray-200 dark:border-gray-700 border-b last:border-b-0 text-sm leading-5 font-medium mx-8 my-2">
    <dt className="text-gray-800 dark:text-foreground self-start">{title}</dt>
    <dd className="text-gray-700 dark:text-foreground">
      {value || <span className="text-gray-400">&mdash;</span>}
    </dd>
  </div>
);

export default Row;
