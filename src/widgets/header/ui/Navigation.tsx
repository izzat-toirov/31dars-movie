import { memo } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineMovie } from 'react-icons/md';
import { IoTicketOutline } from 'react-icons/io5';
import { PiTelevision } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export const Navigation = memo(() => {
  const navItems = [
    { to: '/', label: 'Афиша', icon: <PiTelevision size={22} /> },
    { to: '/movie', label: 'Сеансы', icon: <MdOutlineMovie size={22} /> },
    { to: '/bookMark', label: 'Билеты', icon: <IoTicketOutline size={22} /> },
    { to: '/search', label: 'Поиск', icon: <CiSearch size={22} /> },
  ];

  return (
    <nav
      className="
        fixed bottom-0 left-0 w-full bg-black py-3
        md:py-4
        lg:static lg:top-0 lg:w-full lg:bg-transparent lg:py-3
      "
    >
      <ul
        className="
          flex justify-around items-center list-none m-0 p-0
          md:justify-center md:gap-16
          lg:justify-center lg:gap-16
        "
      >
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-center lg:gap-2"
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 text-xs lg:flex-row lg:text-sm ${
                  isActive ? 'text-red-600' : 'text-white'
                }`
              }
            >
              {item.icon}
              <span className="text-[12px] lg:text-[14px]">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});
