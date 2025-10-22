import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Link } from "@heroui/link";
import { NavbarItem } from "@heroui/navbar";

interface NavbarAuthProps {
  user: { name: string; email: string } | null;
  handleAuth: () => void;
  handleLogout: () => void;
}

export const NavbarAuth = ({
  user,
  handleAuth,
  handleLogout,
}: NavbarAuthProps) => {
  // === Nếu chưa đăng nhập ===
  if (!user) {
    return (
      <>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal hover:scale-105 transition-all duration-300"
            variant="light"
            onPress={handleAuth}
          >
            Đăng nhập
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 hover:scale-105 transition-all duration-300"
            variant="flat"
            onPress={handleAuth}
          >
            Đăng ký
          </Button>
        </NavbarItem>
      </>
    );
  }

  // === Nếu đã đăng nhập ===
  return (
    <NavbarItem>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={user.name}
            size="sm"
            src={`https://i.pravatar.cc/150?u=${user.email}`}
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Đăng nhập với</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>

          <DropdownItem key="settings">Cài đặt tài khoản</DropdownItem>

          <DropdownItem key="logout" color="danger" onPress={handleLogout}>
            Đăng xuất
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarItem>
  );
};
