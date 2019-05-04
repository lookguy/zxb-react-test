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

const scopedClassMaker = (prefix: string) =>
    (name: string | ClassToggles, options?: Options) =>
     Object
        .entries(name instanceof Object ? name : {[name]: name})//拿到namesObject所有键值对
        .filter(kv => kv[1] !== false) //找出所有value不为false的键值对
        .map(kv => kv[0])//取到相应的key
        .map(name => [prefix, name]
            .filter(Boolean)
            .join("-")) // 'zui-layout zui-layout-hasAside'
        .concat(options && options.extra || [])
        .join(' ');//对这些key加前缀的操作，不需要对空的项加，最后再用空格连起来
//这代码是方方大佬的写法，妈的，看不懂

export {scopedClassMaker};