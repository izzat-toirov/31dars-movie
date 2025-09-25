import { Select } from 'antd';
import { memo, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Props {
  genres: { id: number; name: string }[];
}

export const MovieGenre: FC<Props> = memo(({ genres  }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value: string) => {
    searchParams.set("genre", value);
    setSearchParams(searchParams);
  };
  return (
    <div className="text-neutral-900">
     <Select
        onChange={onChange}
        value={searchParams.get("genre") || "16"}
        placeholder="Select genre"
        options={genres.map((g) => ({ value: g.id.toString(), label: g.name }))}
        className="w-60 text-white
          [&_.ant-select-selector]:!bg-[#2d3748]
          [&_.ant-select-selector]:!text-white
          [&_.ant-select-selector]:!border-black
          [&_.ant-select-selection-placeholder]:!text-white"
        dropdownClassName="
          !bg-[#2d3748]
          [&_.ant-select-item-option-content]:!text-white
          [&_.ant-select-item-option-active]:!bg-gray-700
          [&_.ant-select-item-option-selected]:!bg-gray-600"
      />
    </div>
  );
});
