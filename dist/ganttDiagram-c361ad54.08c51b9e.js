!function(t,e,i,r,n){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[r]&&s[r],o=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,i){if(!o[e]){if(!t[e]){var n="function"==typeof s[r]&&s[r];if(!i&&n)return n(e,!0);if(a)return a(e,!0);if(l&&"string"==typeof e)return l(e);var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}h.resolve=function(i){var r=t[e][1][i];return null!=r?r:i},h.cache={};var u=o[e]=new c.Module(e);t[e][0].call(u.exports,h,u,u.exports,s)}return o[e].exports;function h(t){var e=h.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=t,c.cache=o,c.parent=a,c.register=function(e,i){t[e]=[function(t,e){e.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return s[r]}}),s[r]=c;for(var d=0;d<e.length;d++)c(e[d])}({kLNoS:[function(t,e,i,r){let n,s,a,o;var l=t("@parcel/transformer-js/src/esmodule-helpers.js");l.defineInteropFlag(i),l.export(i,"diagram",()=>tn);var c=t("@braintree/sanitize-url"),d=t("dayjs"),u=l.interopDefault(d),h=t("dayjs/plugin/isoWeek.js"),f=l.interopDefault(h),m=t("dayjs/plugin/customParseFormat.js"),y=l.interopDefault(m),k=t("dayjs/plugin/advancedFormat.js"),p=l.interopDefault(k),g=t("./mermaid-b5860b54.js"),b=t("d3");t("ts-dedent"),t("dompurify"),t("khroma"),t("lodash-es/memoize.js"),t("lodash-es/merge.js"),t("stylis"),t("lodash-es/isEmpty.js");var v=function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],i=[1,25],r=[1,26],n=[1,27],s=[1,28],a=[1,29],o=[1,30],l=[1,31],c=[1,9],d=[1,10],u=[1,11],h=[1,12],f=[1,13],m=[1,14],y=[1,15],k=[1,16],p=[1,18],g=[1,19],b=[1,20],v=[1,21],x=[1,22],T=[1,24],w=[1,32],_={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(t,e,i,r,n,s,a){var o=s.length-1;switch(n){case 1:return s[o-1];case 2:case 6:case 7:this.$=[];break;case 3:s[o-1].push(s[o]),this.$=s[o-1];break;case 4:case 5:this.$=s[o];break;case 8:r.setWeekday("monday");break;case 9:r.setWeekday("tuesday");break;case 10:r.setWeekday("wednesday");break;case 11:r.setWeekday("thursday");break;case 12:r.setWeekday("friday");break;case 13:r.setWeekday("saturday");break;case 14:r.setWeekday("sunday");break;case 15:r.setDateFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 16:r.enableInclusiveEndDates(),this.$=s[o].substr(18);break;case 17:r.TopAxis(),this.$=s[o].substr(8);break;case 18:r.setAxisFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 19:r.setTickInterval(s[o].substr(13)),this.$=s[o].substr(13);break;case 20:r.setExcludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 21:r.setIncludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 22:r.setTodayMarker(s[o].substr(12)),this.$=s[o].substr(12);break;case 24:r.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 25:this.$=s[o].trim(),r.setAccTitle(this.$);break;case 26:case 27:this.$=s[o].trim(),r.setAccDescription(this.$);break;case 28:r.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 30:r.addTask(s[o-1],s[o]),this.$="task";break;case 31:this.$=s[o-1],r.setClickEvent(s[o-1],s[o],null);break;case 32:this.$=s[o-2],r.setClickEvent(s[o-2],s[o-1],s[o]);break;case 33:this.$=s[o-2],r.setClickEvent(s[o-2],s[o-1],null),r.setLink(s[o-2],s[o]);break;case 34:this.$=s[o-3],r.setClickEvent(s[o-3],s[o-2],s[o-1]),r.setLink(s[o-3],s[o]);break;case 35:this.$=s[o-2],r.setClickEvent(s[o-2],s[o],null),r.setLink(s[o-2],s[o-1]);break;case 36:this.$=s[o-3],r.setClickEvent(s[o-3],s[o-1],s[o]),r.setLink(s[o-3],s[o-2]);break;case 37:this.$=s[o-1],r.setLink(s[o-1],s[o]);break;case 38:case 44:this.$=s[o-1]+" "+s[o];break;case 39:case 40:case 42:this.$=s[o-2]+" "+s[o-1]+" "+s[o];break;case 41:case 43:this.$=s[o-3]+" "+s[o-2]+" "+s[o-1]+" "+s[o]}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:r,14:n,15:s,16:a,17:o,18:l,19:c,20:d,21:u,22:h,23:f,24:m,25:y,26:k,27:p,28:g,30:b,32:v,33:x,34:23,35:T,37:w},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:33,11:17,12:i,13:r,14:n,15:s,16:a,17:o,18:l,19:c,20:d,21:u,22:h,23:f,24:m,25:y,26:k,27:p,28:g,30:b,32:v,33:x,34:23,35:T,37:w},t(e,[2,5]),t(e,[2,6]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),{29:[1,34]},{31:[1,35]},t(e,[2,27]),t(e,[2,28]),t(e,[2,29]),{36:[1,36]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),{38:[1,37],40:[1,38]},t(e,[2,4]),t(e,[2,25]),t(e,[2,26]),t(e,[2,30]),t(e,[2,31],{39:[1,39],40:[1,40]}),t(e,[2,37],{38:[1,41]}),t(e,[2,32],{40:[1,42]}),t(e,[2,33]),t(e,[2,35],{39:[1,43]}),t(e,[2,34]),t(e,[2,36])],defaultActions:{},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],n=[null],s=[],a=this.table,o="",l=0,c=0,d=s.slice.call(arguments,1),u=Object.create(this.lexer),h={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(h.yy[f]=this.yy[f]);u.setInput(t,h.yy),h.yy.lexer=u,h.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var m=u.yylloc;s.push(m);var y=u.options&&u.options.ranges;"function"==typeof h.yy.parseError?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,p,g,b,v,x,T,w,_={};;){if(p=i[i.length-1],this.defaultActions[p]?g=this.defaultActions[p]:(null==k&&(k=function(){var t;return"number"!=typeof(t=r.pop()||u.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),g=a[p]&&a[p][k]),void 0===g||!g.length||!g[0]){var D="";for(v in w=[],a[p])this.terminals_[v]&&v>2&&w.push("'"+this.terminals_[v]+"'");D=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==k?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(D,{text:u.match,token:this.terminals_[k]||k,line:u.yylineno,loc:m,expected:w})}if(g[0]instanceof Array&&g.length>1)throw Error("Parse Error: multiple actions possible at state: "+p+", token: "+k);switch(g[0]){case 1:i.push(k),n.push(u.yytext),s.push(u.yylloc),i.push(g[1]),k=null,c=u.yyleng,o=u.yytext,l=u.yylineno,m=u.yylloc;break;case 2:if(x=this.productions_[g[1]][1],_.$=n[n.length-x],_._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},y&&(_._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),void 0!==(b=this.performAction.apply(_,[o,c,l,h.yy,g[1],n,s].concat(d))))return b;x&&(i=i.slice(0,-1*x*2),n=n.slice(0,-1*x),s=s.slice(0,-1*x)),i.push(this.productions_[g[1]][0]),n.push(_.$),s.push(_._$),T=a[i[i.length-2]][i[i.length-1]],i.push(T);break;case 3:return!0}}return!0}};function D(){this.yy={}}return _.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 40;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 22:return 39;case 23:this.begin("click");break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}},D.prototype=_,_.Parser=D,new D}();v.parser=v,(0,u.default).extend(f.default),(0,u.default).extend(y.default),(0,u.default).extend(p.default);let x="",T="",w="",_=[],D=[],$={},S=[],C=[],M="",E="",A=["active","done","crit","milestone"],L=[],Y=!1,O=!1,F="sunday",I=0,j=function(t,e,i,r){return!r.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},W=function(t,e,i,r){let n;if(!i.length||t.manualEndTime)return;let[s,a]=P((t.startTime instanceof Date?(0,u.default)(t.startTime):(0,u.default)(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?(0,u.default)(t.endTime):(0,u.default)(t.endTime,e,!0),e,i,r);t.endTime=s.toDate(),t.renderEndTime=a},P=function(t,e,i,r,n){let s=!1,a=null;for(;t<=e;)s||(a=e.toDate()),(s=j(t,i,r,n))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},z=function(t,e,i){i=i.trim();let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null;for(let e of r.groups.ids.split(" ")){let i=V(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=/* @__PURE__ */new Date;return e.setHours(0,0,0,0),e}let n=(0,u.default)(i,e.trim(),!0);if(n.isValid())return n.toDate();{(0,g.l).debug("Invalid date:"+i),(0,g.l).debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},N=function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},B=function(t,e,i,r=!1){i=i.trim();let n=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null;for(let e of n.groups.ids.split(" ")){let i=V(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=/* @__PURE__ */new Date;return e.setHours(0,0,0,0),e}let s=(0,u.default)(i,e.trim(),!0);if(s.isValid())return r&&(s=s.add(1,"d")),s.toDate();let a=(0,u.default)(t),[o,l]=N(i);if(!Number.isNaN(o)){let t=a.add(o,l);t.isValid()&&(a=t)}return a.toDate()},H=0,R=function(t){return void 0===t?"task"+(H+=1):t},G=function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),r={};te(i,r,A);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let n="";switch(i.length){case 1:r.id=R(),r.startTime=t.endTime,n=i[0];break;case 2:r.id=R(),r.startTime=z(void 0,x,i[0]),n=i[1];break;case 3:r.id=R(i[0]),r.startTime=z(void 0,x,i[1]),n=i[2]}return n&&(r.endTime=B(r.startTime,x,n,Y),r.manualEndTime=(0,u.default)(n,"YYYY-MM-DD",!0).isValid(),W(r,x,D,_)),r},U=function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),r={};te(i,r,A);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:r.id=R(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=R(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=R(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]}}return r},Z=[],q={},V=function(t){return Z[q[t]]},Q=function(){let t=!0;for(let[e,i]of Z.entries())!function(t){let e=Z[t],i="";switch(Z[t].raw.startTime.type){case"prevTaskEnd":{let t=V(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=z(void 0,x,Z[t].raw.startTime.startData))&&(Z[t].startTime=i)}Z[t].startTime&&(Z[t].endTime=B(Z[t].startTime,x,Z[t].raw.endTime.data,Y),Z[t].endTime&&(Z[t].processed=!0,Z[t].manualEndTime=(0,u.default)(Z[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),W(Z[t],x,D,_))),Z[t].processed}(e),t=t&&i.processed;return t},X=function(t,e){t.split(",").forEach(function(t){let i=V(t);void 0!==i&&i.classes.push(e)})},J=function(t,e,i){if("loose"!==(0,g.c)().securityLevel||void 0===e)return;let r=[];if("string"==typeof i){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<r.length;t++){let e=r[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),r[t]=e}}0===r.length&&r.push(t),void 0!==V(t)&&K(t,()=>{(0,g.u).runFunc(e,...r)})},K=function(t,e){L.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},tt={getConfig:()=>(0,g.c)().gantt,clear:function(){S=[],C=[],M="",L=[],H=0,n=void 0,s=void 0,Z=[],x="",T="",E="",o=void 0,w="",_=[],D=[],Y=!1,O=!1,I=0,$={},(0,g.v)(),F="sunday"},setDateFormat:function(t){x=t},getDateFormat:function(){return x},enableInclusiveEndDates:function(){Y=!0},endDatesAreInclusive:function(){return Y},enableTopAxis:function(){O=!0},topAxisEnabled:function(){return O},setAxisFormat:function(t){T=t},getAxisFormat:function(){return T},setTickInterval:function(t){o=t},getTickInterval:function(){return o},setTodayMarker:function(t){w=t},getTodayMarker:function(){return w},setAccTitle:g.s,getAccTitle:g.g,setDiagramTitle:g.q,getDiagramTitle:g.t,setDisplayMode:function(t){E=t},getDisplayMode:function(){return E},setAccDescription:g.b,getAccDescription:g.a,addSection:function(t){M=t,S.push(t)},getSections:function(){return S},getTasks:function(){let t=Q(),e=0;for(;!t&&e<10;)t=Q(),e++;return C=Z},addTask:function(t,e){let i={section:M,type:M,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},r=U(s,e);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=s,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=I,I++;let n=Z.push(i);s=i.id,q[i.id]=n-1},findTaskById:V,addTaskOrg:function(t,e){let i={section:M,type:M,description:t,task:t,classes:[]},r=G(n,e);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,n=i,C.push(i)},setIncludes:function(t){_=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return _},setExcludes:function(t){D=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return D},setClickEvent:function(t,e,i){t.split(",").forEach(function(t){J(t,e,i)}),X(t,"clickable")},setLink:function(t,e){let i=e;"loose"!==(0,g.c)().securityLevel&&(i=(0,c.sanitizeUrl)(e)),t.split(",").forEach(function(t){void 0!==V(t)&&(K(t,()=>{window.open(i,"_self")}),$[t]=i)}),X(t,"clickable")},getLinks:function(){return $},bindFunctions:function(t){L.forEach(function(e){e(t)})},parseDuration:N,isInvalidDate:j,setWeekday:function(t){F=t},getWeekday:function(){return F}};function te(t,e,i){let r=!0;for(;r;)r=!1,i.forEach(function(i){let n=RegExp("^\\s*"+i+"\\s*$");t[0].match(n)&&(e[i]=!0,t.shift(1),r=!0)})}let ti={monday:b.timeMonday,tuesday:b.timeTuesday,wednesday:b.timeWednesday,thursday:b.timeThursday,friday:b.timeFriday,saturday:b.timeSaturday,sunday:b.timeSunday},tr=(t,e)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),n=0;for(let t of r)for(let r=0;r<i.length;r++)if(t.startTime>=i[r]){i[r]=t.endTime,t.order=r+e,r>n&&(n=r);break}return n},tn={parser:v,db:tt,renderer:{setConf:function(){(0,g.l).debug("Something is calling, setConf, remove the call")},draw:function(t,e,i,r){let n;let s=(0,g.c)().gantt,o=(0,g.c)().securityLevel;"sandbox"===o&&(n=(0,b.select)("#i"+e));let l="sandbox"===o?(0,b.select)(n.nodes()[0].contentDocument.body):(0,b.select)("body"),c="sandbox"===o?n.nodes()[0].contentDocument:document,d=c.getElementById(e);void 0===(a=d.parentElement.offsetWidth)&&(a=1200),void 0!==s.useWidth&&(a=s.useWidth);let h=r.db.getTasks(),f=[];for(let t of h)f.push(t.type);f=function(t){let e={},i=[];for(let r=0,n=t.length;r<n;++r)Object.prototype.hasOwnProperty.call(e,t[r])||(e[t[r]]=!0,i.push(t[r]));return i}(f);let m={},y=2*s.topPadding;if("compact"===r.db.getDisplayMode()||"compact"===s.displayMode){let t={};for(let e of h)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let r=tr(t[i],e)+1;e+=r,y+=r*(s.barHeight+s.barGap),m[i]=r}}else for(let t of(y+=h.length*(s.barHeight+s.barGap),f))m[t]=h.filter(e=>e.type===t).length;d.setAttribute("viewBox","0 0 "+a+" "+y);let k=l.select(`[id="${e}"]`),p=(0,b.scaleTime)().domain([(0,b.min)(h,function(t){return t.startTime}),(0,b.max)(h,function(t){return t.endTime})]).rangeRound([0,a-s.leftPadding-s.rightPadding]);h.sort(function(t,e){let i=t.startTime,r=e.startTime,n=0;return i>r?n=1:i<r&&(n=-1),n}),function(t,i,n){let a=s.barHeight,o=a+s.barGap,l=s.topPadding,d=s.leftPadding;(0,b.scaleLinear)().domain([0,f.length]).range(["#00B9FA","#F95002"]).interpolate(b.interpolateHcl),function(t,e,i,n,a,o,l,c){let d,h;if(0===l.length&&0===c.length)return;for(let{startTime:t,endTime:e}of o)(void 0===d||t<d)&&(d=t),(void 0===h||e>h)&&(h=e);if(!d||!h)return;if((0,u.default)(h).diff((0,u.default)(d),"year")>5){(0,g.l).warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let f=r.db.getDateFormat(),m=[],y=null,b=(0,u.default)(d);for(;b.valueOf()<=h;)r.db.isInvalidDate(b,f,l,c)?y?y.end=b:y={start:b,end:b}:y&&(m.push(y),y=null),b=b.add(1,"d");k.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return p(t.start)+i}).attr("y",s.gridLineStartPadding).attr("width",function(t){return p(t.end.add(1,"day"))-p(t.start)}).attr("height",a-e-s.gridLineStartPadding).attr("transform-origin",function(e,r){return(p(e.start)+i+.5*(p(e.end)-p(e.start))).toString()+"px "+(r*t+.5*a).toString()+"px"}).attr("class","exclude-range")}(o,l,d,0,n,t,r.db.getExcludes(),r.db.getIncludes()),function(t,e,i,n){let a=(0,b.axisBottom)(p).tickSize(-n+e+s.gridLineStartPadding).tickFormat((0,b.timeFormat)(r.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||s.tickInterval);if(null!==o){let t=o[1],e=o[2],i=r.db.getWeekday()||s.weekday;switch(e){case"millisecond":a.ticks((0,b.timeMillisecond).every(t));break;case"second":a.ticks((0,b.timeSecond).every(t));break;case"minute":a.ticks((0,b.timeMinute).every(t));break;case"hour":a.ticks((0,b.timeHour).every(t));break;case"day":a.ticks((0,b.timeDay).every(t));break;case"week":a.ticks(ti[i].every(t));break;case"month":a.ticks((0,b.timeMonth).every(t))}}if(k.append("g").attr("class","grid").attr("transform","translate("+t+", "+(n-50)+")").call(a).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||s.topAxis){let i=(0,b.axisTop)(p).tickSize(-n+e+s.gridLineStartPadding).tickFormat((0,b.timeFormat)(r.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));if(null!==o){let t=o[1],e=o[2],n=r.db.getWeekday()||s.weekday;switch(e){case"millisecond":i.ticks((0,b.timeMillisecond).every(t));break;case"second":i.ticks((0,b.timeSecond).every(t));break;case"minute":i.ticks((0,b.timeMinute).every(t));break;case"hour":i.ticks((0,b.timeHour).every(t));break;case"day":i.ticks((0,b.timeDay).every(t));break;case"week":i.ticks(ti[n].every(t));break;case"month":i.ticks((0,b.timeMonth).every(t))}}k.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(d,l,0,n),function(t,i,n,a,o,l,c){let d=[...new Set(t.map(t=>t.order))].map(e=>t.find(t=>t.order===e));k.append("g").selectAll("rect").data(d).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+n-2}).attr("width",function(){return c-s.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of f.entries())if(t.type===i)return"section section"+e%s.numberSectionStyles;return"section section0"});let u=k.append("g").selectAll("rect").data(t).enter(),h=r.db.getLinks();if(u.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?p(t.startTime)+a+.5*(p(t.endTime)-p(t.startTime))-.5*o:p(t.startTime)+a}).attr("y",function(t,e){return t.order*i+n}).attr("width",function(t){return t.milestone?o:p(t.renderEndTime||t.endTime)-p(t.startTime)}).attr("height",o).attr("transform-origin",function(t,e){return e=t.order,(p(t.startTime)+a+.5*(p(t.endTime)-p(t.startTime))).toString()+"px "+(e*i+n+.5*o).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,r]of f.entries())t.type===r&&(i=e%s.numberSectionStyles);let r="";return t.active?t.crit?r+=" activeCrit":r=" active":t.done?r=t.crit?" doneCrit":" done":t.crit&&(r+=" crit"),0===r.length&&(r=" task"),t.milestone&&(r=" milestone "+r),r+=i,"task"+(r+=" "+e)}),u.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",s.fontSize).attr("x",function(t){let e=p(t.startTime),i=p(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(p(t.endTime)-p(t.startTime))-.5*o),t.milestone&&(i=e+o);let r=this.getBBox().width;return r>i-e?i+r+1.5*s.leftPadding>c?e+a-5:i+a+5:(i-e)/2+e+a}).attr("y",function(t,e){return t.order*i+s.barHeight/2+(s.fontSize/2-2)+n}).attr("text-height",o).attr("class",function(t){let e=p(t.startTime),i=p(t.endTime);t.milestone&&(i=e+o);let r=this.getBBox().width,n="";t.classes.length>0&&(n=t.classes.join(" "));let a=0;for(let[e,i]of f.entries())t.type===i&&(a=e%s.numberSectionStyles);let l="";return(t.active&&(l=t.crit?"activeCritText"+a:"activeText"+a),t.done?l=t.crit?l+" doneCritText"+a:l+" doneText"+a:t.crit&&(l=l+" critText"+a),t.milestone&&(l+=" milestoneText"),r>i-e)?i+r+1.5*s.leftPadding>c?n+" taskTextOutsideLeft taskTextOutside"+a+" "+l:n+" taskTextOutsideRight taskTextOutside"+a+" "+l+" width-"+r:n+" taskText taskText"+a+" "+l+" width-"+r}),"sandbox"===(0,g.c)().securityLevel){let t=(0,b.select)("#i"+e).nodes()[0].contentDocument;u.filter(function(t){return void 0!==h[t.id]}).each(function(e){var i=t.querySelector("#"+e.id),r=t.querySelector("#"+e.id+"-text");let n=i.parentNode;var s=t.createElement("a");s.setAttribute("xlink:href",h[e.id]),s.setAttribute("target","_top"),n.appendChild(s),s.appendChild(i),s.appendChild(r)})}}(t,o,l,d,a,0,i),function(t,e){let i=0,r=Object.keys(m).map(t=>[t,m[t]]);k.append("g").selectAll("text").data(r).enter().append(function(t){let e=t[0].split(g.e.lineBreakRegex),i=-(e.length-1)/2,r=c.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,n]of(r.setAttribute("dy",i+"em"),e.entries())){let e=c.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,r.appendChild(e)}return r}).attr("x",10).attr("y",function(n,s){if(!(s>0))return n[1]*t/2+e;for(let a=0;a<s;a++)return i+=r[s-1][1],n[1]*t/2+i*t+e}).attr("font-size",s.sectionFontSize).attr("class",function(t){for(let[e,i]of f.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%s.numberSectionStyles;return"sectionTitle"})}(o,l),function(t,e,i,n){let a=r.db.getTodayMarker();if("off"===a)return;let o=k.append("g").attr("class","today"),l=/* @__PURE__ */new Date,c=o.append("line");c.attr("x1",p(l)+t).attr("x2",p(l)+t).attr("y1",s.titleTopMargin).attr("y2",n-s.titleTopMargin).attr("class","today"),""!==a&&c.attr("style",a.replace(/,/g,";"))}(d,0,0,n)}(h,a,y),(0,g.i)(k,y,a,s.useMaxWidth),k.append("text").text(r.db.getDiagramTitle()).attr("x",a/2).attr("y",s.titleTopMargin).attr("class","titleText")}},styles:t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`}},{"@braintree/sanitize-url":"eIPUt",dayjs:"8F3kd","dayjs/plugin/isoWeek.js":"9RDNj","dayjs/plugin/customParseFormat.js":"3x3vR","dayjs/plugin/advancedFormat.js":"7Pmf0","./mermaid-b5860b54.js":"2omMO",d3:"ahWNw","ts-dedent":"azOLv",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU","lodash-es/merge.js":"ije1P",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9RDNj":[function(t,e,i,r){var n;n=function(){return function(t,e,i){var r=function(t){return t.add(4-t.isoWeekday(),"day")},n=e.prototype;n.isoWeekYear=function(){return r(this).year()},n.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,n,s,a=r(this),o=(e=this.isoWeekYear(),s=4-(n=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),n.isoWeekday()>4&&(s+=7),n.add(s,"day"));return a.diff(o,"week")+1},n.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var s=n.startOf;n.startOf=function(t,e){var i=this.$utils(),r=!!i.u(e)||e;return"isoweek"===i.p(t)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(t,e)}}},e.exports=n()},{}],"3x3vR":[function(t,e,i,r){var n;n=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,r=/\d\d/,n=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],d=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var i,r=a.meridiem;if(r){for(var n=1;n<=24;n+=1)if(t.indexOf(r(n,0,e))>-1){i=n>12;break}}else i=t===(e?"pm":"PM");return i},h={A:[s,function(t){this.afternoon=u(t,!1)}],a:[s,function(t){this.afternoon=u(t,!0)}],Q:[i,function(t){this.month=3*(t-1)+1}],S:[i,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[s,function(t){var e=a.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[n,l("week")],ww:[r,l("week")],M:[n,l("month")],MM:[r,l("month")],MMM:[s,function(t){var e=d("months"),i=(d("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[s,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(t){this.year=o(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};return function(i,r,n){n.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(o=i.parseTwoDigitYear);var s=r.prototype,l=s.parse;s.parse=function(i){var r=i.date,s=i.utc,o=i.args;this.$u=s;var c=o[1];if("string"==typeof c){var d=!0===o[2],u=!0===o[3],f=o[2];u&&(f=o[2]),a=this.$locale(),!d&&f&&(a=n.Ls[f]),this.$d=function(i,r,n,s){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*i);var o=(function(i){var r,n;r=i,n=a&&a.formats;for(var s=(i=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,i,r){var s=r&&r.toUpperCase();return i||n[r]||t[r]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(e),o=s.length,l=0;l<o;l+=1){var c=s[l],d=h[c],u=d&&d[0],f=d&&d[1];s[l]=f?{regex:u,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,r=0;i<o;i+=1){var n=s[i];if("string"==typeof n)r+=n.length;else{var a=n.regex,l=n.parser,c=t.slice(r),d=a.exec(c)[0];l.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(r)(i),l=o.year,c=o.month,d=o.day,u=o.hours,f=o.minutes,m=o.seconds,y=o.milliseconds,k=o.zone,p=o.week,g=new Date,b=d||(l||c?1:g.getDate()),v=l||g.getFullYear(),x=0;l&&!c||(x=c>0?c-1:g.getMonth());var T,w=u||0,_=f||0,D=m||0,$=y||0;return k?new Date(Date.UTC(v,x,b,w,_,D,$+60*k.offset*1e3)):n?new Date(Date.UTC(v,x,b,w,_,D,$)):(T=new Date(v,x,b,w,_,D,$),p&&(T=s(T).week(p).toDate()),T)}catch(t){return new Date("")}}(r,c,s,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(d||u)&&r!=this.format(c)&&(this.$d=new Date("")),a={}}else if(c instanceof Array)for(var m=c.length,y=1;y<=m;y+=1){o[1]=c[y-1];var k=n.apply(this,o);if(k.isValid()){this.$d=k.$d,this.$L=k.$L,this.init();break}y===m&&(this.$d=new Date(""))}else l.call(this,i)}}},e.exports=n()},{}],"7Pmf0":[function(t,e,i,r){var n;n=function(){return function(t,e){var i=e.prototype,r=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return r.bind(this)(t);var n=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return n.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return n.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return n.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return r.bind(this)(s)}}},e.exports=n()},{}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=ganttDiagram-c361ad54.08c51b9e.js.map
