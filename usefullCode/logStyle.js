// Blue default log
const $log = (...args) => {
  let mainColor = 'blue';

  let logObj = args.reduce((logObj, arg) => ({
      log: logObj.log + `%c${arg}`,
      style: [
        ...logObj.style, 
        `color: ${mainColor};
        font-weight: bold; 
        font-size: 20px;`
      ]
      
  }), {log:'',style:[]});
  console.log(logObj.log, ...logObj.style);
}

// red error log
const $err = (...args) => {
  let mainColor = 'red';
  let borderColor = 'black';

  let logObj = args.reduce((logObj, arg) => ({
      log: logObj.log + `%c${arg}`,
      style: [
          ...logObj.style,
          `color: ${mainColor}; 
          font-weight: bold; 
          font-size: 20px; 
          text-shadow:  1px 1px 0px ${borderColor}, 
                        1px -1px 0px ${borderColor}, 
                        -1px 1px 0px ${borderColor}, 
                        -1px -1px 0px ${borderColor}`
      ]
      
  }), {log:'',style:[]});
  console.log(logObj.log, ...logObj.style);
}

// green success log
const $success = (...args) => {
  let mainColor = 'green';

  let logObj = args.reduce((logObj, arg) => ({
      log: logObj.log + `%c${arg}`,
      style: [
          ...logObj.style,
          `color: ${mainColor}; 
          font-weight: bold; 
          font-size: 20px;`
      ]
      
  }), {log:'',style:[]});
  console.log(logObj.log, ...logObj.style);
}