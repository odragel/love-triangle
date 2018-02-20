/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var result = 0;

    for (var i = 0; i < preferences.length; i++){
        if (preferences[i] != null) {

            var firstLover = preferences[i];
            var secondLover = preferences[firstLover-1];
            if (secondLover != i+1) {
                var thirdLover = preferences[secondLover-1];
                if (thirdLover == i+1) {
                    result++;
                    preferences[i] = null;
                    preferences[firstLover-1] = null;
                    preferences[secondLover-1] = null;
                }
            }

        }

    }
    return result;

};
