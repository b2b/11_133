/*!
 * TOOL FOR SELECTING EDUCATIONAL TECHNOLOGY 
 * http://eskolar.com
 * Version: 1.0.0
 *
 * Copyright 2015 b. kiss balint
 * Released under the MIT license
 *  
 */

// cat name, [questions], [score],
var arr_myData = [
		[ "Founding",
				[ "trial", "100$ – 500$", "500$ - 1000$", "more than 1000$" ],
				[ 5, 10, 20, 30 ] ],
		[ "Computers age > 3", [ "less than 5", "more than 5" ], [ 0, 5 ] ],
		[ "Computers age < 3", [ "no", "less than 5", "more than 5" ],
				[ 1, 5, 10 ] ],
		[
				"NET Wifi coverage",
				[ "1 classroom", "1-5 classrooms", "more than 5 classrooms",
						"all classes" ], [ 2, 3, 4, 5 ] ],
		[ "NET bandwidth",
				[ "less than < 10 person", "10-30 person", "more than > 30" ],
				[ 0, 3, 8 ] ],
		[
				"Usage method",
				[ "optional study group", "curriculum",
						"both study groups & curriculum" ], [ 5, 5, 10 ] ],
		[ "Usage field", [ "electronics", "informatics", "physics", "EECS" ],
				[ 5, 3, 2, 8 ] ],
		[ "Training time reimbursement", [ "0h", "2h", "5h", "8h" ],
				[ 0, 5, 10, 20 ] ],
		[ "Educators offline time reimbursement", [ "0h", "2h", "5h", "8h" ],
				[ 0, 5, 10, 20 ] ],
		[ "Educator activity type",
				[ "Follow", "Reshape", "Develop", "Mentor" ], [ 1, 2, 3, 6 ] ],
		[
				"Teacher readiness - device",
				[ "at the same time with students", "2 month before",
						"6 month before", "12 month before" ], [ 0, 1, 3, 5 ] ],
		[ "Advice from system",
				[ "Not so important", "Important", "Decision modifier" ],
				[ 0, 1, 2 ] ],
		[
				"Teachers training",
				[ "online", "conferences & events",
						"presentations at your place" ], [ 1, 2, 3 ] ],
		[
				"Cooperation",
				[ "1-3 schools can form a group in a district",
						"3-5 schools can form a group in a district",
						"A science center is able to manage the cooperation" ],
				[ 10, 20, 30 ] ]

];
