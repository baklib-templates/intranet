import * as Turbo from "@hotwired/turbo"
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import { Application } from "@hotwired/stimulus"
// import ThemeController from "./controllers/theme_controller"
import LoadMoreController from "./controllers/load_more_controller"
import Dropdown from 'stimulus-dropdown'
import usePopper from "./controllers/usePopper"
import dispatchTo from "./controllers/dispatch_to"
import breakpoints from "./controllers/breakpoints"
import tooltip from "./controllers/tooltip";

Alpine.directive("tooltip", tooltip);
Alpine.store("breakpoints", breakpoints)
window.Alpine = Alpine
Alpine.plugin(collapse)
document.addEventListener('alpine:init', () => {
  Alpine.data("usePopper", usePopper);
})
Alpine.magic("dispatchTo", () => dispatchTo);
Alpine.start()

const application = Application.start()
window.Stimulus = application
// application.register('theme', ThemeController)
application.register('dropdown', Dropdown)
application.register('load_more', LoadMoreController)



