"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { capitalize } from "@/lib/utils";

const components: string[] = ["characters", "planets", "films", "species", "vehicles", "starships"];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component, idx) => (
          <NavigationMenuItem key={`${component}_${idx}`}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={component}>{capitalize(component)}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
