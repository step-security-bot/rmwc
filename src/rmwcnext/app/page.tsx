'use client';
import { TextField } from '@rmwc/textfield';
import '@rmwc/textfield/styles';
import { ThemeProvider } from '@rmwc/theme';
import React, { useState } from 'react';
import { getTheme } from './theme-picker';
import { useLocation } from 'react-router';
import { PortalProvider, RMWC_VERSION } from '@rmwc/base';
import {
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@rmwc/top-app-bar';
import { MenuItem, SimpleMenu } from '@rmwc/menu';
import { Icon } from '@rmwc/icon';
import { Link } from 'react-router-dom';
import { DOC_VERSIONS } from './doc-versions';

function Home() {
  const location = useLocation();
  const isMobile = window.innerWidth < 640;
  const [menuIsOpen, setMenuIsOpen] = useState(!isMobile);

  const [pageId, setPageId] = useState(
    `page-${location.pathname.split('/').pop() || 'home'}`
  );
  const [theme, setTheme] = useState(
    window.localStorage.getItem('rmwcTheme') || 'Baseline'
  );
  return (
    <ThemeProvider
      options={getTheme(theme)}
      className="app__root"
      tag="div"
      id={pageId}
    >
      <PortalProvider>
        <AppBar
          onNavClick={(evt) => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <TextField label="donkey" />
        </AppBar>
      </PortalProvider>
    </ThemeProvider>
  );
}

export default Home;

function AppBar({
  onNavClick,
  children
}: {
  onNavClick: (evt: React.SyntheticEvent<HTMLElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <TopAppBar fixed className="app__top-app-bar">
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon onClick={onNavClick} icon="menu" />
            <TopAppBarTitle tag={Link} to="/">
              RMWC
            </TopAppBarTitle>
            <SimpleMenu
              handle={
                <span className="app__version">
                  <span>{RMWC_VERSION}</span> <Icon icon="arrow_drop_down" />
                </span>
              }
            >
              <MenuItem>{RMWC_VERSION}</MenuItem>
              {DOC_VERSIONS.map((v) => (
                <MenuItem key={v} tag="a" href={`/version/${v}`}>
                  {v}
                </MenuItem>
              ))}
            </SimpleMenu>

            {/* <SiteSearch /> */}
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            {children}
            <TopAppBarActionItem
              tag="a"
              href="https://github.com/jamesmfriedman/rmwc"
              // icon={<GithubSvg />}
            />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
}
