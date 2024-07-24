
using System;

public class Solution
{
    public int MaxOperations(string binaryString)
    {
        int countOnes = binaryString[0] - '0';
        int maxOperations = 0;

        for (int i = 1; i < binaryString.Length; ++i)
        {
            countOnes += binaryString[i] - '0';
            maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
        }
        return maxOperations;
    }
}
