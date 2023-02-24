// Localize The Barycenter of a Triangle

// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).


function barTriang(p1, p2, p3){
    return newArr = p1.map((e, idx) => +((e + p2[idx] + p3[idx]) / 3).toFixed(4) )
}

let p1 = [4, 6]
let p2 = [12, 4]
let p3 = [10, 10]
barTriang(p1,p2,p3)