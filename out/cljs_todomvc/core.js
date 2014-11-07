// Compiled by ClojureScript 0.0-2371
goog.provide('cljs_todomvc.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_todomvc.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Gerald",new cljs.core.Keyword(null,"middle","middle",-701029031),"Jay",new cljs.core.Keyword(null,"last","last",1105735132),"Sussman",new cljs.core.Keyword(null,"email","email",1415816706),"metacirc@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439),new cljs.core.Keyword(null,"6946","6946",443412550)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Hal",new cljs.core.Keyword(null,"last","last",1105735132),"Abelson",new cljs.core.Keyword(null,"email","email",1415816706),"evalapply@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439)], null)], null)], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"6001","6001",1924916439),"The Structure and Interpretation of Computer Programs",new cljs.core.Keyword(null,"6946","6946",443412550),"The Structure and Interpretation of Classical Mechanics",new cljs.core.Keyword(null,"1806","1806",-1667512160),"Linear Algebra"], null)], null));
cljs_todomvc.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
cljs_todomvc.core.handle_change = (function handle_change(e,text,owner){return om.core.transact_BANG_.call(null,text,(function (_){return e.target.value;
}));
});
cljs_todomvc.core.commit_change = (function commit_change(text,owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
});
(cljs.core.ICloneable["string"] = true);
(cljs.core._clone["string"] = (function (s){return (new String(s));
}));
String.prototype.om$core$IValue$ = true;
String.prototype.om$core$IValue$_value$arity$1 = (function (s){var s__$1 = this;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1));
});
String.prototype.cljs$core$ICloneable$ = true;
String.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (s){var s__$1 = this;return (new String(s__$1));
});
cljs_todomvc.core.editable = (function editable(text,owner){if(typeof cljs_todomvc.core.t10994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_todomvc.core.t10994 = (function (owner,text,editable,meta10995){
this.owner = owner;
this.text = text;
this.editable = editable;
this.meta10995 = meta10995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_todomvc.core.t10994.cljs$lang$type = true;
cljs_todomvc.core.t10994.cljs$lang$ctorStr = "cljs-todomvc.core/t10994";
cljs_todomvc.core.t10994.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs-todomvc.core/t10994");
});
cljs_todomvc.core.t10994.prototype.om$core$IRenderState$ = true;
cljs_todomvc.core.t10994.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10997){var self__ = this;
var map__10998 = p__10997;var map__10998__$1 = ((cljs.core.seq_QMARK_.call(null,map__10998))?cljs.core.apply.call(null,cljs.core.hash_map,map__10998):map__10998);var editing = cljs.core.get.call(null,map__10998__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var ___$1 = this;return React.DOM.li(null,React.DOM.span({"style": cljs_todomvc.core.display.call(null,cljs.core.not.call(null,editing))},om.core.value.call(null,self__.text)),om.dom.input.call(null,{"onBlur": ((function (___$1,map__10998,map__10998__$1,editing){
return (function (e){return cljs_todomvc.core.commit_change.call(null,self__.text,self__.owner);
});})(___$1,map__10998,map__10998__$1,editing))
, "onKeyDown": ((function (___$1,map__10998,map__10998__$1,editing){
return (function (p1__10988_SHARP_){if(cljs.core._EQ_.call(null,p1__10988_SHARP_.key,"Enter"))
{return cljs_todomvc.core.commit_change.call(null,self__.text,self__.owner);
} else
{return null;
}
});})(___$1,map__10998,map__10998__$1,editing))
, "onChange": ((function (___$1,map__10998,map__10998__$1,editing){
return (function (p1__10987_SHARP_){return cljs_todomvc.core.handle_change.call(null,p1__10987_SHARP_,self__.text,self__.owner);
});})(___$1,map__10998,map__10998__$1,editing))
, "value": om.core.value.call(null,self__.text), "style": cljs_todomvc.core.display.call(null,editing)}),React.DOM.button({"onClick": ((function (___$1,map__10998,map__10998__$1,editing){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(___$1,map__10998,map__10998__$1,editing))
, "style": cljs_todomvc.core.display.call(null,cljs.core.not.call(null,editing))},"Edit"));
});
cljs_todomvc.core.t10994.prototype.om$core$IInitState$ = true;
cljs_todomvc.core.t10994.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});
cljs_todomvc.core.t10994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10996){var self__ = this;
var _10996__$1 = this;return self__.meta10995;
});
cljs_todomvc.core.t10994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10996,meta10995__$1){var self__ = this;
var _10996__$1 = this;return (new cljs_todomvc.core.t10994(self__.owner,self__.text,self__.editable,meta10995__$1));
});
cljs_todomvc.core.__GT_t10994 = (function __GT_t10994(owner__$1,text__$1,editable__$1,meta10995){return (new cljs_todomvc.core.t10994(owner__$1,text__$1,editable__$1,meta10995));
});
}
return (new cljs_todomvc.core.t10994(owner,text,editable,null));
});
cljs_todomvc.core.middle_name = (function middle_name(p__10999){var map__11001 = p__10999;var map__11001__$1 = ((cljs.core.seq_QMARK_.call(null,map__11001))?cljs.core.apply.call(null,cljs.core.hash_map,map__11001):map__11001);var middle_initial = cljs.core.get.call(null,map__11001__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));var middle = cljs.core.get.call(null,map__11001__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));if(cljs.core.truth_(middle))
{return (" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle));
} else
{if(cljs.core.truth_(middle_initial))
{return (" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle_initial)+".");
} else
{return null;
}
}
});
cljs_todomvc.core.display_name = (function display_name(p__11002){var map__11004 = p__11002;var map__11004__$1 = ((cljs.core.seq_QMARK_.call(null,map__11004))?cljs.core.apply.call(null,cljs.core.hash_map,map__11004):map__11004);var contact = map__11004__$1;var last = cljs.core.get.call(null,map__11004__$1,new cljs.core.Keyword(null,"last","last",1105735132));var first = cljs.core.get.call(null,map__11004__$1,new cljs.core.Keyword(null,"first","first",-644103046));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(last)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_todomvc.core.middle_name.call(null,contact)));
});
cljs_todomvc.core.student_view = (function student_view(student,owner){if(typeof cljs_todomvc.core.t11008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_todomvc.core.t11008 = (function (owner,student,student_view,meta11009){
this.owner = owner;
this.student = student;
this.student_view = student_view;
this.meta11009 = meta11009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_todomvc.core.t11008.cljs$lang$type = true;
cljs_todomvc.core.t11008.cljs$lang$ctorStr = "cljs-todomvc.core/t11008";
cljs_todomvc.core.t11008.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs-todomvc.core/t11008");
});
cljs_todomvc.core.t11008.prototype.om$core$IRender$ = true;
cljs_todomvc.core.t11008.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li(null,cljs_todomvc.core.display_name.call(null,self__.student));
});
cljs_todomvc.core.t11008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11010){var self__ = this;
var _11010__$1 = this;return self__.meta11009;
});
cljs_todomvc.core.t11008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11010,meta11009__$1){var self__ = this;
var _11010__$1 = this;return (new cljs_todomvc.core.t11008(self__.owner,self__.student,self__.student_view,meta11009__$1));
});
cljs_todomvc.core.__GT_t11008 = (function __GT_t11008(owner__$1,student__$1,student_view__$1,meta11009){return (new cljs_todomvc.core.t11008(owner__$1,student__$1,student_view__$1,meta11009));
});
}
return (new cljs_todomvc.core.t11008(owner,student,student_view,null));
});
cljs_todomvc.core.professor_view = (function professor_view(professor,owner){if(typeof cljs_todomvc.core.t11015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_todomvc.core.t11015 = (function (owner,professor,professor_view,meta11016){
this.owner = owner;
this.professor = professor;
this.professor_view = professor_view;
this.meta11016 = meta11016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_todomvc.core.t11015.cljs$lang$type = true;
cljs_todomvc.core.t11015.cljs$lang$ctorStr = "cljs-todomvc.core/t11015";
cljs_todomvc.core.t11015.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs-todomvc.core/t11015");
});
cljs_todomvc.core.t11015.prototype.om$core$IRender$ = true;
cljs_todomvc.core.t11015.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li(null,React.DOM.div(null,cljs_todomvc.core.display_name.call(null,self__.professor)),React.DOM.label(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__11011_SHARP_){return React.DOM.li(null,om.core.value.call(null,p1__11011_SHARP_));
});})(___$1))
,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(self__.professor))));
});
cljs_todomvc.core.t11015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11017){var self__ = this;
var _11017__$1 = this;return self__.meta11016;
});
cljs_todomvc.core.t11015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11017,meta11016__$1){var self__ = this;
var _11017__$1 = this;return (new cljs_todomvc.core.t11015(self__.owner,self__.professor,self__.professor_view,meta11016__$1));
});
cljs_todomvc.core.__GT_t11015 = (function __GT_t11015(owner__$1,professor__$1,professor_view__$1,meta11016){return (new cljs_todomvc.core.t11015(owner__$1,professor__$1,professor_view__$1,meta11016));
});
}
return (new cljs_todomvc.core.t11015(owner,professor,professor_view,null));
});
cljs_todomvc.core.entry_view = (function (){var method_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4524__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("entry-view",((function (method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__){
return (function (person,_){return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(person);
});})(method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4524__auto__,method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__));
})();
cljs.core._add_method.call(null,cljs_todomvc.core.entry_view,new cljs.core.Keyword(null,"student","student",-1899621508),(function (person,owner){return cljs_todomvc.core.student_view.call(null,person,owner);
}));
cljs.core._add_method.call(null,cljs_todomvc.core.entry_view,new cljs.core.Keyword(null,"professor","professor",1388675553),(function (person,owner){return cljs_todomvc.core.professor_view.call(null,person,owner);
}));
cljs_todomvc.core.people = (function people(app){return cljs.core.mapv.call(null,(function (x){if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(x)))
{return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510)], null),(function (cs){return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(app),cs);
}));
} else
{return x;
}
}),new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(app));
});
cljs_todomvc.core.registry_view = (function registry_view(app,owner){if(typeof cljs_todomvc.core.t11021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_todomvc.core.t11021 = (function (owner,app,registry_view,meta11022){
this.owner = owner;
this.app = app;
this.registry_view = registry_view;
this.meta11022 = meta11022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_todomvc.core.t11021.cljs$lang$type = true;
cljs_todomvc.core.t11021.cljs$lang$ctorStr = "cljs-todomvc.core/t11021";
cljs_todomvc.core.t11021.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs-todomvc.core/t11021");
});
cljs_todomvc.core.t11021.prototype.om$core$IRenderState$ = true;
cljs_todomvc.core.t11021.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "registry"},React.DOM.h2(null,"Registry"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,cljs_todomvc.core.entry_view,cljs_todomvc.core.people.call(null,self__.app))));
});
cljs_todomvc.core.t11021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11023){var self__ = this;
var _11023__$1 = this;return self__.meta11022;
});
cljs_todomvc.core.t11021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11023,meta11022__$1){var self__ = this;
var _11023__$1 = this;return (new cljs_todomvc.core.t11021(self__.owner,self__.app,self__.registry_view,meta11022__$1));
});
cljs_todomvc.core.__GT_t11021 = (function __GT_t11021(owner__$1,app__$1,registry_view__$1,meta11022){return (new cljs_todomvc.core.t11021(owner__$1,app__$1,registry_view__$1,meta11022));
});
}
return (new cljs_todomvc.core.t11021(owner,app,registry_view,null));
});
cljs_todomvc.core.classes_view = (function classes_view(app,owner){if(typeof cljs_todomvc.core.t11027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs_todomvc.core.t11027 = (function (owner,app,classes_view,meta11028){
this.owner = owner;
this.app = app;
this.classes_view = classes_view;
this.meta11028 = meta11028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs_todomvc.core.t11027.cljs$lang$type = true;
cljs_todomvc.core.t11027.cljs$lang$ctorStr = "cljs-todomvc.core/t11027";
cljs_todomvc.core.t11027.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs-todomvc.core/t11027");
});
cljs_todomvc.core.t11027.prototype.om$core$IRender$ = true;
cljs_todomvc.core.t11027.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "classes"},React.DOM.h2(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,cljs_todomvc.core.editable,cljs.core.vals.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});
cljs_todomvc.core.t11027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11029){var self__ = this;
var _11029__$1 = this;return self__.meta11028;
});
cljs_todomvc.core.t11027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11029,meta11028__$1){var self__ = this;
var _11029__$1 = this;return (new cljs_todomvc.core.t11027(self__.owner,self__.app,self__.classes_view,meta11028__$1));
});
cljs_todomvc.core.__GT_t11027 = (function __GT_t11027(owner__$1,app__$1,classes_view__$1,meta11028){return (new cljs_todomvc.core.t11027(owner__$1,app__$1,classes_view__$1,meta11028));
});
}
return (new cljs_todomvc.core.t11027(owner,app,classes_view,null));
});
om.core.root.call(null,cljs_todomvc.core.registry_view,cljs_todomvc.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("registry")], null));
om.core.root.call(null,cljs_todomvc.core.classes_view,cljs_todomvc.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("classes")], null));

//# sourceMappingURL=core.js.map