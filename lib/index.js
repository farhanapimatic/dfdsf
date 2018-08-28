/**
  * @module HelloWorldLib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const HelloworldController = require('./Controllers/HelloworldController');
const HelloWorldResponse = require('./Models/HelloWorldResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of HelloWorldLib
    Configuration,
    Environments,
    // controllers of HelloWorldLib
    HelloworldController,
    // models of HelloWorldLib
    HelloWorldResponse,
    // exceptions of HelloWorldLib
    APIException,
};

module.exports = initializer;
