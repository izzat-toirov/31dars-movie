import { Select } from 'antd';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (p: string) => {
    searchParams.set('sort', p.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="text-neutral-900">
      <Select
        onChange={onChange}
        className="w-60 
    text-white 
    [&_.ant-select-selector]:!bg-[#2d3748] 
    [&_.ant-select-selector]:!text-white 
    [&_.ant-select-selector]:!border-black
    [&_.ant-select-selection-placeholder]:!text-white"
        placeholder="Sort by"
        options={[
          { value: 'popularity.desc', label: 'Popular' },
          { value: 'vote_average.asc', label: 'Vote -' },
          { value: 'vote_average.desc', label: 'Vote +' },
        ]}
        dropdownClassName="
      !bg-[#2d3748] 
    [&_.ant-select-item-option-content]:!text-white
    [&_.ant-select-item-option-active]:!bg-gray-700
    [&_.ant-select-item-option-selected]:!bg-gray-600
      "
      />
    </div>
  );
});
