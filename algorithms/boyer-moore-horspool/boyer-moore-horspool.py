def boyer_moore_horspool(text, pattern):
    """Returns index of a match of -1
    Boyer Moore Horspool pattern matching algorithm

      >>> boyer_moore_horspool('', 'aab')
      -1
      >>> boyer_moore_horspool('abc', '')
      -1
      >>> boyer_moore_horspool('aabaacaa', 'aaa')
      -1
      >>> boyer_moore_horspool('a', 'aa')
      -1
      >>> boyer_moore_horspool('aa', 'a')
      0
      >>> boyer_moore_horspool('abcabc', 'abc')
      0
      >>> boyer_moore_horspool('aaabababb', 'ababa')
      2
      >>> boyer_moore_horspool('hgfbaidaidai', 'baidai')
      3
      >>> boyer_moore_horspool('aaabbcabc', 'abc')
      6
      >>> boyer_moore_horspool('hgfcaibaidai', 'baidai')
      6
      >>> boyer_moore_horspool('aaaaaaaabaab', 'aab')
      6
    """
    n = len(text)
    m = len(pattern)
    if not n or not m or m > n:
        return -1

    skip = [m] * 256

    for i in range(m-1):
        skip[ord(pattern[i])] = m - i - 1

    i = 0
    while n - i >= m:
        j = m-1

        while (text[i+j] == pattern[j]):
            if j == 0:
                return i
            j -= 1

        i += skip[ord(text[i+m-1])]

    return -1


if __name__ == "__main__":
    import doctest
    doctest.testmod()
