var readingList;

function DisplayReadingList() {
	var readingListHTML = "";
	for (i=readingList.length-1; i>=0 ; i--) {
		var item = readingList[i];
		var numPages = item.numPages;

		readingListHTML
			+= "<h1>" + item.title + "</h1>"
			+ (
				item.subtitle !== ""
				? "<p>" + item.subtitle + "</p>"
				: ""
			)
			+ "<h2>"
			+ item.creators.join(", ")
		 	+ "</h2>"
			+ "<p>No. Pages: " + item.numPages
			+ (
				item.isbns.length == 1
				? ", ISBN: " + item.isbns[0]
				: (
					item.isbns.length > 1
					? ", ISBNs: " + item.isbns.join(", ")
					: ""
				)
			)
			+ "</p>"
			+ (
				item.notes.length !== 0
				? "<p><ul><li>"
					+ item.notes.join("</li><li>")
					+ "</li></ul></p>"
				: ""
			)
			+ "<table>"
			+ "<thead><tr>"
			+ "<th>Date</th>"
			+ "<th colspan='2' style='text-align:center'>Start Page</th>"
			+ "<th colspan='2' style='text-align:center'>End Page</th>"
			+ "</tr></thead>"
			+ "<tbody>";

		item.progress.forEach((item, i) => {
			readingListHTML
				+= "<tr>"
				+ "<td>" + item.date + "</td>"
				+ "<td style='text-align:right'>" + item.startPage + "</td>"
				+ "<td style='text-align:right'>(" + (ReturnFraction(item.startPage-1,numPages,3)*100).toFixed(1) + "%)</td>"
				+ "<td style='text-align:right'>" + item.endPage + "</td>"
				+ "<td style='text-align:right'>(" + (ReturnFraction(item.endPage,numPages,3)*100).toFixed(1) + "%)</td>"
				+ "</tr>";
		});

		readingListHTML
			+= "</tbody>"
			+ "</table>"
			+ "<hr>";
	}

	$("#BookReading").html(readingListHTML);
}




function ReturnFraction(top,bottom,precision) {
	return (Math.round(top / bottom * (10 ** (precision))) / (10 ** precision))
}
