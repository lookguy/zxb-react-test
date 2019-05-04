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
    return function (name: string | ClassToggles, options?: Options) {
        // name = {hasAside:true ,active:false,x:true,y:false}
        const namesObject = (typeof name === 'string' || name === undefined) ?
            {[name]: name}:
            name
        ;

        const scoped = Object
            .entries(namesObject)//拿到namesObject所有键值对
            .filter(kv => kv[1] !== false) //找出所有value不为false的键值对
            .map(kv => kv[0])//取到相应的key
            .map(name =>[prefix, name]
                .filter(Boolean)
                .join("-"))
            .join(' ');//对这些key加前缀的操作，不需要对空的项加，最后再用空格连起来

        if (options && options.extra) {
            return [scoped, options && options.extra].filter(Boolean).join(' ')
        } else {
            return scoped
        }
    };
}

export {scopedClassMaker};