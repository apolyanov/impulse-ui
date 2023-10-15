import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { faBars, faFolderMinus } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, SidebarHeader, SidebarItem, SidebarSectionDivider } from '@impulse-ui/sidebar';

const Navigation = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (itemPath: string): boolean => {
    return location.pathname === itemPath;
  };

  return (
    <Sidebar>
      <SidebarHeader icon={faBars} headerText={'Playground'} />
      <SidebarSectionDivider />
      <SidebarItem
        active={isActive('/buttons')}
        onClick={() => navigate('/buttons')}
        icon={faFolderMinus}
        itemText={'Buttons'}
      />
      <SidebarItem
        active={isActive('/inputs')}
        onClick={() => navigate('/inputs')}
        icon={faFolderMinus}
        itemText={'Inputs'}
      />
      <SidebarItem
        active={isActive('/auto-complete')}
        onClick={() => navigate('/auto-complete')}
        icon={faFolderMinus}
        itemText={'Autocomplete'}
      />
      <SidebarItem
        active={isActive('/sidebar')}
        onClick={() => navigate('/sidebar')}
        icon={faFolderMinus}
        itemText={'Sidebar'}
      />
      <SidebarItem
        active={isActive('/avatar')}
        onClick={() => navigate('/avatar')}
        icon={faFolderMinus}
        itemText={'Avatar'}
      />
      <SidebarItem
        active={isActive('/table')}
        onClick={() => navigate('/table')}
        icon={faFolderMinus}
        itemText={'Table'}
      />
    </Sidebar>
  );
});

export default Navigation;
