import { memo, type FC } from 'react'
import { useCast } from '../model/useCast'
import { createImageUrl } from '../../../shared/utils'
import { useNavigate } from 'react-router-dom'

interface Props {
    id: string
    type: string
}

export const CastView: FC<Props> = memo((props) => {
    const {id, type} = props
    const {getCasts} = useCast()
    const {data} = getCasts(id)
    const navigate = useNavigate()
    
  return (
    <div className='container'>
    <div className='flex gap-3 overflow-x-auto'>
    {
        data && data?.[type]?.map((item: any)=> (
            <div onClick={()=> navigate(`/crew/${item.id}`)} key={item.id} className='min-w-[150px] w-full'>
                <img src={createImageUrl(item.profile_path)} className='w-full rounded-xl' alt="" />
                <h3 className='font-medium line-clamp-1'>{item.original_name}</h3>
                <p className='text-gray-500'>
                    { type === "cast" ? item.character : item.job}</p>
            </div>
        ))
    }
    </div>
    </div>
  )
})
