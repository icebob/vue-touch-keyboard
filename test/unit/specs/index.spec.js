import { expect } from "chai";

import VueTouchKeyboard from "src/index";

describe("module", () => {

	it("module properties", () => {

		expect(VueTouchKeyboard).to.be.exist;
		expect(VueTouchKeyboard).to.have.property("component");
		expect(VueTouchKeyboard).to.have.property("layouts");
		expect(VueTouchKeyboard.install).to.be.a("function");

	});

});