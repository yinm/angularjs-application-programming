angular.module('myApp', [])
  .value('birth', new Date(2007, 5, 25));

const Animal = function(name, birth, $log) {
  this.name = name;
  this.birth = birth;
  this.output = () => {
    $log.info(`${name}:${birth.toLocaleString()}`);
  };
};

const $injector = angular.injector(['ng', 'myApp']);
const ani = $injector.instantiate(
  ['name', 'birth', '$log', Animal], { name: 'ウタ' }
);

ani.output();