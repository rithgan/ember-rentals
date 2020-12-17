import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | nav-bar", function (hooks) {
  setupRenderingTest(hooks);

  test("navbar renders and works", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NavBar />`);

    assert.dom("nav").exists();
    assert.dom("h1").hasText("Ember Rentals");

    assert.dom("nav a.menu-index").hasText("Ember Rentals");
    assert.dom("nav a.menu-about").hasText("About");
    assert.dom("nav a.menu-contact").hasText("Contact");

    // await click("nav a.menu-index");
    // assert.equal(currentURL(), "/");

    // await click("nav a.menu-about");
    // assert.equal(currentURL(), "/about");

    // await click("nav a.menu-contact");
    // assert.equal(currentURL(), "/getting-in-touch");

    // assert.equal(this.element.textContent.trim(), "");

    // // Template block usage:
    // await render(hbs`
    //   <NavBar>
    //     template block text
    //   </NavBar>
    // `);

    // assert.equal(this.element.textContent.trim(), "template block text");
  });
});
