// Deprecated feature using JQuery, causes synchronous request error.

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '../html/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })