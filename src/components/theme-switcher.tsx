"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";
import { useMetaColor } from "@/hooks/use-meta-color";

export function ThemeSwitcher({ className }: React.ComponentProps<"button">) {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor, metaColor } = useMetaColor();

  React.useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      className={cn(
        "group/toggle extend-touch-target size-8 px-0 hover:cursor-pointer",
        className,
      )}
      size="icon"
      onClick={toggleTheme}
      title="Toggle theme"
    >
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
