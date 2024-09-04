export const initColorPicker = () => {
  document
    .querySelector('input[type="color"]')
    ?.addEventListener("input", (e) => {
      const color = (e.target as HTMLInputElement).value;
      setColor(color);
    });
};

function setColor(color: string) {
  console.log(color);

  const root = document.querySelector(":root") as HTMLElement;
  root.style.setProperty("--brand", color);
}
