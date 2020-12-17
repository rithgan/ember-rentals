import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | ember rentals", function (hooks) {
  setupApplicationTest(hooks);

  //test for home page
  test("visiting /", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
    assert.dom("h2").hasText("Welcome to Ember Rentals"); //check for text in h1

    assert.dom("a.button").hasText("About");
    assert.dom(".jumbo a#about").hasText("About");
    await click("a#about");
    assert.equal(currentURL(), "/about", "visited about page");

    await visit("/");

    assert.dom(".jumbo a:nth-of-type(2).button").hasText("Contact");
    assert.dom(".jumbo a#contact").hasText("Contact");
    await click("a#contact");
    assert.equal(currentURL(), "/getting-in-touch", "visited contact page");
  });

  //test for about page
  test("visiting /about", async function (assert) {
    await visit("/about");

    assert.equal(currentURL(), "/about");
    assert.dom("h2").hasText("About Ember Rentals"); //check for text in h1

    assert.dom("a.button").hasText("Contact");
    assert.dom(".jumbo a#contact").hasText("Contact");
    await click("a#contact");
    assert.equal(currentURL(), "/getting-in-touch", "visited contact page");

    await visit("/about");

    assert.dom(".jumbo a:nth-of-type(2).button").hasText("Home");
    assert.dom(".jumbo a#home").hasText("Home");
    await click("a#home");
    assert.equal(currentURL(), "/", "visited home page");
  });
  //test for contact page
  test("visiting /getting-in-touch", async function (assert) {
    await visit("/getting-in-touch");

    assert.equal(currentURL(), "/getting-in-touch");
    assert.dom("h2").hasText("Contact Us"); //check for text in h1

    assert.dom("a.button").hasText("About");
    assert.dom(".jumbo a#about").hasText("About");
    await click("a#about");
    assert.equal(currentURL(), "/about", "about");

    await visit("/getting-in-touch");

    assert.dom(".jumbo a:nth-of-type(2).button").hasText("Home");
    assert.dom(".jumbo a#home").hasText("Home");
    await click("a#home");
    assert.equal(currentURL(), "/", "visited home page");
  });
});
