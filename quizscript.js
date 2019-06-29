var lan_value={A:0,B:1,C:2,D:3}



function scoreTest() {
 
	var thetest = document.getElementById('thetest');
 
	var numquestions = thetest.Q.length;
 
	var numcorrect = 0;
 
 
 
	for (var q=0; q<numquestions; q++) {
 
		var qname = thetest.Q[q].value;
 
		var correct = thetest["CANS."+qname].value;
 
		var checkboxgroup = thetest["ANS."+qname];
 
		for (var i=0; i<checkboxgroup.length; i++) {
 
			var response = checkboxgroup[i].value;

			var label_v=lan_value[response]; 
 
			var label = document.getElementById("LANS."+qname+"."+label_v);
 
			if (response == correct) {
 
				label.style.background = '#c5f4c8';
 
				if (checkboxgroup[i].checked) numcorrect++;
 
			} else if (checkboxgroup[i].checked) {
 
				label.style.background = '#f1cccd';
 
			} else {
 
				label.style.background = 'transparent';
 
			}
 
			checkboxgroup[i].disabled = true;
 
		}
 
	}
 
 
 
	var percent = Math.round(numcorrect / numquestions * 100);
 
	document.getElementById('score').innerHTML = "<b>You got " + numcorrect
 
	+ " out of " + numquestions + " correct. (That's " + percent
 
	+ "%.)</b>";
 
 
 
	document.getElementById('btn_submit').style.display = 'none';
 
	document.getElementById('btn_reset').style.display = 'inline';
 
	document.getElementById('results').style.display = 'inline';
 
 
 
	window.scrollTo(0,0);
 
	return false;
 
};
 
 
 
function resetTest() {
 
	var thetest = document.getElementById('thetest');
 
	var numquestions = thetest.Q.length;
 
 
 
	thetest.reset();
 	 
 
	for (var q=0; q<numquestions; q++) {
 
		var qname = thetest.Q[q].value;
 
		var checkboxgroup = thetest["ANS."+qname];

 
		for (var i=0; i<checkboxgroup.length; i++) {

			
			var label = document.getElementById("LANS."+qname+"."+i);
 
			label.style.background = 'transparent';
 
			checkboxgroup[i].checked = false;
 
			checkboxgroup[i].disabled = false;
 
		}
 
	}
 
 
 
	document.getElementById('btn_submit').style.display = 'inline';
 
	document.getElementById('btn_reset').style.display = 'none';
 
	document.getElementById('results').style.display = 'none';
 
 
 
	window.scrollTo(0,0);
 
};
 
//--></script> 