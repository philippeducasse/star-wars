"use client";

import { characterColumns } from "@/utils/characterUtils";
import { DataTable } from "../generic/table/DataTable";
import { useSwapi } from "@/hooks/useSwapi";

const CharacterTable = () => {
  const { data, isLoading, isError } = useSwapi("people");

  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return <DataTable data={data.results} columns={characterColumns} />;
};

export default CharacterTable;
