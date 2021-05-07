var historicReadingList;
var readingList;




function DisplayHistoricReadingList() {
	var html = ""

	html += "<table>"
		+ "<thead><tr>"
		+ "<th>Title</th>"
		+ "<th>Subtitle</th>"
		+ "<th>Creators</th>"
		+ "</tr></thead>"
		+ "<tbody>"
		+ historicReadingList.map(function(x, i) {
			return (
				"<tr><td>"
				+ x.title
				+ "</td><td>"
				+ (
					x.subtitle !== undefined
					? x.subtitle
					: ""
				)
				+ "</td><td>"
				+ x.creators.join(", ")
				+ "</td></tr>"
			)
		}).join("")
		+ "</tbody></table>";

	$("#HistoricReading").html(html);
}




function DisplayReadingList() {
	var html = "";

	for (i=readingList.length-1 ; i>=0 ; i--) {
		var item = readingList[i];
		var numPages = item.numPages;

		html += "<h1>" + item.title + "</h1>"
			+ (
				item.subtitle !== undefined
				? "<p>" + item.subtitle + "</p>"
				: ""
			)
			+ "<h4>"
			+ item.creators.join(", ")
		 	+ "</h4>"
			+ (
				item.numPages !== undefined
				? "<p>No. Pages: " + item.numPages + "</p>"
				: ""
			)
			+ (
				item.isbns.length > 0
				? "<p><table>"
					+ "<thead><tr>"
					+ "<th>ISBN</th>"
					+ "<th>Description</th>"
					+ "</tr></thead>"
					+ "<tbody><tr>"
					+ item.isbns.map(function(x, i) {
						return "<tr><td>" + x.isbn + "</td><td>" + (
							x.description !== undefined
							? x.description
							: ""
						) + "</td></tr>";
					}).join("")
					+ "</tr></tbody></table></p>"
				: ""
			)
			+ (
				item.notes.length !== 0
				? "<p><ul><li>"
					+ item.notes.join("</li><li>")
					+ "</li></ul></p>"
				: ""
			)
			+ "<p><table>"
			+ "<thead><tr>"
			+ "<th>Date</th>"
			+ "<th colspan='2' style='text-align:center'>Start</th>"
			+ "<th colspan='2' style='text-align:center'>End</th>"
			+ "</tr></thead>"
			+ "<tbody>";

		item.progress.forEach((item, i) => {
			html += "<tr>"
				+ "<td>" + item.date + "</td>"
				+ (
					item.startPage !== undefined
					? "<td style='text-align:right'>" + item.startPage + "</td>"
						+ "<td style='text-align:right'>(" + (Math.round((item.startPage-1)/numPages*1000)/10).toFixed(1) + "%)</td>"
					: "<td colspan='2' style='text-align:right'>" + (Math.round(item.startPercentage*1000)/10).toFixed(1) + "%</td>"
				)
				+ (
					item.endPage !== undefined
					? "<td style='text-align:right'>" + item.endPage + "</td>"
						+ "<td style='text-align:right'>(" + (Math.round(item.endPage/numPages*1000)/10).toFixed(1) + "%)</td>"
					: "<td colspan='2' style='text-align:right'>" + (Math.round(item.endPercentage*1000)/10).toFixed(1) + "%</td>"
				)
				+ "</tr>";
		});

		html += "</tbody>"
			+ "</table></p>"
			+ "<hr>";
	}

	$("#BookReading").html(html);
}
