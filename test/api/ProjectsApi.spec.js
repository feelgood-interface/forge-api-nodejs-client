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
/*jshint esversion: 9 */

module.export = (function () {
	'use strict';

	var expect = require('expect.js'),
		sinon = require('sinon'),
		ForgeSdk = require('../../src'),
		instance,
		oauth2client,
		credentials,
		mockedApiClientRequest,
		ApiClient = require('../../src/ApiClient'),
		BadInput = require('../../src/model/BadInput'),
		CreateStorage = require('../../src/model/CreateStorage'),
		Forbidden = require('../../src/model/Forbidden'),
		Hub = require('../../src/model/Hub'),
		NotFound = require('../../src/model/NotFound'),
		Project = require('../../src/model/Project'),
		Projects = require('../../src/model/Projects'),
		StorageCreated = require('../../src/model/StorageCreated'),
		TopFolders = require('../../src/model/TopFolders');

	var sampleStrParam = 'test_string';
	var sampleIntParam = 10;
	var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || '<your forge client ID>';
	var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || '<your forge client secret>';

	var apiClient = new ApiClient();
	apiClient.defaultHeaders = { 'x-ads-test': sampleStrParam };

	before(function () {
		oauth2client = new ForgeSdk.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write']);
		credentials = {
			access_token: 'abce'
		};
		instance = new ForgeSdk.ProjectsApi(apiClient);
		mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
	});

	after(function () {
		apiClient.callApi.restore();
	});


	describe('ProjectsApi', function () {
		describe('getHubProjects', function () {
			it('should call getHubProjects successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'hub_id': sampleStrParam
				};
				var queryParams = {
					'filter[id]': instance.apiClient.buildCollectionParam(opts.filterId, 'csv'),
					'filter[extension.type]': instance.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv'),
					'page[number]': opts.pageNumber,
					'page[limit]': opts.pageLimit
				};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Projects;

				mockedApiClientRequest.withArgs('/project/v1/hubs/{hub_id}/projects', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getHubProjects(sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('getProject', function () {
			it('should call getProject successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'hub_id': sampleStrParam,
					'project_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Project;

				mockedApiClientRequest.withArgs('/project/v1/hubs/{hub_id}/projects/{project_id}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getProject(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('getProjectHub', function () {
			it('should call getProjectHub successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'hub_id': sampleStrParam,
					'project_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Hub;

				mockedApiClientRequest.withArgs('/project/v1/hubs/{hub_id}/projects/{project_id}/hub', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getProjectHub(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('getProjectTopFolders', function () {
			it('should call getProjectTopFolders successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'hub_id': sampleStrParam,
					'project_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = TopFolders;

				mockedApiClientRequest.withArgs('/project/v1/hubs/{hub_id}/projects/{project_id}/topFolders', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getProjectTopFolders(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('postStorage', function () {
			it('should call postStorage successfully', function (done) {
				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'project_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = StorageCreated;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/storage', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.postStorage(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
	});

}());