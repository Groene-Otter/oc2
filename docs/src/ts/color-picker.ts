export const initColorPicker = () => {
  let lightness = Math.round(Math.random() * 100);
  let chroma = Math.round(Math.random() * 37) / 100;
  let hue = Math.round(Math.random() * 360);
  // setColor(`oklch(${lightness}% ${chroma} ${hue})`);

  document
    .querySelector('[name="lightness"]')
    ?.addEventListener("input", (e) => {
      lightness = +(e.target as HTMLInputElement).value;
      setColor(`oklch(${lightness}% ${chroma} ${hue})`);
    });
  document.querySelector('[name="chroma"]')?.addEventListener("input", (e) => {
    chroma = +(e.target as HTMLInputElement).value;
    setColor(`oklch(${lightness}% ${chroma} ${hue})`);
  });
  document.querySelector('[name="hue"]')?.addEventListener("input", (e) => {
    hue = +(e.target as HTMLInputElement).value;
    setColor(`oklch(${lightness}% ${chroma} ${hue})`);
  });
};

function setColor(color: string) {
  console.log(color);

  const root = document.querySelector(":root") as HTMLElement;
  root.style.setProperty("--brand", color);
}
