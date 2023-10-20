import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { faBars, faFolder } from '@fortawesome/free-solid-svg-icons';
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
      <SidebarItem active={isActive('/table')} onClick={() => navigate('/table')} icon={faFolder} itemText={'Table'} />
      <SidebarItem
        active={isActive('/mui-table')}
        onClick={() => navigate('/mui-table')}
        icon={faFolder}
        itemText={'Mui Table'}
      />
    </Sidebar>
  );
});

export default Navigation;
