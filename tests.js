import test1 from './src/tests/test1.js';
import test2 from './src/tests/test2.js';
import test3 from './src/tests/test3.js';
import test4 from './src/tests/test4.js';
import test5 from './src/tests/test5.js';
import test6 from './src/tests/test6.js';
import test7 from './src/tests/test7.js';

mocha.setup('bdd');

test1();
test2();
test3();
test4();
test5();
test6();
test7();

mocha.run();