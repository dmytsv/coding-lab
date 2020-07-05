/**
 * Builds growth graph based on provided probability and value
 * makeGraph(10)
 *  40 |         x 
 *  30 |        x x
 *  20 |       x   
 *  10 |    x x    
 *   0 | x x x     
 * ---------------
 * -10 |  x         
 */
var makeGraph = N => {
  const r = () => Math.random();
  const PROB = 0.3;
  const BET = 10;

  const data = [0];
  const time = [];
  for (let i = 1; i < N; i++) {
    const win = r() > PROB;
    if (win) {
      data[i] = data[i - 1] + BET;
    } else {
      data[i] = data[i - 1] - BET;
    }
    time.push(`-`);
  }

  const graphCache = {};
  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < data.length; i++) {
    const value = data[i];
    if (!graphCache[value]) {
      graphCache[value] = {};
    }
    if (value < min) min = value;
    if (value > max) max = value;
    graphCache[value][i] = true;
  }
  const graph = [];
  const maxEntryLength = Math.max(`${max} | `.length, `${min} | `.length);
  time.push('-'.repeat(maxEntryLength));
  for (let i = max; i >= min; i -= 10) {
    const stringBuilder = [`${i} | `.padStart(maxEntryLength, ' ')];
    for (let j = 0; j < data.length; j++) {
      if (graphCache[i][j]) {
        stringBuilder.push('x');
      } else {
        stringBuilder.push(' ');
      }
    }
    graph.push(stringBuilder.join(''));
    if (i === 0) graph.push(time.join(''));
  }
  for (const s of graph) console.log('%c%s', `color: ${
   (num => isNaN(num) 
    ? 'LightGray' 
    : num < 0
    ? 'LightSalmon'
    : 'Chartreuse')(parseInt(s))
  }`,s);
};
