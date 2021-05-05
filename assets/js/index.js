var ReadingList;

function DisplayReadingList() {
	var ReadingListHTML = "";

	ReadingList.forEach((item, i) => {
		ReadingListHTML
			+= "<h1>" + item.title + "</h1>"
			+ (
				item.subtitle !== ""
				? "<p>" + item.subtitle + "</p>"
				: ""
			)
			+ "<h2>" + item.author + "</h2>"
			+ "<p>No. Pages: " + item.numPages + "</p>"
			+ "<table>"
			+ "<thead>"
			+ "<tr>"
			+ "<th>Date</th>"
			+ "<th style='text-align:right'>Start Page</th>"
			+ "<th style='text-align:right'>End Page</th></tr></thead>"
			+ "<tbody>";

		item.progress.forEach((item, i) => {
			ReadingListHTML
				+= "<tr>"
				+ "<td>" + item.date + "</td>"
				+ "<td style='text-align:right'>" + item.startPage + "</td>"
				+ "<td style='text-align:right'>" + item.endPage + "</td>"
				+ "</tr>";
		});

		ReadingListHTML
			+= "</tbody>"
			+ "</table>";

	});

	$("#BookReading").html(ReadingListHTML);
}
