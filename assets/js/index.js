var historicReadingList;
var readingList;




function DisplayHistoricReadingList() {
	var html = ""

	html += "<table>"
		+ "<thead><tr>"
		+ "<th>Title</th>"
		+ "<th>Subtitle</th>"
		+ "<th>Creator(s)</th>"
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
	var html = "<table>"
		+ "<thead><tr>"
			+ "<th></th><th>Title</th><th>Subtitle</th><th>Creator</th>"
		+ "</tr></thead>"
		+ "<tbody>";

	for (i=readingList.length-1 ; i>=0 ; i--) {
		var item = readingList[i];
		var numPages = item.numPages;

		html += "<tr class='expandable'>"
			+ "<td><button>+</button></td>"
			+ "<td>" + item.title + "</td>"
			+ "<td>"
				+ (
					item.subtitle !== undefined
					? item.subtitle
					: ""
				)
			+ "</td>"
			+ "<td>" + item.creators[0]
				+ (
					item.creators[1] !== undefined
					? " <em>et al.</em>"
					: ""
				)
			+ "</td>"
			+ "</tr>";

		html += "<tr style='display:none;'>"
			+ "<td colspan='4'>"
			+ (
				item.creators[1] !== undefined
				? "<p>Creators: " + item.creators.join(", ") + "</p>"
				: ""
			)
			+ (
				item.numPages !== undefined
				? "<p>No. Pages: " + item.numPages + "</p>"
				: ""
			)
			+ (
				item.notes.length !== 0
				? "<p><ul><li>"
					+ item.notes.join("</li><li>")
					+ "</li></ul></p>"
				: ""
			)
			+ "<div class='accordion'>"
				+ (
					item.isbns.length > 0
					? "<h3>ISBNs</h3>"
						+ "<div><table>"
						+ "<thead><tr>"
						+ "<th>ISBN</th>"
						+ "<th>Description</th>"
						+ "</tr></thead>"
						+ "<tbody><tr><td>"
						+ item.isbns.map(function(x, i) {
							return x.isbn + "</td><td>" + (
								x.description !== undefined
								? x.description
								: ""
							);
						}).join("</td></tr><tr><td>")
						+ "</td></tr></tbody></table></div>"
					: ""
				)
				+ "<h3>Reading Progress</h3>"
				+ "<div><table>"
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
				+ "</table></div>"

		html += "</div>"
			+ "</td>"
			+ "</tr>";
	}

	html += "</tbody>"
		+ "</table>";

	$("#BookReading").html(html);
	$("button").button();
	$(".accordion").accordion({
		active: false
		, collapsible: true
		, heightStyle: "content"
	});
	$(".expandable").click(function() {
		$(this).find('button').text(function(_, value){return value=='-'?'+':'-'});
		$(this).next('tr').toggle(100);
	});
}
