import { memo } from 'react';
import { CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

export const Navigation = memo(() => {
  return (
    <div className="flex gap-5  items-center">
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        margin: 0,
        padding: 0,
      }}
    >
      <li>
        <NavLink
          to={'/'}
          style={({ isActive }) => ({ color: isActive ? '#ff0000' : '#fff' })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/movie'}
          style={({ isActive }) => ({ color: isActive ? '#ff0000' : '#fff' })}
        >
          Movie
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/bookMark'}
          style={({ isActive }) => ({ color: isActive ? '#ff0000' : '#fff' })}
        >
          BookMark
        </NavLink>
      </li>
      <li>
        <NavLink to={'/search'} style={{ color: '#fff' }}>
          <CiSearch size={22} />
        </NavLink>
      </li>
    </ul>

    </div>
  );
});
