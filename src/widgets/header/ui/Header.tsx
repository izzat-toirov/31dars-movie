import { memo } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = memo(() => {
  return (
    <header className='bg-neutral-900'>
      <div className="container text-white">
        <div className="flex justify-between py-[22px]">
          <Logo/>

          <Navigation/>
          <section className='flex gap-5'>
            <select id="language" name="language" className='bg-neutral-900'>
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
