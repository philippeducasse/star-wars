import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
export type Column<T> = {
  header: string;
  accessor: keyof T;
};

export type Props<T> = {
  data: T[];
  columns: Column<T>[];
};

export const DataTable = <T,>({ data, columns }: Props<T>) => (
  <Card>
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={String(col.accessor)}>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((col) => (
              <TableCell key={String(col.accessor)}>{String(row[col.accessor])}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);
