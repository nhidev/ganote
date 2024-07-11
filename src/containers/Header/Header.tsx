'use client';

import { Button } from 'antd';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';

import { leadFormModalAtom } from '@/atoms';
import { Mobile, NavLink } from '@/components';
// import useScrollDirection from '@/hooks/useScrollDirection';
import withTheme from '@/theme';
import { ROUTE } from '@/utils/constants';
import styles from './header.module.scss';

const ACTIVE_SELECTOR = {
  OFFICE_CLEANING: 'office-cleaning',
  MRO: 'MRO-supplies-management',
  SPACE_MAINTENACE: 'space-maintenance',
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}


const Header = memo(() => {
  const router = useRouter();
  // const scrollDirection = useScrollDirection(); // Using for detecting up/down scroll.

  const [activeSection, setActiveSection] = useState('');
  const [leadFormModal, setLeadFormModal] = useAtom(leadFormModalAtom);
  const [toggle, setToggle] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onToggleSubMenu = () => {
    setToggleSubMenu(!toggleSubMenu);
  };

  const changeHashForCurrentPage = (hash: string) => {
    window.location.hash = `${hash}`;
  };

  const scrollTo = (target: string, route: string) => {
    const section = document.getElementById(target);

    if (section) {
      changeHashForCurrentPage(target);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(`${route}/#${target}`);
    }
    setToggle(false);
  };

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        if (window.location.hash === `#${ACTIVE_SELECTOR.OFFICE_CLEANING}`) {
          scrollTo(ACTIVE_SELECTOR.OFFICE_CLEANING, ROUTE.OPERATION);
        }
        if (window.location.hash === `#${ACTIVE_SELECTOR.MRO}`) {
          scrollTo(ACTIVE_SELECTOR.MRO, ROUTE.OPERATION);
        }
        if (window.location.hash === `#${ACTIVE_SELECTOR.SPACE_MAINTENACE}`) {
          scrollTo(ACTIVE_SELECTOR.SPACE_MAINTENACE, ROUTE.OPERATION);
        }
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === ROUTE.OPERATION) {
      const handleScroll = () => {
        let scrollY = window.pageYOffset;
        const officeCleaning = document.getElementById(ACTIVE_SELECTOR.OFFICE_CLEANING);
        const MROSuppliesManagement = document.getElementById(ACTIVE_SELECTOR.MRO);
        const spaceMaintenance = document.getElementById(ACTIVE_SELECTOR.SPACE_MAINTENACE);

        if (officeCleaning && MROSuppliesManagement && spaceMaintenance) {
          scrollY += window.innerHeight / 2;
          if (scrollY >= officeCleaning.offsetTop && scrollY < officeCleaning.offsetTop + officeCleaning.clientHeight) {
            setActiveSection(ACTIVE_SELECTOR.OFFICE_CLEANING);
          } else if (
            scrollY >= MROSuppliesManagement.offsetTop &&
            scrollY < MROSuppliesManagement.offsetTop + MROSuppliesManagement.clientHeight
          ) {
            setActiveSection(ACTIVE_SELECTOR.MRO);
          } else if (
            scrollY >= spaceMaintenance.offsetTop &&
            scrollY < spaceMaintenance.offsetTop + spaceMaintenance.clientHeight
          ) {
            setActiveSection(ACTIVE_SELECTOR.SPACE_MAINTENACE);
          } else {
            setActiveSection('');
          }
        }
      };

      window.addEventListener('scroll', handleScroll); // add event listener
      return () => {
        window.removeEventListener('scroll', handleScroll); // clean up
      };
    }
  }, []);

  return (
    <>
      <header className={`${styles.header}`}>
        <div className="header_container">
          <div className="header_left">
            <Link href={ROUTE.HOME}>
              <Image width={95} height={27} priority src="/iconsN/logo-default.svg" alt="logo" />
            </Link>
          </div>
          <nav className={`${styles.HeaderNav} ${toggle ? styles.HeaderNavIsOpen : ''}`}>
            <ul>
              <li>
                <NavLink href={ROUTE.HOME} exact scroll={true}>
                  총무노트란
                </NavLink>
              </li>

              <li className={`has-sub-menu ${toggleSubMenu ? 'isActive' : ''}`}>
                <NavLink href={ROUTE.OPERATION} exact scroll={true}>
                  오피스 운영
                </NavLink>

                <Mobile>
                  <button onClick={onToggleSubMenu} className="btn-toggle">
                    <Image width={22} height={22} src={`/iconsN/arrow_forward_ios.svg`} alt="menu toggle" />
                  </button>
                </Mobile>

                <ul>
                  <li>
                    <button
                      onClick={() => scrollTo(ACTIVE_SELECTOR.OFFICE_CLEANING, ROUTE.OPERATION)}
                      className={activeSection === ACTIVE_SELECTOR.OFFICE_CLEANING ? 'isActive' : ''}
                    >
                      오피스 클리닝
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollTo(ACTIVE_SELECTOR.MRO, ROUTE.OPERATION)}
                      className={activeSection === ACTIVE_SELECTOR.MRO ? 'isActive' : ''}
                    >
                      MRO 비품 관리
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollTo(ACTIVE_SELECTOR.SPACE_MAINTENACE, ROUTE.OPERATION)}
                      className={activeSection === ACTIVE_SELECTOR.SPACE_MAINTENACE ? 'isActive' : ''}
                    >
                      공간 유지보수
                    </button>
                  </li>
                </ul>
              </li>
              {/* <li>
                <NavLink href={ROUTE.INTERIOR} exact scroll={true}>
                  인테리어
                </NavLink>
              </li> */}
            </ul>
          </nav>
          <div className="header_right">
            {withTheme(
              <Button type="primary" onClick={(event) => {
                setLeadFormModal({ open: true, isDownload: false });
                event.currentTarget.blur();
              }}>
                무료 상담 신청하기
              </Button>
            )}

            <Mobile>
              {withTheme(
                <Button type="text" className="g-toggle-btn" onClick={onToggle}>
                  <Image
                    width={22}
                    height={22}
                    src={toggle ? '/iconsN/menu-toggle-x.svg' : '/iconsN/menu-toggle.svg'}
                    alt="menu toggle"
                  />
                </Button>
              )}
            </Mobile>
          </div>
        </div>
      </header>
    </>
  );
});

export default Header;
