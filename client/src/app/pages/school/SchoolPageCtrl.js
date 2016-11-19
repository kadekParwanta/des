/**
 * @author kadek juliana parwanta
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.school')
      .controller('SchoolPageCtrl', SchoolPageCtrl);

  /** @ngInject */
  function SchoolPageCtrl($scope, $filter, editableOptions, editableThemes, School, $state) {
    $scope.schools = [];

    function init() {
        $scope.schools.length = 0;
        School.find({"include":"photos"}, function(schools){
            $scope.schools = schools;
        })
    }

    init();

    $scope.edit = function(school) {
        $state.go('school-edit', {id:school.id});
    }
  }

})();
