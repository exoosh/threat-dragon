import { expect } from 'chai';
import sinon from 'sinon';

import env from '../../src/env/Env.js';
import homeController from '../../src/controllers/homecontroller.js';
import { getMockRequest, getMockResponse } from '../mocks/express.mocks.js';

describe('homecontroller tests', () => {
    let mockRequest, mockResponse;

    beforeEach(() => {
        mockRequest = getMockRequest();
        mockResponse = getMockResponse();
    });

    describe('index', () => {
        beforeEach(() => {
            const mockEnv = {
                config: {
                    NODE_ENV: 'development'
                }
            };
            sinon.stub(env, 'get').returns(mockEnv);
            homeController.index(mockRequest, mockResponse);
        });

        it('should send the home page', () => {
            expect(mockResponse.send).to.have.been.calledOnce;
        });
    });
});
