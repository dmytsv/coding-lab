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
      >>> boyer_moore_horspool('aaabbcabc', 'abc')
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

    if skip[ord(pattern[m-1])] < m:
        skip[ord(pattern[m-1])] = 1

    for i in range(m-1, n):
        k = i
        j = m-1
        while (text[k] == pattern[j]):
            if j == 0:
                return k
            j -= 1
            k -= 1
        i += skip[ord(pattern[j])]

    return -1


if __name__ == "__main__":
    import doctest
    doctest.testmod()
