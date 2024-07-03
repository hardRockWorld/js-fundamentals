/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
Note: In COBOL, it should return "found the needle at position 6"
 */

// Solution
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            return `found the needle at position ${i}`;
        }
    }
    return 'needle not found';
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// Solution 2
function findNeedle2(haystack) {
    return haystack.indexOf('needle') !== -1 ? `found the needle at position ${haystack.indexOf('needle')}` : 'needle not found';
}

console.log(findNeedle2(['hay', 'junk', 'hay', 'needle', 'hay', 'moreJunk', 'randomJunk']));

// Solution 3
function findNeedle3(haystack) {
    return haystack.includes('needle') ? `found the needle at position ${haystack.indexOf('needle')}` : 'needle not found';
}

console.log(findNeedle3(['hay', 'junk', 'hay', 'needle', 'hay', 'moreJunk', 'randomJunk']));

// Solution 4
function findNeedle4(haystack) {
    return haystack.find(x => x === 'needle') ? `found the needle at position ${haystack.indexOf('needle')}` : 'needle not found';
}

console.log(findNeedle4(['hay', 'junk', 'hay', 'needle', 'hay', 'moreJunk', 'randomJunk']));
