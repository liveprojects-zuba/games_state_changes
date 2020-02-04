(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('throttleController', control);

    control.$inject = [
        '$state',
        'eventsSrvc'
        ];
    
    function control(
        $state,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            names : [],
            throttle : 0
         });
        

        
        vm.onItemSelected = function(index){
            console.log("Item : " + index);

            // we're passing parameters into the new state
            // 'selected is an attribute in a parameter object, defined in the module definition
            // I'm going to write the destination controller, so it knows to look for an object with a 'selected' attribute
            $state.go('events_detail', {selected: index});


        }

        vm.noEvents = function(){
            return vm.names.length === 0;
        }

        vm.goNext = function(){
            $state.go('events_list');
        }

        vm.goBack = function () {
            $state.go('welcome_page');
        }

        vm.onChange = function () {
            console.log(vm.throttle);
        }


        vm.names = eventsSrvc.getEvents();
              
    }
})();
