import { useTheme } from "next-themes";
import { darken } from "polished";
import type { VFC } from "react";

interface AreaChartGradientStopsProps {
  baseColor: string;

  shouldFadeToTransparent?: boolean;
}

export const AreaChartGradientStops: VFC<AreaChartGradientStopsProps> = ({
  baseColor,
  shouldFadeToTransparent = false
}) => {
  const { theme } = useTheme();

  let endStopOpacity = theme === "dark" ? 0.1 : 0.4;
  if (shouldFadeToTransparent) {
    endStopOpacity = 0;
  }

  return (
    <>
      <stop
        offset="5%"
        stopColor={getGradientStopColor(theme, baseColor)}
        stopOpacity={0.5}
      />
      <stop offset="100%" stopColor={baseColor} stopOpacity={endStopOpacity} />
    </>
  );
};

const getGradientStopColor = (theme: string, baseColor: string) => {
  if (theme === "dark") {
    return darken(0.26, baseColor);
  }

  return baseColor;
};
