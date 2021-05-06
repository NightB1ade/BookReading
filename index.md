---
---

{% include jQuery.html %}

<div id="BookReading">Loading…</div>

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
});
</script>
