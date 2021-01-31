def bestOperations(nums, ops):
    """
    Dynamic programming algorithm
    returns max and min value for set of numbers and mathematical operations
    depending on parenthesization in expression
    e.g. 5+5*5 -> min = 30 <- 5+(5*5) | max = 50 <- (5+5)*5
    """
    opCache = { '+': lambda a,b: a+b, '-': lambda a,b: a-b, '*': lambda a,b: a*b, '/': lambda a,b: a/b }
    dpMin = [[float('inf') for x in nums] for y in nums]
    dpMax = [[float('-inf') for x in nums] for y in nums]

    for i in range(len(nums)):
        dpMin[i][i] = nums[i]
        dpMax[i][i] = nums[i]

    for diff in range(1, len(nums)):
        for i in range(0, len(nums) - diff):
            j = i + diff
            dpMin[i][j], dpMax[i][j] = calcMinMax( i, j, ops, dpMin, dpMax, opCache)

    return dpMax[0][-1], dpMin[0][-1]

def calcMinMax(ind1, ind2, ops, dpMin, dpMax, opCache):
    maxVal = float('-inf')
    minVal = float('inf')
    for i in range(ind1, ind2):
        operation = opCache[ops[i]]
        min1 = dpMin[ind1][i]
        min2 = dpMin[i+1][ind2]
        max1 = dpMax[ind1][i]
        max2 = dpMax[i+1][ind2]
        minVal = min(
            minVal, operation(min1, min2), operation(min1, max2), operation(max1, min2), operation(max1, max2)
        )
        maxVal = max(
            maxVal, operation(min1, min2), operation(min1, max2), operation(max1, min2), operation(max1, max2)
        )
    return minVal, maxVal