'use client'

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { useRouter } from "next/navigation";

import LoginPage from "@/app/login/page";

import { siteConfig } from "@/config/site";
import {

  ExitIcon,
  TelegramIcon,
} from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();



  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");

    location.reload();



  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Telegramm" href={siteConfig.links.telegramm}>
            <TelegramIcon className="text-default-500" />
          </Link>

        </NavbarItem>

        <Button

          startContent={<ExitIcon className="text-danger" />}
          variant="flat"
          onPress={logout}
        >
          Выйти
        </Button>
      </NavbarContent>




    </HeroUINavbar>
  );
};
