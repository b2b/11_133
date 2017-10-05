/*!
 * TOOL FOR SELECTING EDUCATIONAL TECHNOLOGY 
 * http://eskolar.com
 * Version: 1.0.0
 *
 * Copyright 2015 b. kiss balint
 * Released under the MIT license
 * 
 */

var gl_arr_categories = [];
var gl_chart_data1 = []; // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0 ];
var gl_input_elements_array = [];
var gl_elem_counter = 0;
var gl_My_totalPoints = 0; // my total score
var gl_totalPoints = 0; // all possible point in the system
var gl_CategPointsArray = []; // [[categId],[value]]this arr contains each
// category and the value what someone choose
var gl_CategMAXPointsArray = [];// [[categName],[MaxValue]]
var data2 = []; // data for piechart

function init() {
	for (var int = 0; int < arr_myData.length; int++) {
		gl_arr_categories[int] = arr_myData[int][0];
		gl_chart_data1[int] = 0;
	}
	buildStuff();
	countMax();
	buildPieChartData();

}

function countMax() {
	// gl_totalPoints = gl_totalPoints+Number(val);
	gl_totalPoints = 0;
	for (var int = 0; int < arr_myData.length; int++) {
		// http://www.w3schools.com/jsref/jsref_sort.asp
		var points = arr_myData[int][2];
		points.sort(function(a, b) {
			return b - a
		});
		gl_totalPoints = gl_totalPoints + Number(points[0])
		var ThisLine = [ arr_myData[int][0], Number(points[0]) ];
		gl_CategMAXPointsArray.push(ThisLine);
		// document.getElementById("demo").innerHTML = points[0];
	}
	document.getElementById("sypoints").innerHTML = gl_totalPoints;
}

function buildTextevaluation() {
	var percent = parseInt((gl_My_totalPoints * 100) / gl_totalPoints);

	var mxText = "By this evaluation process You may have a total score: "
			+ "<b>" + gl_totalPoints + "</b>.<br> "
			+ "Now You have a total score : <b>" + gl_My_totalPoints
			+ ".</b><br>" + "This means that you are  <b>" + percent
			+ " % </b>ready to start the"
			+ "introduction of the <b>apaBoard.</b><br>";

	if (percent >= 50) {
		mxText += '<label style="background-color: orange;">It seems that You are in a good situation to introduce '
				+ "this device and method in Your educational activity</label><br>";
	} else {
		mxText += '<label style="background-color: #F7F6F6;">You may expect some challenges in introduction of this device '
				+ "but You have chance to succed<br>"
				+ 'If you need help please visit <a href="http://www.eskolar.com/" target="_blank">eskolar.com</a>';
	}
	// :TODO if < 25 % then a baseBorad or apaboard basic

	document.getElementById("dialog").innerHTML = mxText;
	$("#dialog").dialog("option", "title", "apaBoard selector");
	$("#dialog").dialog("option", "width", 500);
	$("#dialog").dialog("option", "height", 500);
	$("#dialog").dialog();

}

function buildPieChartData() {
	// myPieChart.removeData();

	for (var int = 0; int < gl_CategMAXPointsArray.length; int++) {
		// http://krazydad.com/tutorials/makecolors.php
		var frequency = .3;
		red = Math.sin(frequency * int + 0) * 127 + 128;
		green = Math.sin(frequency * int + 2) * 127 + 128;
		blue = Math.sin(frequency * int + 4) * 127 + 128;

		var col = RGB2Color(red, green, blue);
		var categ = gl_CategMAXPointsArray[int][0];
		var val = gl_CategMAXPointsArray[int][1];

		var adat = {
			value : val,
			color : col,
			highlight : "#FF5A5E",
			label : categ
		};
		data2.push(adat);

		var mytext = categ + " | " + val;

		var element = document.createElement("div");
		// element.setAttribute("id", myId);
		element.setAttribute("class", "raw");
		element.style.backgroundColor = col;
		// element.onclick = function() { alert(this.id); };
		element.appendChild(document.createTextNode(mytext));

		document.getElementById('piechartleg').appendChild(element);
	}
}

function update(myId) {
	gl_CategPointsArray = [];
	// alert(myId);
	// var x = document.getElementById(myId).checked;
	// alert(myId +" - "+ x)
	var myText = "";
	gl_My_totalPoints = 0;
	// reset the chart
	for (var int = 0; int < gl_arr_categories.length; int++) {
		myLineChart.datasets[0].points[int].value = 0;
	}
	myLineChart.update();
	//	
	var categFlag = "";
	for (var int = 0; int < gl_input_elements_array.length; int++) {
		var elementId = gl_input_elements_array[int];
		var thisStrArr = elementId.split("_");
		var CategId = thisStrArr[1];
		var InputId = thisStrArr[2];
		var CategValue = 0;

		var ch = document.getElementById(elementId).checked;
		var val = document.getElementById(elementId).value;
		// myText += int +" : "+elementId + "= " + ch + "=" + val + "
		// |"+CategId+":"+InputId +'\n';
		if (ch) {
			// myText += int + " : " + elementId + "= " + ch + "| value= " + val
			// + " |" + CategId + ":" + InputId + '\n';
			// myLineChart.datasets[0].points[CategId].value = val;

			if (categFlag != CategId) {
				var lineArr = [ CategId, val ];
				categFlag = CategId;
				gl_CategPointsArray.push(lineArr);
			}
		}
	}
	updateMyChart();
}
//
function updateMyChart() {
	var myText = "";
	// alert(gl_CategPointsArray.length);
	gl_My_totalPoints = 0;

	for (var int = 0; int < gl_CategPointsArray.length; int++) {
		// test
		// myText = myText+gl_CategPointsArray[int][0]+" -
		// "+gl_CategPointsArray[int][1]+'\n';
		var CategId = gl_CategPointsArray[int][0];
		var val = gl_CategPointsArray[int][1];
		myLineChart.datasets[0].points[CategId].value = val;
		gl_My_totalPoints += Number(val);
	}
	document.getElementById("mytotalpoints").innerHTML = gl_My_totalPoints;
	var my_percent = parseInt((gl_My_totalPoints * 100) / gl_totalPoints);
	document.getElementById("readiness").innerHTML = my_percent;

	myLineChart.update();
	// alert(myText);
}

function buildStuff() {
	// alert("xsdsdsdsdsd");
	// var element_br = document.createElement("br");

	for (var int = 0; int < arr_myData.length; int++) {
		var myCateg = arr_myData[int][0];
		var input_arr = arr_myData[int][1];
		var value_arr = arr_myData[int][2];
		var myId = 'myDiv_' + int;
		/*
		 * $('<div/>', { 'id' : myId, 'class' : 'mezo', 'text' :
		 * gl_arr_categories[int], }).on('click', function() { alert(this.id); //
		 * myDiv }).appendTo('body');
		 */
		var element = document.createElement("div");
		element.setAttribute("id", myId);
		element.setAttribute("class", "mezo");
		// element.onclick = function() { alert(this.id); };

		var element_T = document.createElement("div");
		element_T.setAttribute("id", myId + "_title");
		element_T.setAttribute("class", "mezo_Title");
		element_T.appendChild(document.createTextNode(myCateg));

		// add info button element
		var element_I_Button = document.createElement("div");
		element_I_Button.setAttribute("id", "Mainsub_But_" + int);
		element_I_Button.setAttribute("class", "infoBtn");
		element_I_Button.onmouseover = function() {
			mouseoverBox1(this.id);
		};
		element_I_Button.onmouseleave = function() {
			onmouseoutBox1(this.id);
		};

		element_I_Button.onclick = function() {
			displaySubs(this.id);
		};
		element_I_Button.appendChild(document.createTextNode("help " + int));

		// add info div element
		var element_I = document.createElement("div");
		element_I.setAttribute("id", "Mainsub" + int);
		element_I.setAttribute("class", "infofield");

		element_I.appendChild(document.createTextNode("info"));

		element.appendChild(element_T);
		element.appendChild(element_I_Button);
		element.appendChild(document.createElement("br"));
		element.appendChild(element_I);
		element.appendChild(document.createElement("br"));
		// element.appendChild(document.createTextNode( myCateg ));
		// element.appendChild(document.createElement("br"));
		document.getElementById('container').appendChild(element);

		if (input_arr.length > 0) {
			// hozza létre az inputokat
			for (var int2 = 0; int2 < input_arr.length; int2++) {
				var subId = myId + "_" + int2;
				var element2 = document.createElement("input");
				element2.setAttribute("id", subId);
				element2.setAttribute("class", "radio");
				element2.setAttribute("name", myId);
				element2.setAttribute("type", "checkbox");
				element2.setAttribute("value", value_arr[int2]);
				// var whatsub = "Mainsub_"+int2;
				// element2.onclick = function() { displaySubs("Mainsub0") };
				document.getElementById(myId).appendChild(element2);
				document.getElementById(myId).appendChild(
						document.createTextNode(input_arr[int2]));
				document.getElementById(myId).appendChild(
						document.createTextNode(" - (" + value_arr[int2]
								+ " points)"));
				document.getElementById(myId).appendChild(
						document.createElement("br"));
				// add element to array for calcs
				gl_input_elements_array[gl_elem_counter] = subId;
				gl_elem_counter++;
			}

		}
		// element.appendChild(element_I);
	}
	gl_elem_counter = 0;
	// myLineChart.update();
}

// descriptions

var label_arr = [ "Answer value", "Total weight" ]

var data = {
	labels : gl_arr_categories,
	datasets : [ {
		label : label_arr[0],
		fillColor : "rgba(220,220,220,0.2)",
		strokeColor : "rgba(220,220,220,1)",
		pointColor : "rgba(220,220,220,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(220,220,220,1)",
		data : gl_chart_data1
	}, {
		label : label_arr[1],
		fillColor : "rgba(151,187,205,0.2)",
		strokeColor : "rgba(151,187,205,1)",
		pointColor : "rgba(151,187,205,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(151,187,205,1)",
		data : gl_chart_data1
	} ]
};
var options = {

	// /Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	// String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	// Number - Width of the grid lines
	scaleGridLineWidth : 1,

	// Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines : true,

	// Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines : true,

	// Boolean - Whether the line is curved between points
	bezierCurve : true,

	// Number - Tension of the bezier curve between points
	bezierCurveTension : 0.2,

	// Boolean - Whether to show a dot for each point
	pointDot : true,

	// Number - Radius of each point dot in pixels
	pointDotRadius : 4,

	// Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	// Number - amount extra to add to the radius to cater for hit detection
	// outside the drawn point
	pointHitDetectionRadius : 20,

	// Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	// Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,

	// Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

function displaySubs(the_sub) {

	var myArr = the_sub.split("_But_");

	var el = document.getElementById(the_sub);
	var top = getOffset(el).top;
	var left = getOffset(el).left;
	the_sub = the_sub.replace("_But_", "");

	if (document.getElementById(the_sub).style.display == "block") {
		document.getElementById(the_sub).style.display = "none";
		return

		

				

		

	}

	for (var i = 0; i < arr_myData.length; i++) {
		var el_name = "Mainsub" + i;
		var my_sub = document.getElementById(el_name);
		if (my_sub) {
			// if(my_sub != the_sub){
			my_sub.style.display = "none";
			// }
		}
	}

	// alert(the_sub);
	document.getElementById(the_sub).style.display = "block";
	document.getElementById(the_sub).style.position = "static";
	// document.getElementById(the_sub).style.top = top + "px";
	// document.getElementById(the_sub).style.left = left + 30 + "px";
	// document.getElementById(the_sub).style.width = "400px";
	document.getElementById(the_sub).innerHTML = eval("txt_" + myArr[1]);

}

// http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
// getOffset(element).left
// getOffset(element).top
function getOffset(el) {
	el = el.getBoundingClientRect();
	return {
		left : el.left + window.scrollX,
		top : el.top + window.scrollY
	}
}

function mouseoverBox1(elID) {
	var myPara = document.getElementById(elID);
	myPara.style.background = "#FCFCFB url('img/arrows_le.gif') no-repeat right top";
}
function onmouseoutBox1(elID) {
	var myPara = document.getElementById(elID);
	myPara.style.background = "red";
}

var options2 = {
	// Boolean - Whether we should show a stroke on each segment
	segmentShowStroke : true,
	// String - The colour of each segment stroke
	segmentStrokeColor : "#fff",
	// Number - The width of each segment stroke
	segmentStrokeWidth : 2,
	// Number - The percentage of the chart that we cut out of the middle
	percentageInnerCutout : 50, // This is 0 for Pie charts
	// Number - Amount of animation steps
	animationSteps : 100,
	// String - Animation easing effect
	animationEasing : "easeOutBounce",
	// Boolean - Whether we animate the rotation of the Doughnut
	animateRotate : true,
	// Boolean - Whether we animate scaling the Doughnut from the centre
	animateScale : false,
	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

function RGB2Color(r, g, b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function byte2Hex(n) {
	var nybHexString = "0123456789ABCDEF";
	return String(nybHexString.substr((n >> 4) & 0x0F, 1))
			+ nybHexString.substr(n & 0x0F, 1);
}

function myDialogAlert(myText) {
	// alert(myText);
	document.getElementById("dialog").innerHTML = myText;
	$("#dialog").dialog("option", "title", "apaBoard selector");
	$("#dialog").dialog("option", "width", 500);
	$("#dialog").dialog("option", "height", 500);
	$("#dialog").dialog();

}