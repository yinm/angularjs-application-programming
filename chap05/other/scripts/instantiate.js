angular.module('myApp', [])
  .value('birth', new Date(2007, 5, 25))

const Animal = (name, birth, $log) => {
  this.name = name
  this.birth = birth
  this.output = () => {
    $log.info(`${name}:${birth.toLocalString()}`)
  }
}

const $injector = angular.injector(['ng', 'myApp'])
const ani = $injector.instance(
  ['name', 'birth', '$log', Animal], { name: 'ウタ' }
)

ani.output()
