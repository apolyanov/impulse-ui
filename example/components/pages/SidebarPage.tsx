import { memo } from 'react';
import { faBars, faFolderMinus } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@impulse-ui/layout';
import { Sidebar, SidebarHeader, SidebarItem, SidebarSectionDivider } from '@impulse-ui/sidebar';

const SidebarPage = memo(() => {
  return (
    <Container>
      <Sidebar>
        <SidebarHeader icon={faBars} headerText={'Playground'} />
        <SidebarSectionDivider />
        <SidebarItem active icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
        <SidebarItem icon={faFolderMinus} itemText={'Buttons'} />
      </Sidebar>
    </Container>
  );
});

export default SidebarPage;
