
var betterSideBox = _.map(gitUser, function(el){
  return {
    avatar: el.avatar_url,
    name: el.name,
    login: el.login,

  };
});

var gitTmpl = _.template($('#sideTmpl').html());

_.each(betterSideBox, function (el) {
  $('.leftColumn').append(gitTmpl(el));
});
