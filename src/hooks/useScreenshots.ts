import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Screenshot } from "../entities/Screenshot";



const useScreenshots = (gameId: number) => {
    const apiCLient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiCLient.getAll
    })
    
}
export default useScreenshots;