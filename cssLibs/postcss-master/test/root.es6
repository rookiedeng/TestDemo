import Result from '../lib/result';
import parse  from '../lib/parse';

import { expect } from 'chai';

describe('Root', () => {

    describe('prepend()', () => {

        it('fixes spaces on insert before first', () => {
            let css = parse('a {} b {}');
            css.prepend({ selector: 'em' });
            expect(css.toString()).to.eql('em {} a {} b {}');
        });

        it('fixes spaces on multiple inserts before first', () => {
            let css = parse('a {} b {}');
            css.prepend({ selector: 'em' }, { selector: 'strong' });
            expect(css.toString()).to.eql('em {} strong {} a {} b {}');
        });

        it('uses default spaces on only first', () => {
            let css = parse('a {}');
            css.prepend({ selector: 'em' });
            expect(css.toString()).to.eql('em {}\na {}');
        });

    });

    describe('append()', () => {

        it('sets new line between rules in multiline files', () => {
            let a = parse('a {}\n\na {}\n');
            let b = parse('b {}\n');

            expect(a.append(b).toString()).to.eql('a {}\n\na {}\n\nb {}\n');
        });

        it('sets new line between rules on last newline', () => {
            let a = parse('a {}\n');
            let b = parse('b {}\n');

            expect(a.append(b).toString()).to.eql('a {}\nb {}\n');
        });

        it('saves compressed style', () => {
            let a = parse('a{}a{}');
            let b = parse('b {\n}\n');
            expect(a.append(b).toString()).to.eql('a{}a{}b{}');
        });

        it('saves compressed style with multiple nodes', () => {
            let a = parse('a{}a{}');
            let b = parse('b {\n}\n');
            let c = parse('c {\n}\n');
            expect(a.append(b, c).toString()).to.eql('a{}a{}b{}c{}');
        });

    });

    describe('insertAfter()', () => {

        it('does not use before of first rule', () => {
            let css = parse('a{} b{}');
            css.insertAfter(0, { selector: '.a' });
            css.insertAfter(2, { selector: '.b' });

            expect(css.nodes[1].raws.before).to.not.exist;
            expect(css.nodes[3].raws.before).to.eql(' ');
            expect(css.toString()).to.eql('a{} .a{} b{} .b{}');
        });

    });

    describe('remove()', () => {

        it('fixes spaces on removing first rule', () => {
            let css = parse('a{}\nb{}\n');
            css.first.remove();
            expect(css.toString()).to.eql('b{}\n');
        });

    });

    describe('toResult()', () => {

        it('generates result with map', () => {
            let root   = parse('a {}');
            let result = root.toResult({ map: true });

            expect(result).to.be.a.instanceOf(Result);
            expect(result.css).to.match(/a \{\}\n\/\*# sourceMappingURL=/);
        });

    });

});
