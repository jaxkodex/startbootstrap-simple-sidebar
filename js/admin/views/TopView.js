define(['marionette', 'tpl!templates/top.html'], function (Marionette, topTemplate) {
  return Marionette.ItemView.extend({
    className: 'col-sm-12',
    template: topTemplate
  });
});
