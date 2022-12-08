import { useQuery } from "@tanstack/react-query";
import { DataServices } from "../services/GetStarWarsData";

export const allDataQuery = (number: number) => ({
  queryKey: ["StarWarsData"],
  queryFn: () => DataServices.dataFullInfo(number),
});

export const useGetALLData = (number: number) => {
  const data = useQuery({ ...allDataQuery(number) });
  return data;
};
