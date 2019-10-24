/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require("assert");
const Throwable = require("../../");

/**
 */
describe("throwable", () => {
	/**
	 */
	it("instance of Error", () => {
		let throwable = new Throwable();
		assert.ok(throwable instanceof Error);
	});

	/**
	 */
	it("#name", () => {
		let throwable = new Throwable();
		let descriptor = Object.getOwnPropertyDescriptor(throwable, "name");
		assert.ok(!!descriptor);
		assert.strictEqual(descriptor.value, "Throwable");
		assert.strictEqual(descriptor.configurable, true);
		assert.strictEqual(descriptor.enumerable, false);
		assert.strictEqual(descriptor.writable, true);
	});

	/**
	 */
	it("#message", () => {
		let throwable = new Throwable();
		assert.strictEqual(throwable.message, "");
	});

	/**
	 */
	it("new Throwable()", () => {
		let throwableNull = new Throwable(null);
		assert.strictEqual(throwableNull.message, "null");

		let throwableUndefined = new Throwable(void 0);
		assert.strictEqual(throwableUndefined.message, "");

		let throwableString = new Throwable("Foo");
		assert.strictEqual(throwableString.message, "Foo");
	});

	/**
	 */
	it("class TypeThrowable extends Throwable{}", () => {
		class TypeThrowableA extends Throwable{}
		class TypeThrowableB extends Throwable{}

		let typeThrowableA = new TypeThrowableA();
		assert.strictEqual(typeThrowableA.name, TypeThrowableA.name);
		assert.strictEqual(typeThrowableA.message, "");

		let typeThrowableB = new TypeThrowableB("Foo");
		assert.strictEqual(typeThrowableB.name, "TypeThrowableB");
		assert.strictEqual(typeThrowableB.message, "Foo");
	});
});