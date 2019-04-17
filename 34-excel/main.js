$(function(){
  var data = [
    ["", "Ford", "Volvo", "Toyota", "Honda"],
    ["2016", 10, 11, 12, 13],
    ["2017", 20, 11, 14, 13],
    ["2018", 30, 15, 12, 13]
  ];
  var container = $('.main');
  var hot = new Handsontable(container.get(0), {
    data: data,
    rowHeaders: true,
    colHeaders: true,
  });
  return hot;
});
