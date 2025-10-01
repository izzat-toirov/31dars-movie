import { memo } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Options } from './Option';



export const Header = memo(() => {
  return (
    <header className="bg-neutral-900">
      <div className="container text-white">
        <div className="flex justify-between py-[22px]">
          <Logo />
          <Navigation />
          <Options />

        </div>
      </div>
    </header>
  );
});
