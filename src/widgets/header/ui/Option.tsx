import { memo } from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Options = memo(() => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <section className="flex gap-5 items-center">
      <Select
        className="custom-select w-28"
        value={i18n.language}
        onChange={handleChange}
        placeholder="Tilni tanlang"
        style={{ height: "30px", width: "100px" }}
        options={[
          { value: "ru", label: "Rus" },
          { value: "uz", label: "Uzb" },
          { value: "en", label: "Eng" },
        ]}
      />

      <button
        onClick={() => navigate('/login')}
      className="bg-[#C61F1F] rounded-xl py-[16px] px-[64px] text-white">
        Kirish
      </button>
    </section>
  );
});
