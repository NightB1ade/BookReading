---
---

{% include jQuery.html %}

<div id="BookReading">Loading…</div>

# Reading Pre-2021

Alphabetical title order (excluding articles):

<div id="HistoricReading">Loading…</div>

<script src="{{ 'assets/js/index.js?v=' | append: site.github.build_revision }}"></script>

<script>
$(document).ready(function() {
	//Get NightB1ade Reading List Data
	$.get(
		"{{ 'assets/json/NightB1adeReadingList.json?v=' | append: site.github.build_revision }}"
		,function(data){
			readingList = $(data).toArray();

			DisplayReadingList();
		}
	);

	//Get NightB1ade Historic Reading List Data
	$.get(
		"{{ 'assets/json/NightB1adeHistoricReadingList.json?v=' | append: site.github.build_revision }}"
		,function(data){
			historicReadingList = $(data).toArray();

			DisplayHistoricReadingList();
		}
	);
});
</script>
