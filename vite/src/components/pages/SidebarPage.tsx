import { faBars, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@impulse-ui/layout';
import { Sidebar, SidebarItems } from '@impulse-ui/navigation';
import { memo } from 'react';

const items: SidebarItems = [
  {
    icon: faBars,
    label: 'Playground',
  },
  {
    isDivider: true,
  },
  {
    active: true,
    icon: faFolder,
    label: 'Buttons',
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    isDivider: true,
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    isDivider: true,
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
  {
    icon: faFolder,
    label: 'Buttons',
  },
];

const SidebarPage = memo(() => {
  return (
    <Container>
      <Sidebar items={items} />
    </Container>
  );
});

export default SidebarPage;
