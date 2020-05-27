/* 
    config 파일 안에서 명심해야 될 건, server 코드와는 연관시키지 않는다는 점이다.
    즉, 우리가 앞에서 예쁜 코드를 작성할 수 있도록 넣어둔 babel-node 는 아직 쓸 수가 없다.
    따라서, 여기서는 옛날 자바스크립트를 써야한다.

    webpack 은 entry 라는 것과, output 이라는 것을 가지고 있다.
    entry 는 파일들이 어디서 왔는가 이고
    output 은 이 파일들을 어디에 넣을 것인가 이다.
*/

// Node.js 에서 path 모듈은 파일과 Directory 경로 작업을 위한 Utility 를 제공한다.
const path = require('path');
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');

// path 모듈의 join 메서드 : string 타입의 옵션을 주면  경로를 정규화 해준다.
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
    entry: ENTRY_FILE,
    output: {
        path: OUTPUT_DIR,
        filename: '[name].[format]',
    },
};

module.exports = config;
