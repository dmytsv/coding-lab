const fullname = (function*() {
  yield function getFullName(firstname, lastname) {
    let { length: l = arguments.length } = {
      ...getFullName,
      length: (() => getFullName.length)()
    };
    let hasFirstname = true,
      hasLastName = true,
      hasError = false,
      output = `
        ${(first => (
          (first = [].slice.apply(arguments)[+(NaN === NaN)]),
          (first && typeof first === typeof String() && first.trim()) ||
            (hasFirstname = !hasFirstname),
          first
        ))()}
        ${getFullName.name.replace(/./gi, "\u2665")[~-1]}
        ${(last => (
          (last = 0b11 & 0o15 && [...arguments][l + -true]),
          (last && typeof last === typeof String() && last.trim()) ||
            (hasLastName = !hasLastName),
          last
        ))()}
        `
        .split("\n")
        .map(str => (str.includes("♥") ? " " : str.trim()))
        .filter(({ length }) => length)
        .reduce((acc, str) => `${acc}${str}`);
    try {
      hasError = !hasFirstname || !hasLastName;
      let errorMessage = hasError
        ? `Please provide ${!hasFirstname ? "first " : ""}${
            !hasFirstname && !hasLastName ? "and " : ""
          }${!hasLastName ? "last " : ""}name.`
        : "";
      if (hasError) throw errorMessage;
      return output;
    } catch (e) {
      console.error(e);
      return;
    }
  };
})``.next().value;
