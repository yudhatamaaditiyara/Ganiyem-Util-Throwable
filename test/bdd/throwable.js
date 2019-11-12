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
const assert = require('assert');
const Throwable = require('../../');

describe('Throwable', () => {
  it('must be instanceof Error', () => {
    let throwable = new Throwable();
    assert.ok(throwable instanceof Error);
  });

  it('must be new Throwable(null).message === "null"', () => {
    let throwable = new Throwable(null);
    assert.strictEqual(throwable.message, 'null');
  });
  
  it('must be new Throwable(undefined).message === ""', () => {
    let throwable = new Throwable(undefined);
    assert.strictEqual(throwable.message, '');
  });

  it('must be new Throwable(123).message === "123"', () => {
    let throwable = new Throwable(123);
    assert.strictEqual(throwable.message, '123');
  });

  it('must be new Throwable("foo").message === "foo"', () => {
    let throwable = new Throwable('foo');
    assert.strictEqual(throwable.message, 'foo');
  });

  it('must be work inheritance class #name', () => {
    class TypeThrowable extends Throwable{}
    let typeThrowableA = new TypeThrowable();
    assert.strictEqual(typeThrowableA.name, 'TypeThrowable');
  });
  
  it('must be work inheritance class #message', () => {
    class TypeThrowable extends Throwable{}
    let typeThrowableA = new TypeThrowable();
    assert.strictEqual(typeThrowableA.message, '');
  });
});