import { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img from '@/shared/assets/heroLogo.svg';
import { CiSearch } from 'react-icons/ci';

export const Header = memo(() => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-[22px]">
          <img src={img} alt="" onClick={() => navigate('/')} />

          <div className="flex gap-5  items-center">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/movie'}>Movie</NavLink>
            <NavLink to={'/bookMark'}>BookMark</NavLink>
            <NavLink to={'/search'}>
              <CiSearch size={22} />
            </NavLink>
          </div>
          <section className='flex gap-5'>
            <select id="language" name="language">
              <option value="rus">Rus</option>
              <option value="uzb">Uzb</option>
            </select>
            <button className='bg-[#C61F1F] rounded-xl py-[16px] px-[64px]'>Kirish</button>
          </section>
        </div>
      </div>
    </header>
  );
});
