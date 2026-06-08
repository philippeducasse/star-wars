"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { capitalize } from "@/lib/utils";

const components: string[] = [
  "characters",
  "planets",
  "films",
  "logo",
  "species",
  "vehicles",
  "starships",
];

export function Navbar() {
  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        {components.map((component, idx) =>
          component === "logo" ? (
            <NavigationMenuItem key={"logo"}>
              <Link href="/">
                <Image
                  src={"/sw_logo.svg"}
                  alt="star wars classic logo"
                  width={150}
                  height={50}
                  className="mx-6"
                />
              </Link>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`${component}_${idx}`}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={`/${component}`}>
                  <p className="text-2xl text-sw-yellow">{capitalize(component)}</p>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
