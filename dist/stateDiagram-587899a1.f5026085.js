!function(t,e,i,s,r){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof n[s]&&n[s],a=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,i){if(!a[e]){if(!t[e]){var r="function"==typeof n[s]&&n[s];if(!i&&r)return r(e,!0);if(o)return o(e,!0);if(l&&"string"==typeof e)return l(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}d.resolve=function(i){var s=t[e][1][i];return null!=s?s:i},d.cache={};var u=a[e]=new c.Module(e);t[e][0].call(u.exports,d,u,u.exports,n)}return a[e].exports;function d(t){var e=d.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=t,c.cache=a,c.parent=o,c.register=function(e,i){t[e]=[function(t,e){e.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return n[s]}}),n[s]=c;for(var h=0;h<e.length;h++)c(e[h])}({gNw0p:[function(t,e,i,s){var r=t("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i),r.export(i,"D",()=>u),r.export(i,"S",()=>h),r.export(i,"a",()=>d),r.export(i,"b",()=>c),r.export(i,"c",()=>l),r.export(i,"d",()=>P),r.export(i,"p",()=>a),r.export(i,"s",()=>F);var n=t("./mermaid-b5860b54.js"),o=function(){var t=function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},e=[1,2],i=[1,3],s=[1,4],r=[2,4],n=[1,9],o=[1,11],a=[1,15],l=[1,16],c=[1,17],h=[1,18],u=[1,30],d=[1,19],p=[1,20],y=[1,21],f=[1,22],m=[1,23],g=[1,25],_=[1,26],S=[1,27],T=[1,28],k=[1,29],b=[1,32],E=[1,33],x=[1,34],v=[1,35],$=[1,31],C=[1,4,5,15,16,18,20,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],D=[1,4,5,13,14,15,16,18,20,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],A=[4,5,15,16,18,20,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],L={trace:function(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,cssClassStatement:11,idStatement:12,DESCR:13,"--\x3e":14,HIDE_EMPTY:15,scale:16,WIDTH:17,COMPOSIT_STATE:18,STRUCT_START:19,STRUCT_STOP:20,STATE_DESCR:21,AS:22,ID:23,FORK:24,JOIN:25,CHOICE:26,CONCURRENT:27,note:28,notePosition:29,NOTE_TEXT:30,direction:31,acc_title:32,acc_title_value:33,acc_descr:34,acc_descr_value:35,acc_descr_multiline_value:36,classDef:37,CLASSDEF_ID:38,CLASSDEF_STYLEOPTS:39,DEFAULT:40,class:41,CLASSENTITY_IDS:42,STYLECLASS:43,direction_tb:44,direction_bt:45,direction_rl:46,direction_lr:47,eol:48,";":49,EDGE_STATE:50,STYLE_SEPARATOR:51,left_of:52,right_of:53,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",13:"DESCR",14:"--\x3e",15:"HIDE_EMPTY",16:"scale",17:"WIDTH",18:"COMPOSIT_STATE",19:"STRUCT_START",20:"STRUCT_STOP",21:"STATE_DESCR",22:"AS",23:"ID",24:"FORK",25:"JOIN",26:"CHOICE",27:"CONCURRENT",28:"note",30:"NOTE_TEXT",32:"acc_title",33:"acc_title_value",34:"acc_descr",35:"acc_descr_value",36:"acc_descr_multiline_value",37:"classDef",38:"CLASSDEF_ID",39:"CLASSDEF_STYLEOPTS",40:"DEFAULT",41:"class",42:"CLASSENTITY_IDS",43:"STYLECLASS",44:"direction_tb",45:"direction_bt",46:"direction_rl",47:"direction_lr",49:";",50:"EDGE_STATE",51:"STYLE_SEPARATOR",52:"left_of",53:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[31,1],[31,1],[31,1],[31,1],[48,1],[48,1],[12,1],[12,1],[12,3],[12,3],[29,1],[29,1]],performAction:function(t,e,i,s,r,n,o){var a=n.length-1;switch(r){case 3:return s.setRootDoc(n[a]),n[a];case 4:this.$=[];break;case 5:"nl"!=n[a]&&(n[a-1].push(n[a]),this.$=n[a-1]);break;case 6:case 7:case 11:this.$=n[a];break;case 8:this.$="nl";break;case 12:let l=n[a-1];l.description=s.trimColon(n[a]),this.$=l;break;case 13:this.$={stmt:"relation",state1:n[a-2],state2:n[a]};break;case 14:let c=s.trimColon(n[a]);this.$={stmt:"relation",state1:n[a-3],state2:n[a-1],description:c};break;case 18:this.$={stmt:"state",id:n[a-3],type:"default",description:"",doc:n[a-1]};break;case 19:var h=n[a],u=n[a-2].trim();if(n[a].match(":")){var d=n[a].split(":");h=d[0],u=[u,d[1]]}this.$={stmt:"state",id:h,type:"default",description:u};break;case 20:this.$={stmt:"state",id:n[a-3],type:"default",description:n[a-5],doc:n[a-1]};break;case 21:this.$={stmt:"state",id:n[a],type:"fork"};break;case 22:this.$={stmt:"state",id:n[a],type:"join"};break;case 23:this.$={stmt:"state",id:n[a],type:"choice"};break;case 24:this.$={stmt:"state",id:s.getDividerId(),type:"divider"};break;case 25:this.$={stmt:"state",id:n[a-1].trim(),note:{position:n[a-2].trim(),text:n[a].trim()}};break;case 28:this.$=n[a].trim(),s.setAccTitle(this.$);break;case 29:case 30:this.$=n[a].trim(),s.setAccDescription(this.$);break;case 31:case 32:this.$={stmt:"classDef",id:n[a-1].trim(),classes:n[a].trim()};break;case 33:this.$={stmt:"applyClass",id:n[a-1].trim(),styleClass:n[a].trim()};break;case 34:s.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 35:s.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 36:s.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 37:s.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 40:case 41:this.$={stmt:"state",id:n[a].trim(),type:"default",description:""};break;case 42:case 43:this.$={stmt:"state",id:n[a-2].trim(),classes:[n[a].trim()],type:"default",description:""}}},table:[{3:1,4:e,5:i,6:s},{1:[3]},{3:5,4:e,5:i,6:s},{3:6,4:e,5:i,6:s},t([1,4,5,15,16,18,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],r,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:n,5:o,8:8,9:10,10:12,11:13,12:14,15:a,16:l,18:c,21:h,23:u,24:d,25:p,26:y,27:f,28:m,31:24,32:g,34:_,36:S,37:T,41:k,44:b,45:E,46:x,47:v,50:$},t(C,[2,5]),{9:36,10:12,11:13,12:14,15:a,16:l,18:c,21:h,23:u,24:d,25:p,26:y,27:f,28:m,31:24,32:g,34:_,36:S,37:T,41:k,44:b,45:E,46:x,47:v,50:$},t(C,[2,7]),t(C,[2,8]),t(C,[2,9]),t(C,[2,10]),t(C,[2,11],{13:[1,37],14:[1,38]}),t(C,[2,15]),{17:[1,39]},t(C,[2,17],{19:[1,40]}),{22:[1,41]},t(C,[2,21]),t(C,[2,22]),t(C,[2,23]),t(C,[2,24]),{29:42,30:[1,43],52:[1,44],53:[1,45]},t(C,[2,27]),{33:[1,46]},{35:[1,47]},t(C,[2,30]),{38:[1,48],40:[1,49]},{42:[1,50]},t(D,[2,40],{51:[1,51]}),t(D,[2,41],{51:[1,52]}),t(C,[2,34]),t(C,[2,35]),t(C,[2,36]),t(C,[2,37]),t(C,[2,6]),t(C,[2,12]),{12:53,23:u,50:$},t(C,[2,16]),t(A,r,{7:54}),{23:[1,55]},{23:[1,56]},{22:[1,57]},{23:[2,44]},{23:[2,45]},t(C,[2,28]),t(C,[2,29]),{39:[1,58]},{39:[1,59]},{43:[1,60]},{23:[1,61]},{23:[1,62]},t(C,[2,13],{13:[1,63]}),{4:n,5:o,8:8,9:10,10:12,11:13,12:14,15:a,16:l,18:c,20:[1,64],21:h,23:u,24:d,25:p,26:y,27:f,28:m,31:24,32:g,34:_,36:S,37:T,41:k,44:b,45:E,46:x,47:v,50:$},t(C,[2,19],{19:[1,65]}),{30:[1,66]},{23:[1,67]},t(C,[2,31]),t(C,[2,32]),t(C,[2,33]),t(D,[2,42]),t(D,[2,43]),t(C,[2,14]),t(C,[2,18]),t(A,r,{7:68}),t(C,[2,25]),t(C,[2,26]),{4:n,5:o,8:8,9:10,10:12,11:13,12:14,15:a,16:l,18:c,20:[1,69],21:h,23:u,24:d,25:p,26:y,27:f,28:m,31:24,32:g,34:_,36:S,37:T,41:k,44:b,45:E,46:x,47:v,50:$},t(C,[2,20])],defaultActions:{5:[2,1],6:[2,2],44:[2,44],45:[2,45]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],s=[],r=[null],n=[],o=this.table,a="",l=0,c=0,h=n.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);u.setInput(t,d.yy),d.yy.lexer=u,d.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var y=u.yylloc;n.push(y);var f=u.options&&u.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var m,g,_,S,T,k,b,E,x={};;){if(g=i[i.length-1],this.defaultActions[g]?_=this.defaultActions[g]:(null==m&&(m=function(){var t;return"number"!=typeof(t=s.pop()||u.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}()),_=o[g]&&o[g][m]),void 0===_||!_.length||!_[0]){var v="";for(T in E=[],o[g])this.terminals_[T]&&T>2&&E.push("'"+this.terminals_[T]+"'");v=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(v,{text:u.match,token:this.terminals_[m]||m,line:u.yylineno,loc:y,expected:E})}if(_[0]instanceof Array&&_.length>1)throw Error("Parse Error: multiple actions possible at state: "+g+", token: "+m);switch(_[0]){case 1:i.push(m),r.push(u.yytext),n.push(u.yylloc),i.push(_[1]),m=null,c=u.yyleng,a=u.yytext,l=u.yylineno,y=u.yylloc;break;case 2:if(k=this.productions_[_[1]][1],x.$=r[r.length-k],x._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column},f&&(x._$.range=[n[n.length-(k||1)].range[0],n[n.length-1].range[1]]),void 0!==(S=this.performAction.apply(x,[a,c,l,d.yy,_[1],r,n].concat(h))))return S;k&&(i=i.slice(0,-1*k*2),r=r.slice(0,-1*k),n=n.slice(0,-1*k)),i.push(this.productions_[_[1]][0]),r.push(x.$),n.push(x._$),b=o[i[i.length-2]][i[i.length-1]],i.push(b);break;case 3:return!0}}return!0}};function I(){this.yy={}}return L.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,r=this._currentRules(),n=0;n<r.length;n++)if((i=this._input.match(this.rules[r[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,s){switch(i){case 0:return 40;case 1:case 39:return 44;case 2:case 40:return 45;case 3:case 41:return 46;case 4:case 42:return 47;case 5:case 6:case 8:case 9:case 10:case 11:case 51:case 53:case 59:break;case 7:case 74:return 5;case 12:case 29:return this.pushState("SCALE"),16;case 13:case 30:return 17;case 14:case 20:case 31:case 46:case 49:this.popState();break;case 15:return this.begin("acc_title"),32;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),34;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),37;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),38;case 25:return this.popState(),39;case 26:return this.pushState("CLASS"),41;case 27:return this.popState(),this.pushState("CLASS_STYLE"),42;case 28:return this.popState(),43;case 32:this.pushState("STATE");break;case 33:case 36:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),24;case 34:case 37:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 35:case 38:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),26;case 43:this.pushState("STATE_STRING");break;case 44:return this.pushState("STATE_ID"),"AS";case 45:case 61:return this.popState(),"ID";case 47:return"STATE_DESCR";case 48:return 18;case 50:return this.popState(),this.pushState("struct"),19;case 52:return this.popState(),20;case 54:return this.begin("NOTE"),28;case 55:return this.popState(),this.pushState("NOTE_ID"),52;case 56:return this.popState(),this.pushState("NOTE_ID"),53;case 57:this.popState(),this.pushState("FLOATING_NOTE");break;case 58:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 60:return"NOTE_TEXT";case 62:return this.popState(),this.pushState("NOTE_TEXT"),23;case 63:return this.popState(),e.yytext=e.yytext.substr(2).trim(),30;case 64:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),30;case 65:case 66:return 6;case 67:return 15;case 68:return 50;case 69:return 23;case 70:return e.yytext=e.yytext.trim(),13;case 71:return 14;case 72:return 27;case 73:return 51;case 75:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,32,39,40,41,42,51,52,53,54,68,69,70,71,72],inclusive:!1},FLOATING_NOTE_ID:{rules:[61],inclusive:!1},FLOATING_NOTE:{rules:[58,59,60],inclusive:!1},NOTE_TEXT:{rules:[63,64],inclusive:!1},NOTE_ID:{rules:[62],inclusive:!1},NOTE:{rules:[55,56,57],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,30,31],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[45],inclusive:!1},STATE_STRING:{rules:[46,47],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,33,34,35,36,37,38,43,44,48,49,50],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,50,54,65,66,67,68,69,70,71,73,74,75],inclusive:!0}}},I.prototype=L,L.Parser=I,new I}();o.parser=o;let a=o,l="TB",c="state",h="relation",u="default",d="divider",p="start",y="color",f="fill",m="LR",g=[],_={},S=()=>({relations:[],states:{},documents:{}}),T={root:S()},k=T.root,b=0,E=0,x=t=>JSON.parse(JSON.stringify(t)),v=(t,e,i)=>{if(e.stmt===h)v(t,e.state1,!0),v(t,e.state2,!1);else if(e.stmt===c&&("[*]"===e.id?(e.id=i?t.id+"_start":t.id+"_end",e.start=i):e.id=e.id.trim()),e.doc){let t;let i=[],s=[];for(t=0;t<e.doc.length;t++)if(e.doc[t].type===d){let r=x(e.doc[t]);r.doc=x(s),i.push(r),s=[]}else s.push(e.doc[t]);if(i.length>0&&s.length>0){let t={stmt:c,id:(0,n.I)(),type:"divider",doc:x(s)};i.push(x(t)),e.doc=i}e.doc.forEach(t=>v(e,t,!0))}},$=function(t,e=u,i=null,s=null,r=null,o=null,a=null,l=null){let c=null==t?void 0:t.trim();void 0===k.states[c]?((0,n.l).info("Adding state ",c,s),k.states[c]={id:c,descriptions:[],type:e,doc:i,note:r,classes:[],styles:[],textStyles:[]}):(k.states[c].doc||(k.states[c].doc=i),k.states[c].type||(k.states[c].type=e)),s&&((0,n.l).info("Setting state description",c,s),"string"==typeof s&&O(c,s.trim()),"object"==typeof s&&s.forEach(t=>O(c,t.trim()))),r&&(k.states[c].note=r,k.states[c].note.text=(0,n.e).sanitizeText(k.states[c].note.text,(0,n.c)())),o&&((0,n.l).info("Setting state classes",c,o),("string"==typeof o?[o]:o).forEach(t=>R(c,t.trim()))),a&&((0,n.l).info("Setting state styles",c,a),("string"==typeof a?[a]:a).forEach(t=>w(c,t.trim()))),l&&((0,n.l).info("Setting state styles",c,a),("string"==typeof l?[l]:l).forEach(t=>B(c,t.trim())))},C=function(t){k=(T={root:S()}).root,b=0,_={},t||(0,n.v)()},D=function(t){return k.states[t]};function A(t=""){let e=t;return"[*]"===t&&(b++,e=`${p}${b}`),e}function L(t="",e=u){return"[*]"===t?p:e}let I=function(t,e,i){if("object"==typeof t){let s,r,o,a;s=A(t.id.trim()),r=L(t.id.trim(),t.type),o=A(e.id.trim()),a=L(e.id.trim(),e.type),$(s,r,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),$(o,a,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),k.relations.push({id1:s,id2:o,relationTitle:(0,n.e).sanitizeText(i,(0,n.c)())})}else{let s=A(t.trim()),r=L(t),o=function(t=""){let e=t;return"[*]"===t&&(b++,e=`end${b}`),e}(e.trim()),a=function(t="",e=u){return"[*]"===t?"end":e}(e);$(s,r),$(o,a),k.relations.push({id1:s,id2:o,title:(0,n.e).sanitizeText(i,(0,n.c)())})}},O=function(t,e){let i=k.states[t],s=e.startsWith(":")?e.replace(":","").trim():e;i.descriptions.push((0,n.e).sanitizeText(s,(0,n.c)()))},N=function(t,e=""){void 0===_[t]&&(_[t]={id:t,styles:[],textStyles:[]});let i=_[t];null!=e&&e.split(",").forEach(t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(t.match(y)){let t=e.replace(f,"bgFill").replace(y,f);i.textStyles.push(t)}i.styles.push(e)})},R=function(t,e){t.split(",").forEach(function(t){let i=D(t);if(void 0===i){let e=t.trim();$(e),i=D(e)}i.classes.push(e)})},w=function(t,e){let i=D(t);void 0!==i&&i.textStyles.push(e)},B=function(t,e){let i=D(t);void 0!==i&&i.textStyles.push(e)},P={getConfig:()=>(0,n.c)().state,addState:$,clear:C,getState:D,getStates:function(){return k.states},getRelations:function(){return k.relations},getClasses:function(){return _},getDirection:()=>m,addRelation:I,getDividerId:()=>"divider-id-"+ ++E,setDirection:t=>{m=t},cleanupLabel:function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()},lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:function(){(0,n.l).info("Documents = ",T)},getRootDoc:()=>g,setRootDoc:t=>{(0,n.l).info("Setting root doc",t),g=t},getRootDocV2:()=>(v({id:"root"},{id:"root",doc:g},!0),{id:"root",doc:g}),extract:t=>{let e;e=t.doc?t.doc:t,(0,n.l).info(e),C(!0),(0,n.l).info("Extract",e),e.forEach(t=>{switch(t.stmt){case c:$(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case h:I(t.state1,t.state2,t.description);break;case"classDef":N(t.id.trim(),t.classes);break;case"applyClass":R(t.id.trim(),t.styleClass)}})},trimColon:t=>t&&":"===t[0]?t.substr(1).trim():t.trim(),getAccTitle:n.g,setAccTitle:n.s,getAccDescription:n.a,setAccDescription:n.b,addStyleClass:N,setCssClass:R,addDescription:O,setDiagramTitle:n.q,getDiagramTitle:n.t},F=t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`},{"./mermaid-b5860b54.js":"2omMO","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=stateDiagram-587899a1.f5026085.js.map
