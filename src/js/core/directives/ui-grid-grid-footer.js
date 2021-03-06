(function () {
  'use strict';

  angular.module('ui.grid').directive('uiGridGridFooter', ['$templateCache', '$compile', 'uiGridConstants', 'gridUtil', '$timeout', function ($templateCache, $compile, uiGridConstants, gridUtil, $timeout) {
    var defaultTemplate = 'ui-grid/ui-grid-grid-footer';

    return {
      restrict: 'EA',
      replace: true,
      // priority: 1000,
      require: '^uiGrid',
      scope: true,
      compile: function ($elm, $attrs) {
        return {
          pre: function ($scope, $elm, $attrs, uiGridCtrl) {

            $scope.grid = uiGridCtrl.grid;

            var footerTemplate = ($scope.grid.options.gridFooterTemplate) ? $scope.grid.options.gridFooterTemplate : defaultTemplate;
            gridUtil.getTemplate(footerTemplate)
              .then(function (contents) {
                var template = angular.element(contents);

                var newElm = $compile(template)($scope);
                $elm.append(newElm);
              });
          },

          post: function ($scope, $elm, $attrs, controllers) {

          }
        };
      }
    };
  }]);

})();