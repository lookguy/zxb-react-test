import classes, {scopedClassMaker} from '../classes'

describe('classes', () => {
    it('接受一个className', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });
    it('接受多个className', () => {
        const result = classes('b', 'c', 'd');
        expect(result).toEqual('b c d');
    });
    it('接受undefind', () => {
        const result = classes('b', undefined, 'd');
        expect(result).toEqual('b d');
    });
    it('接受undefind2', () => {
        const result = classes('b', undefined, null, '中文');
        expect(result).toEqual('b 中文');
    });
    it('接受空值', () => {
        const result = classes();
        expect(result).toEqual('');
    });
});

describe('scopeClassMaker',()=>{
    it('接受字符串或对象',()=>{
        const sc = scopedClassMaker('zui-layout');
        expect(sc('')).toEqual('zui-layout');
        expect(sc('x')).toEqual('zui-layout-x');
        expect(sc({y:true,z:false})).toEqual('zui-layout-y');
        expect(sc({y:true,z:true})).toEqual('zui-layout-y zui-layout-z');
        expect(sc({y:true,z:true},{extra: 'red'})).toEqual('zui-layout-y zui-layout-z red');
    })
});