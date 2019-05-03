function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
    extra: string | undefined;
}

interface ClassToggles {
    [K: string]: boolean;
}

function scopedClassMaker(prefix: string) {
    return function (name?: string | ClassToggles, options?: Options) {
        // name = {hasAside:true ,active:false,x:true,y:false}
        let name2;
        let result;
        if (typeof name === 'string' || name === undefined) {
            name2 = name;
            result = [prefix, name2].filter(Boolean).join("-");
        } else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
            //['hasAside','x']
            result = name2.map(n => [prefix, n].filter(Boolean).join("-")).join(' ')
            //  'zui-layout-hasAside','zui-layout-x'
        }

        if (options && options.extra) {
            return [result, options && options.extra].filter(Boolean).join(' ')
        } else {
            return result
        }
    };
}

export {scopedClassMaker};