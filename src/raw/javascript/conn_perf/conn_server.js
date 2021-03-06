/*
 * Copyright 2011-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var vertx = require('vertx')
var console = require('vertx/console')

// We set the buffer sizes small so we don't run out of RAM - each connection
// will have its own buffer

var server = vertx.createNetServer().sendBufferSize(2048).receiveBufferSize(2048);

var count = 0;

server.connectHandler(function(sock) {
  new vertx.Pump(sock, sock).start();
  console.log("Connection " + count++);
})

server.listen(1234);
