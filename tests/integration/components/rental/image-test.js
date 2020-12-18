import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental/image", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the given image", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rental::Image  src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
    alt="A picture of Grand old Mansion" />`);

    // assert.equal(this.element.textContent.trim(), '');
    assert.dom(".image").exists();
    assert
      .dom(".image img")
      .hasAttribute(
        "src",
        `https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg`
      );
    assert
      .dom(".image img")
      .hasAttribute("alt", "A picture of Grand old Mansion");
    // Template block usage:
    // await render(hbs`
    //   <Rental::Image>
    //     template block text
    //   </Rental::Image>
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
