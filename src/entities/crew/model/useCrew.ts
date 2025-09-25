import { useQuery } from "@tanstack/react-query"
import { fetchCrewById, fetchCrewsMovieById } from "../api/fetchApi"


export const useCrew = ()=>{
    const getCrewById = (id: string)=> useQuery({
        queryKey: ["crewKey", id],
        queryFn: ()=> fetchCrewById(id)
    })

    const getCrewsMovieById = (id: string)=> useQuery({
        queryKey: ["crewKey", id, "crewMovie"],
        queryFn: ()=> fetchCrewsMovieById(id)
    })

    return {getCrewById, getCrewsMovieById}
}

