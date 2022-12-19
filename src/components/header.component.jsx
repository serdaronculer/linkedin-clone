import React from "react";
import { ReactComponent as LinkedinLogo } from "../assets/img/linkedin-icon.svg";
import { ReactComponent as SearchIcon } from "../assets/img/search-icon.svg";
import { ReactComponent as HomeIcon } from "../assets/img/home-icon.svg";
import { ReactComponent as NetworkIcon } from "../assets/img/network-icon.svg";
import { ReactComponent as BagIcon } from "../assets/img/bag-icon.svg";
import { ReactComponent as MessageIcon } from "../assets/img/message-icon.svg";
import { ReactComponent as NotificationIcon } from "../assets/img/notification-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/img/arrow-down-icon.svg";
import { ReactComponent as WorkIcon } from "../assets/img/work-icon.svg";
import ProfileImg from "./profile-img.component";
const Header = () => {
  return (
    <div className="bg-primary">
      <div className="container h-14 flex justify-between items-center">
        <div className="flex gap-x-1 items-center">
          <a href="#">
            <LinkedinLogo width="41px" height="41px" className="fill-current text-brand " />
          </a>
          <label className="block relative">
            <input
              type="text"
              placeholder="Arama Yap"
              className="bg-search pl-10 pr-3 h-9 text-secondary placeholder:text-primary  placeholder:text-sm w-72 focus:w-96 transition-all"
            />
            <SearchIcon
              width="16px"
              height="16px"
              className="fill-current text-icon absolute left-5 top-1/2  -translate-y-1/2  -translate-x-1/2"
            />
          </label>
        </div>
        <div className="flex items-center ">
          <a
            href="#"
            className="nav-item relative  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
          >
            <span className="relative">
              <span className="absolute -top-1 -right-[6px] w-4 h-4 rounded-full bg-red-600 before:absolute before:top-1/2 before:left-1/2 before:w-[6px] before:h-[6px] before:bg-white before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2"></span>
              <HomeIcon width="24px" height="24px" className="fill-current text-icon" />
            </span>
            <span className="text-xs text-secondary">Ana Sayfa</span>
          </a>
          <a
            href="#"
            className="nav-item"
          >
            <NetworkIcon width="24px" height="24px" className="fill-current text-icon" />
            <span className="text-xs text-secondary">Ağım</span>
          </a>
          <a
            href="#"
            className="nav-item"
          >
            <BagIcon width="24px" height="24px" className="fill-current text-icon" />
            <span className="text-xs text-secondary">İş İlanları</span>
          </a>
          <a
            href="#"
            className="nav-item"
          >
            <MessageIcon width="24px" height="24px" className="fill-current text-icon" />
            <span className="text-xs text-secondary">Mesajlaşma</span>
          </a>
          <a
            href="#"
            className="nav-item"
          >
            <NotificationIcon width="24px" height="24px" className="fill-current text-icon" />
            <span className="text-xs text-secondary">Bildirimler</span>
          </a>
          <button className="nav-item border-r-[1px]">
            <ProfileImg width="24px" height="24px" />
            <div className="flex">
              <span className="text-xs text-secondary relative">Ben</span>
              <ArrowDownIcon width="16px" height="16px" className="fill-current text-icon" />
            </div>
          </button>
          <button className="nav-item">
            <WorkIcon width="24px" height="24px" className="fill-current text-icon" />
            <div className="flex">
              <span className="text-xs text-secondary relative">İş</span>
              <ArrowDownIcon width="16px" height="16px" className="fill-current text-icon " />
            </div>
          </button>
          <a href="#" className="text-xs text-brand-accent underline text-center max-w-[125px]">
            Daha hızlı işe alın. Ücretsiz deneyin Premium .
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
