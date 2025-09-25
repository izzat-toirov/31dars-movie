import { Select } from "antd"
import { memo } from "react"
import { useSearchParams } from "react-router-dom";


export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (p: string) => {
      searchParams.set("sort", p.toString());
      setSearchParams(searchParams);
    };

    return (
      <div>
          <Select
          onChange={onChange}
          className="w-60"
          placeholder="Sort by"
          options={[
            { value: "popularity.desc", label: "Popuplar" },
            { value: "vote_average.asc", label: "Vote -" },
            { value: "vote_average.desc", label: "Vote +" },
          ]}
        />

      </div>
    )
  })
