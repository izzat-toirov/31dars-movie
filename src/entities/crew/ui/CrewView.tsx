import { memo } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "../../../shared/utils";

export const CrewView = memo(() => {
  const {id} = useParams()
  const {getCrewById} = useCrew()
  const {data} = getCrewById(id as string)
  return (
    <div className="container">
      <section className="grid grid-cols-2">
        <div>
          <img src={createImageUrl(data?.profile_path)} width={400} alt="" className="rounded-xl mt-10  min-w-[500px]"/>
        </div>
        <div>
          <h1 className="font-medium text-2xl mb-3 mt-2">{data?.name}</h1>
          <p className="text-gray-400 ">{data?.biography}</p>
          <button className="bg-gray-500 px-4 py-1 rounded-xl">See More</button>
        </div>
      </section>
    </div>
  )
})
