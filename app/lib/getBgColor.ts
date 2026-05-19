export default function getBgColor(
  theme: string,
  littleBitWhite: boolean = false,
) {
  if (theme === "light") {
    if (littleBitWhite) {
      return "#e4e4e4";
    }
    return "white";
  }
  if (littleBitWhite) {
    return "black";
  }
  return "#303030";
}

export function getBgColorReverse(theme: string) {
  if (theme === "light") {
    return "#333333";
  }
  return "white";
}

export function getTextColor(theme: string) {
  if (theme === "light") {
    return "black";
  }
  return "white";
}

export function getTextColorReverse(theme: string) {
  if (theme === "light") {
    return "white";
  }
  return "black";
}
