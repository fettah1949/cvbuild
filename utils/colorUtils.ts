export function normalizeColor(color: string): string {
  if (!color) return '#3b82f6';
  
  if (color.startsWith('#')) {
    return color;
  }
  
  const hexMatch = color.match(/^#([0-9a-f]{3,6})$/i);
  if (hexMatch) {
    return color;
  }
  
  const rgbMatch = color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]).toString(16).padStart(2, '0');
    const g = parseInt(rgbMatch[2]).toString(16).padStart(2, '0');
    const b = parseInt(rgbMatch[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  
  const rgbaMatch = color.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)$/i);
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1]).toString(16).padStart(2, '0');
    const g = parseInt(rgbaMatch[2]).toString(16).padStart(2, '0');
    const b = parseInt(rgbaMatch[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  
  const temp = document.createElement('div');
  temp.style.color = color;
  document.body.appendChild(temp);
  
  const computedColor = window.getComputedStyle(temp).color;
  document.body.removeChild(temp);
  
  const computedRgbMatch = computedColor.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (computedRgbMatch) {
    const r = parseInt(computedRgbMatch[1]).toString(16).padStart(2, '0');
    const g = parseInt(computedRgbMatch[2]).toString(16).padStart(2, '0');
    const b = parseInt(computedRgbMatch[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  
  return '#3b82f6';
}

export function addAlpha(color: string, alpha: number): string {
  const normalized = normalizeColor(color);
  const r = parseInt(normalized.slice(1, 3), 16);
  const g = parseInt(normalized.slice(3, 5), 16);
  const b = parseInt(normalized.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
