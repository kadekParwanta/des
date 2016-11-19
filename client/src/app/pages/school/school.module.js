/**
 * @author kadek juliana parwanta
 * created on 16.11.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.school', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('school', {
          url: '/school',
          templateUrl: 'app/pages/school/school.html',
          title: 'Sekolah',
          controller: 'SchoolPageCtrl',
          sidebarMeta: {
            icon: 'fa fa-graduation-cap',
            order: 1,
          },
        });
  }

})();
