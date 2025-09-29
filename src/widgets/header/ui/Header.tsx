import { memo } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { clearUser } from '../../../features/auth';



export const Header = memo(() => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const items: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <button onClick={()=> dispatch(clearUser())}
        >
          Logout
        </button>
      ),
    },
  ];
  return (
    <header className="bg-neutral-900">
      <div className="container text-white">
        <div className="flex justify-between py-[22px]">
          <Logo />

          <Navigation />
          <section className="flex gap-5">
            <select id="language" name="language" className="bg-neutral-900">
              <option value="rus">Rus</option>
              <option value="uzb">Uzb</option>
            </select>


            {user ? (
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown menu={{ items }} placement="bottomLeft">
                    {/* <Button> */}
                    {user ? (
                      <img
                        src={user.picture}
                        alt=""
                        className="size-10 rounded-full"
                      />
                    ) : (
                      <button
                        className="bg-[#C61F1F] rounded-xl py-[16px] px-[64px]"
                        onClick={() => navigate('/login')}
                      >
                        Kirish
                      </button>
                    )}
                    {/* </Button> */}
                  </Dropdown>
                </Space>
              </Space>
            ) : (
              <button
                className="bg-[#C61F1F] rounded-xl py-[16px] px-[64px]"
                onClick={() => navigate('/login')}
              >
                Kirish
              </button>
            )}
          </section>
        </div>
      </div>
    </header>
  );
});
