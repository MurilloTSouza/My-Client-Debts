/* 
    generate class string from list of strings,
    ignoring undefined values
*/
export const ClassesBuilder = (...args: Array<string | undefined>) => {
    return args.join(' ').trim();
}