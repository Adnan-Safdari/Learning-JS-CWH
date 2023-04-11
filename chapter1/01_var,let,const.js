/**
 * 'var' keyword is global available .
 * 'let' keyword is not global if defined in block and outside, the scope remains unchanged.
 * 
 *  We should always use 'let' because if it is redefined, it will not let the scope be changed.
 * 'let' can be updated but not reedefined.
 * 
 * 'const' cam neither but updated nor redeclared.
 * 
 */

const a = 23;
const f1 = () => {
    console.log("Test");
}
 