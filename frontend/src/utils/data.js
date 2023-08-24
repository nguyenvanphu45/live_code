export const dataText = [
    {
        title: 'Sum',
        subTitle:
            'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        challenge: {
            topic: [
                'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
                'You may assume that each input would have exactly one solution, and you may not use the same element twice.',
                'You can return the answer in any order.',
            ],
            example: [
                {
                    input: 'nums = [2,7,11,15], target = 9',
                    output: '[0,1]',
                    explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1]',
                },
                {
                    input: 'nums = [3,2,4], target = 6',
                    output: '[1,2]',
                },
                {
                    input: 'nums = [3,3], target = 6',
                    output: '[0,1]',
                },
            ],
        },
    },
    {
        title: 'Check Characters',
        subTitle: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
        challenge: {
            topic: [
                "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
                'An input string is valid if:',
                '1.	Open brackets must be closed by the same type of brackets.',
                '2.	Open brackets must be closed in the correct order.',
                '3.	Every close bracket has a corresponding open bracket of the same type.',
            ],
            example: [
                {
                    input: 's = "()"',
                    output: 'true',
                },
                {
                    input: 's = "()[]{}"',
                    output: 'true',
                },
                {
                    input: 's = "(]"',
                    output: 'false',
                },
            ],
        },
    },
    {
        title: 'Array Ranges',
        subTitle:
            'You are given a sorted unique integer array nums. A range [a,b] is the set of all integers from a to b (inclusive).',
        challenge: {
            topic: [
                'You are given a sorted unique integer array nums.',
                'A range [a,b] is the set of all integers from a to b (inclusive).',
                'Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.',
                'Each range [a,b] in the list should be output as:',
                '•	"a->b" if a != b',
                '•	"a" if a == b',
            ],
            example: [
                {
                    input: 'nums = [0,1,2,4,5,7]',
                    output: '["0->2","4->5","7"]',
                    explanation: 'The ranges are:<br> [0,2] --> "0->2"<br> [4,5] --> "4->5"<br> [7,7] --> "7"',
                },
                {
                    input: 'nums = [0,2,3,4,6,8,9]',
                    output: "['0','2->4','6','8->9']",
                    explanation:
                        "The ranges are:<br> [0,0] --> '0'<br> [2,4] --> '2->4'<br> [6,6] --> '6'<br> [8,9] --> '8->9'",
                },
            ],
        },
    },
    {
        title: 'Power of three',
        subTitle: 'Given an integer n, return true if it is a power of three. Otherwise, return false',
        challenge: {
            topic: [
                'Given an integer n, return true if it is a power of three. Otherwise, return false.',
                'An integer n is a power of three, if there exists an integer x such that n == 3x.',
            ],
            example: [
                {
                    input: 'n = 27',
                    output: 'true',
                    explanation: '27 = 33',
                },
                {
                    input: 'n = 0',
                    output: 'false',
                    explanation: 'There is no x where 3x = 0.',
                },
                {
                    input: 'n = -1',
                    output: 'false',
                    explanation: 'There is no x where 3x = (-1).',
                },
            ],
        },
    },
    {
        title: 'Perfect Square',
        subTitle: 'Given a positive integer num, return true if num is a perfect square or false otherwise.',
        challenge: {
            topic: [
                'Given a positive integer num, return true if num is a perfect square or false otherwise.',
                'A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.',
                'You must not use any built-in library function, such as sqrt.',
            ],
            example: [
                {
                    input: 'num = 16',
                    output: 'true',
                    explanation: 'We return true because 4 * 4 = 16 and 4 is an integer.',
                },
                {
                    input: 'num = 14',
                    output: 'false',
                    explanation: 'We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.',
                },
            ],
        },
    },
    {
        title: 'Jewels Stones ',
        subTitle:
            "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.",
        challenge: {
            topic: [
                "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.",
                'Letters are case sensitive, so "a" is considered a different type of stone from "A".',
            ],
            example: [
                {
                    input: 'jewels = "aA", stones = "aAAbbbb"',
                    output: '3',
                },
                {
                    input: "jewels = 'z', stones = 'ZZ'",
                    output: '0',
                },
            ],
        },
    },
    {
        title: 'Monotonic',
        subTitle: 'Given an integer array nums, return true if the given array is monotonic, or false otherwise.',
        challenge: {
            topic: [
                'An array is monotonic if it is either monotone increasing or monotone decreasing.',
                'An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].',
                'Given an integer array nums, return true if the given array is monotonic, or false otherwise.',
            ],
            example: [
                {
                    input: 'nums = [1,2,2,3]',
                    output: 'true',
                },
                {
                    input: 'nums = [6,5,4,4]',
                    output: 'true',
                },
                {
                    input: 'nums = [1,3,2]',
                    output: 'false',
                },
            ],
        },
    },
    {
        title: 'Array Words',
        subTitle:
            'Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).',
        challenge: {
            topic: [
                'Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.',
            ],
            example: [
                {
                    input: 'words = ["bella","label","roller"]',
                    output: "['e','l','l']",
                },
                {
                    input: "words = ['cool','lock','cook']",
                    output: "['c','o']",
                },
            ],
        },
    },
    {
        title: 'Array Rank',
        subTitle: 'Given an array of integers arr, replace each element with its rank.',
        challenge: {
            topic: [
                'Given an array of integers arr, replace each element with its rank.',
                'The rank represents how large the element is. The rank has the following rules:',
                '•	Rank is an integer starting from 1.',
                '•	The larger the element, the larger the rank. If two elements are equal, their rank must be the same.',
                '•	Rank should be as small as possible.',
            ],
            example: [
                {
                    input: 'arr = [40,10,20,30]',
                    output: '[4,1,2,3]',
                    explanation:
                        '40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.',
                },
                {
                    input: 'arr = [100,100,100]',
                    output: '[1,1,1]',
                    explanation: 'Same elements share the same rank.',
                },
                {
                    input: 'arr = [37,12,28,9,100,56,80,5,12]',
                    output: '[5,3,4,2,8,6,7,1,3]',
                },
            ],
        },
    },
    {
        title: 'Reformat the String',
        subTitle:
            'You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).',
        challenge: {
            topic: [
                'You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).',
                'You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.',
                'Return the reformatted string or return an empty string if it is impossible to reformat the string.',
            ],
            example: [
                {
                    input: "s = 'a0b1c2'",
                    output: "'0a1b2c'",
                    explanation:
                        "No two adjacent characters have the same type in '0a1b2c'. 'a0b1c2', '0a1b2c', '0c2a1b' are also valid permutations.",
                },
                {
                    input: "s = 'leetcode'",
                    output: "''",
                    explanation: "'leetcode' has only characters so we cannot separate them by digits.",
                },
                {
                    input: "s = '1229857369'",
                    output: "''",
                    explanation: "'1229857369' has only digits so we cannot separate them by characters.",
                },
            ],
        },
    },
];
