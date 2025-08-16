import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Since we don't have next-themes, we'll use dark theme by default for your portfolio
  const theme = "dark";

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  // Detect mobile viewport and keep in sync on resize
  useEffect(() => {
    const update = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme)
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud
      containerProps={{
        ...cloudProps.containerProps,
        style: {
          ...cloudProps.containerProps?.style,
          paddingTop: isMobile ? 24 : 40,
        },
      }}
      options={{
  ...cloudProps.options,
        // Constant, smoother rotation on mobile
  maxSpeed: isMobile ? 0.015 : (cloudProps.options?.maxSpeed ?? 0.04),
  minSpeed: isMobile ? 0.015 : (cloudProps.options?.minSpeed ?? 0.02),
  imageScale: isMobile ? 1.8 : (cloudProps.options?.imageScale ?? 2),
  dragControl: isMobile ? false : (cloudProps.options as any)?.dragControl,
        wheelZoom: false,
      }}
    >
      <>{renderedIcons}</>
    </Cloud>
  );
}
