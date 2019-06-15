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
'use strict';

/**
 */
class Throwable extends Error
{
	/**
	 * @param {string|void} message
	 */
	constructor(message){
		super(message);
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
	
	/**
	 * @returns {string}
	 */
	getName(){
		return this.name;
	}

	/**
	 * @returns {string}
	 */
	getMessage(){
		return this.message;
	}

	/**
	 * @returns {string}
	 */
	getStack(){
		return this.stack;
	}
}

/**
 * @+
 */
module.exports = Throwable;