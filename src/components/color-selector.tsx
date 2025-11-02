"use client";

import { THEMES, useThemeConfig } from "./color-theme";

import { cn } from "@/lib/utils";
import { Label } from "@/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

export function ColorSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className={cn("theme-container flex items-center gap-2", className)}>
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id="theme-selector"
          size="sm"
          className="bg-muted text-muted-foreground border-muted justify-start shadow-none *:data-[slot=select-value]:w-18"
        >
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent align="end">
          {THEMES.map((theme) => (
            <SelectItem
              key={theme.name}
              value={theme.name}
              className="flex data-[state=checked]:opacity-50"
            >
              <div
                className="h-4 w-4 shrink-0 rounded-sm"
                style={{ backgroundColor: theme.color }}
              />
              {theme.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
