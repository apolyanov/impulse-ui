import { faBars, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@impulse-ui/layout';
import { Sidebar, SidebarHeader, SidebarItem, SidebarSectionDivider } from '@impulse-ui/sidebar';
import { memo } from 'react';

const SidebarPage = memo(() => {
  return (
    <Container>
      <Sidebar>
        <SidebarHeader icon={faBars} headerText={'Playground'} />
        <SidebarSectionDivider />
        <SidebarItem active icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
        <SidebarItem icon={faFolder} itemText={'Buttons'} />
      </Sidebar>
    </Container>
  );
});

export default SidebarPage;
