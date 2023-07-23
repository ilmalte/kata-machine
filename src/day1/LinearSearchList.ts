export default function linear_search(haystack: number[], needle: number): boolean {
    for (var k = 0; k < haystack.length; ++k) {
        if (haystack[k] === needle) {
            return true;
        }
    }
    return false;
}