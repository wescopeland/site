import useSWR from "swr";

import { fetcher } from "@/core/utils/fetcher";
import type { NormalizedGame } from "@/integrations/models";

export function useAllGames() {
  const { data, error } = useSWR<NormalizedGame[]>(
    "/api/gaming/games",
    fetcher
  );

  return {
    allGames: data,
    isLoading: !error && !data,
    isError: error
  };
}
