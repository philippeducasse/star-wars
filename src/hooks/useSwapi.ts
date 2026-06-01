import { useQuery } from "@tanstack/react-query";
import { get } from "@/lib/api";

export const useSwapi = (endpoint: string) =>
  useQuery({ queryKey: [endpoint], queryFn: () => get(endpoint) });
