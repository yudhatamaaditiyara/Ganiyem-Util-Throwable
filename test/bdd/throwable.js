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
	it("getOwnPropertyDescriptor(new Throwable(), 'name') != null", () => {
		let throwable = new Throwable();
		let descriptor = Object.getOwnPropertyDescriptor(throwable, "name");
		assert.ok(!!descriptor);
	});

	/**
	 */
	it("getOwnPropertyDescriptor(new Throwable(), 'name').value === 'Throwable'", () => {
		let throwable = new Throwable();
		let descriptor = Object.getOwnPropertyDescriptor(throwable, "name");
		assert.strictEqual(descriptor.value, "Throwable");
	});

	/**
	 */
	it("getOwnPropertyDescriptor(new Throwable(), 'name').configurable === true", () => {
		let throwable = new Throwable();
		let descriptor = Object.getOwnPropertyDescriptor(throwable, "name");
		assert.strictEqual(descriptor.configurable, true);
	});
	
	/**
	 */
	it("getOwnPropertyDescriptor(new Throwable(), 'name').enumerable === false", () => {
		let throwable = new Throwable();
		let descriptor = Object.getOwnPropertyDescriptor(throwable, "name");
		assert.strictEqual(descriptor.enumerable, false);
	});
	
	/**
	 */
	it("getOwnPropertyDescriptor(new Throwable(), 'name').writable === true", () => {
		let throwable = new Throwable();
		let descriptor = Object.getOwnPropertyDescriptor(throwable, "name");
		assert.strictEqual(descriptor.writable, true);
	});

	/**
	 */
	it("new Throwable().message === ''", () => {
		let throwable = new Throwable();
		assert.strictEqual(throwable.message, "");
	});

	/**
	 */
	it("new Throwable(null).message === 'null'", () => {
		let throwable = new Throwable(null);
		assert.strictEqual(throwable.message, "null");
	});

	/**
	 */
	it("new Throwable(void 0).message === ''", () => {
		let throwable = new Throwable(void 0);
		assert.strictEqual(throwable.message, "");
	});

	/**
	 */
	it("new Throwable(123).message === '123'", () => {
		let throwable = new Throwable(123);
		assert.strictEqual(throwable.message, "123");
	});

	/**
	 */
	it("new Throwable('Foo').message === 'Foo'", () => {
		let throwable = new Throwable("Foo");
		assert.strictEqual(throwable.message, "Foo");
	});

	/**
	 */
	it("class TypeThrowable extends Throwable{}", () => {
		class TypeThrowableA extends Throwable{}
		class TypeThrowableB extends Throwable{}

		let typeThrowableA = new TypeThrowableA();
		assert.strictEqual(typeThrowableA.name, "TypeThrowableA");
		assert.strictEqual(typeThrowableA.message, "");

		let typeThrowableB = new TypeThrowableB("Foo");
		assert.strictEqual(typeThrowableB.name, "TypeThrowableB");
		assert.strictEqual(typeThrowableB.message, "Foo");
	});
});