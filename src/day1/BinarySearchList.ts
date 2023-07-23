export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;

    do {
        // this avoids integer overflow compared to (lo+hi)/2
        let lomDistance = (hi - lo) / 2;
        let mIndex = lo + lomDistance;

        const m = Math.floor(mIndex);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) { // if exist it should be in the left hand side
            // so we want to reduce hi size to midpoint,
            // hi is exclusive, lo is inclusive 
            hi = m;
        } else { // if (v < needle) if exist it should be in the right hand side
            // drop the midpoint, it would be silly to look for the midpoint again.
            lo = m+1;
        }

    } while (lo < hi)
    return false;
}