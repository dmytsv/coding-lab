def rabin_karp(text, pattern):
    """Returns index of a match of -1
    Rabin Karp algorithm for pattern matching
    time O(n+m) space O(1)
      >>> rabin_karp('', 'aab')
      -1
      >>> rabin_karp('abc', '')
      -1
      >>> rabin_karp('aabaacaa', 'aaa')
      -1
      >>> rabin_karp('a', 'aa')
      -1
      >>> rabin_karp('aa', 'a')
      0
      >>> rabin_karp('abcabc', 'abc')
      0
      >>> rabin_karp('aaabbcabc', 'abc')
      6
      >>> rabin_karp('aaaaaaaabaab', 'aab')
      6
    """
    n = len(text)
    m = len(pattern)
    if not n or not m or m > n:
        return -1
    BASE = 256
    PRIME = 101
    reset_hash = 1
    text_hash = 0
    pattern_hash = 0

    for i in range(m-1):
        reset_hash = (reset_hash * BASE) % PRIME

    for i in range(m):
        pattern_hash = (pattern_hash * BASE + ord(pattern[i])) % PRIME
        text_hash = (text_hash * BASE + ord(text[i])) % PRIME

    for i in range(n-m+1):
        if text_hash == pattern_hash:
            for j in range(m):
                if text[i+j] != pattern[j]:
                    break
                elif j+1 == m:
                    return i

        if i < n-m:
            text_hash = (
                BASE * (text_hash - ord(text[i]) * reset_hash) + ord(text[i+m])) % PRIME

        if text_hash < 0:
            text_hash += PRIME

    return -1


if __name__ == "__main__":
    import doctest
    doctest.testmod()
