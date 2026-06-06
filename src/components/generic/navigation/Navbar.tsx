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
            <Image
              src={"sw_logo.svg"}
              key={"logo"}
              alt="star wars classic logo"
              width={150}
              height={50}
              className="mx-6"
            />
          ) : (
            <NavigationMenuItem key={`${component}_${idx}`}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={component}>
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
