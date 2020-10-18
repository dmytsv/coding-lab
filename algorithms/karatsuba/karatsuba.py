from math import ceil, floor
def karatsuba(x, y):
  """Return x * y
  Karatsuba algorithm for fast multiplication

  >>> karatsuba(2, 2) == 2 * 2
  True
  >>> karatsuba(0, 1) == 0 * 1
  True
  >>> karatsuba(1, 0) == 1 * 0
  True
  >>> karatsuba(1, 42) == 1 * 42
  True
  >>> karatsuba(1000, 64) == 1000 * 64
  True
  >>> karatsuba(10000000, 1000000) == 10000000 * 1000000
  True
  >>> karatsuba(1024, 2048) == 1024 * 2048
  True
  """
  if x < 10 or y < 10: return x * y

  n = max(len(str(x)), len(str(y)))
  m = ceil(n / 2)
  
  a = floor(x / 10**m)
  b = x % 10**m
  c = floor(y / 10**m)
  d = y % 10**m

  ac = karatsuba(a, c)
  bd = karatsuba(b, d)
  adbc = karatsuba(a+b, c+d) - ac - bd

  return ac * 10**(m*2) + adbc * 10**m + bd

if __name__ == "__main__":
    import doctest
    doctest.testmod()