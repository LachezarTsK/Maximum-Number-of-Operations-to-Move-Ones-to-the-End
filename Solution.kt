
class Solution {

    fun maxOperations(binaryString: String): Int {
        var countOnes = binaryString[0] - '0'
        var maxOperations = 0

        for (i in 1..<binaryString.length) {
            countOnes += binaryString[i] - '0'
            maxOperations += if (binaryString[i - 1] > binaryString[i]) countOnes else 0
        }
        return maxOperations
    }
}
