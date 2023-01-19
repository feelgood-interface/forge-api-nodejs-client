/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function () {
	'use strict';

	var ApiClient = require('../ApiClient');

	/**
	 * The ObjectS3Download model module.
	 * @module model/ObjectS3Download
	 */

	/**
	 * Constructs a <code>ObjectS3Download</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/ObjectS3Download} obj Optional instance to populate.
	 * @return {module:model/ObjectS3Download} The populated <code>ObjectS3Download</code> instance.
	 */
	var constructFromObject = function (data, obj) {
		if (data) {
			obj = obj || new exports();

			if (data.hasOwnProperty('status'))
				obj.status = ApiClient.convertToType(data.status, 'String');
			if (data.hasOwnProperty('url'))
				obj.url = ApiClient.convertToType(data.url, 'String');
			if (data.hasOwnProperty('urls'))
				obj.urls = ApiClient.convertToType(data.urls, 'Object');
			if (data.hasOwnProperty('params'))
				obj.params = ApiClient.convertToType(data.params, 'Object');
			if (data.hasOwnProperty('size'))
				obj.size = ApiClient.convertToType(data.size, 'Integer');
			if (data.hasOwnProperty('sha1'))
				obj.sha1 = ApiClient.convertToType(data.sha1, 'String');
		}
		return obj;
	};

	/**
	 * Constructs a new <code>ObjectS3Download</code>.
	 * Object json response
	 * @alias module:model/ObjectS3Download
	 * @class
	 * @param {Object} theData The plain JavaScript object bearing properties of interest.
	 * @param {module:model/ObjectS3Download} obj Optional instance to populate.
	 */
	var exports = function (theData, obj) {
		var _this = this;

		return constructFromObject(theData, obj || _this);
	};

	/**
	 * Constructs a <code>ObjectS3Download</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/ObjectS3Download} obj Optional instance to populate.
	 * @return {module:model/ObjectS3Download} The populated <code>ObjectS3Download</code> instance.
	 */
	exports.constructFromObject = constructFromObject;

	/**
	 * Indicates the status of the object. Possible values are:
	 * - complete - raw uploads or merged resumable uploads
	 * - chunked - unmerged resumable uploads and public-resource-fallback = false
	 * - fallback - unmerged resumable uploads and public-resource-fallback = true
	 * @member {String} status
	 */
	exports.prototype.status = undefined;
	/**
	 * The S3 signed URL to download from. This attribute is returned when the value of the status attribute is 
	 * complete or fallback (in which case the URL will be an OSS Signed URL instead of an S3 signed URL).
	 * @member {String} url
	 */
	exports.prototype.url = undefined;
	/**
	 * A map of S3 signed URLs where each key correspond to a specific byte range chunk. This attribute is returned when the value of the status attribute is chunked.
	 * @member {Object} urls
	 */
	exports.prototype.urls = undefined;
	/**
	 * The values for the updatable params that were used in the creation of the returned S3 signed URL (Content-Type, Content-Disposition & Cache-Control).
	 * @member {Object} params
	 */
	exports.prototype.params = undefined;
	/**
	 * OThe object size in bytes.
	 * @member {Integer} size
	 */
	exports.prototype.size = undefined;
	/**
	 * The calculated sha1 of the object if available.
	 * @member {String} sha1
	 */
	exports.prototype.sha1 = undefined;

	return exports;
}());
