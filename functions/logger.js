class BaseLogger {
    log(a) {
        console.log(a);
    }
}

class TableLogger extends BaseLogger {
    log(...args) {
        let str = '';
        for (let i = 0; i < args.length; i++) {
            str += args[i];
            if (i < args.length - 1) {
                str += ' | ';
            }
        }
        console.log(str);
    }
}

class TableTimeLogger extends BaseLogger {
    log(...args) {
        let date = new Date();
        let str = '';
        for (let i = 0; i < args.length; i++) {
            str += args[i];
            if (i < args.length - 1) {
                str += ' | ';
            }
        }
        console.log(date + ' ' + str);
    }
}
