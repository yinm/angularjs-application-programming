class FigureService {
  constructor($log) {
    this.$log = $log
  }

  triangle(base, height) {
    this.$log.info(`[triangle] base: ${base}`)
    this.$log.info(`[triangle] height: ${height}`)

    return base * height / 2
  }

  circle(radius) {
    this.$log.info(`[circle] radius: ${radius}`)

    return radius * radius * Math.PI
  }

  trapezoid(upper, lower, height) {
    this.$log.info(`[trapezoid] upper: ${upper}`)
    this.$log.info(`[trapezoid] lower: ${lower}`)
    this.$log.info(`[trapezoid] height: ${height}`)

    return (upper + lower) * height / 2
  }
}

class MyController {
  constructor(FigureService) {
    this.FigureService = FigureService

    this.triangle = this.FigureService.triangle(4, 3)
    this.circle = this.FigureService.circle(5)
    this.trapezoid = this.FigureService.trapezoid(5, 10, 3)
  }
}

angular.module('myApp', [])
  .service('FigureService', ['$log', ($log) => new FigureService($log)])
  .controller('MyController', ['FigureService', (FigureService) => new MyController(FigureService)])
