/**
 * @author kadek juliana parwanta
 * created on 16.11.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.laporan', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('laporan', {
          url: '/laporan',
          templateUrl: 'app/pages/laporan/laporan.html',
          title: 'Laporan',
          controller: 'LaporanPageCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 1,
          },
        });
  }

})();
