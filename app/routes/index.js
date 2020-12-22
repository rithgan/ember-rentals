import Route from "@ember/routing/route";

export default class IndexRoute extends Route {
  async model() {
    let res = await fetch("/api/rentals.json");
    let parsed = await res.json();
    return parsed;
  }
}
