/* istanbul ignore file */

import { createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";

export function createTestVue() {
  const Vue = createLocalVue();

  Vue.use(BootstrapVue);

  return Vue;
}
