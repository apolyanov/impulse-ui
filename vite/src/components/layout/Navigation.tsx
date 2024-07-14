import { faBars, faFolder } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@impulse-ui/buttons';
import { Sidebar, SidebarHeader, SidebarItem, SidebarSectionDivider } from '@impulse-ui/sidebar';
import { memo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const [hideNabigation, setHideNavigation] = useState(false);

  const isActive = (itemPath: string): boolean => {
    return location.pathname === itemPath;
  };

  return (
    <>
      {hideNabigation && (
        <Sidebar
          iStyle={{
            containerStyle: { iCss: { display: 'block' } },
          }}
        >
          <SidebarHeader icon={faBars} headerText={'Playground'} />
          <SidebarSectionDivider />
          <SidebarItem
            active={isActive('/buttons')}
            onClick={() => navigate('/buttons')}
            icon={faFolder}
            itemText={'Buttons'}
          />
          <SidebarItem
            active={isActive('/inputs')}
            onClick={() => navigate('/inputs')}
            icon={faFolder}
            itemText={'Inputs'}
          />
          <SidebarItem
            active={isActive('/auto-complete')}
            onClick={() => navigate('/auto-complete')}
            icon={faFolder}
            itemText={'Autocomplete'}
          />
          <SidebarItem
            active={isActive('/sidebar')}
            onClick={() => navigate('/sidebar')}
            icon={faFolder}
            itemText={'Sidebar'}
          />
          <SidebarItem
            active={isActive('/avatar')}
            onClick={() => navigate('/avatar')}
            icon={faFolder}
            itemText={'Avatar'}
          />
          <SidebarItem
            active={isActive('/table')}
            onClick={() => navigate('/table')}
            icon={faFolder}
            itemText={'Table'}
          />
          <SidebarItem
            active={isActive('/mui-table')}
            onClick={() => navigate('/mui-table')}
            icon={faFolder}
            itemText={'Mui Table'}
          />
          <SidebarItem active={isActive('/qr')} onClick={() => navigate('/qr')} icon={faFolder} itemText={'QR'} />
          <SidebarItem active={isActive('/ocr')} onClick={() => navigate('/ocr')} icon={faFolder} itemText={'OCR'} />
          <SidebarItem
            active={isActive('/styles')}
            onClick={() => navigate('/styles')}
            icon={faFolder}
            itemText={'Styles'}
          />
        </Sidebar>
      )}
      <IconButton
        iStyle={{ buttonStyle: { iCss: { position: 'fixed', bottom: 16, left: 16, zIndex: 10 } } }}
        icon={faBars}
        onClick={() => setHideNavigation((prevState) => !prevState)}
      />
    </>
  );
});

export default Navigation;
