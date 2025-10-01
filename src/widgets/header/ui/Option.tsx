import { memo } from 'react';
import { Dropdown, Select, Space, type MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { clearUser } from '../../../features/auth';

export const Options = memo(() => {
  const { i18n } = useTranslation();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const items: MenuProps['items'] = [
    {
      key: '2',
      label: <button onClick={() => dispatch(clearUser())}>Logout</button>,
    },
  ];

  return (
    <section className="flex gap-5 items-center">
      <Select
        value={i18n.language}
        onChange={handleChange}
        placeholder="Tilni tanlang"
        options={[
          { value: 'ru', label: 'Rus' },
          { value: 'uz', label: 'Uzb' },
          { value: 'en', label: 'Eng' },
        ]}
      />
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
  );
});
