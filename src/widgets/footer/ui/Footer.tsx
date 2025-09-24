import { memo } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdLocalMovies, MdOutlineTheaterComedy } from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import img from "@/shared/assets/footer.svg"

export const Footer = memo(() => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <img src={img} alt="" />
          </div>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </a>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">О нас</h3>
          <ul className="space-y-2">
            <li>Публичная оферта</li>
            <li >Реклама</li>
            <li>F.A.Q</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Категории</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MdLocalMovies className="text-red-500" /> Кино
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineTheaterComedy className="text-red-500" /> Театр
            </li>
            <li className="flex items-center gap-2">
              <BsMusicNoteBeamed className="text-red-500" /> Концерты
            </li>
            <li className="flex items-center gap-2">
              <GiSoccerBall className="text-red-500" /> Спорт
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Связаться с нами</h3>
          <p className="text-red-500 mb-6">+998 (95) 897-33-38</p>
          <h3 className="text-white font-semibold mb-2">Социальные сети</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaInstagram className="text-red-500" /></a>
            <a href="#"><FaFacebookF className="text-red-500" /></a>
            <a href="#"><FaYoutube className="text-red-500" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
});
