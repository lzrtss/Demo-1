// Validation function
const isValid = function checkArgs(env1, env2, ) {
  if (
    typeof env1 === 'object' && env1 instanceof Object
    && typeof env2 === 'object' && env2 instanceof Object
    && typeof env1.a === 'number' && typeof env1.b === 'number'
    && typeof env2.c === 'number' && typeof env2.d === 'number'
    && env1.a > 0 && env1.a <= 50
    && env1.b > 0 && env1.b <= 50
    && env2.c > 0 && env2.c <= 50
    && env2.d > 0 && env2.d <= 50
  ) {
    return true;
  }

  return false;
}

// Checks if it is posiible to put one envelope inside another without rotation
const noRotation = function putWithoutRotation(width1, height1, width2, height2, ) {
  if (width1 > width2 && height1 > height2) {
    console.log('Second envelope can be put inside first');
    return 2;
  } else if (width1 < width2 && height1 < height2) {
    console.log('First envelope can be put inside second');
    return 1;
  }

  return false;
}

// Checks if it is posiible to put one envelope inside another using rotation
const rotation = function putWithRotation(width1, height1, width2, height2, ) {
  const diagonal1 = Math.sqrt(width1 ** 2 + height1 ** 2);
  const diagonal2 = Math.sqrt(width2 ** 2 + height2 ** 2);

  if (diagonal1 > diagonal2) {
    // Check if it is possible to put 2d envelope inside 1st 
    const aX = Math.sqrt(diagonal2 ** 2 - height1 ** 2);
    const x1 = (width1 - aX) / 2;
    const bY = Math.sqrt(diagonal2 ** 2 - width1 ** 2);
    const x2 = (height1 - bY) / 2;
    const xHypotenuse = Math.sqrt(x1 ** 2 + x2 ** 2);

    if (xHypotenuse >= height2) {
      console.log('Second envelope can be put inside first');
      return 2;
    }
    console.log('Impossible');
    return 0;
  }

  if (diagonal1 < diagonal2) {
    // Check if it is possible to put 1st envelope inside 2d 
    const aX = Math.sqrt(diagonal1 ** 2 - height2 ** 2);
    const x1 = (width2 - aX) / 2;
    const bY = Math.sqrt(diagonal1 ** 2 - width2 ** 2);
    const x2 = (height2 - bY) / 2;
    const xHypotenuse = Math.sqrt(x1 ** 2 + x2 ** 2);

    if (xHypotenuse >= height1) {
      console.log('First envelope can be put inside second');
      return 1;
    }
    console.log('Impossible');
    return 0;
  }
}

// Main function
export const task2 = function checkEnvelope(env1, env2) {
  if (isValid(env1, env2)) {

    let width1;
    let height1;
    let width2;
    let height2;

    // Define longer side as width, shorter - as height
    if (env1.a > env1.b) {
      [width1, height1] = [env1.a, env1.b];
    } else {
      [width1, height1] = [env1.b, env1.a];
    }

    if (env2.c > env2.d) {
      [width2, height2] = [env2.c, env2.d];
    } else {
      [width2, height2] = [env2.d, env2.c];
    }

    // If it is posiible to put inside without rotation
    let result = noRotation(width1, height1, width2, height2);
    if (result) {
      return result;
    }

    // If it is posiible to put inside with rotation
    result = rotation(width1, height1, width2, height2);
    if (result) {
      return result;
    }

    console.log('Impossible');
    return 0;
  }

  return {
    status: 'failed',
    reason: 'Missing or invalid argument(s): There should be two objects. Each object shoud have 2 properties: \'a\' and \'b\' - for the first one, \'c\' and \'d\' - for second one (each value should be positive Number up to 50)',
  }
}
