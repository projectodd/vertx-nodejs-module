/*
 * Copyright 2013 Red Hat, Inc, and individual contributors.
 * 
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 * 
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

var EventEmitter = require('events').EventEmitter

var NodeJ = function(process) {

  process.on = EventEmitter.prototype.on
  process.addListener = EventEmitter.prototype.addListener
  process.once = EventEmitter.prototype.once
  process.removeListener = EventEmitter.prototype.removeListener
  process.removeAllListeners = EventEmitter.prototype.removeAllListeners
  process.setMaxListeners = EventEmitter.prototype.setMaxListeners
  process.listeners = EventEmitter.prototype.listeners
  process.emit = EventEmitter.prototype.emit

  process.nextTick = function(callback, args) {
    process.binding('Dispatcher').submit(callback, args)
  }

  process.title = "nodej"

  process.memoryUsage = function() {
    var obj = {}
    obj.heapTotal = os.totalmem()
    obj.heapUsed  = os.totalmem() - os.freemem()
    return obj
  }

  this.console = console

  // TODO: process.config
  // Node.js puts the configure options that were used to compile the current
  // node executable in process.config
  process.config = {}
}

module.exports = NodeJ
