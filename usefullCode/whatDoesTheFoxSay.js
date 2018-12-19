const whatDoesTheFoxSay = (N = 3) => {
  const $rand = n => Math.floor(Math.random() * n);
  const $color = () => `rgb(${$rand(256)},${$rand(256)},${$rand(256)})`;
  const $log = ({
    text,
    textColor,
    fontFamily,
    fontSize = 30,
    borderColor,
    borderSize
  }) =>
    console.log(
      `%c${text}`,
      `color: ${textColor}; font-family: ${fontFamily}; font-weight: bold; font-size: ${fontSize}px; text-shadow: ${borderSize}px ${borderSize}px 0px ${borderColor}, ${borderSize}px -${borderSize}px 0px ${borderColor}, -${borderSize}px ${borderSize}px 0px ${borderColor}, -${borderSize}px -${borderSize}px 0px ${borderColor}`
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

  let text = texts[$rand(texts.length)];
  let textColor = $color();
  let fontFamily = fonts[$rand(fonts.length)];
  let fontSize = $rand(10) + 30;
  let borderColor = $color();
  let borderSize = $rand(2) + 1;
  const theSound = {
    text,
    textColor,
    fontFamily,
    fontSize,
    borderColor,
    borderSize
  };
  for (let i = 1; i <= N; i++) {
    setTimeout(() => ($log({ text: "🦊" }), $log(theSound)), i * 500);
  }
};
