import { memo } from "react"
import { Link, useNavigate } from "react-router-dom"
import img from '@/shared/assets/heroLogo.svg';


export const Logo = memo(() => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center">
      <Link to={"/"}>
        <img src={img} alt="" onClick={() => navigate('/')} />
    </Link>
    </div>
  )
})
