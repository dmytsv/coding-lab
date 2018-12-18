const $rand = n => Math.floor(Math.random() * n);
const $log = ({ text, textColor, fontFamily, fontSize, borderColor }) =>
  console.log(
    `%c${text}`,
    `color: ${textColor}; font-family: ${fontFamily}; font-weight: bold; font-size: ${fontSize}px; text-shadow: 1px 1px 0px ${borderColor}, 1px -1px 0px ${borderColor}, -1px 1px 0px ${borderColor}, -1px -1px 0px ${borderColor}`
  );
const texts = [
  "Ring-ding-ding-ding-dingeringeding!",
  "Gering-ding-ding-ding-dingeringeding!",
  "Gering-ding-ding-ding-dingeringeding!",
  "Wa-pa-pa-pa-pa-pa-pow!",
  "Wa-pa-pa-pa-pa-pa-pow!",
  "Wa-pa-pa-pa-pa-pa-pow!",
  "Hatee-hatee-hatee-ho!",
  "Hatee-hatee-hatee-ho!",
  "Hatee-hatee-hatee-ho!",
  "Joff-tchoff-tchoffo-tchoffo-tchoff!",
  "Tchoff-tchoff-tchoffo-tchoffo-tchoff!",
  "Joff-tchoff-tchoffo-tchoffo-tchoff!",
  "Jacha-chacha-chacha-chow!",
  "Chacha-chacha-chacha-chow!",
  "Chacha-chacha-chacha-chow!",
  "Fraka-kaka-kaka-kaka-kow!",
  "Fraka-kaka-kaka-kaka-kow!",
  "Fraka-kaka-kaka-kaka-kow!",
  "A-hee-ahee ha-hee!",
  "A-hee-ahee ha-hee!",
  "A-hee-ahee ha-hee!",
  "A-oo-oo-oo-ooo!",
  "Woo-oo-oo-ooo!",
  "Woo-oo-oo-ooo!"
];
const colors = [
  "#76D7C4",
  "#73C6B6",
  "#0E6655",
  "#0E6655",
  "#0E6655",
  "#F7DC6F",
  "#C0392B",
  "#E74C3C",
  "#E67E22",
  "#566573",
  "#8E44AD",
  "#2E86C1",
  "#FDEBD0",
  "#5F6A6A",
  "#641E16",
  "#196F3D",
  "#196F3D",
  "#196F3D"
];
const fonts = [
  "Arial",
  "Helvetica",
  "Times",
  "Courier",
  "Verdana",
  "Georgia",
  "Palatino",
  "Garamond",
  "Bookman",
  '"Comic Sans MS"',
  "Impact"
];
const whatDoesTheFoxSay = (n = 3) => {
  let text = texts[$rand(texts.length)];
  let textColor = colors[$rand(colors.length)];
  let fontFamily = fonts[$rand(fonts.length)];
  let fontSize = $rand(20) + 20;
  let borderColor = colors[$rand(colors.length)];
  const theSound = {
    text,
    textColor,
    fontFamily,
    fontSize,
    borderColor
  };
  for (let i = 1; i <= n; i++) {
    setTimeout(
      () => ($log({ text: "🦊", fontSize: 30 }), $log(theSound)),
      i * 500
    );
  }
};
