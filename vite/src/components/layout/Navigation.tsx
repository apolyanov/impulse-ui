import { faBars, faFolder } from "@fortawesome/free-solid-svg-icons";
import { Sidebar, SidebarItems } from "@impulse-ui/navigation";
import { memo } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

const items = (
  isActive: (itemPath: string) => boolean,
  navigate: NavigateFunction
): SidebarItems => [
  {
    icon: faBars,
    label: "Playground",
    isHeader: true,
  },
  {
    isDivider: true,
  },
  {
    active: isActive("/buttons"),
    label: "Buttons",
    icon: faFolder,
    onClick: () => navigate("/buttons"),
  },
  {
    active: isActive("/inputs"),
    label: "Inputs",
    icon: faFolder,
    onClick: () => navigate("/inputs"),
  },
  {
    active: isActive("/auto-complete"),
    label: "Autocomplete",
    icon: faFolder,
    onClick: () => navigate("/auto-complete"),
  },
  {
    active: isActive("/qr"),
    label: "QR",
    icon: faFolder,
    onClick: () => navigate("/qr"),
  },
  {
    active: isActive("/ocr"),
    label: "OCR",
    icon: faFolder,
    onClick: () => navigate("/ocr"),
  },
  {
    active: isActive("/sidebar"),
    label: "Sidebar",
    icon: faFolder,
    onClick: () => navigate("/sidebar"),
  },
  {
    active: isActive("/avatar"),
    label: "Avatar",
    icon: faFolder,
    onClick: () => navigate("/avatar"),
  },
  {
    active: isActive("/table"),
    label: "Table",
    icon: faFolder,
    onClick: () => navigate("/table"),
  },
  {
    active: isActive("/mui-table"),
    label: "Mui Table",
    icon: faFolder,
    onClick: () => navigate("/mui-table"),
  },
  {
    active: isActive("/styles"),
    label: "Styles",
    icon: faFolder,
    onClick: () => navigate("/styles"),
  },
];

const Navigation = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (itemPath: string): boolean => {
    return location.pathname === itemPath;
  };

  return <Sidebar items={items(isActive, navigate)} />;
});

export default Navigation;
