// big red log
const $log = text =>
  console.log(
    `%c${text}`,
    "color: red; font-weight: bold; font-size: 50px; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black"
  );
