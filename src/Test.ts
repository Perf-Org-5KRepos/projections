import * as hdsp from "./HDSP";
//console.log("-----------")
//const a = hdsp.PivotMDS.project(
//	[
//		[1,0,0,1,0,0,0,1],
//		[0,1,1,0,1,1,1,1],
//		[0,0,0,1,0,1,0,1]
//	],
//  4, 2);
//console.log(a);
//console.log("-----------")
//let b =
    // hdsp.Procrustes.align([[1,1],[4,1],[4,2]],[[2,0],[5,0],[5,1]]); // translate
    //console.log(hdsp.Procrustes.align([[1,1],[4,1],[4,2]],[[5,5],[35,5],[35,15]])); // translate & scale
//console.log(hdsp.Procrustes.align([[1,1],[4,1],[4,2]],[[5,5],[5,35],[15,35]])); // translate & scale & rotate
    //hdsp.Procrustes.align([[1,1],[4,1],[4,2]],[[1,-1],[4,-1],[4,-2]]); // mirror
//console.log(b);
//b = hdsp.Procrustes.align([[1,1],[1,4],[2,4]],[[1,-1],[4,-1],[4,-2]]); // mirror, rotate
//console.log(b);
//hdsp.Procrustes.transform([[20,20],[20,50],[30,50]],[[1,-1],[4,-1],[4,-2]]); // mirror, rotate, scale, transform
//hdsp.Procrustes.transform([[20,20],[20,50],[30,50]],[[20,20],[20,50],[30,50]]); // self
//console.log("-----------")

hdsp.Procrustes.transform(
    //[[0,0],[0,-2],[-1,-1]],
    //[[0,0],[0,2],[1,1]]
    [[0.9247771245025194, 0.4142228569327644], [-0.7183332289068466, 0.6079943000768806], [-0.20644389559567272, -1.022217157009645]],
    [[-11.087655209480225, 8.28148516830545], [-2.3809770732244404, -12.83090821344602], [13.468632282704661, 4.549423045140569]]
);