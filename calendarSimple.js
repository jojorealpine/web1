var month = {
  "title": "january",
  "days": 31
};

$("#month").text(month.title);
$("#month").text("january");

for(var x = 1; x <=  month.days; x++) {
  $("<div>" + x + "</div>")
    .addClass("day")
    .addClass("day-" + x)
    .appendTo("#days");
}