// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11396 = (function (f,fn_handler,meta11397){
this.f = f;
this.fn_handler = fn_handler;
this.meta11397 = meta11397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11396.cljs$lang$type = true;
cljs.core.async.t11396.cljs$lang$ctorStr = "cljs.core.async/t11396";
cljs.core.async.t11396.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11396");
});
cljs.core.async.t11396.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11398){var self__ = this;
var _11398__$1 = this;return self__.meta11397;
});
cljs.core.async.t11396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11398,meta11397__$1){var self__ = this;
var _11398__$1 = this;return (new cljs.core.async.t11396(self__.f,self__.fn_handler,meta11397__$1));
});
cljs.core.async.__GT_t11396 = (function __GT_t11396(f__$1,fn_handler__$1,meta11397){return (new cljs.core.async.t11396(f__$1,fn_handler__$1,meta11397));
});
}
return (new cljs.core.async.t11396(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11400 = buff;if(G__11400)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__11400.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11400.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11400);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11400);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11401 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11401);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11401,ret){
return (function (){return fn1.call(null,val_11401);
});})(val_11401,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___11402 = n;var x_11403 = (0);while(true){
if((x_11403 < n__4510__auto___11402))
{(a[x_11403] = (0));
{
var G__11404 = (x_11403 + (1));
x_11403 = G__11404;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11405 = (i + (1));
i = G__11405;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11409 = (function (flag,alt_flag,meta11410){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11410 = meta11410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11409.cljs$lang$type = true;
cljs.core.async.t11409.cljs$lang$ctorStr = "cljs.core.async/t11409";
cljs.core.async.t11409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11409");
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11411){var self__ = this;
var _11411__$1 = this;return self__.meta11410;
});})(flag))
;
cljs.core.async.t11409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11411,meta11410__$1){var self__ = this;
var _11411__$1 = this;return (new cljs.core.async.t11409(self__.flag,self__.alt_flag,meta11410__$1));
});})(flag))
;
cljs.core.async.__GT_t11409 = ((function (flag){
return (function __GT_t11409(flag__$1,alt_flag__$1,meta11410){return (new cljs.core.async.t11409(flag__$1,alt_flag__$1,meta11410));
});})(flag))
;
}
return (new cljs.core.async.t11409(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11415 = (function (cb,flag,alt_handler,meta11416){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11416 = meta11416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11415.cljs$lang$type = true;
cljs.core.async.t11415.cljs$lang$ctorStr = "cljs.core.async/t11415";
cljs.core.async.t11415.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11415");
});
cljs.core.async.t11415.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11417){var self__ = this;
var _11417__$1 = this;return self__.meta11416;
});
cljs.core.async.t11415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11417,meta11416__$1){var self__ = this;
var _11417__$1 = this;return (new cljs.core.async.t11415(self__.cb,self__.flag,self__.alt_handler,meta11416__$1));
});
cljs.core.async.__GT_t11415 = (function __GT_t11415(cb__$1,flag__$1,alt_handler__$1,meta11416){return (new cljs.core.async.t11415(cb__$1,flag__$1,alt_handler__$1,meta11416));
});
}
return (new cljs.core.async.t11415(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11418_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11418_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11419_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11419_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11420 = (i + (1));
i = G__11420;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11421){var map__11423 = p__11421;var map__11423__$1 = ((cljs.core.seq_QMARK_.call(null,map__11423))?cljs.core.apply.call(null,cljs.core.hash_map,map__11423):map__11423);var opts = map__11423__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11421 = null;if (arguments.length > 1) {
  p__11421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11421);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11424){
var ports = cljs.core.first(arglist__11424);
var p__11421 = cljs.core.rest(arglist__11424);
return alts_BANG___delegate(ports,p__11421);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6480__auto___11519 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___11519){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___11519){
return (function (state_11495){var state_val_11496 = (state_11495[(1)]);if((state_val_11496 === (7)))
{var inst_11491 = (state_11495[(2)]);var state_11495__$1 = state_11495;var statearr_11497_11520 = state_11495__$1;(statearr_11497_11520[(2)] = inst_11491);
(statearr_11497_11520[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (1)))
{var state_11495__$1 = state_11495;var statearr_11498_11521 = state_11495__$1;(statearr_11498_11521[(2)] = null);
(statearr_11498_11521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (4)))
{var inst_11474 = (state_11495[(7)]);var inst_11474__$1 = (state_11495[(2)]);var inst_11475 = (inst_11474__$1 == null);var state_11495__$1 = (function (){var statearr_11499 = state_11495;(statearr_11499[(7)] = inst_11474__$1);
return statearr_11499;
})();if(cljs.core.truth_(inst_11475))
{var statearr_11500_11522 = state_11495__$1;(statearr_11500_11522[(1)] = (5));
} else
{var statearr_11501_11523 = state_11495__$1;(statearr_11501_11523[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (13)))
{var state_11495__$1 = state_11495;var statearr_11502_11524 = state_11495__$1;(statearr_11502_11524[(2)] = null);
(statearr_11502_11524[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (6)))
{var inst_11474 = (state_11495[(7)]);var state_11495__$1 = state_11495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11495__$1,(11),to,inst_11474);
} else
{if((state_val_11496 === (3)))
{var inst_11493 = (state_11495[(2)]);var state_11495__$1 = state_11495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11495__$1,inst_11493);
} else
{if((state_val_11496 === (12)))
{var state_11495__$1 = state_11495;var statearr_11503_11525 = state_11495__$1;(statearr_11503_11525[(2)] = null);
(statearr_11503_11525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (2)))
{var state_11495__$1 = state_11495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11495__$1,(4),from);
} else
{if((state_val_11496 === (11)))
{var inst_11484 = (state_11495[(2)]);var state_11495__$1 = state_11495;if(cljs.core.truth_(inst_11484))
{var statearr_11504_11526 = state_11495__$1;(statearr_11504_11526[(1)] = (12));
} else
{var statearr_11505_11527 = state_11495__$1;(statearr_11505_11527[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (9)))
{var state_11495__$1 = state_11495;var statearr_11506_11528 = state_11495__$1;(statearr_11506_11528[(2)] = null);
(statearr_11506_11528[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (5)))
{var state_11495__$1 = state_11495;if(cljs.core.truth_(close_QMARK_))
{var statearr_11507_11529 = state_11495__$1;(statearr_11507_11529[(1)] = (8));
} else
{var statearr_11508_11530 = state_11495__$1;(statearr_11508_11530[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (14)))
{var inst_11489 = (state_11495[(2)]);var state_11495__$1 = state_11495;var statearr_11509_11531 = state_11495__$1;(statearr_11509_11531[(2)] = inst_11489);
(statearr_11509_11531[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (10)))
{var inst_11481 = (state_11495[(2)]);var state_11495__$1 = state_11495;var statearr_11510_11532 = state_11495__$1;(statearr_11510_11532[(2)] = inst_11481);
(statearr_11510_11532[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11496 === (8)))
{var inst_11478 = cljs.core.async.close_BANG_.call(null,to);var state_11495__$1 = state_11495;var statearr_11511_11533 = state_11495__$1;(statearr_11511_11533[(2)] = inst_11478);
(statearr_11511_11533[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___11519))
;return ((function (switch__6465__auto__,c__6480__auto___11519){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_11515 = [null,null,null,null,null,null,null,null];(statearr_11515[(0)] = state_machine__6466__auto__);
(statearr_11515[(1)] = (1));
return statearr_11515;
});
var state_machine__6466__auto____1 = (function (state_11495){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_11495);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e11516){if((e11516 instanceof Object))
{var ex__6469__auto__ = e11516;var statearr_11517_11534 = state_11495;(statearr_11517_11534[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11516;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11535 = state_11495;
state_11495 = G__11535;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_11495){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_11495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___11519))
})();var state__6482__auto__ = (function (){var statearr_11518 = f__6481__auto__.call(null);(statearr_11518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___11519);
return statearr_11518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___11519))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11719){var vec__11720 = p__11719;var v = cljs.core.nth.call(null,vec__11720,(0),null);var p = cljs.core.nth.call(null,vec__11720,(1),null);var job = vec__11720;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6480__auto___11902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___11902,res,vec__11720,v,p,job,jobs,results){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___11902,res,vec__11720,v,p,job,jobs,results){
return (function (state_11725){var state_val_11726 = (state_11725[(1)]);if((state_val_11726 === (2)))
{var inst_11722 = (state_11725[(2)]);var inst_11723 = cljs.core.async.close_BANG_.call(null,res);var state_11725__$1 = (function (){var statearr_11727 = state_11725;(statearr_11727[(7)] = inst_11722);
return statearr_11727;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11725__$1,inst_11723);
} else
{if((state_val_11726 === (1)))
{var state_11725__$1 = state_11725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11725__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6480__auto___11902,res,vec__11720,v,p,job,jobs,results))
;return ((function (switch__6465__auto__,c__6480__auto___11902,res,vec__11720,v,p,job,jobs,results){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_11731 = [null,null,null,null,null,null,null,null];(statearr_11731[(0)] = state_machine__6466__auto__);
(statearr_11731[(1)] = (1));
return statearr_11731;
});
var state_machine__6466__auto____1 = (function (state_11725){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_11725);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e11732){if((e11732 instanceof Object))
{var ex__6469__auto__ = e11732;var statearr_11733_11903 = state_11725;(statearr_11733_11903[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11732;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11904 = state_11725;
state_11725 = G__11904;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_11725){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_11725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___11902,res,vec__11720,v,p,job,jobs,results))
})();var state__6482__auto__ = (function (){var statearr_11734 = f__6481__auto__.call(null);(statearr_11734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___11902);
return statearr_11734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___11902,res,vec__11720,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11735){var vec__11736 = p__11735;var v = cljs.core.nth.call(null,vec__11736,(0),null);var p = cljs.core.nth.call(null,vec__11736,(1),null);var job = vec__11736;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___11905 = n;var __11906 = (0);while(true){
if((__11906 < n__4510__auto___11905))
{var G__11737_11907 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11737_11907) {
case "async":
var c__6480__auto___11909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11906,c__6480__auto___11909,G__11737_11907,n__4510__auto___11905,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (__11906,c__6480__auto___11909,G__11737_11907,n__4510__auto___11905,jobs,results,process,async){
return (function (state_11750){var state_val_11751 = (state_11750[(1)]);if((state_val_11751 === (7)))
{var inst_11746 = (state_11750[(2)]);var state_11750__$1 = state_11750;var statearr_11752_11910 = state_11750__$1;(statearr_11752_11910[(2)] = inst_11746);
(statearr_11752_11910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11751 === (6)))
{var state_11750__$1 = state_11750;var statearr_11753_11911 = state_11750__$1;(statearr_11753_11911[(2)] = null);
(statearr_11753_11911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11751 === (5)))
{var state_11750__$1 = state_11750;var statearr_11754_11912 = state_11750__$1;(statearr_11754_11912[(2)] = null);
(statearr_11754_11912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11751 === (4)))
{var inst_11740 = (state_11750[(2)]);var inst_11741 = async.call(null,inst_11740);var state_11750__$1 = state_11750;if(cljs.core.truth_(inst_11741))
{var statearr_11755_11913 = state_11750__$1;(statearr_11755_11913[(1)] = (5));
} else
{var statearr_11756_11914 = state_11750__$1;(statearr_11756_11914[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11751 === (3)))
{var inst_11748 = (state_11750[(2)]);var state_11750__$1 = state_11750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11750__$1,inst_11748);
} else
{if((state_val_11751 === (2)))
{var state_11750__$1 = state_11750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11750__$1,(4),jobs);
} else
{if((state_val_11751 === (1)))
{var state_11750__$1 = state_11750;var statearr_11757_11915 = state_11750__$1;(statearr_11757_11915[(2)] = null);
(statearr_11757_11915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11906,c__6480__auto___11909,G__11737_11907,n__4510__auto___11905,jobs,results,process,async))
;return ((function (__11906,switch__6465__auto__,c__6480__auto___11909,G__11737_11907,n__4510__auto___11905,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_11761 = [null,null,null,null,null,null,null];(statearr_11761[(0)] = state_machine__6466__auto__);
(statearr_11761[(1)] = (1));
return statearr_11761;
});
var state_machine__6466__auto____1 = (function (state_11750){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_11750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e11762){if((e11762 instanceof Object))
{var ex__6469__auto__ = e11762;var statearr_11763_11916 = state_11750;(statearr_11763_11916[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11762;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11917 = state_11750;
state_11750 = G__11917;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_11750){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_11750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(__11906,switch__6465__auto__,c__6480__auto___11909,G__11737_11907,n__4510__auto___11905,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_11764 = f__6481__auto__.call(null);(statearr_11764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___11909);
return statearr_11764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(__11906,c__6480__auto___11909,G__11737_11907,n__4510__auto___11905,jobs,results,process,async))
);

break;
case "compute":
var c__6480__auto___11918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11906,c__6480__auto___11918,G__11737_11907,n__4510__auto___11905,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (__11906,c__6480__auto___11918,G__11737_11907,n__4510__auto___11905,jobs,results,process,async){
return (function (state_11777){var state_val_11778 = (state_11777[(1)]);if((state_val_11778 === (7)))
{var inst_11773 = (state_11777[(2)]);var state_11777__$1 = state_11777;var statearr_11779_11919 = state_11777__$1;(statearr_11779_11919[(2)] = inst_11773);
(statearr_11779_11919[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11778 === (6)))
{var state_11777__$1 = state_11777;var statearr_11780_11920 = state_11777__$1;(statearr_11780_11920[(2)] = null);
(statearr_11780_11920[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11778 === (5)))
{var state_11777__$1 = state_11777;var statearr_11781_11921 = state_11777__$1;(statearr_11781_11921[(2)] = null);
(statearr_11781_11921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11778 === (4)))
{var inst_11767 = (state_11777[(2)]);var inst_11768 = process.call(null,inst_11767);var state_11777__$1 = state_11777;if(cljs.core.truth_(inst_11768))
{var statearr_11782_11922 = state_11777__$1;(statearr_11782_11922[(1)] = (5));
} else
{var statearr_11783_11923 = state_11777__$1;(statearr_11783_11923[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11778 === (3)))
{var inst_11775 = (state_11777[(2)]);var state_11777__$1 = state_11777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11777__$1,inst_11775);
} else
{if((state_val_11778 === (2)))
{var state_11777__$1 = state_11777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(4),jobs);
} else
{if((state_val_11778 === (1)))
{var state_11777__$1 = state_11777;var statearr_11784_11924 = state_11777__$1;(statearr_11784_11924[(2)] = null);
(statearr_11784_11924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11906,c__6480__auto___11918,G__11737_11907,n__4510__auto___11905,jobs,results,process,async))
;return ((function (__11906,switch__6465__auto__,c__6480__auto___11918,G__11737_11907,n__4510__auto___11905,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_11788 = [null,null,null,null,null,null,null];(statearr_11788[(0)] = state_machine__6466__auto__);
(statearr_11788[(1)] = (1));
return statearr_11788;
});
var state_machine__6466__auto____1 = (function (state_11777){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_11777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e11789){if((e11789 instanceof Object))
{var ex__6469__auto__ = e11789;var statearr_11790_11925 = state_11777;(statearr_11790_11925[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11777);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11926 = state_11777;
state_11777 = G__11926;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(__11906,switch__6465__auto__,c__6480__auto___11918,G__11737_11907,n__4510__auto___11905,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_11791 = f__6481__auto__.call(null);(statearr_11791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___11918);
return statearr_11791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(__11906,c__6480__auto___11918,G__11737_11907,n__4510__auto___11905,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11927 = (__11906 + (1));
__11906 = G__11927;
continue;
}
} else
{}
break;
}
var c__6480__auto___11928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___11928,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___11928,jobs,results,process,async){
return (function (state_11813){var state_val_11814 = (state_11813[(1)]);if((state_val_11814 === (9)))
{var inst_11806 = (state_11813[(2)]);var state_11813__$1 = (function (){var statearr_11815 = state_11813;(statearr_11815[(7)] = inst_11806);
return statearr_11815;
})();var statearr_11816_11929 = state_11813__$1;(statearr_11816_11929[(2)] = null);
(statearr_11816_11929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (8)))
{var inst_11799 = (state_11813[(8)]);var inst_11804 = (state_11813[(2)]);var state_11813__$1 = (function (){var statearr_11817 = state_11813;(statearr_11817[(9)] = inst_11804);
return statearr_11817;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11813__$1,(9),results,inst_11799);
} else
{if((state_val_11814 === (7)))
{var inst_11809 = (state_11813[(2)]);var state_11813__$1 = state_11813;var statearr_11818_11930 = state_11813__$1;(statearr_11818_11930[(2)] = inst_11809);
(statearr_11818_11930[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (6)))
{var inst_11794 = (state_11813[(10)]);var inst_11799 = (state_11813[(8)]);var inst_11799__$1 = cljs.core.async.chan.call(null,(1));var inst_11800 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11801 = [inst_11794,inst_11799__$1];var inst_11802 = (new cljs.core.PersistentVector(null,2,(5),inst_11800,inst_11801,null));var state_11813__$1 = (function (){var statearr_11819 = state_11813;(statearr_11819[(8)] = inst_11799__$1);
return statearr_11819;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11813__$1,(8),jobs,inst_11802);
} else
{if((state_val_11814 === (5)))
{var inst_11797 = cljs.core.async.close_BANG_.call(null,jobs);var state_11813__$1 = state_11813;var statearr_11820_11931 = state_11813__$1;(statearr_11820_11931[(2)] = inst_11797);
(statearr_11820_11931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (4)))
{var inst_11794 = (state_11813[(10)]);var inst_11794__$1 = (state_11813[(2)]);var inst_11795 = (inst_11794__$1 == null);var state_11813__$1 = (function (){var statearr_11821 = state_11813;(statearr_11821[(10)] = inst_11794__$1);
return statearr_11821;
})();if(cljs.core.truth_(inst_11795))
{var statearr_11822_11932 = state_11813__$1;(statearr_11822_11932[(1)] = (5));
} else
{var statearr_11823_11933 = state_11813__$1;(statearr_11823_11933[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11814 === (3)))
{var inst_11811 = (state_11813[(2)]);var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11813__$1,inst_11811);
} else
{if((state_val_11814 === (2)))
{var state_11813__$1 = state_11813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11813__$1,(4),from);
} else
{if((state_val_11814 === (1)))
{var state_11813__$1 = state_11813;var statearr_11824_11934 = state_11813__$1;(statearr_11824_11934[(2)] = null);
(statearr_11824_11934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___11928,jobs,results,process,async))
;return ((function (switch__6465__auto__,c__6480__auto___11928,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_11828 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11828[(0)] = state_machine__6466__auto__);
(statearr_11828[(1)] = (1));
return statearr_11828;
});
var state_machine__6466__auto____1 = (function (state_11813){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_11813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object))
{var ex__6469__auto__ = e11829;var statearr_11830_11935 = state_11813;(statearr_11830_11935[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11936 = state_11813;
state_11813 = G__11936;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_11813){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_11813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___11928,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_11831 = f__6481__auto__.call(null);(statearr_11831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___11928);
return statearr_11831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___11928,jobs,results,process,async))
);
var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,jobs,results,process,async){
return (function (state_11869){var state_val_11870 = (state_11869[(1)]);if((state_val_11870 === (7)))
{var inst_11865 = (state_11869[(2)]);var state_11869__$1 = state_11869;var statearr_11871_11937 = state_11869__$1;(statearr_11871_11937[(2)] = inst_11865);
(statearr_11871_11937[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (20)))
{var state_11869__$1 = state_11869;var statearr_11872_11938 = state_11869__$1;(statearr_11872_11938[(2)] = null);
(statearr_11872_11938[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (1)))
{var state_11869__$1 = state_11869;var statearr_11873_11939 = state_11869__$1;(statearr_11873_11939[(2)] = null);
(statearr_11873_11939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (4)))
{var inst_11834 = (state_11869[(7)]);var inst_11834__$1 = (state_11869[(2)]);var inst_11835 = (inst_11834__$1 == null);var state_11869__$1 = (function (){var statearr_11874 = state_11869;(statearr_11874[(7)] = inst_11834__$1);
return statearr_11874;
})();if(cljs.core.truth_(inst_11835))
{var statearr_11875_11940 = state_11869__$1;(statearr_11875_11940[(1)] = (5));
} else
{var statearr_11876_11941 = state_11869__$1;(statearr_11876_11941[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (15)))
{var inst_11847 = (state_11869[(8)]);var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11869__$1,(18),to,inst_11847);
} else
{if((state_val_11870 === (21)))
{var inst_11860 = (state_11869[(2)]);var state_11869__$1 = state_11869;var statearr_11877_11942 = state_11869__$1;(statearr_11877_11942[(2)] = inst_11860);
(statearr_11877_11942[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (13)))
{var inst_11862 = (state_11869[(2)]);var state_11869__$1 = (function (){var statearr_11878 = state_11869;(statearr_11878[(9)] = inst_11862);
return statearr_11878;
})();var statearr_11879_11943 = state_11869__$1;(statearr_11879_11943[(2)] = null);
(statearr_11879_11943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (6)))
{var inst_11834 = (state_11869[(7)]);var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11869__$1,(11),inst_11834);
} else
{if((state_val_11870 === (17)))
{var inst_11855 = (state_11869[(2)]);var state_11869__$1 = state_11869;if(cljs.core.truth_(inst_11855))
{var statearr_11880_11944 = state_11869__$1;(statearr_11880_11944[(1)] = (19));
} else
{var statearr_11881_11945 = state_11869__$1;(statearr_11881_11945[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (3)))
{var inst_11867 = (state_11869[(2)]);var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11869__$1,inst_11867);
} else
{if((state_val_11870 === (12)))
{var inst_11844 = (state_11869[(10)]);var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11869__$1,(14),inst_11844);
} else
{if((state_val_11870 === (2)))
{var state_11869__$1 = state_11869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11869__$1,(4),results);
} else
{if((state_val_11870 === (19)))
{var state_11869__$1 = state_11869;var statearr_11882_11946 = state_11869__$1;(statearr_11882_11946[(2)] = null);
(statearr_11882_11946[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (11)))
{var inst_11844 = (state_11869[(2)]);var state_11869__$1 = (function (){var statearr_11883 = state_11869;(statearr_11883[(10)] = inst_11844);
return statearr_11883;
})();var statearr_11884_11947 = state_11869__$1;(statearr_11884_11947[(2)] = null);
(statearr_11884_11947[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (9)))
{var state_11869__$1 = state_11869;var statearr_11885_11948 = state_11869__$1;(statearr_11885_11948[(2)] = null);
(statearr_11885_11948[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (5)))
{var state_11869__$1 = state_11869;if(cljs.core.truth_(close_QMARK_))
{var statearr_11886_11949 = state_11869__$1;(statearr_11886_11949[(1)] = (8));
} else
{var statearr_11887_11950 = state_11869__$1;(statearr_11887_11950[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (14)))
{var inst_11847 = (state_11869[(8)]);var inst_11849 = (state_11869[(11)]);var inst_11847__$1 = (state_11869[(2)]);var inst_11848 = (inst_11847__$1 == null);var inst_11849__$1 = cljs.core.not.call(null,inst_11848);var state_11869__$1 = (function (){var statearr_11888 = state_11869;(statearr_11888[(8)] = inst_11847__$1);
(statearr_11888[(11)] = inst_11849__$1);
return statearr_11888;
})();if(inst_11849__$1)
{var statearr_11889_11951 = state_11869__$1;(statearr_11889_11951[(1)] = (15));
} else
{var statearr_11890_11952 = state_11869__$1;(statearr_11890_11952[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (16)))
{var inst_11849 = (state_11869[(11)]);var state_11869__$1 = state_11869;var statearr_11891_11953 = state_11869__$1;(statearr_11891_11953[(2)] = inst_11849);
(statearr_11891_11953[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (10)))
{var inst_11841 = (state_11869[(2)]);var state_11869__$1 = state_11869;var statearr_11892_11954 = state_11869__$1;(statearr_11892_11954[(2)] = inst_11841);
(statearr_11892_11954[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (18)))
{var inst_11852 = (state_11869[(2)]);var state_11869__$1 = state_11869;var statearr_11893_11955 = state_11869__$1;(statearr_11893_11955[(2)] = inst_11852);
(statearr_11893_11955[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11870 === (8)))
{var inst_11838 = cljs.core.async.close_BANG_.call(null,to);var state_11869__$1 = state_11869;var statearr_11894_11956 = state_11869__$1;(statearr_11894_11956[(2)] = inst_11838);
(statearr_11894_11956[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto__,jobs,results,process,async))
;return ((function (switch__6465__auto__,c__6480__auto__,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_11898 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11898[(0)] = state_machine__6466__auto__);
(statearr_11898[(1)] = (1));
return statearr_11898;
});
var state_machine__6466__auto____1 = (function (state_11869){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_11869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e11899){if((e11899 instanceof Object))
{var ex__6469__auto__ = e11899;var statearr_11900_11957 = state_11869;(statearr_11900_11957[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11958 = state_11869;
state_11869 = G__11958;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_11869){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_11869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_11901 = f__6481__auto__.call(null);(statearr_11901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_11901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,jobs,results,process,async))
);
return c__6480__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6480__auto___12059 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___12059,tc,fc){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___12059,tc,fc){
return (function (state_12034){var state_val_12035 = (state_12034[(1)]);if((state_val_12035 === (7)))
{var inst_12030 = (state_12034[(2)]);var state_12034__$1 = state_12034;var statearr_12036_12060 = state_12034__$1;(statearr_12036_12060[(2)] = inst_12030);
(statearr_12036_12060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (1)))
{var state_12034__$1 = state_12034;var statearr_12037_12061 = state_12034__$1;(statearr_12037_12061[(2)] = null);
(statearr_12037_12061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (4)))
{var inst_12011 = (state_12034[(7)]);var inst_12011__$1 = (state_12034[(2)]);var inst_12012 = (inst_12011__$1 == null);var state_12034__$1 = (function (){var statearr_12038 = state_12034;(statearr_12038[(7)] = inst_12011__$1);
return statearr_12038;
})();if(cljs.core.truth_(inst_12012))
{var statearr_12039_12062 = state_12034__$1;(statearr_12039_12062[(1)] = (5));
} else
{var statearr_12040_12063 = state_12034__$1;(statearr_12040_12063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (13)))
{var state_12034__$1 = state_12034;var statearr_12041_12064 = state_12034__$1;(statearr_12041_12064[(2)] = null);
(statearr_12041_12064[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (6)))
{var inst_12011 = (state_12034[(7)]);var inst_12017 = p.call(null,inst_12011);var state_12034__$1 = state_12034;if(cljs.core.truth_(inst_12017))
{var statearr_12042_12065 = state_12034__$1;(statearr_12042_12065[(1)] = (9));
} else
{var statearr_12043_12066 = state_12034__$1;(statearr_12043_12066[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (3)))
{var inst_12032 = (state_12034[(2)]);var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12034__$1,inst_12032);
} else
{if((state_val_12035 === (12)))
{var state_12034__$1 = state_12034;var statearr_12044_12067 = state_12034__$1;(statearr_12044_12067[(2)] = null);
(statearr_12044_12067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (2)))
{var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12034__$1,(4),ch);
} else
{if((state_val_12035 === (11)))
{var inst_12011 = (state_12034[(7)]);var inst_12021 = (state_12034[(2)]);var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12034__$1,(8),inst_12021,inst_12011);
} else
{if((state_val_12035 === (9)))
{var state_12034__$1 = state_12034;var statearr_12045_12068 = state_12034__$1;(statearr_12045_12068[(2)] = tc);
(statearr_12045_12068[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (5)))
{var inst_12014 = cljs.core.async.close_BANG_.call(null,tc);var inst_12015 = cljs.core.async.close_BANG_.call(null,fc);var state_12034__$1 = (function (){var statearr_12046 = state_12034;(statearr_12046[(8)] = inst_12014);
return statearr_12046;
})();var statearr_12047_12069 = state_12034__$1;(statearr_12047_12069[(2)] = inst_12015);
(statearr_12047_12069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (14)))
{var inst_12028 = (state_12034[(2)]);var state_12034__$1 = state_12034;var statearr_12048_12070 = state_12034__$1;(statearr_12048_12070[(2)] = inst_12028);
(statearr_12048_12070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (10)))
{var state_12034__$1 = state_12034;var statearr_12049_12071 = state_12034__$1;(statearr_12049_12071[(2)] = fc);
(statearr_12049_12071[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (8)))
{var inst_12023 = (state_12034[(2)]);var state_12034__$1 = state_12034;if(cljs.core.truth_(inst_12023))
{var statearr_12050_12072 = state_12034__$1;(statearr_12050_12072[(1)] = (12));
} else
{var statearr_12051_12073 = state_12034__$1;(statearr_12051_12073[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___12059,tc,fc))
;return ((function (switch__6465__auto__,c__6480__auto___12059,tc,fc){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12055 = [null,null,null,null,null,null,null,null,null];(statearr_12055[(0)] = state_machine__6466__auto__);
(statearr_12055[(1)] = (1));
return statearr_12055;
});
var state_machine__6466__auto____1 = (function (state_12034){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12034);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12056){if((e12056 instanceof Object))
{var ex__6469__auto__ = e12056;var statearr_12057_12074 = state_12034;(statearr_12057_12074[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12075 = state_12034;
state_12034 = G__12075;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12034){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___12059,tc,fc))
})();var state__6482__auto__ = (function (){var statearr_12058 = f__6481__auto__.call(null);(statearr_12058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12059);
return statearr_12058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___12059,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__){
return (function (state_12122){var state_val_12123 = (state_12122[(1)]);if((state_val_12123 === (7)))
{var inst_12118 = (state_12122[(2)]);var state_12122__$1 = state_12122;var statearr_12124_12140 = state_12122__$1;(statearr_12124_12140[(2)] = inst_12118);
(statearr_12124_12140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (6)))
{var inst_12111 = (state_12122[(7)]);var inst_12108 = (state_12122[(8)]);var inst_12115 = f.call(null,inst_12108,inst_12111);var inst_12108__$1 = inst_12115;var state_12122__$1 = (function (){var statearr_12125 = state_12122;(statearr_12125[(8)] = inst_12108__$1);
return statearr_12125;
})();var statearr_12126_12141 = state_12122__$1;(statearr_12126_12141[(2)] = null);
(statearr_12126_12141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (5)))
{var inst_12108 = (state_12122[(8)]);var state_12122__$1 = state_12122;var statearr_12127_12142 = state_12122__$1;(statearr_12127_12142[(2)] = inst_12108);
(statearr_12127_12142[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (4)))
{var inst_12111 = (state_12122[(7)]);var inst_12111__$1 = (state_12122[(2)]);var inst_12112 = (inst_12111__$1 == null);var state_12122__$1 = (function (){var statearr_12128 = state_12122;(statearr_12128[(7)] = inst_12111__$1);
return statearr_12128;
})();if(cljs.core.truth_(inst_12112))
{var statearr_12129_12143 = state_12122__$1;(statearr_12129_12143[(1)] = (5));
} else
{var statearr_12130_12144 = state_12122__$1;(statearr_12130_12144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (3)))
{var inst_12120 = (state_12122[(2)]);var state_12122__$1 = state_12122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12122__$1,inst_12120);
} else
{if((state_val_12123 === (2)))
{var state_12122__$1 = state_12122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12122__$1,(4),ch);
} else
{if((state_val_12123 === (1)))
{var inst_12108 = init;var state_12122__$1 = (function (){var statearr_12131 = state_12122;(statearr_12131[(8)] = inst_12108);
return statearr_12131;
})();var statearr_12132_12145 = state_12122__$1;(statearr_12132_12145[(2)] = null);
(statearr_12132_12145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6480__auto__))
;return ((function (switch__6465__auto__,c__6480__auto__){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12136 = [null,null,null,null,null,null,null,null,null];(statearr_12136[(0)] = state_machine__6466__auto__);
(statearr_12136[(1)] = (1));
return statearr_12136;
});
var state_machine__6466__auto____1 = (function (state_12122){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12122);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12137){if((e12137 instanceof Object))
{var ex__6469__auto__ = e12137;var statearr_12138_12146 = state_12122;(statearr_12138_12146[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12147 = state_12122;
state_12122 = G__12147;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12122){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__))
})();var state__6482__auto__ = (function (){var statearr_12139 = f__6481__auto__.call(null);(statearr_12139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_12139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__))
);
return c__6480__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__){
return (function (state_12221){var state_val_12222 = (state_12221[(1)]);if((state_val_12222 === (7)))
{var inst_12203 = (state_12221[(2)]);var state_12221__$1 = state_12221;var statearr_12223_12246 = state_12221__$1;(statearr_12223_12246[(2)] = inst_12203);
(statearr_12223_12246[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (1)))
{var inst_12197 = cljs.core.seq.call(null,coll);var inst_12198 = inst_12197;var state_12221__$1 = (function (){var statearr_12224 = state_12221;(statearr_12224[(7)] = inst_12198);
return statearr_12224;
})();var statearr_12225_12247 = state_12221__$1;(statearr_12225_12247[(2)] = null);
(statearr_12225_12247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (4)))
{var inst_12198 = (state_12221[(7)]);var inst_12201 = cljs.core.first.call(null,inst_12198);var state_12221__$1 = state_12221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12221__$1,(7),ch,inst_12201);
} else
{if((state_val_12222 === (13)))
{var inst_12215 = (state_12221[(2)]);var state_12221__$1 = state_12221;var statearr_12226_12248 = state_12221__$1;(statearr_12226_12248[(2)] = inst_12215);
(statearr_12226_12248[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (6)))
{var inst_12206 = (state_12221[(2)]);var state_12221__$1 = state_12221;if(cljs.core.truth_(inst_12206))
{var statearr_12227_12249 = state_12221__$1;(statearr_12227_12249[(1)] = (8));
} else
{var statearr_12228_12250 = state_12221__$1;(statearr_12228_12250[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (3)))
{var inst_12219 = (state_12221[(2)]);var state_12221__$1 = state_12221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12221__$1,inst_12219);
} else
{if((state_val_12222 === (12)))
{var state_12221__$1 = state_12221;var statearr_12229_12251 = state_12221__$1;(statearr_12229_12251[(2)] = null);
(statearr_12229_12251[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (2)))
{var inst_12198 = (state_12221[(7)]);var state_12221__$1 = state_12221;if(cljs.core.truth_(inst_12198))
{var statearr_12230_12252 = state_12221__$1;(statearr_12230_12252[(1)] = (4));
} else
{var statearr_12231_12253 = state_12221__$1;(statearr_12231_12253[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (11)))
{var inst_12212 = cljs.core.async.close_BANG_.call(null,ch);var state_12221__$1 = state_12221;var statearr_12232_12254 = state_12221__$1;(statearr_12232_12254[(2)] = inst_12212);
(statearr_12232_12254[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (9)))
{var state_12221__$1 = state_12221;if(cljs.core.truth_(close_QMARK_))
{var statearr_12233_12255 = state_12221__$1;(statearr_12233_12255[(1)] = (11));
} else
{var statearr_12234_12256 = state_12221__$1;(statearr_12234_12256[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (5)))
{var inst_12198 = (state_12221[(7)]);var state_12221__$1 = state_12221;var statearr_12235_12257 = state_12221__$1;(statearr_12235_12257[(2)] = inst_12198);
(statearr_12235_12257[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (10)))
{var inst_12217 = (state_12221[(2)]);var state_12221__$1 = state_12221;var statearr_12236_12258 = state_12221__$1;(statearr_12236_12258[(2)] = inst_12217);
(statearr_12236_12258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (8)))
{var inst_12198 = (state_12221[(7)]);var inst_12208 = cljs.core.next.call(null,inst_12198);var inst_12198__$1 = inst_12208;var state_12221__$1 = (function (){var statearr_12237 = state_12221;(statearr_12237[(7)] = inst_12198__$1);
return statearr_12237;
})();var statearr_12238_12259 = state_12221__$1;(statearr_12238_12259[(2)] = null);
(statearr_12238_12259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto__))
;return ((function (switch__6465__auto__,c__6480__auto__){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12242 = [null,null,null,null,null,null,null,null];(statearr_12242[(0)] = state_machine__6466__auto__);
(statearr_12242[(1)] = (1));
return statearr_12242;
});
var state_machine__6466__auto____1 = (function (state_12221){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12221);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12243){if((e12243 instanceof Object))
{var ex__6469__auto__ = e12243;var statearr_12244_12260 = state_12221;(statearr_12244_12260[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12261 = state_12221;
state_12221 = G__12261;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12221){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__))
})();var state__6482__auto__ = (function (){var statearr_12245 = f__6481__auto__.call(null);(statearr_12245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_12245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__))
);
return c__6480__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12263 = {};return obj12263;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12265 = {};return obj12265;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12487 = (function (cs,ch,mult,meta12488){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12488 = meta12488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12487.cljs$lang$type = true;
cljs.core.async.t12487.cljs$lang$ctorStr = "cljs.core.async/t12487";
cljs.core.async.t12487.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12487");
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12489){var self__ = this;
var _12489__$1 = this;return self__.meta12488;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12489,meta12488__$1){var self__ = this;
var _12489__$1 = this;return (new cljs.core.async.t12487(self__.cs,self__.ch,self__.mult,meta12488__$1));
});})(cs))
;
cljs.core.async.__GT_t12487 = ((function (cs){
return (function __GT_t12487(cs__$1,ch__$1,mult__$1,meta12488){return (new cljs.core.async.t12487(cs__$1,ch__$1,mult__$1,meta12488));
});})(cs))
;
}
return (new cljs.core.async.t12487(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6480__auto___12708 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___12708,cs,m,dchan,dctr,done){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___12708,cs,m,dchan,dctr,done){
return (function (state_12620){var state_val_12621 = (state_12620[(1)]);if((state_val_12621 === (7)))
{var inst_12616 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12622_12709 = state_12620__$1;(statearr_12622_12709[(2)] = inst_12616);
(statearr_12622_12709[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (20)))
{var inst_12521 = (state_12620[(7)]);var inst_12531 = cljs.core.first.call(null,inst_12521);var inst_12532 = cljs.core.nth.call(null,inst_12531,(0),null);var inst_12533 = cljs.core.nth.call(null,inst_12531,(1),null);var state_12620__$1 = (function (){var statearr_12623 = state_12620;(statearr_12623[(8)] = inst_12532);
return statearr_12623;
})();if(cljs.core.truth_(inst_12533))
{var statearr_12624_12710 = state_12620__$1;(statearr_12624_12710[(1)] = (22));
} else
{var statearr_12625_12711 = state_12620__$1;(statearr_12625_12711[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (27)))
{var inst_12568 = (state_12620[(9)]);var inst_12563 = (state_12620[(10)]);var inst_12561 = (state_12620[(11)]);var inst_12492 = (state_12620[(12)]);var inst_12568__$1 = cljs.core._nth.call(null,inst_12561,inst_12563);var inst_12569 = cljs.core.async.put_BANG_.call(null,inst_12568__$1,inst_12492,done);var state_12620__$1 = (function (){var statearr_12626 = state_12620;(statearr_12626[(9)] = inst_12568__$1);
return statearr_12626;
})();if(cljs.core.truth_(inst_12569))
{var statearr_12627_12712 = state_12620__$1;(statearr_12627_12712[(1)] = (30));
} else
{var statearr_12628_12713 = state_12620__$1;(statearr_12628_12713[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (1)))
{var state_12620__$1 = state_12620;var statearr_12629_12714 = state_12620__$1;(statearr_12629_12714[(2)] = null);
(statearr_12629_12714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (24)))
{var inst_12521 = (state_12620[(7)]);var inst_12538 = (state_12620[(2)]);var inst_12539 = cljs.core.next.call(null,inst_12521);var inst_12501 = inst_12539;var inst_12502 = null;var inst_12503 = (0);var inst_12504 = (0);var state_12620__$1 = (function (){var statearr_12630 = state_12620;(statearr_12630[(13)] = inst_12538);
(statearr_12630[(14)] = inst_12501);
(statearr_12630[(15)] = inst_12502);
(statearr_12630[(16)] = inst_12503);
(statearr_12630[(17)] = inst_12504);
return statearr_12630;
})();var statearr_12631_12715 = state_12620__$1;(statearr_12631_12715[(2)] = null);
(statearr_12631_12715[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (39)))
{var state_12620__$1 = state_12620;var statearr_12635_12716 = state_12620__$1;(statearr_12635_12716[(2)] = null);
(statearr_12635_12716[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (4)))
{var inst_12492 = (state_12620[(12)]);var inst_12492__$1 = (state_12620[(2)]);var inst_12493 = (inst_12492__$1 == null);var state_12620__$1 = (function (){var statearr_12636 = state_12620;(statearr_12636[(12)] = inst_12492__$1);
return statearr_12636;
})();if(cljs.core.truth_(inst_12493))
{var statearr_12637_12717 = state_12620__$1;(statearr_12637_12717[(1)] = (5));
} else
{var statearr_12638_12718 = state_12620__$1;(statearr_12638_12718[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (15)))
{var inst_12501 = (state_12620[(14)]);var inst_12502 = (state_12620[(15)]);var inst_12503 = (state_12620[(16)]);var inst_12504 = (state_12620[(17)]);var inst_12517 = (state_12620[(2)]);var inst_12518 = (inst_12504 + (1));var tmp12632 = inst_12501;var tmp12633 = inst_12502;var tmp12634 = inst_12503;var inst_12501__$1 = tmp12632;var inst_12502__$1 = tmp12633;var inst_12503__$1 = tmp12634;var inst_12504__$1 = inst_12518;var state_12620__$1 = (function (){var statearr_12639 = state_12620;(statearr_12639[(14)] = inst_12501__$1);
(statearr_12639[(15)] = inst_12502__$1);
(statearr_12639[(16)] = inst_12503__$1);
(statearr_12639[(17)] = inst_12504__$1);
(statearr_12639[(18)] = inst_12517);
return statearr_12639;
})();var statearr_12640_12719 = state_12620__$1;(statearr_12640_12719[(2)] = null);
(statearr_12640_12719[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (21)))
{var inst_12542 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12644_12720 = state_12620__$1;(statearr_12644_12720[(2)] = inst_12542);
(statearr_12644_12720[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (31)))
{var inst_12568 = (state_12620[(9)]);var inst_12572 = done.call(null,null);var inst_12573 = cljs.core.async.untap_STAR_.call(null,m,inst_12568);var state_12620__$1 = (function (){var statearr_12645 = state_12620;(statearr_12645[(19)] = inst_12572);
return statearr_12645;
})();var statearr_12646_12721 = state_12620__$1;(statearr_12646_12721[(2)] = inst_12573);
(statearr_12646_12721[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (32)))
{var inst_12562 = (state_12620[(20)]);var inst_12563 = (state_12620[(10)]);var inst_12561 = (state_12620[(11)]);var inst_12560 = (state_12620[(21)]);var inst_12575 = (state_12620[(2)]);var inst_12576 = (inst_12563 + (1));var tmp12641 = inst_12562;var tmp12642 = inst_12561;var tmp12643 = inst_12560;var inst_12560__$1 = tmp12643;var inst_12561__$1 = tmp12642;var inst_12562__$1 = tmp12641;var inst_12563__$1 = inst_12576;var state_12620__$1 = (function (){var statearr_12647 = state_12620;(statearr_12647[(20)] = inst_12562__$1);
(statearr_12647[(22)] = inst_12575);
(statearr_12647[(10)] = inst_12563__$1);
(statearr_12647[(11)] = inst_12561__$1);
(statearr_12647[(21)] = inst_12560__$1);
return statearr_12647;
})();var statearr_12648_12722 = state_12620__$1;(statearr_12648_12722[(2)] = null);
(statearr_12648_12722[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (40)))
{var inst_12588 = (state_12620[(23)]);var inst_12592 = done.call(null,null);var inst_12593 = cljs.core.async.untap_STAR_.call(null,m,inst_12588);var state_12620__$1 = (function (){var statearr_12649 = state_12620;(statearr_12649[(24)] = inst_12592);
return statearr_12649;
})();var statearr_12650_12723 = state_12620__$1;(statearr_12650_12723[(2)] = inst_12593);
(statearr_12650_12723[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (33)))
{var inst_12579 = (state_12620[(25)]);var inst_12581 = cljs.core.chunked_seq_QMARK_.call(null,inst_12579);var state_12620__$1 = state_12620;if(inst_12581)
{var statearr_12651_12724 = state_12620__$1;(statearr_12651_12724[(1)] = (36));
} else
{var statearr_12652_12725 = state_12620__$1;(statearr_12652_12725[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (13)))
{var inst_12511 = (state_12620[(26)]);var inst_12514 = cljs.core.async.close_BANG_.call(null,inst_12511);var state_12620__$1 = state_12620;var statearr_12653_12726 = state_12620__$1;(statearr_12653_12726[(2)] = inst_12514);
(statearr_12653_12726[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (22)))
{var inst_12532 = (state_12620[(8)]);var inst_12535 = cljs.core.async.close_BANG_.call(null,inst_12532);var state_12620__$1 = state_12620;var statearr_12654_12727 = state_12620__$1;(statearr_12654_12727[(2)] = inst_12535);
(statearr_12654_12727[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (36)))
{var inst_12579 = (state_12620[(25)]);var inst_12583 = cljs.core.chunk_first.call(null,inst_12579);var inst_12584 = cljs.core.chunk_rest.call(null,inst_12579);var inst_12585 = cljs.core.count.call(null,inst_12583);var inst_12560 = inst_12584;var inst_12561 = inst_12583;var inst_12562 = inst_12585;var inst_12563 = (0);var state_12620__$1 = (function (){var statearr_12655 = state_12620;(statearr_12655[(20)] = inst_12562);
(statearr_12655[(10)] = inst_12563);
(statearr_12655[(11)] = inst_12561);
(statearr_12655[(21)] = inst_12560);
return statearr_12655;
})();var statearr_12656_12728 = state_12620__$1;(statearr_12656_12728[(2)] = null);
(statearr_12656_12728[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (41)))
{var inst_12579 = (state_12620[(25)]);var inst_12595 = (state_12620[(2)]);var inst_12596 = cljs.core.next.call(null,inst_12579);var inst_12560 = inst_12596;var inst_12561 = null;var inst_12562 = (0);var inst_12563 = (0);var state_12620__$1 = (function (){var statearr_12657 = state_12620;(statearr_12657[(27)] = inst_12595);
(statearr_12657[(20)] = inst_12562);
(statearr_12657[(10)] = inst_12563);
(statearr_12657[(11)] = inst_12561);
(statearr_12657[(21)] = inst_12560);
return statearr_12657;
})();var statearr_12658_12729 = state_12620__$1;(statearr_12658_12729[(2)] = null);
(statearr_12658_12729[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (43)))
{var state_12620__$1 = state_12620;var statearr_12659_12730 = state_12620__$1;(statearr_12659_12730[(2)] = null);
(statearr_12659_12730[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (29)))
{var inst_12604 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12660_12731 = state_12620__$1;(statearr_12660_12731[(2)] = inst_12604);
(statearr_12660_12731[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (44)))
{var inst_12613 = (state_12620[(2)]);var state_12620__$1 = (function (){var statearr_12661 = state_12620;(statearr_12661[(28)] = inst_12613);
return statearr_12661;
})();var statearr_12662_12732 = state_12620__$1;(statearr_12662_12732[(2)] = null);
(statearr_12662_12732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (6)))
{var inst_12552 = (state_12620[(29)]);var inst_12551 = cljs.core.deref.call(null,cs);var inst_12552__$1 = cljs.core.keys.call(null,inst_12551);var inst_12553 = cljs.core.count.call(null,inst_12552__$1);var inst_12554 = cljs.core.reset_BANG_.call(null,dctr,inst_12553);var inst_12559 = cljs.core.seq.call(null,inst_12552__$1);var inst_12560 = inst_12559;var inst_12561 = null;var inst_12562 = (0);var inst_12563 = (0);var state_12620__$1 = (function (){var statearr_12663 = state_12620;(statearr_12663[(29)] = inst_12552__$1);
(statearr_12663[(30)] = inst_12554);
(statearr_12663[(20)] = inst_12562);
(statearr_12663[(10)] = inst_12563);
(statearr_12663[(11)] = inst_12561);
(statearr_12663[(21)] = inst_12560);
return statearr_12663;
})();var statearr_12664_12733 = state_12620__$1;(statearr_12664_12733[(2)] = null);
(statearr_12664_12733[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (28)))
{var inst_12579 = (state_12620[(25)]);var inst_12560 = (state_12620[(21)]);var inst_12579__$1 = cljs.core.seq.call(null,inst_12560);var state_12620__$1 = (function (){var statearr_12665 = state_12620;(statearr_12665[(25)] = inst_12579__$1);
return statearr_12665;
})();if(inst_12579__$1)
{var statearr_12666_12734 = state_12620__$1;(statearr_12666_12734[(1)] = (33));
} else
{var statearr_12667_12735 = state_12620__$1;(statearr_12667_12735[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (25)))
{var inst_12562 = (state_12620[(20)]);var inst_12563 = (state_12620[(10)]);var inst_12565 = (inst_12563 < inst_12562);var inst_12566 = inst_12565;var state_12620__$1 = state_12620;if(cljs.core.truth_(inst_12566))
{var statearr_12668_12736 = state_12620__$1;(statearr_12668_12736[(1)] = (27));
} else
{var statearr_12669_12737 = state_12620__$1;(statearr_12669_12737[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (34)))
{var state_12620__$1 = state_12620;var statearr_12670_12738 = state_12620__$1;(statearr_12670_12738[(2)] = null);
(statearr_12670_12738[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (17)))
{var state_12620__$1 = state_12620;var statearr_12671_12739 = state_12620__$1;(statearr_12671_12739[(2)] = null);
(statearr_12671_12739[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (3)))
{var inst_12618 = (state_12620[(2)]);var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12620__$1,inst_12618);
} else
{if((state_val_12621 === (12)))
{var inst_12547 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12672_12740 = state_12620__$1;(statearr_12672_12740[(2)] = inst_12547);
(statearr_12672_12740[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (2)))
{var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(4),ch);
} else
{if((state_val_12621 === (23)))
{var state_12620__$1 = state_12620;var statearr_12673_12741 = state_12620__$1;(statearr_12673_12741[(2)] = null);
(statearr_12673_12741[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (35)))
{var inst_12602 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12674_12742 = state_12620__$1;(statearr_12674_12742[(2)] = inst_12602);
(statearr_12674_12742[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (19)))
{var inst_12521 = (state_12620[(7)]);var inst_12525 = cljs.core.chunk_first.call(null,inst_12521);var inst_12526 = cljs.core.chunk_rest.call(null,inst_12521);var inst_12527 = cljs.core.count.call(null,inst_12525);var inst_12501 = inst_12526;var inst_12502 = inst_12525;var inst_12503 = inst_12527;var inst_12504 = (0);var state_12620__$1 = (function (){var statearr_12675 = state_12620;(statearr_12675[(14)] = inst_12501);
(statearr_12675[(15)] = inst_12502);
(statearr_12675[(16)] = inst_12503);
(statearr_12675[(17)] = inst_12504);
return statearr_12675;
})();var statearr_12676_12743 = state_12620__$1;(statearr_12676_12743[(2)] = null);
(statearr_12676_12743[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (11)))
{var inst_12501 = (state_12620[(14)]);var inst_12521 = (state_12620[(7)]);var inst_12521__$1 = cljs.core.seq.call(null,inst_12501);var state_12620__$1 = (function (){var statearr_12677 = state_12620;(statearr_12677[(7)] = inst_12521__$1);
return statearr_12677;
})();if(inst_12521__$1)
{var statearr_12678_12744 = state_12620__$1;(statearr_12678_12744[(1)] = (16));
} else
{var statearr_12679_12745 = state_12620__$1;(statearr_12679_12745[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (9)))
{var inst_12549 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12680_12746 = state_12620__$1;(statearr_12680_12746[(2)] = inst_12549);
(statearr_12680_12746[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (5)))
{var inst_12499 = cljs.core.deref.call(null,cs);var inst_12500 = cljs.core.seq.call(null,inst_12499);var inst_12501 = inst_12500;var inst_12502 = null;var inst_12503 = (0);var inst_12504 = (0);var state_12620__$1 = (function (){var statearr_12681 = state_12620;(statearr_12681[(14)] = inst_12501);
(statearr_12681[(15)] = inst_12502);
(statearr_12681[(16)] = inst_12503);
(statearr_12681[(17)] = inst_12504);
return statearr_12681;
})();var statearr_12682_12747 = state_12620__$1;(statearr_12682_12747[(2)] = null);
(statearr_12682_12747[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (14)))
{var state_12620__$1 = state_12620;var statearr_12683_12748 = state_12620__$1;(statearr_12683_12748[(2)] = null);
(statearr_12683_12748[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (45)))
{var inst_12610 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12684_12749 = state_12620__$1;(statearr_12684_12749[(2)] = inst_12610);
(statearr_12684_12749[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (26)))
{var inst_12552 = (state_12620[(29)]);var inst_12606 = (state_12620[(2)]);var inst_12607 = cljs.core.seq.call(null,inst_12552);var state_12620__$1 = (function (){var statearr_12685 = state_12620;(statearr_12685[(31)] = inst_12606);
return statearr_12685;
})();if(inst_12607)
{var statearr_12686_12750 = state_12620__$1;(statearr_12686_12750[(1)] = (42));
} else
{var statearr_12687_12751 = state_12620__$1;(statearr_12687_12751[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (16)))
{var inst_12521 = (state_12620[(7)]);var inst_12523 = cljs.core.chunked_seq_QMARK_.call(null,inst_12521);var state_12620__$1 = state_12620;if(inst_12523)
{var statearr_12688_12752 = state_12620__$1;(statearr_12688_12752[(1)] = (19));
} else
{var statearr_12689_12753 = state_12620__$1;(statearr_12689_12753[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (38)))
{var inst_12599 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12690_12754 = state_12620__$1;(statearr_12690_12754[(2)] = inst_12599);
(statearr_12690_12754[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (30)))
{var state_12620__$1 = state_12620;var statearr_12691_12755 = state_12620__$1;(statearr_12691_12755[(2)] = null);
(statearr_12691_12755[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (10)))
{var inst_12502 = (state_12620[(15)]);var inst_12504 = (state_12620[(17)]);var inst_12510 = cljs.core._nth.call(null,inst_12502,inst_12504);var inst_12511 = cljs.core.nth.call(null,inst_12510,(0),null);var inst_12512 = cljs.core.nth.call(null,inst_12510,(1),null);var state_12620__$1 = (function (){var statearr_12692 = state_12620;(statearr_12692[(26)] = inst_12511);
return statearr_12692;
})();if(cljs.core.truth_(inst_12512))
{var statearr_12693_12756 = state_12620__$1;(statearr_12693_12756[(1)] = (13));
} else
{var statearr_12694_12757 = state_12620__$1;(statearr_12694_12757[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (18)))
{var inst_12545 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12695_12758 = state_12620__$1;(statearr_12695_12758[(2)] = inst_12545);
(statearr_12695_12758[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (42)))
{var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(45),dchan);
} else
{if((state_val_12621 === (37)))
{var inst_12579 = (state_12620[(25)]);var inst_12588 = (state_12620[(23)]);var inst_12492 = (state_12620[(12)]);var inst_12588__$1 = cljs.core.first.call(null,inst_12579);var inst_12589 = cljs.core.async.put_BANG_.call(null,inst_12588__$1,inst_12492,done);var state_12620__$1 = (function (){var statearr_12696 = state_12620;(statearr_12696[(23)] = inst_12588__$1);
return statearr_12696;
})();if(cljs.core.truth_(inst_12589))
{var statearr_12697_12759 = state_12620__$1;(statearr_12697_12759[(1)] = (39));
} else
{var statearr_12698_12760 = state_12620__$1;(statearr_12698_12760[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (8)))
{var inst_12503 = (state_12620[(16)]);var inst_12504 = (state_12620[(17)]);var inst_12506 = (inst_12504 < inst_12503);var inst_12507 = inst_12506;var state_12620__$1 = state_12620;if(cljs.core.truth_(inst_12507))
{var statearr_12699_12761 = state_12620__$1;(statearr_12699_12761[(1)] = (10));
} else
{var statearr_12700_12762 = state_12620__$1;(statearr_12700_12762[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___12708,cs,m,dchan,dctr,done))
;return ((function (switch__6465__auto__,c__6480__auto___12708,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12704[(0)] = state_machine__6466__auto__);
(statearr_12704[(1)] = (1));
return statearr_12704;
});
var state_machine__6466__auto____1 = (function (state_12620){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12620);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12705){if((e12705 instanceof Object))
{var ex__6469__auto__ = e12705;var statearr_12706_12763 = state_12620;(statearr_12706_12763[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12705;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12764 = state_12620;
state_12620 = G__12764;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12620){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___12708,cs,m,dchan,dctr,done))
})();var state__6482__auto__ = (function (){var statearr_12707 = f__6481__auto__.call(null);(statearr_12707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12708);
return statearr_12707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___12708,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12766 = {};return obj12766;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12767){var map__12772 = p__12767;var map__12772__$1 = ((cljs.core.seq_QMARK_.call(null,map__12772))?cljs.core.apply.call(null,cljs.core.hash_map,map__12772):map__12772);var opts = map__12772__$1;var statearr_12773_12776 = state;(statearr_12773_12776[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12772,map__12772__$1,opts){
return (function (val){var statearr_12774_12777 = state;(statearr_12774_12777[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12772,map__12772__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_12775_12778 = state;(statearr_12775_12778[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12767 = null;if (arguments.length > 3) {
  p__12767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12767);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12779){
var state = cljs.core.first(arglist__12779);
arglist__12779 = cljs.core.next(arglist__12779);
var cont_block = cljs.core.first(arglist__12779);
arglist__12779 = cljs.core.next(arglist__12779);
var ports = cljs.core.first(arglist__12779);
var p__12767 = cljs.core.rest(arglist__12779);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12767);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12899 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12900){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12900 = meta12900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12899.cljs$lang$type = true;
cljs.core.async.t12899.cljs$lang$ctorStr = "cljs.core.async/t12899";
cljs.core.async.t12899.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12899");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12899.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12901){var self__ = this;
var _12901__$1 = this;return self__.meta12900;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12901,meta12900__$1){var self__ = this;
var _12901__$1 = this;return (new cljs.core.async.t12899(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12900__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12899 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12899(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12900){return (new cljs.core.async.t12899(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12900));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12899(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6480__auto___13018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13018,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13018,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12971){var state_val_12972 = (state_12971[(1)]);if((state_val_12972 === (7)))
{var inst_12915 = (state_12971[(7)]);var inst_12920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12915);var state_12971__$1 = state_12971;var statearr_12973_13019 = state_12971__$1;(statearr_12973_13019[(2)] = inst_12920);
(statearr_12973_13019[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (20)))
{var inst_12930 = (state_12971[(8)]);var state_12971__$1 = state_12971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12971__$1,(23),out,inst_12930);
} else
{if((state_val_12972 === (1)))
{var inst_12905 = (state_12971[(9)]);var inst_12905__$1 = calc_state.call(null);var inst_12906 = cljs.core.seq_QMARK_.call(null,inst_12905__$1);var state_12971__$1 = (function (){var statearr_12974 = state_12971;(statearr_12974[(9)] = inst_12905__$1);
return statearr_12974;
})();if(inst_12906)
{var statearr_12975_13020 = state_12971__$1;(statearr_12975_13020[(1)] = (2));
} else
{var statearr_12976_13021 = state_12971__$1;(statearr_12976_13021[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (24)))
{var inst_12923 = (state_12971[(10)]);var inst_12915 = inst_12923;var state_12971__$1 = (function (){var statearr_12977 = state_12971;(statearr_12977[(7)] = inst_12915);
return statearr_12977;
})();var statearr_12978_13022 = state_12971__$1;(statearr_12978_13022[(2)] = null);
(statearr_12978_13022[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (4)))
{var inst_12905 = (state_12971[(9)]);var inst_12911 = (state_12971[(2)]);var inst_12912 = cljs.core.get.call(null,inst_12911,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12913 = cljs.core.get.call(null,inst_12911,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12914 = cljs.core.get.call(null,inst_12911,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12915 = inst_12905;var state_12971__$1 = (function (){var statearr_12979 = state_12971;(statearr_12979[(7)] = inst_12915);
(statearr_12979[(11)] = inst_12913);
(statearr_12979[(12)] = inst_12912);
(statearr_12979[(13)] = inst_12914);
return statearr_12979;
})();var statearr_12980_13023 = state_12971__$1;(statearr_12980_13023[(2)] = null);
(statearr_12980_13023[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (15)))
{var state_12971__$1 = state_12971;var statearr_12981_13024 = state_12971__$1;(statearr_12981_13024[(2)] = null);
(statearr_12981_13024[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (21)))
{var inst_12923 = (state_12971[(10)]);var inst_12915 = inst_12923;var state_12971__$1 = (function (){var statearr_12982 = state_12971;(statearr_12982[(7)] = inst_12915);
return statearr_12982;
})();var statearr_12983_13025 = state_12971__$1;(statearr_12983_13025[(2)] = null);
(statearr_12983_13025[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (13)))
{var inst_12967 = (state_12971[(2)]);var state_12971__$1 = state_12971;var statearr_12984_13026 = state_12971__$1;(statearr_12984_13026[(2)] = inst_12967);
(statearr_12984_13026[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (22)))
{var inst_12965 = (state_12971[(2)]);var state_12971__$1 = state_12971;var statearr_12985_13027 = state_12971__$1;(statearr_12985_13027[(2)] = inst_12965);
(statearr_12985_13027[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (6)))
{var inst_12969 = (state_12971[(2)]);var state_12971__$1 = state_12971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12971__$1,inst_12969);
} else
{if((state_val_12972 === (25)))
{var state_12971__$1 = state_12971;var statearr_12986_13028 = state_12971__$1;(statearr_12986_13028[(2)] = null);
(statearr_12986_13028[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (17)))
{var inst_12945 = (state_12971[(14)]);var state_12971__$1 = state_12971;var statearr_12987_13029 = state_12971__$1;(statearr_12987_13029[(2)] = inst_12945);
(statearr_12987_13029[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (3)))
{var inst_12905 = (state_12971[(9)]);var state_12971__$1 = state_12971;var statearr_12988_13030 = state_12971__$1;(statearr_12988_13030[(2)] = inst_12905);
(statearr_12988_13030[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (12)))
{var inst_12945 = (state_12971[(14)]);var inst_12926 = (state_12971[(15)]);var inst_12931 = (state_12971[(16)]);var inst_12945__$1 = inst_12926.call(null,inst_12931);var state_12971__$1 = (function (){var statearr_12989 = state_12971;(statearr_12989[(14)] = inst_12945__$1);
return statearr_12989;
})();if(cljs.core.truth_(inst_12945__$1))
{var statearr_12990_13031 = state_12971__$1;(statearr_12990_13031[(1)] = (17));
} else
{var statearr_12991_13032 = state_12971__$1;(statearr_12991_13032[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (2)))
{var inst_12905 = (state_12971[(9)]);var inst_12908 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12905);var state_12971__$1 = state_12971;var statearr_12992_13033 = state_12971__$1;(statearr_12992_13033[(2)] = inst_12908);
(statearr_12992_13033[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (23)))
{var inst_12956 = (state_12971[(2)]);var state_12971__$1 = state_12971;if(cljs.core.truth_(inst_12956))
{var statearr_12993_13034 = state_12971__$1;(statearr_12993_13034[(1)] = (24));
} else
{var statearr_12994_13035 = state_12971__$1;(statearr_12994_13035[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (19)))
{var inst_12953 = (state_12971[(2)]);var state_12971__$1 = state_12971;if(cljs.core.truth_(inst_12953))
{var statearr_12995_13036 = state_12971__$1;(statearr_12995_13036[(1)] = (20));
} else
{var statearr_12996_13037 = state_12971__$1;(statearr_12996_13037[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (11)))
{var inst_12930 = (state_12971[(8)]);var inst_12936 = (inst_12930 == null);var state_12971__$1 = state_12971;if(cljs.core.truth_(inst_12936))
{var statearr_12997_13038 = state_12971__$1;(statearr_12997_13038[(1)] = (14));
} else
{var statearr_12998_13039 = state_12971__$1;(statearr_12998_13039[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (9)))
{var inst_12923 = (state_12971[(10)]);var inst_12923__$1 = (state_12971[(2)]);var inst_12924 = cljs.core.get.call(null,inst_12923__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12925 = cljs.core.get.call(null,inst_12923__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12926 = cljs.core.get.call(null,inst_12923__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12971__$1 = (function (){var statearr_12999 = state_12971;(statearr_12999[(10)] = inst_12923__$1);
(statearr_12999[(15)] = inst_12926);
(statearr_12999[(17)] = inst_12925);
return statearr_12999;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_12971__$1,(10),inst_12924);
} else
{if((state_val_12972 === (5)))
{var inst_12915 = (state_12971[(7)]);var inst_12918 = cljs.core.seq_QMARK_.call(null,inst_12915);var state_12971__$1 = state_12971;if(inst_12918)
{var statearr_13000_13040 = state_12971__$1;(statearr_13000_13040[(1)] = (7));
} else
{var statearr_13001_13041 = state_12971__$1;(statearr_13001_13041[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (14)))
{var inst_12931 = (state_12971[(16)]);var inst_12938 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12931);var state_12971__$1 = state_12971;var statearr_13002_13042 = state_12971__$1;(statearr_13002_13042[(2)] = inst_12938);
(statearr_13002_13042[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (26)))
{var inst_12961 = (state_12971[(2)]);var state_12971__$1 = state_12971;var statearr_13003_13043 = state_12971__$1;(statearr_13003_13043[(2)] = inst_12961);
(statearr_13003_13043[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (16)))
{var inst_12941 = (state_12971[(2)]);var inst_12942 = calc_state.call(null);var inst_12915 = inst_12942;var state_12971__$1 = (function (){var statearr_13004 = state_12971;(statearr_13004[(7)] = inst_12915);
(statearr_13004[(18)] = inst_12941);
return statearr_13004;
})();var statearr_13005_13044 = state_12971__$1;(statearr_13005_13044[(2)] = null);
(statearr_13005_13044[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (10)))
{var inst_12931 = (state_12971[(16)]);var inst_12930 = (state_12971[(8)]);var inst_12929 = (state_12971[(2)]);var inst_12930__$1 = cljs.core.nth.call(null,inst_12929,(0),null);var inst_12931__$1 = cljs.core.nth.call(null,inst_12929,(1),null);var inst_12932 = (inst_12930__$1 == null);var inst_12933 = cljs.core._EQ_.call(null,inst_12931__$1,change);var inst_12934 = (inst_12932) || (inst_12933);var state_12971__$1 = (function (){var statearr_13006 = state_12971;(statearr_13006[(16)] = inst_12931__$1);
(statearr_13006[(8)] = inst_12930__$1);
return statearr_13006;
})();if(cljs.core.truth_(inst_12934))
{var statearr_13007_13045 = state_12971__$1;(statearr_13007_13045[(1)] = (11));
} else
{var statearr_13008_13046 = state_12971__$1;(statearr_13008_13046[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (18)))
{var inst_12926 = (state_12971[(15)]);var inst_12931 = (state_12971[(16)]);var inst_12925 = (state_12971[(17)]);var inst_12948 = cljs.core.empty_QMARK_.call(null,inst_12926);var inst_12949 = inst_12925.call(null,inst_12931);var inst_12950 = cljs.core.not.call(null,inst_12949);var inst_12951 = (inst_12948) && (inst_12950);var state_12971__$1 = state_12971;var statearr_13009_13047 = state_12971__$1;(statearr_13009_13047[(2)] = inst_12951);
(statearr_13009_13047[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12972 === (8)))
{var inst_12915 = (state_12971[(7)]);var state_12971__$1 = state_12971;var statearr_13010_13048 = state_12971__$1;(statearr_13010_13048[(2)] = inst_12915);
(statearr_13010_13048[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13018,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6465__auto__,c__6480__auto___13018,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13014[(0)] = state_machine__6466__auto__);
(statearr_13014[(1)] = (1));
return statearr_13014;
});
var state_machine__6466__auto____1 = (function (state_12971){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12971);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13015){if((e13015 instanceof Object))
{var ex__6469__auto__ = e13015;var statearr_13016_13049 = state_12971;(statearr_13016_13049[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13050 = state_12971;
state_12971 = G__13050;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12971){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13018,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6482__auto__ = (function (){var statearr_13017 = f__6481__auto__.call(null);(statearr_13017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13018);
return statearr_13017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13018,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13052 = {};return obj13052;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13053_SHARP_){if(cljs.core.truth_(p1__13053_SHARP_.call(null,topic)))
{return p1__13053_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13053_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13176 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13176 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13177){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13177 = meta13177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13176.cljs$lang$type = true;
cljs.core.async.t13176.cljs$lang$ctorStr = "cljs.core.async/t13176";
cljs.core.async.t13176.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13176");
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13176.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13178){var self__ = this;
var _13178__$1 = this;return self__.meta13177;
});})(mults,ensure_mult))
;
cljs.core.async.t13176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13178,meta13177__$1){var self__ = this;
var _13178__$1 = this;return (new cljs.core.async.t13176(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13177__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13176 = ((function (mults,ensure_mult){
return (function __GT_t13176(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13177){return (new cljs.core.async.t13176(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13177));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13176(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6480__auto___13298 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13298,mults,ensure_mult,p){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13298,mults,ensure_mult,p){
return (function (state_13250){var state_val_13251 = (state_13250[(1)]);if((state_val_13251 === (7)))
{var inst_13246 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13252_13299 = state_13250__$1;(statearr_13252_13299[(2)] = inst_13246);
(statearr_13252_13299[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (20)))
{var state_13250__$1 = state_13250;var statearr_13253_13300 = state_13250__$1;(statearr_13253_13300[(2)] = null);
(statearr_13253_13300[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (1)))
{var state_13250__$1 = state_13250;var statearr_13254_13301 = state_13250__$1;(statearr_13254_13301[(2)] = null);
(statearr_13254_13301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (24)))
{var inst_13229 = (state_13250[(7)]);var inst_13238 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13229);var state_13250__$1 = state_13250;var statearr_13255_13302 = state_13250__$1;(statearr_13255_13302[(2)] = inst_13238);
(statearr_13255_13302[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (4)))
{var inst_13181 = (state_13250[(8)]);var inst_13181__$1 = (state_13250[(2)]);var inst_13182 = (inst_13181__$1 == null);var state_13250__$1 = (function (){var statearr_13256 = state_13250;(statearr_13256[(8)] = inst_13181__$1);
return statearr_13256;
})();if(cljs.core.truth_(inst_13182))
{var statearr_13257_13303 = state_13250__$1;(statearr_13257_13303[(1)] = (5));
} else
{var statearr_13258_13304 = state_13250__$1;(statearr_13258_13304[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (15)))
{var inst_13223 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13259_13305 = state_13250__$1;(statearr_13259_13305[(2)] = inst_13223);
(statearr_13259_13305[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (21)))
{var inst_13243 = (state_13250[(2)]);var state_13250__$1 = (function (){var statearr_13260 = state_13250;(statearr_13260[(9)] = inst_13243);
return statearr_13260;
})();var statearr_13261_13306 = state_13250__$1;(statearr_13261_13306[(2)] = null);
(statearr_13261_13306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (13)))
{var inst_13205 = (state_13250[(10)]);var inst_13207 = cljs.core.chunked_seq_QMARK_.call(null,inst_13205);var state_13250__$1 = state_13250;if(inst_13207)
{var statearr_13262_13307 = state_13250__$1;(statearr_13262_13307[(1)] = (16));
} else
{var statearr_13263_13308 = state_13250__$1;(statearr_13263_13308[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (22)))
{var inst_13235 = (state_13250[(2)]);var state_13250__$1 = state_13250;if(cljs.core.truth_(inst_13235))
{var statearr_13264_13309 = state_13250__$1;(statearr_13264_13309[(1)] = (23));
} else
{var statearr_13265_13310 = state_13250__$1;(statearr_13265_13310[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (6)))
{var inst_13229 = (state_13250[(7)]);var inst_13181 = (state_13250[(8)]);var inst_13231 = (state_13250[(11)]);var inst_13229__$1 = topic_fn.call(null,inst_13181);var inst_13230 = cljs.core.deref.call(null,mults);var inst_13231__$1 = cljs.core.get.call(null,inst_13230,inst_13229__$1);var state_13250__$1 = (function (){var statearr_13266 = state_13250;(statearr_13266[(7)] = inst_13229__$1);
(statearr_13266[(11)] = inst_13231__$1);
return statearr_13266;
})();if(cljs.core.truth_(inst_13231__$1))
{var statearr_13267_13311 = state_13250__$1;(statearr_13267_13311[(1)] = (19));
} else
{var statearr_13268_13312 = state_13250__$1;(statearr_13268_13312[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (25)))
{var inst_13240 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13269_13313 = state_13250__$1;(statearr_13269_13313[(2)] = inst_13240);
(statearr_13269_13313[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (17)))
{var inst_13205 = (state_13250[(10)]);var inst_13214 = cljs.core.first.call(null,inst_13205);var inst_13215 = cljs.core.async.muxch_STAR_.call(null,inst_13214);var inst_13216 = cljs.core.async.close_BANG_.call(null,inst_13215);var inst_13217 = cljs.core.next.call(null,inst_13205);var inst_13191 = inst_13217;var inst_13192 = null;var inst_13193 = (0);var inst_13194 = (0);var state_13250__$1 = (function (){var statearr_13270 = state_13250;(statearr_13270[(12)] = inst_13216);
(statearr_13270[(13)] = inst_13191);
(statearr_13270[(14)] = inst_13192);
(statearr_13270[(15)] = inst_13194);
(statearr_13270[(16)] = inst_13193);
return statearr_13270;
})();var statearr_13271_13314 = state_13250__$1;(statearr_13271_13314[(2)] = null);
(statearr_13271_13314[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (3)))
{var inst_13248 = (state_13250[(2)]);var state_13250__$1 = state_13250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13250__$1,inst_13248);
} else
{if((state_val_13251 === (12)))
{var inst_13225 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13272_13315 = state_13250__$1;(statearr_13272_13315[(2)] = inst_13225);
(statearr_13272_13315[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (2)))
{var state_13250__$1 = state_13250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13250__$1,(4),ch);
} else
{if((state_val_13251 === (23)))
{var state_13250__$1 = state_13250;var statearr_13273_13316 = state_13250__$1;(statearr_13273_13316[(2)] = null);
(statearr_13273_13316[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (19)))
{var inst_13181 = (state_13250[(8)]);var inst_13231 = (state_13250[(11)]);var inst_13233 = cljs.core.async.muxch_STAR_.call(null,inst_13231);var state_13250__$1 = state_13250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13250__$1,(22),inst_13233,inst_13181);
} else
{if((state_val_13251 === (11)))
{var inst_13191 = (state_13250[(13)]);var inst_13205 = (state_13250[(10)]);var inst_13205__$1 = cljs.core.seq.call(null,inst_13191);var state_13250__$1 = (function (){var statearr_13274 = state_13250;(statearr_13274[(10)] = inst_13205__$1);
return statearr_13274;
})();if(inst_13205__$1)
{var statearr_13275_13317 = state_13250__$1;(statearr_13275_13317[(1)] = (13));
} else
{var statearr_13276_13318 = state_13250__$1;(statearr_13276_13318[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (9)))
{var inst_13227 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13277_13319 = state_13250__$1;(statearr_13277_13319[(2)] = inst_13227);
(statearr_13277_13319[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (5)))
{var inst_13188 = cljs.core.deref.call(null,mults);var inst_13189 = cljs.core.vals.call(null,inst_13188);var inst_13190 = cljs.core.seq.call(null,inst_13189);var inst_13191 = inst_13190;var inst_13192 = null;var inst_13193 = (0);var inst_13194 = (0);var state_13250__$1 = (function (){var statearr_13278 = state_13250;(statearr_13278[(13)] = inst_13191);
(statearr_13278[(14)] = inst_13192);
(statearr_13278[(15)] = inst_13194);
(statearr_13278[(16)] = inst_13193);
return statearr_13278;
})();var statearr_13279_13320 = state_13250__$1;(statearr_13279_13320[(2)] = null);
(statearr_13279_13320[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (14)))
{var state_13250__$1 = state_13250;var statearr_13283_13321 = state_13250__$1;(statearr_13283_13321[(2)] = null);
(statearr_13283_13321[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (16)))
{var inst_13205 = (state_13250[(10)]);var inst_13209 = cljs.core.chunk_first.call(null,inst_13205);var inst_13210 = cljs.core.chunk_rest.call(null,inst_13205);var inst_13211 = cljs.core.count.call(null,inst_13209);var inst_13191 = inst_13210;var inst_13192 = inst_13209;var inst_13193 = inst_13211;var inst_13194 = (0);var state_13250__$1 = (function (){var statearr_13284 = state_13250;(statearr_13284[(13)] = inst_13191);
(statearr_13284[(14)] = inst_13192);
(statearr_13284[(15)] = inst_13194);
(statearr_13284[(16)] = inst_13193);
return statearr_13284;
})();var statearr_13285_13322 = state_13250__$1;(statearr_13285_13322[(2)] = null);
(statearr_13285_13322[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (10)))
{var inst_13191 = (state_13250[(13)]);var inst_13192 = (state_13250[(14)]);var inst_13194 = (state_13250[(15)]);var inst_13193 = (state_13250[(16)]);var inst_13199 = cljs.core._nth.call(null,inst_13192,inst_13194);var inst_13200 = cljs.core.async.muxch_STAR_.call(null,inst_13199);var inst_13201 = cljs.core.async.close_BANG_.call(null,inst_13200);var inst_13202 = (inst_13194 + (1));var tmp13280 = inst_13191;var tmp13281 = inst_13192;var tmp13282 = inst_13193;var inst_13191__$1 = tmp13280;var inst_13192__$1 = tmp13281;var inst_13193__$1 = tmp13282;var inst_13194__$1 = inst_13202;var state_13250__$1 = (function (){var statearr_13286 = state_13250;(statearr_13286[(13)] = inst_13191__$1);
(statearr_13286[(14)] = inst_13192__$1);
(statearr_13286[(15)] = inst_13194__$1);
(statearr_13286[(17)] = inst_13201);
(statearr_13286[(16)] = inst_13193__$1);
return statearr_13286;
})();var statearr_13287_13323 = state_13250__$1;(statearr_13287_13323[(2)] = null);
(statearr_13287_13323[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (18)))
{var inst_13220 = (state_13250[(2)]);var state_13250__$1 = state_13250;var statearr_13288_13324 = state_13250__$1;(statearr_13288_13324[(2)] = inst_13220);
(statearr_13288_13324[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13251 === (8)))
{var inst_13194 = (state_13250[(15)]);var inst_13193 = (state_13250[(16)]);var inst_13196 = (inst_13194 < inst_13193);var inst_13197 = inst_13196;var state_13250__$1 = state_13250;if(cljs.core.truth_(inst_13197))
{var statearr_13289_13325 = state_13250__$1;(statearr_13289_13325[(1)] = (10));
} else
{var statearr_13290_13326 = state_13250__$1;(statearr_13290_13326[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13298,mults,ensure_mult,p))
;return ((function (switch__6465__auto__,c__6480__auto___13298,mults,ensure_mult,p){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13294[(0)] = state_machine__6466__auto__);
(statearr_13294[(1)] = (1));
return statearr_13294;
});
var state_machine__6466__auto____1 = (function (state_13250){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13250);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13295){if((e13295 instanceof Object))
{var ex__6469__auto__ = e13295;var statearr_13296_13327 = state_13250;(statearr_13296_13327[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13250);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13295;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13328 = state_13250;
state_13250 = G__13328;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13250){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13298,mults,ensure_mult,p))
})();var state__6482__auto__ = (function (){var statearr_13297 = f__6481__auto__.call(null);(statearr_13297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13298);
return statearr_13297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13298,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6480__auto___13465 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13435){var state_val_13436 = (state_13435[(1)]);if((state_val_13436 === (7)))
{var state_13435__$1 = state_13435;var statearr_13437_13466 = state_13435__$1;(statearr_13437_13466[(2)] = null);
(statearr_13437_13466[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (1)))
{var state_13435__$1 = state_13435;var statearr_13438_13467 = state_13435__$1;(statearr_13438_13467[(2)] = null);
(statearr_13438_13467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (4)))
{var inst_13399 = (state_13435[(7)]);var inst_13401 = (inst_13399 < cnt);var state_13435__$1 = state_13435;if(cljs.core.truth_(inst_13401))
{var statearr_13439_13468 = state_13435__$1;(statearr_13439_13468[(1)] = (6));
} else
{var statearr_13440_13469 = state_13435__$1;(statearr_13440_13469[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (15)))
{var inst_13431 = (state_13435[(2)]);var state_13435__$1 = state_13435;var statearr_13441_13470 = state_13435__$1;(statearr_13441_13470[(2)] = inst_13431);
(statearr_13441_13470[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (13)))
{var inst_13424 = cljs.core.async.close_BANG_.call(null,out);var state_13435__$1 = state_13435;var statearr_13442_13471 = state_13435__$1;(statearr_13442_13471[(2)] = inst_13424);
(statearr_13442_13471[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (6)))
{var state_13435__$1 = state_13435;var statearr_13443_13472 = state_13435__$1;(statearr_13443_13472[(2)] = null);
(statearr_13443_13472[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (3)))
{var inst_13433 = (state_13435[(2)]);var state_13435__$1 = state_13435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13435__$1,inst_13433);
} else
{if((state_val_13436 === (12)))
{var inst_13421 = (state_13435[(8)]);var inst_13421__$1 = (state_13435[(2)]);var inst_13422 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13421__$1);var state_13435__$1 = (function (){var statearr_13444 = state_13435;(statearr_13444[(8)] = inst_13421__$1);
return statearr_13444;
})();if(cljs.core.truth_(inst_13422))
{var statearr_13445_13473 = state_13435__$1;(statearr_13445_13473[(1)] = (13));
} else
{var statearr_13446_13474 = state_13435__$1;(statearr_13446_13474[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (2)))
{var inst_13398 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13399 = (0);var state_13435__$1 = (function (){var statearr_13447 = state_13435;(statearr_13447[(7)] = inst_13399);
(statearr_13447[(9)] = inst_13398);
return statearr_13447;
})();var statearr_13448_13475 = state_13435__$1;(statearr_13448_13475[(2)] = null);
(statearr_13448_13475[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (11)))
{var inst_13399 = (state_13435[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13435,(10),Object,null,(9));var inst_13408 = chs__$1.call(null,inst_13399);var inst_13409 = done.call(null,inst_13399);var inst_13410 = cljs.core.async.take_BANG_.call(null,inst_13408,inst_13409);var state_13435__$1 = state_13435;var statearr_13449_13476 = state_13435__$1;(statearr_13449_13476[(2)] = inst_13410);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13435__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (9)))
{var inst_13399 = (state_13435[(7)]);var inst_13412 = (state_13435[(2)]);var inst_13413 = (inst_13399 + (1));var inst_13399__$1 = inst_13413;var state_13435__$1 = (function (){var statearr_13450 = state_13435;(statearr_13450[(7)] = inst_13399__$1);
(statearr_13450[(10)] = inst_13412);
return statearr_13450;
})();var statearr_13451_13477 = state_13435__$1;(statearr_13451_13477[(2)] = null);
(statearr_13451_13477[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (5)))
{var inst_13419 = (state_13435[(2)]);var state_13435__$1 = (function (){var statearr_13452 = state_13435;(statearr_13452[(11)] = inst_13419);
return statearr_13452;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13435__$1,(12),dchan);
} else
{if((state_val_13436 === (14)))
{var inst_13421 = (state_13435[(8)]);var inst_13426 = cljs.core.apply.call(null,f,inst_13421);var state_13435__$1 = state_13435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13435__$1,(16),out,inst_13426);
} else
{if((state_val_13436 === (16)))
{var inst_13428 = (state_13435[(2)]);var state_13435__$1 = (function (){var statearr_13453 = state_13435;(statearr_13453[(12)] = inst_13428);
return statearr_13453;
})();var statearr_13454_13478 = state_13435__$1;(statearr_13454_13478[(2)] = null);
(statearr_13454_13478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (10)))
{var inst_13403 = (state_13435[(2)]);var inst_13404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13435__$1 = (function (){var statearr_13455 = state_13435;(statearr_13455[(13)] = inst_13403);
return statearr_13455;
})();var statearr_13456_13479 = state_13435__$1;(statearr_13456_13479[(2)] = inst_13404);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13435__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (8)))
{var inst_13417 = (state_13435[(2)]);var state_13435__$1 = state_13435;var statearr_13457_13480 = state_13435__$1;(statearr_13457_13480[(2)] = inst_13417);
(statearr_13457_13480[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13465,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6465__auto__,c__6480__auto___13465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13461[(0)] = state_machine__6466__auto__);
(statearr_13461[(1)] = (1));
return statearr_13461;
});
var state_machine__6466__auto____1 = (function (state_13435){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13462){if((e13462 instanceof Object))
{var ex__6469__auto__ = e13462;var statearr_13463_13481 = state_13435;(statearr_13463_13481[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13462;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13482 = state_13435;
state_13435 = G__13482;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13435){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13465,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6482__auto__ = (function (){var statearr_13464 = f__6481__auto__.call(null);(statearr_13464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13465);
return statearr_13464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13465,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___13590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13590,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13590,out){
return (function (state_13566){var state_val_13567 = (state_13566[(1)]);if((state_val_13567 === (7)))
{var inst_13546 = (state_13566[(7)]);var inst_13545 = (state_13566[(8)]);var inst_13545__$1 = (state_13566[(2)]);var inst_13546__$1 = cljs.core.nth.call(null,inst_13545__$1,(0),null);var inst_13547 = cljs.core.nth.call(null,inst_13545__$1,(1),null);var inst_13548 = (inst_13546__$1 == null);var state_13566__$1 = (function (){var statearr_13568 = state_13566;(statearr_13568[(7)] = inst_13546__$1);
(statearr_13568[(8)] = inst_13545__$1);
(statearr_13568[(9)] = inst_13547);
return statearr_13568;
})();if(cljs.core.truth_(inst_13548))
{var statearr_13569_13591 = state_13566__$1;(statearr_13569_13591[(1)] = (8));
} else
{var statearr_13570_13592 = state_13566__$1;(statearr_13570_13592[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (1)))
{var inst_13537 = cljs.core.vec.call(null,chs);var inst_13538 = inst_13537;var state_13566__$1 = (function (){var statearr_13571 = state_13566;(statearr_13571[(10)] = inst_13538);
return statearr_13571;
})();var statearr_13572_13593 = state_13566__$1;(statearr_13572_13593[(2)] = null);
(statearr_13572_13593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (4)))
{var inst_13538 = (state_13566[(10)]);var state_13566__$1 = state_13566;return cljs.core.async.ioc_alts_BANG_.call(null,state_13566__$1,(7),inst_13538);
} else
{if((state_val_13567 === (6)))
{var inst_13562 = (state_13566[(2)]);var state_13566__$1 = state_13566;var statearr_13573_13594 = state_13566__$1;(statearr_13573_13594[(2)] = inst_13562);
(statearr_13573_13594[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (3)))
{var inst_13564 = (state_13566[(2)]);var state_13566__$1 = state_13566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13566__$1,inst_13564);
} else
{if((state_val_13567 === (2)))
{var inst_13538 = (state_13566[(10)]);var inst_13540 = cljs.core.count.call(null,inst_13538);var inst_13541 = (inst_13540 > (0));var state_13566__$1 = state_13566;if(cljs.core.truth_(inst_13541))
{var statearr_13575_13595 = state_13566__$1;(statearr_13575_13595[(1)] = (4));
} else
{var statearr_13576_13596 = state_13566__$1;(statearr_13576_13596[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (11)))
{var inst_13538 = (state_13566[(10)]);var inst_13555 = (state_13566[(2)]);var tmp13574 = inst_13538;var inst_13538__$1 = tmp13574;var state_13566__$1 = (function (){var statearr_13577 = state_13566;(statearr_13577[(11)] = inst_13555);
(statearr_13577[(10)] = inst_13538__$1);
return statearr_13577;
})();var statearr_13578_13597 = state_13566__$1;(statearr_13578_13597[(2)] = null);
(statearr_13578_13597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (9)))
{var inst_13546 = (state_13566[(7)]);var state_13566__$1 = state_13566;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13566__$1,(11),out,inst_13546);
} else
{if((state_val_13567 === (5)))
{var inst_13560 = cljs.core.async.close_BANG_.call(null,out);var state_13566__$1 = state_13566;var statearr_13579_13598 = state_13566__$1;(statearr_13579_13598[(2)] = inst_13560);
(statearr_13579_13598[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (10)))
{var inst_13558 = (state_13566[(2)]);var state_13566__$1 = state_13566;var statearr_13580_13599 = state_13566__$1;(statearr_13580_13599[(2)] = inst_13558);
(statearr_13580_13599[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13567 === (8)))
{var inst_13546 = (state_13566[(7)]);var inst_13545 = (state_13566[(8)]);var inst_13547 = (state_13566[(9)]);var inst_13538 = (state_13566[(10)]);var inst_13550 = (function (){var c = inst_13547;var v = inst_13546;var vec__13543 = inst_13545;var cs = inst_13538;return ((function (c,v,vec__13543,cs,inst_13546,inst_13545,inst_13547,inst_13538,state_val_13567,c__6480__auto___13590,out){
return (function (p1__13483_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13483_SHARP_);
});
;})(c,v,vec__13543,cs,inst_13546,inst_13545,inst_13547,inst_13538,state_val_13567,c__6480__auto___13590,out))
})();var inst_13551 = cljs.core.filterv.call(null,inst_13550,inst_13538);var inst_13538__$1 = inst_13551;var state_13566__$1 = (function (){var statearr_13581 = state_13566;(statearr_13581[(10)] = inst_13538__$1);
return statearr_13581;
})();var statearr_13582_13600 = state_13566__$1;(statearr_13582_13600[(2)] = null);
(statearr_13582_13600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13590,out))
;return ((function (switch__6465__auto__,c__6480__auto___13590,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13586 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13586[(0)] = state_machine__6466__auto__);
(statearr_13586[(1)] = (1));
return statearr_13586;
});
var state_machine__6466__auto____1 = (function (state_13566){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13566);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13587){if((e13587 instanceof Object))
{var ex__6469__auto__ = e13587;var statearr_13588_13601 = state_13566;(statearr_13588_13601[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13566);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13602 = state_13566;
state_13566 = G__13602;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13566){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13590,out))
})();var state__6482__auto__ = (function (){var statearr_13589 = f__6481__auto__.call(null);(statearr_13589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13590);
return statearr_13589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13590,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___13695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13695,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13695,out){
return (function (state_13672){var state_val_13673 = (state_13672[(1)]);if((state_val_13673 === (7)))
{var inst_13654 = (state_13672[(7)]);var inst_13654__$1 = (state_13672[(2)]);var inst_13655 = (inst_13654__$1 == null);var inst_13656 = cljs.core.not.call(null,inst_13655);var state_13672__$1 = (function (){var statearr_13674 = state_13672;(statearr_13674[(7)] = inst_13654__$1);
return statearr_13674;
})();if(inst_13656)
{var statearr_13675_13696 = state_13672__$1;(statearr_13675_13696[(1)] = (8));
} else
{var statearr_13676_13697 = state_13672__$1;(statearr_13676_13697[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (1)))
{var inst_13649 = (0);var state_13672__$1 = (function (){var statearr_13677 = state_13672;(statearr_13677[(8)] = inst_13649);
return statearr_13677;
})();var statearr_13678_13698 = state_13672__$1;(statearr_13678_13698[(2)] = null);
(statearr_13678_13698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (4)))
{var state_13672__$1 = state_13672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13672__$1,(7),ch);
} else
{if((state_val_13673 === (6)))
{var inst_13667 = (state_13672[(2)]);var state_13672__$1 = state_13672;var statearr_13679_13699 = state_13672__$1;(statearr_13679_13699[(2)] = inst_13667);
(statearr_13679_13699[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (3)))
{var inst_13669 = (state_13672[(2)]);var inst_13670 = cljs.core.async.close_BANG_.call(null,out);var state_13672__$1 = (function (){var statearr_13680 = state_13672;(statearr_13680[(9)] = inst_13669);
return statearr_13680;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13672__$1,inst_13670);
} else
{if((state_val_13673 === (2)))
{var inst_13649 = (state_13672[(8)]);var inst_13651 = (inst_13649 < n);var state_13672__$1 = state_13672;if(cljs.core.truth_(inst_13651))
{var statearr_13681_13700 = state_13672__$1;(statearr_13681_13700[(1)] = (4));
} else
{var statearr_13682_13701 = state_13672__$1;(statearr_13682_13701[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (11)))
{var inst_13649 = (state_13672[(8)]);var inst_13659 = (state_13672[(2)]);var inst_13660 = (inst_13649 + (1));var inst_13649__$1 = inst_13660;var state_13672__$1 = (function (){var statearr_13683 = state_13672;(statearr_13683[(10)] = inst_13659);
(statearr_13683[(8)] = inst_13649__$1);
return statearr_13683;
})();var statearr_13684_13702 = state_13672__$1;(statearr_13684_13702[(2)] = null);
(statearr_13684_13702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (9)))
{var state_13672__$1 = state_13672;var statearr_13685_13703 = state_13672__$1;(statearr_13685_13703[(2)] = null);
(statearr_13685_13703[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (5)))
{var state_13672__$1 = state_13672;var statearr_13686_13704 = state_13672__$1;(statearr_13686_13704[(2)] = null);
(statearr_13686_13704[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (10)))
{var inst_13664 = (state_13672[(2)]);var state_13672__$1 = state_13672;var statearr_13687_13705 = state_13672__$1;(statearr_13687_13705[(2)] = inst_13664);
(statearr_13687_13705[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13673 === (8)))
{var inst_13654 = (state_13672[(7)]);var state_13672__$1 = state_13672;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13672__$1,(11),out,inst_13654);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13695,out))
;return ((function (switch__6465__auto__,c__6480__auto___13695,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13691 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13691[(0)] = state_machine__6466__auto__);
(statearr_13691[(1)] = (1));
return statearr_13691;
});
var state_machine__6466__auto____1 = (function (state_13672){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13672);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13692){if((e13692 instanceof Object))
{var ex__6469__auto__ = e13692;var statearr_13693_13706 = state_13672;(statearr_13693_13706[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13672);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13692;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13707 = state_13672;
state_13672 = G__13707;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13672){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13695,out))
})();var state__6482__auto__ = (function (){var statearr_13694 = f__6481__auto__.call(null);(statearr_13694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13695);
return statearr_13694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13695,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13715 = (function (ch,f,map_LT_,meta13716){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13716 = meta13716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13715.cljs$lang$type = true;
cljs.core.async.t13715.cljs$lang$ctorStr = "cljs.core.async/t13715";
cljs.core.async.t13715.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13715");
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13718 = (function (fn1,_,meta13716,ch,f,map_LT_,meta13719){
this.fn1 = fn1;
this._ = _;
this.meta13716 = meta13716;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13719 = meta13719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13718.cljs$lang$type = true;
cljs.core.async.t13718.cljs$lang$ctorStr = "cljs.core.async/t13718";
cljs.core.async.t13718.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13718");
});})(___$1))
;
cljs.core.async.t13718.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13708_SHARP_){return f1.call(null,(((p1__13708_SHARP_ == null))?null:self__.f.call(null,p1__13708_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13720){var self__ = this;
var _13720__$1 = this;return self__.meta13719;
});})(___$1))
;
cljs.core.async.t13718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13720,meta13719__$1){var self__ = this;
var _13720__$1 = this;return (new cljs.core.async.t13718(self__.fn1,self__._,self__.meta13716,self__.ch,self__.f,self__.map_LT_,meta13719__$1));
});})(___$1))
;
cljs.core.async.__GT_t13718 = ((function (___$1){
return (function __GT_t13718(fn1__$1,___$2,meta13716__$1,ch__$2,f__$2,map_LT___$2,meta13719){return (new cljs.core.async.t13718(fn1__$1,___$2,meta13716__$1,ch__$2,f__$2,map_LT___$2,meta13719));
});})(___$1))
;
}
return (new cljs.core.async.t13718(fn1,___$1,self__.meta13716,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13717){var self__ = this;
var _13717__$1 = this;return self__.meta13716;
});
cljs.core.async.t13715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13717,meta13716__$1){var self__ = this;
var _13717__$1 = this;return (new cljs.core.async.t13715(self__.ch,self__.f,self__.map_LT_,meta13716__$1));
});
cljs.core.async.__GT_t13715 = (function __GT_t13715(ch__$1,f__$1,map_LT___$1,meta13716){return (new cljs.core.async.t13715(ch__$1,f__$1,map_LT___$1,meta13716));
});
}
return (new cljs.core.async.t13715(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13724 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13724 = (function (ch,f,map_GT_,meta13725){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13725 = meta13725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13724.cljs$lang$type = true;
cljs.core.async.t13724.cljs$lang$ctorStr = "cljs.core.async/t13724";
cljs.core.async.t13724.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13724");
});
cljs.core.async.t13724.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13724.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13724.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13726){var self__ = this;
var _13726__$1 = this;return self__.meta13725;
});
cljs.core.async.t13724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13726,meta13725__$1){var self__ = this;
var _13726__$1 = this;return (new cljs.core.async.t13724(self__.ch,self__.f,self__.map_GT_,meta13725__$1));
});
cljs.core.async.__GT_t13724 = (function __GT_t13724(ch__$1,f__$1,map_GT___$1,meta13725){return (new cljs.core.async.t13724(ch__$1,f__$1,map_GT___$1,meta13725));
});
}
return (new cljs.core.async.t13724(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13730 = (function (ch,p,filter_GT_,meta13731){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13731 = meta13731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13730.cljs$lang$type = true;
cljs.core.async.t13730.cljs$lang$ctorStr = "cljs.core.async/t13730";
cljs.core.async.t13730.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13730");
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13732){var self__ = this;
var _13732__$1 = this;return self__.meta13731;
});
cljs.core.async.t13730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13732,meta13731__$1){var self__ = this;
var _13732__$1 = this;return (new cljs.core.async.t13730(self__.ch,self__.p,self__.filter_GT_,meta13731__$1));
});
cljs.core.async.__GT_t13730 = (function __GT_t13730(ch__$1,p__$1,filter_GT___$1,meta13731){return (new cljs.core.async.t13730(ch__$1,p__$1,filter_GT___$1,meta13731));
});
}
return (new cljs.core.async.t13730(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___13815 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13815,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13815,out){
return (function (state_13794){var state_val_13795 = (state_13794[(1)]);if((state_val_13795 === (7)))
{var inst_13790 = (state_13794[(2)]);var state_13794__$1 = state_13794;var statearr_13796_13816 = state_13794__$1;(statearr_13796_13816[(2)] = inst_13790);
(statearr_13796_13816[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (1)))
{var state_13794__$1 = state_13794;var statearr_13797_13817 = state_13794__$1;(statearr_13797_13817[(2)] = null);
(statearr_13797_13817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (4)))
{var inst_13776 = (state_13794[(7)]);var inst_13776__$1 = (state_13794[(2)]);var inst_13777 = (inst_13776__$1 == null);var state_13794__$1 = (function (){var statearr_13798 = state_13794;(statearr_13798[(7)] = inst_13776__$1);
return statearr_13798;
})();if(cljs.core.truth_(inst_13777))
{var statearr_13799_13818 = state_13794__$1;(statearr_13799_13818[(1)] = (5));
} else
{var statearr_13800_13819 = state_13794__$1;(statearr_13800_13819[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (6)))
{var inst_13776 = (state_13794[(7)]);var inst_13781 = p.call(null,inst_13776);var state_13794__$1 = state_13794;if(cljs.core.truth_(inst_13781))
{var statearr_13801_13820 = state_13794__$1;(statearr_13801_13820[(1)] = (8));
} else
{var statearr_13802_13821 = state_13794__$1;(statearr_13802_13821[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (3)))
{var inst_13792 = (state_13794[(2)]);var state_13794__$1 = state_13794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13794__$1,inst_13792);
} else
{if((state_val_13795 === (2)))
{var state_13794__$1 = state_13794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13794__$1,(4),ch);
} else
{if((state_val_13795 === (11)))
{var inst_13784 = (state_13794[(2)]);var state_13794__$1 = state_13794;var statearr_13803_13822 = state_13794__$1;(statearr_13803_13822[(2)] = inst_13784);
(statearr_13803_13822[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (9)))
{var state_13794__$1 = state_13794;var statearr_13804_13823 = state_13794__$1;(statearr_13804_13823[(2)] = null);
(statearr_13804_13823[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (5)))
{var inst_13779 = cljs.core.async.close_BANG_.call(null,out);var state_13794__$1 = state_13794;var statearr_13805_13824 = state_13794__$1;(statearr_13805_13824[(2)] = inst_13779);
(statearr_13805_13824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (10)))
{var inst_13787 = (state_13794[(2)]);var state_13794__$1 = (function (){var statearr_13806 = state_13794;(statearr_13806[(8)] = inst_13787);
return statearr_13806;
})();var statearr_13807_13825 = state_13794__$1;(statearr_13807_13825[(2)] = null);
(statearr_13807_13825[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13795 === (8)))
{var inst_13776 = (state_13794[(7)]);var state_13794__$1 = state_13794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13794__$1,(11),out,inst_13776);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13815,out))
;return ((function (switch__6465__auto__,c__6480__auto___13815,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13811 = [null,null,null,null,null,null,null,null,null];(statearr_13811[(0)] = state_machine__6466__auto__);
(statearr_13811[(1)] = (1));
return statearr_13811;
});
var state_machine__6466__auto____1 = (function (state_13794){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13794);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13812){if((e13812 instanceof Object))
{var ex__6469__auto__ = e13812;var statearr_13813_13826 = state_13794;(statearr_13813_13826[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13812;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13827 = state_13794;
state_13794 = G__13827;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13794){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13815,out))
})();var state__6482__auto__ = (function (){var statearr_13814 = f__6481__auto__.call(null);(statearr_13814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13815);
return statearr_13814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13815,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__){
return (function (state_13993){var state_val_13994 = (state_13993[(1)]);if((state_val_13994 === (7)))
{var inst_13989 = (state_13993[(2)]);var state_13993__$1 = state_13993;var statearr_13995_14036 = state_13993__$1;(statearr_13995_14036[(2)] = inst_13989);
(statearr_13995_14036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (20)))
{var inst_13959 = (state_13993[(7)]);var inst_13970 = (state_13993[(2)]);var inst_13971 = cljs.core.next.call(null,inst_13959);var inst_13945 = inst_13971;var inst_13946 = null;var inst_13947 = (0);var inst_13948 = (0);var state_13993__$1 = (function (){var statearr_13996 = state_13993;(statearr_13996[(8)] = inst_13947);
(statearr_13996[(9)] = inst_13946);
(statearr_13996[(10)] = inst_13970);
(statearr_13996[(11)] = inst_13948);
(statearr_13996[(12)] = inst_13945);
return statearr_13996;
})();var statearr_13997_14037 = state_13993__$1;(statearr_13997_14037[(2)] = null);
(statearr_13997_14037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (1)))
{var state_13993__$1 = state_13993;var statearr_13998_14038 = state_13993__$1;(statearr_13998_14038[(2)] = null);
(statearr_13998_14038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (4)))
{var inst_13934 = (state_13993[(13)]);var inst_13934__$1 = (state_13993[(2)]);var inst_13935 = (inst_13934__$1 == null);var state_13993__$1 = (function (){var statearr_13999 = state_13993;(statearr_13999[(13)] = inst_13934__$1);
return statearr_13999;
})();if(cljs.core.truth_(inst_13935))
{var statearr_14000_14039 = state_13993__$1;(statearr_14000_14039[(1)] = (5));
} else
{var statearr_14001_14040 = state_13993__$1;(statearr_14001_14040[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (15)))
{var state_13993__$1 = state_13993;var statearr_14005_14041 = state_13993__$1;(statearr_14005_14041[(2)] = null);
(statearr_14005_14041[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (21)))
{var state_13993__$1 = state_13993;var statearr_14006_14042 = state_13993__$1;(statearr_14006_14042[(2)] = null);
(statearr_14006_14042[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (13)))
{var inst_13947 = (state_13993[(8)]);var inst_13946 = (state_13993[(9)]);var inst_13948 = (state_13993[(11)]);var inst_13945 = (state_13993[(12)]);var inst_13955 = (state_13993[(2)]);var inst_13956 = (inst_13948 + (1));var tmp14002 = inst_13947;var tmp14003 = inst_13946;var tmp14004 = inst_13945;var inst_13945__$1 = tmp14004;var inst_13946__$1 = tmp14003;var inst_13947__$1 = tmp14002;var inst_13948__$1 = inst_13956;var state_13993__$1 = (function (){var statearr_14007 = state_13993;(statearr_14007[(8)] = inst_13947__$1);
(statearr_14007[(9)] = inst_13946__$1);
(statearr_14007[(14)] = inst_13955);
(statearr_14007[(11)] = inst_13948__$1);
(statearr_14007[(12)] = inst_13945__$1);
return statearr_14007;
})();var statearr_14008_14043 = state_13993__$1;(statearr_14008_14043[(2)] = null);
(statearr_14008_14043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (22)))
{var state_13993__$1 = state_13993;var statearr_14009_14044 = state_13993__$1;(statearr_14009_14044[(2)] = null);
(statearr_14009_14044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (6)))
{var inst_13934 = (state_13993[(13)]);var inst_13943 = f.call(null,inst_13934);var inst_13944 = cljs.core.seq.call(null,inst_13943);var inst_13945 = inst_13944;var inst_13946 = null;var inst_13947 = (0);var inst_13948 = (0);var state_13993__$1 = (function (){var statearr_14010 = state_13993;(statearr_14010[(8)] = inst_13947);
(statearr_14010[(9)] = inst_13946);
(statearr_14010[(11)] = inst_13948);
(statearr_14010[(12)] = inst_13945);
return statearr_14010;
})();var statearr_14011_14045 = state_13993__$1;(statearr_14011_14045[(2)] = null);
(statearr_14011_14045[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (17)))
{var inst_13959 = (state_13993[(7)]);var inst_13963 = cljs.core.chunk_first.call(null,inst_13959);var inst_13964 = cljs.core.chunk_rest.call(null,inst_13959);var inst_13965 = cljs.core.count.call(null,inst_13963);var inst_13945 = inst_13964;var inst_13946 = inst_13963;var inst_13947 = inst_13965;var inst_13948 = (0);var state_13993__$1 = (function (){var statearr_14012 = state_13993;(statearr_14012[(8)] = inst_13947);
(statearr_14012[(9)] = inst_13946);
(statearr_14012[(11)] = inst_13948);
(statearr_14012[(12)] = inst_13945);
return statearr_14012;
})();var statearr_14013_14046 = state_13993__$1;(statearr_14013_14046[(2)] = null);
(statearr_14013_14046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (3)))
{var inst_13991 = (state_13993[(2)]);var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13993__$1,inst_13991);
} else
{if((state_val_13994 === (12)))
{var inst_13979 = (state_13993[(2)]);var state_13993__$1 = state_13993;var statearr_14014_14047 = state_13993__$1;(statearr_14014_14047[(2)] = inst_13979);
(statearr_14014_14047[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (2)))
{var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13993__$1,(4),in$);
} else
{if((state_val_13994 === (23)))
{var inst_13987 = (state_13993[(2)]);var state_13993__$1 = state_13993;var statearr_14015_14048 = state_13993__$1;(statearr_14015_14048[(2)] = inst_13987);
(statearr_14015_14048[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (19)))
{var inst_13974 = (state_13993[(2)]);var state_13993__$1 = state_13993;var statearr_14016_14049 = state_13993__$1;(statearr_14016_14049[(2)] = inst_13974);
(statearr_14016_14049[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (11)))
{var inst_13945 = (state_13993[(12)]);var inst_13959 = (state_13993[(7)]);var inst_13959__$1 = cljs.core.seq.call(null,inst_13945);var state_13993__$1 = (function (){var statearr_14017 = state_13993;(statearr_14017[(7)] = inst_13959__$1);
return statearr_14017;
})();if(inst_13959__$1)
{var statearr_14018_14050 = state_13993__$1;(statearr_14018_14050[(1)] = (14));
} else
{var statearr_14019_14051 = state_13993__$1;(statearr_14019_14051[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (9)))
{var inst_13981 = (state_13993[(2)]);var inst_13982 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13993__$1 = (function (){var statearr_14020 = state_13993;(statearr_14020[(15)] = inst_13981);
return statearr_14020;
})();if(cljs.core.truth_(inst_13982))
{var statearr_14021_14052 = state_13993__$1;(statearr_14021_14052[(1)] = (21));
} else
{var statearr_14022_14053 = state_13993__$1;(statearr_14022_14053[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (5)))
{var inst_13937 = cljs.core.async.close_BANG_.call(null,out);var state_13993__$1 = state_13993;var statearr_14023_14054 = state_13993__$1;(statearr_14023_14054[(2)] = inst_13937);
(statearr_14023_14054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (14)))
{var inst_13959 = (state_13993[(7)]);var inst_13961 = cljs.core.chunked_seq_QMARK_.call(null,inst_13959);var state_13993__$1 = state_13993;if(inst_13961)
{var statearr_14024_14055 = state_13993__$1;(statearr_14024_14055[(1)] = (17));
} else
{var statearr_14025_14056 = state_13993__$1;(statearr_14025_14056[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (16)))
{var inst_13977 = (state_13993[(2)]);var state_13993__$1 = state_13993;var statearr_14026_14057 = state_13993__$1;(statearr_14026_14057[(2)] = inst_13977);
(statearr_14026_14057[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13994 === (10)))
{var inst_13946 = (state_13993[(9)]);var inst_13948 = (state_13993[(11)]);var inst_13953 = cljs.core._nth.call(null,inst_13946,inst_13948);var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13993__$1,(13),out,inst_13953);
} else
{if((state_val_13994 === (18)))
{var inst_13959 = (state_13993[(7)]);var inst_13968 = cljs.core.first.call(null,inst_13959);var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13993__$1,(20),out,inst_13968);
} else
{if((state_val_13994 === (8)))
{var inst_13947 = (state_13993[(8)]);var inst_13948 = (state_13993[(11)]);var inst_13950 = (inst_13948 < inst_13947);var inst_13951 = inst_13950;var state_13993__$1 = state_13993;if(cljs.core.truth_(inst_13951))
{var statearr_14027_14058 = state_13993__$1;(statearr_14027_14058[(1)] = (10));
} else
{var statearr_14028_14059 = state_13993__$1;(statearr_14028_14059[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto__))
;return ((function (switch__6465__auto__,c__6480__auto__){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14032[(0)] = state_machine__6466__auto__);
(statearr_14032[(1)] = (1));
return statearr_14032;
});
var state_machine__6466__auto____1 = (function (state_13993){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13993);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14033){if((e14033 instanceof Object))
{var ex__6469__auto__ = e14033;var statearr_14034_14060 = state_13993;(statearr_14034_14060[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14061 = state_13993;
state_13993 = G__14061;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13993){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__))
})();var state__6482__auto__ = (function (){var statearr_14035 = f__6481__auto__.call(null);(statearr_14035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_14035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__))
);
return c__6480__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___14158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14158,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14158,out){
return (function (state_14133){var state_val_14134 = (state_14133[(1)]);if((state_val_14134 === (7)))
{var inst_14128 = (state_14133[(2)]);var state_14133__$1 = state_14133;var statearr_14135_14159 = state_14133__$1;(statearr_14135_14159[(2)] = inst_14128);
(statearr_14135_14159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (1)))
{var inst_14110 = null;var state_14133__$1 = (function (){var statearr_14136 = state_14133;(statearr_14136[(7)] = inst_14110);
return statearr_14136;
})();var statearr_14137_14160 = state_14133__$1;(statearr_14137_14160[(2)] = null);
(statearr_14137_14160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (4)))
{var inst_14113 = (state_14133[(8)]);var inst_14113__$1 = (state_14133[(2)]);var inst_14114 = (inst_14113__$1 == null);var inst_14115 = cljs.core.not.call(null,inst_14114);var state_14133__$1 = (function (){var statearr_14138 = state_14133;(statearr_14138[(8)] = inst_14113__$1);
return statearr_14138;
})();if(inst_14115)
{var statearr_14139_14161 = state_14133__$1;(statearr_14139_14161[(1)] = (5));
} else
{var statearr_14140_14162 = state_14133__$1;(statearr_14140_14162[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (6)))
{var state_14133__$1 = state_14133;var statearr_14141_14163 = state_14133__$1;(statearr_14141_14163[(2)] = null);
(statearr_14141_14163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (3)))
{var inst_14130 = (state_14133[(2)]);var inst_14131 = cljs.core.async.close_BANG_.call(null,out);var state_14133__$1 = (function (){var statearr_14142 = state_14133;(statearr_14142[(9)] = inst_14130);
return statearr_14142;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14133__$1,inst_14131);
} else
{if((state_val_14134 === (2)))
{var state_14133__$1 = state_14133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14133__$1,(4),ch);
} else
{if((state_val_14134 === (11)))
{var inst_14113 = (state_14133[(8)]);var inst_14122 = (state_14133[(2)]);var inst_14110 = inst_14113;var state_14133__$1 = (function (){var statearr_14143 = state_14133;(statearr_14143[(10)] = inst_14122);
(statearr_14143[(7)] = inst_14110);
return statearr_14143;
})();var statearr_14144_14164 = state_14133__$1;(statearr_14144_14164[(2)] = null);
(statearr_14144_14164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (9)))
{var inst_14113 = (state_14133[(8)]);var state_14133__$1 = state_14133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14133__$1,(11),out,inst_14113);
} else
{if((state_val_14134 === (5)))
{var inst_14110 = (state_14133[(7)]);var inst_14113 = (state_14133[(8)]);var inst_14117 = cljs.core._EQ_.call(null,inst_14113,inst_14110);var state_14133__$1 = state_14133;if(inst_14117)
{var statearr_14146_14165 = state_14133__$1;(statearr_14146_14165[(1)] = (8));
} else
{var statearr_14147_14166 = state_14133__$1;(statearr_14147_14166[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (10)))
{var inst_14125 = (state_14133[(2)]);var state_14133__$1 = state_14133;var statearr_14148_14167 = state_14133__$1;(statearr_14148_14167[(2)] = inst_14125);
(statearr_14148_14167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14134 === (8)))
{var inst_14110 = (state_14133[(7)]);var tmp14145 = inst_14110;var inst_14110__$1 = tmp14145;var state_14133__$1 = (function (){var statearr_14149 = state_14133;(statearr_14149[(7)] = inst_14110__$1);
return statearr_14149;
})();var statearr_14150_14168 = state_14133__$1;(statearr_14150_14168[(2)] = null);
(statearr_14150_14168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14158,out))
;return ((function (switch__6465__auto__,c__6480__auto___14158,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14154 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14154[(0)] = state_machine__6466__auto__);
(statearr_14154[(1)] = (1));
return statearr_14154;
});
var state_machine__6466__auto____1 = (function (state_14133){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14155){if((e14155 instanceof Object))
{var ex__6469__auto__ = e14155;var statearr_14156_14169 = state_14133;(statearr_14156_14169[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14170 = state_14133;
state_14133 = G__14170;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14133){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14158,out))
})();var state__6482__auto__ = (function (){var statearr_14157 = f__6481__auto__.call(null);(statearr_14157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14158);
return statearr_14157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14158,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___14305 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14305,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14305,out){
return (function (state_14275){var state_val_14276 = (state_14275[(1)]);if((state_val_14276 === (7)))
{var inst_14271 = (state_14275[(2)]);var state_14275__$1 = state_14275;var statearr_14277_14306 = state_14275__$1;(statearr_14277_14306[(2)] = inst_14271);
(statearr_14277_14306[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (1)))
{var inst_14238 = (new Array(n));var inst_14239 = inst_14238;var inst_14240 = (0);var state_14275__$1 = (function (){var statearr_14278 = state_14275;(statearr_14278[(7)] = inst_14240);
(statearr_14278[(8)] = inst_14239);
return statearr_14278;
})();var statearr_14279_14307 = state_14275__$1;(statearr_14279_14307[(2)] = null);
(statearr_14279_14307[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (4)))
{var inst_14243 = (state_14275[(9)]);var inst_14243__$1 = (state_14275[(2)]);var inst_14244 = (inst_14243__$1 == null);var inst_14245 = cljs.core.not.call(null,inst_14244);var state_14275__$1 = (function (){var statearr_14280 = state_14275;(statearr_14280[(9)] = inst_14243__$1);
return statearr_14280;
})();if(inst_14245)
{var statearr_14281_14308 = state_14275__$1;(statearr_14281_14308[(1)] = (5));
} else
{var statearr_14282_14309 = state_14275__$1;(statearr_14282_14309[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (15)))
{var inst_14265 = (state_14275[(2)]);var state_14275__$1 = state_14275;var statearr_14283_14310 = state_14275__$1;(statearr_14283_14310[(2)] = inst_14265);
(statearr_14283_14310[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (13)))
{var state_14275__$1 = state_14275;var statearr_14284_14311 = state_14275__$1;(statearr_14284_14311[(2)] = null);
(statearr_14284_14311[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (6)))
{var inst_14240 = (state_14275[(7)]);var inst_14261 = (inst_14240 > (0));var state_14275__$1 = state_14275;if(cljs.core.truth_(inst_14261))
{var statearr_14285_14312 = state_14275__$1;(statearr_14285_14312[(1)] = (12));
} else
{var statearr_14286_14313 = state_14275__$1;(statearr_14286_14313[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (3)))
{var inst_14273 = (state_14275[(2)]);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14275__$1,inst_14273);
} else
{if((state_val_14276 === (12)))
{var inst_14239 = (state_14275[(8)]);var inst_14263 = cljs.core.vec.call(null,inst_14239);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14275__$1,(15),out,inst_14263);
} else
{if((state_val_14276 === (2)))
{var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,(4),ch);
} else
{if((state_val_14276 === (11)))
{var inst_14255 = (state_14275[(2)]);var inst_14256 = (new Array(n));var inst_14239 = inst_14256;var inst_14240 = (0);var state_14275__$1 = (function (){var statearr_14287 = state_14275;(statearr_14287[(10)] = inst_14255);
(statearr_14287[(7)] = inst_14240);
(statearr_14287[(8)] = inst_14239);
return statearr_14287;
})();var statearr_14288_14314 = state_14275__$1;(statearr_14288_14314[(2)] = null);
(statearr_14288_14314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (9)))
{var inst_14239 = (state_14275[(8)]);var inst_14253 = cljs.core.vec.call(null,inst_14239);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14275__$1,(11),out,inst_14253);
} else
{if((state_val_14276 === (5)))
{var inst_14248 = (state_14275[(11)]);var inst_14240 = (state_14275[(7)]);var inst_14239 = (state_14275[(8)]);var inst_14243 = (state_14275[(9)]);var inst_14247 = (inst_14239[inst_14240] = inst_14243);var inst_14248__$1 = (inst_14240 + (1));var inst_14249 = (inst_14248__$1 < n);var state_14275__$1 = (function (){var statearr_14289 = state_14275;(statearr_14289[(11)] = inst_14248__$1);
(statearr_14289[(12)] = inst_14247);
return statearr_14289;
})();if(cljs.core.truth_(inst_14249))
{var statearr_14290_14315 = state_14275__$1;(statearr_14290_14315[(1)] = (8));
} else
{var statearr_14291_14316 = state_14275__$1;(statearr_14291_14316[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (14)))
{var inst_14268 = (state_14275[(2)]);var inst_14269 = cljs.core.async.close_BANG_.call(null,out);var state_14275__$1 = (function (){var statearr_14293 = state_14275;(statearr_14293[(13)] = inst_14268);
return statearr_14293;
})();var statearr_14294_14317 = state_14275__$1;(statearr_14294_14317[(2)] = inst_14269);
(statearr_14294_14317[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (10)))
{var inst_14259 = (state_14275[(2)]);var state_14275__$1 = state_14275;var statearr_14295_14318 = state_14275__$1;(statearr_14295_14318[(2)] = inst_14259);
(statearr_14295_14318[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14276 === (8)))
{var inst_14248 = (state_14275[(11)]);var inst_14239 = (state_14275[(8)]);var tmp14292 = inst_14239;var inst_14239__$1 = tmp14292;var inst_14240 = inst_14248;var state_14275__$1 = (function (){var statearr_14296 = state_14275;(statearr_14296[(7)] = inst_14240);
(statearr_14296[(8)] = inst_14239__$1);
return statearr_14296;
})();var statearr_14297_14319 = state_14275__$1;(statearr_14297_14319[(2)] = null);
(statearr_14297_14319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14305,out))
;return ((function (switch__6465__auto__,c__6480__auto___14305,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14301[(0)] = state_machine__6466__auto__);
(statearr_14301[(1)] = (1));
return statearr_14301;
});
var state_machine__6466__auto____1 = (function (state_14275){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14275);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14302){if((e14302 instanceof Object))
{var ex__6469__auto__ = e14302;var statearr_14303_14320 = state_14275;(statearr_14303_14320[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14302;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14321 = state_14275;
state_14275 = G__14321;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14275){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14305,out))
})();var state__6482__auto__ = (function (){var statearr_14304 = f__6481__auto__.call(null);(statearr_14304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14305);
return statearr_14304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14305,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___14464 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14464,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14464,out){
return (function (state_14434){var state_val_14435 = (state_14434[(1)]);if((state_val_14435 === (7)))
{var inst_14430 = (state_14434[(2)]);var state_14434__$1 = state_14434;var statearr_14436_14465 = state_14434__$1;(statearr_14436_14465[(2)] = inst_14430);
(statearr_14436_14465[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (1)))
{var inst_14393 = [];var inst_14394 = inst_14393;var inst_14395 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14434__$1 = (function (){var statearr_14437 = state_14434;(statearr_14437[(7)] = inst_14394);
(statearr_14437[(8)] = inst_14395);
return statearr_14437;
})();var statearr_14438_14466 = state_14434__$1;(statearr_14438_14466[(2)] = null);
(statearr_14438_14466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (4)))
{var inst_14398 = (state_14434[(9)]);var inst_14398__$1 = (state_14434[(2)]);var inst_14399 = (inst_14398__$1 == null);var inst_14400 = cljs.core.not.call(null,inst_14399);var state_14434__$1 = (function (){var statearr_14439 = state_14434;(statearr_14439[(9)] = inst_14398__$1);
return statearr_14439;
})();if(inst_14400)
{var statearr_14440_14467 = state_14434__$1;(statearr_14440_14467[(1)] = (5));
} else
{var statearr_14441_14468 = state_14434__$1;(statearr_14441_14468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (15)))
{var inst_14424 = (state_14434[(2)]);var state_14434__$1 = state_14434;var statearr_14442_14469 = state_14434__$1;(statearr_14442_14469[(2)] = inst_14424);
(statearr_14442_14469[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (13)))
{var state_14434__$1 = state_14434;var statearr_14443_14470 = state_14434__$1;(statearr_14443_14470[(2)] = null);
(statearr_14443_14470[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (6)))
{var inst_14394 = (state_14434[(7)]);var inst_14419 = inst_14394.length;var inst_14420 = (inst_14419 > (0));var state_14434__$1 = state_14434;if(cljs.core.truth_(inst_14420))
{var statearr_14444_14471 = state_14434__$1;(statearr_14444_14471[(1)] = (12));
} else
{var statearr_14445_14472 = state_14434__$1;(statearr_14445_14472[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (3)))
{var inst_14432 = (state_14434[(2)]);var state_14434__$1 = state_14434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14434__$1,inst_14432);
} else
{if((state_val_14435 === (12)))
{var inst_14394 = (state_14434[(7)]);var inst_14422 = cljs.core.vec.call(null,inst_14394);var state_14434__$1 = state_14434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14434__$1,(15),out,inst_14422);
} else
{if((state_val_14435 === (2)))
{var state_14434__$1 = state_14434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14434__$1,(4),ch);
} else
{if((state_val_14435 === (11)))
{var inst_14398 = (state_14434[(9)]);var inst_14402 = (state_14434[(10)]);var inst_14412 = (state_14434[(2)]);var inst_14413 = [];var inst_14414 = inst_14413.push(inst_14398);var inst_14394 = inst_14413;var inst_14395 = inst_14402;var state_14434__$1 = (function (){var statearr_14446 = state_14434;(statearr_14446[(7)] = inst_14394);
(statearr_14446[(8)] = inst_14395);
(statearr_14446[(11)] = inst_14412);
(statearr_14446[(12)] = inst_14414);
return statearr_14446;
})();var statearr_14447_14473 = state_14434__$1;(statearr_14447_14473[(2)] = null);
(statearr_14447_14473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (9)))
{var inst_14394 = (state_14434[(7)]);var inst_14410 = cljs.core.vec.call(null,inst_14394);var state_14434__$1 = state_14434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14434__$1,(11),out,inst_14410);
} else
{if((state_val_14435 === (5)))
{var inst_14398 = (state_14434[(9)]);var inst_14402 = (state_14434[(10)]);var inst_14395 = (state_14434[(8)]);var inst_14402__$1 = f.call(null,inst_14398);var inst_14403 = cljs.core._EQ_.call(null,inst_14402__$1,inst_14395);var inst_14404 = cljs.core.keyword_identical_QMARK_.call(null,inst_14395,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14405 = (inst_14403) || (inst_14404);var state_14434__$1 = (function (){var statearr_14448 = state_14434;(statearr_14448[(10)] = inst_14402__$1);
return statearr_14448;
})();if(cljs.core.truth_(inst_14405))
{var statearr_14449_14474 = state_14434__$1;(statearr_14449_14474[(1)] = (8));
} else
{var statearr_14450_14475 = state_14434__$1;(statearr_14450_14475[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (14)))
{var inst_14427 = (state_14434[(2)]);var inst_14428 = cljs.core.async.close_BANG_.call(null,out);var state_14434__$1 = (function (){var statearr_14452 = state_14434;(statearr_14452[(13)] = inst_14427);
return statearr_14452;
})();var statearr_14453_14476 = state_14434__$1;(statearr_14453_14476[(2)] = inst_14428);
(statearr_14453_14476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (10)))
{var inst_14417 = (state_14434[(2)]);var state_14434__$1 = state_14434;var statearr_14454_14477 = state_14434__$1;(statearr_14454_14477[(2)] = inst_14417);
(statearr_14454_14477[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14435 === (8)))
{var inst_14394 = (state_14434[(7)]);var inst_14398 = (state_14434[(9)]);var inst_14402 = (state_14434[(10)]);var inst_14407 = inst_14394.push(inst_14398);var tmp14451 = inst_14394;var inst_14394__$1 = tmp14451;var inst_14395 = inst_14402;var state_14434__$1 = (function (){var statearr_14455 = state_14434;(statearr_14455[(7)] = inst_14394__$1);
(statearr_14455[(8)] = inst_14395);
(statearr_14455[(14)] = inst_14407);
return statearr_14455;
})();var statearr_14456_14478 = state_14434__$1;(statearr_14456_14478[(2)] = null);
(statearr_14456_14478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14464,out))
;return ((function (switch__6465__auto__,c__6480__auto___14464,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14460[(0)] = state_machine__6466__auto__);
(statearr_14460[(1)] = (1));
return statearr_14460;
});
var state_machine__6466__auto____1 = (function (state_14434){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14434);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14461){if((e14461 instanceof Object))
{var ex__6469__auto__ = e14461;var statearr_14462_14479 = state_14434;(statearr_14462_14479[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14480 = state_14434;
state_14434 = G__14480;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14434){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14464,out))
})();var state__6482__auto__ = (function (){var statearr_14463 = f__6481__auto__.call(null);(statearr_14463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14464);
return statearr_14463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14464,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map