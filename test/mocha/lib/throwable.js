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
const Throwable = require("../../../");

describe("Throwable", () => {
	/**
	 */
	it("instanceof Error", () => {
		let instance = new Throwable();
		assert.ok(instance instanceof Error);
	});

	/**
	 */
	it("default name === 'Throwable'", () => {
		let instance = new Throwable();
		assert.ok(instance.name === "Throwable");
	});

	/**
	 */
	it("default message === ''", () => {
		let instance = new Throwable();
		assert.ok(instance.message === "");
	});

	/**
	 */
	it("default name is configurable === true", () => {
		let instance = new Throwable();
		assert.ok(Object.getOwnPropertyDescriptor(instance, "name").configurable === true);
	});

	/**
	 */
	it("default name is enumeable === false", () => {
		let instance = new Throwable();
		assert.ok(Object.getOwnPropertyDescriptor(instance, "name").enumerable === false);
	});

	/**
	 */
	it("default name is writable === true", () => {
		let instance = new Throwable();
		assert.ok(Object.getOwnPropertyDescriptor(instance, "name").writable === true);
	});

	/**
	 */
	it("param message string", () => {
		let message = "Hello World";
		let instance = new Throwable(message);
		assert.ok(instance.message === message);
	});

	/**
	 */
	it("param message null", () => {
		let instance = new Throwable(null);
		assert.ok(instance.message === "null");
	});

	/**
	 */
	it("param message undefined", () => {
		let instance = new Throwable(void 0);
		assert.ok(instance.message === "");
		let instance2 = new Throwable();
		assert.ok(instance2.message === "");
	});
});