import { get } from "@/lib/api";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RESOURCES = [
  { label: "Characters", endpoint: "people" },
  { label: "Films", endpoint: "films" },
  { label: "Planets", endpoint: "planets" },
  { label: "Species", endpoint: "species" },
  { label: "Starships", endpoint: "starships" },
  { label: "Vehicles", endpoint: "vehicles" },
];

const LandingPage = async () => {
  const counts = await Promise.all(
    RESOURCES.map(async ({ label, endpoint }) => {
      const data = await get(endpoint);
      return { label, count: data.count as number };
    }),
  );

  return (
    <div className="flex justify-center">
    <Card className="max-w-sm w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Resource</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {counts.map(({ label, count }) => (
            <TableRow key={label}>
              <TableCell>{label}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
    </div>
  );
};

export default LandingPage;
