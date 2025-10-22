import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { NavbarItem } from "@heroui/navbar";
import { useEffect, useState } from "react";

// const backgroundOptions = [
//   { label: "Light", value: "#ffffff" },
//   { label: "Dark", value: "#1a1a1a" },
//   { label: "Blue", value: "#3b82f6" },
//   { label: "Green", value: "#10b981" },
//   { label: "Red", value: "#ef4444" },
// ];

const backgroundOptions = [
  { label: "Mountains", value: "/assets/mountain.jpg" },
  { label: "Beach", value: "/images/beach.jpg" },
  { label: "City", value: "/images/city.jpg" },
  { label: "Space", value: "/images/space.jpg" },
];

export const DropdownBackground = () => {
  const [bgImage, setBgImage] = useState(backgroundOptions[0].value);

  // Thay đổi màu background của toàn bộ body khi state thay đổi
  //   useEffect(() => {
  //     document.body.style.backgroundColor = bgColor;
  //   }, [bgColor]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover"; // phóng to full screen
    document.body.style.backgroundPosition = "center"; // căn giữa
    document.body.style.backgroundRepeat = "no-repeat"; // không lặp lại
  }, [bgImage]);

  return (
    <div>
      <Dropdown>
        <NavbarItem className="lg:flex items-center justify-center">
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
              // endContent={icons.chevron}
              radius="sm"
              variant="light"
            >
              Chuyển đổi Background
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="Background options"
          itemClasses={{ base: "gap-2" }}
        >
          {backgroundOptions.map((option) => (
            <DropdownItem
              key={option.label}
              description={`Change background to ${option.label}`}
              onClick={() => setBgImage(option.value)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
