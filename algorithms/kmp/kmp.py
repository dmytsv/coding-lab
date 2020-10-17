def kmp(text, pattern):
    """Return index of matching string of -1
    Knutt Morris Pratt algorithm
    pattern matching O(n) time
    >>> kmp('', 'aab')
    -1
    >>> kmp('abc', '')
    -1
    >>> kmp('aabaacaa', 'aaa')
    -1
    >>> kmp('a', 'aa')
    -1
    >>> kmp('aa', 'a')
    0
    >>> kmp('abcabc', 'abc')
    0
    >>> kmp('aaabbcabc', 'abc')
    6
    >>> kmp('aaaaaaaabaab', 'aab')
    6
    """
    if not len(text) or not len(pattern):
        return -1

    lsp = [0] * len(pattern)
    j = 0
    i = 1
    while (i < len(pattern)):
        if pattern[i] == pattern[j]:
            lsp[i] = j + 1
            i += 1
            j += 1
        elif j > 0:
            j = lsp[j - 1]
        else:
            i += 1

    i = 0
    j = 0

    while (i < len(text)):
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == len(pattern):
                return i - j
        elif j > 0:
            j = lsp[j - 1]
        else:
            i += 1
    return -1


if __name__ == "__main__":
    import doctest
    doctest.testmod()
