
#include <string>
using namespace std;

class Solution {

public:
    int maxOperations(const string& binaryString) const {
        int countOnes = binaryString[0] - '0';
        int maxOperations = 0;

        for (size_t i = 1; i < binaryString.size(); ++i) {
            countOnes += binaryString[i] - '0';
            maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
        }
        return maxOperations;
    }
};
