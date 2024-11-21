!function(e,t,r,s,n){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[s]&&o[s],l=i.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!l[t]){if(!e[t]){var n="function"==typeof o[s]&&o[s];if(!r&&n)return n(t,!0);if(i)return i(t,!0);if(a&&"string"==typeof t)return a(t);var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){var s=e[t][1][r];return null!=s?s:r},p.cache={};var f=l[t]=new u.Module(t);e[t][0].call(f.exports,p,f,f.exports,o)}return l[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=i,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return o[s]}}),o[s]=u;for(var c=0;c<t.length;c++)u(t[c])}({"8bo5t":[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"diagram",()=>g);var o=e("./mermaid-b5860b54.js"),i=e("d3"),l=e("d3-sankey");e("ts-dedent"),e("dayjs"),e("@braintree/sanitize-url"),e("dompurify"),e("khroma"),e("lodash-es/memoize.js"),e("lodash-es/merge.js"),e("stylis"),e("lodash-es/isEmpty.js");var a=function(){var e=function(e,t,r,s){for(r=r||{},s=e.length;s--;r[e[s]]=t);return r},t=[1,9],r=[1,10],s=[1,5,10,12],n={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(e,t,r,s,n,o,i){var l=o.length-1;switch(n){case 7:let a=s.findOrCreateNode(o[l-4].trim().replaceAll('""','"')),u=s.findOrCreateNode(o[l-2].trim().replaceAll('""','"')),c=parseFloat(o[l].trim());s.addLink(a,u,c);break;case 8:case 9:case 11:this.$=o[l];break;case 10:this.$=o[l-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:t,20:r},{1:[2,6],7:11,10:[1,12]},e(r,[2,4],{9:13,5:[1,14]}),{12:[1,15]},e(s,[2,8]),e(s,[2,9]),{19:[1,16]},e(s,[2,11]),{1:[2,1]},{1:[2,5]},e(r,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:t,20:r},{15:18,16:7,17:8,18:t,20:r},{18:[1,19]},e(r,[2,3]),{12:[1,20]},e(s,[2,10]),{15:21,16:7,17:8,18:t,20:r},e([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(e,t){if(t.recoverable)this.trace(e);else{var r=Error(e);throw r.hash=t,r}},parse:function(e){var t=this,r=[0],s=[],n=[null],o=[],i=this.table,l="",a=0,u=0,c=o.slice.call(arguments,1),f=Object.create(this.lexer),p={yy:{}};for(var h in this.yy)Object.prototype.hasOwnProperty.call(this.yy,h)&&(p.yy[h]=this.yy[h]);f.setInput(e,p.yy),p.yy.lexer=f,p.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var d=f.yylloc;o.push(d);var y=f.options&&f.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var j,m,x,g,v,k,_,b,D={};;){if(m=r[r.length-1],this.defaultActions[m]?x=this.defaultActions[m]:(null==j&&(j=function(){var e;return"number"!=typeof(e=s.pop()||f.lex()||1)&&(e instanceof Array&&(e=(s=e).pop()),e=t.symbols_[e]||e),e}()),x=i[m]&&i[m][j]),void 0===x||!x.length||!x[0]){var I="";for(v in b=[],i[m])this.terminals_[v]&&v>2&&b.push("'"+this.terminals_[v]+"'");I=f.showPosition?"Parse error on line "+(a+1)+":\n"+f.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[j]||j)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==j?"end of input":"'"+(this.terminals_[j]||j)+"'"),this.parseError(I,{text:f.match,token:this.terminals_[j]||j,line:f.yylineno,loc:d,expected:b})}if(x[0]instanceof Array&&x.length>1)throw Error("Parse Error: multiple actions possible at state: "+m+", token: "+j);switch(x[0]){case 1:r.push(j),n.push(f.yytext),o.push(f.yylloc),r.push(x[1]),j=null,u=f.yyleng,l=f.yytext,a=f.yylineno,d=f.yylloc;break;case 2:if(k=this.productions_[x[1]][1],D.$=n[n.length-k],D._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},y&&(D._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),void 0!==(g=this.performAction.apply(D,[l,u,a,p.yy,x[1],n,o].concat(c))))return g;k&&(r=r.slice(0,-1*k*2),n=n.slice(0,-1*k),o=o.slice(0,-1*k)),r.push(this.productions_[x[1]][0]),n.push(D.$),o.push(D._$),_=i[r[r.length-2]][r[r.length-1]],r.push(_);break;case 3:return!0}}return!0}};function o(){this.yy={}}return n.lexer={EOF:1,parseError:function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,r=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===s.length?this.yylloc.first_column:0)+s[s.length-r.length].length-r[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var r,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],r=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack)for(var o in n)this[o]=n[o];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e,t,r,s,n=this._currentRules(),o=0;o<n.length;o++)if((r=this._input.match(this.rules[n[o]]))&&(!t||r[0].length>t[0].length)){if(t=r,s=o,this.options.backtrack_lexer){if(!1!==(e=this.test_match(r,n[o])))return e;if(!this._backtrack)return!1;t=!1;continue}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,n[s]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,t,r,s){switch(r){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}},o.prototype=n,n.Parser=o,new o}();a.parser=a;let u=[],c=[],f={};class p{constructor(e,t,r=0){this.source=e,this.target=t,this.value=r}}class h{constructor(e){this.ID=e}}let d={nodesMap:f,getConfig:()=>(0,o.c)().sankey,getNodes:()=>c,getLinks:()=>u,getGraph:()=>({nodes:c.map(e=>({id:e.ID})),links:u.map(e=>({source:e.source.ID,target:e.target.ID,value:e.value}))}),addLink:(e,t,r)=>{u.push(new p(e,t,r))},findOrCreateNode:e=>(f[e=(0,o.e).sanitizeText(e,(0,o.c)())]||(f[e]=new h(e),c.push(f[e])),f[e]),getAccTitle:o.g,setAccTitle:o.s,getAccDescription:o.a,setAccDescription:o.b,getDiagramTitle:o.t,setDiagramTitle:o.q,clear:()=>{u=[],c=[],f={},(0,o.v)()}},y=class e{static next(t){return new e(t+ ++e.count)}constructor(e){this.id=e,this.href=`#${e}`}toString(){return"url("+this.href+")"}};y.count=0;let j={left:l.sankeyLeft,right:l.sankeyRight,center:l.sankeyCenter,justify:l.sankeyJustify},m=e=>e.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim(),x=a.parse.bind(a);a.parse=e=>x(m(e));let g={parser:a,db:d,renderer:{draw:function(e,t,r,s){let n,a;let{securityLevel:u,sankey:c}=(0,o.c)(),f=o.K.sankey;"sandbox"===u&&(n=(0,i.select)("#i"+t));let p="sandbox"===u?(0,i.select)(n.nodes()[0].contentDocument.body):(0,i.select)("body"),h="sandbox"===u?p.select(`[id="${t}"]`):(0,i.select)(`[id="${t}"]`),d=(null==c?void 0:c.width)??f.width,m=(null==c?void 0:c.height)??f.width,x=(null==c?void 0:c.useMaxWidth)??f.useMaxWidth,g=(null==c?void 0:c.nodeAlignment)??f.nodeAlignment,v=(null==c?void 0:c.prefix)??f.prefix,k=(null==c?void 0:c.suffix)??f.suffix,_=(null==c?void 0:c.showValues)??f.showValues,b=s.db.getGraph(),D=j[g];(0,l.sankey)().nodeId(e=>e.id).nodeWidth(10).nodePadding(10+(_?15:0)).nodeAlign(D).extent([[0,0],[d,m]])(b);let I=(0,i.scaleOrdinal)(i.schemeTableau10);h.append("g").attr("class","nodes").selectAll(".node").data(b.nodes).join("g").attr("class","node").attr("id",e=>(e.uid=y.next("node-")).id).attr("transform",function(e){return"translate("+e.x0+","+e.y0+")"}).attr("x",e=>e.x0).attr("y",e=>e.y0).append("rect").attr("height",e=>e.y1-e.y0).attr("width",e=>e.x1-e.x0).attr("fill",e=>I(e.id)),h.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(b.nodes).join("text").attr("x",e=>e.x0<d/2?e.x1+6:e.x0-6).attr("y",e=>(e.y1+e.y0)/2).attr("dy",`${_?"0":"0.35"}em`).attr("text-anchor",e=>e.x0<d/2?"start":"end").text(({id:e,value:t})=>_?`${e}
${v}${Math.round(100*t)/100}${k}`:e);let S=h.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(b.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),w=(null==c?void 0:c.linkColor)||"gradient";if("gradient"===w){let e=S.append("linearGradient").attr("id",e=>(e.uid=y.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",e=>e.source.x1).attr("x2",e=>e.target.x0);e.append("stop").attr("offset","0%").attr("stop-color",e=>I(e.source.id)),e.append("stop").attr("offset","100%").attr("stop-color",e=>I(e.target.id))}switch(w){case"gradient":a=e=>e.uid;break;case"source":a=e=>I(e.source.id);break;case"target":a=e=>I(e.target.id);break;default:a=w}S.append("path").attr("d",(0,l.sankeyLinkHorizontal)()).attr("stroke",a).attr("stroke-width",e=>Math.max(1,e.width)),(0,o.o)(void 0,h,0,x)}}}},{"./mermaid-b5860b54.js":"2omMO",d3:"ahWNw","d3-sankey":"c6ORO","ts-dedent":"azOLv",dayjs:"8F3kd","@braintree/sanitize-url":"eIPUt",dompurify:"5cPaM",khroma:"kb6Zw","lodash-es/memoize.js":"kSZfU","lodash-es/merge.js":"ije1P",stylis:"lfeQC","lodash-es/isEmpty.js":"941eg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],c6ORO:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"sankey",()=>i.default),n.export(r,"sankeyCenter",()=>l.center),n.export(r,"sankeyLeft",()=>l.left),n.export(r,"sankeyRight",()=>l.right),n.export(r,"sankeyJustify",()=>l.justify),n.export(r,"sankeyLinkHorizontal",()=>u.default);var o=e("./sankey.js"),i=n.interopDefault(o),l=e("./align.js"),a=e("./sankeyLinkHorizontal.js"),u=n.interopDefault(a)},{"./sankey.js":"fZf5i","./align.js":"7PP8Y","./sankeyLinkHorizontal.js":"5eoFk","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fZf5i:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",()=>x);var o=e("d3-array"),i=e("./align.js"),l=e("./constant.js"),a=n.interopDefault(l);function u(e,t){return f(e.source,t.source)||e.index-t.index}function c(e,t){return f(e.target,t.target)||e.index-t.index}function f(e,t){return e.y0-t.y0}function p(e){return e.value}function h(e){return e.index}function d(e){return e.nodes}function y(e){return e.links}function j(e,t){let r=e.get(t);if(!r)throw Error("missing: "+t);return r}function m({nodes:e}){for(let t of e){let e=t.y0,r=e;for(let r of t.sourceLinks)r.y0=e+r.width/2,e+=r.width;for(let e of t.targetLinks)e.y1=r+e.width/2,r+=e.width}}function x(){let e,t,r=0,s=0,n=1,l=1,x=24,g=8,v,k=h,_=i.justify,b=d,D=y,I=6;function S(){let i={nodes:b.apply(null,arguments),links:D.apply(null,arguments)};return function({nodes:e,links:r}){for(let[t,r]of e.entries())r.index=t,r.sourceLinks=[],r.targetLinks=[];let s=new Map(e.map((t,r)=>[k(t,r,e),t]));for(let[e,t]of r.entries()){t.index=e;let{source:r,target:n}=t;"object"!=typeof r&&(r=t.source=j(s,r)),"object"!=typeof n&&(n=t.target=j(s,n)),r.sourceLinks.push(t),n.targetLinks.push(t)}if(null!=t)for(let{sourceLinks:r,targetLinks:s}of e)r.sort(t),s.sort(t)}(i),function({nodes:e}){for(let t of e)t.value=void 0===t.fixedValue?Math.max((0,o.sum)(t.sourceLinks,p),(0,o.sum)(t.targetLinks,p)):t.fixedValue}(i),function({nodes:e}){let t=e.length,r=new Set(e),s=new Set,n=0;for(;r.size;){for(let e of r)for(let{target:t}of(e.depth=n,e.sourceLinks))s.add(t);if(++n>t)throw Error("circular link");r=s,s=new Set}}(i),function({nodes:e}){let t=e.length,r=new Set(e),s=new Set,n=0;for(;r.size;){for(let e of r)for(let{source:t}of(e.height=n,e.targetLinks))s.add(t);if(++n>t)throw Error("circular link");r=s,s=new Set}}(i),function(i){let a=function({nodes:t}){let s=(0,o.max)(t,e=>e.depth)+1,i=(n-r-x)/(s-1),l=Array(s);for(let e of t){let t=Math.max(0,Math.min(s-1,Math.floor(_.call(null,e,s))));e.layer=t,e.x0=r+t*i,e.x1=e.x0+x,l[t]?l[t].push(e):l[t]=[e]}if(e)for(let t of l)t.sort(e);return l}(i);v=Math.min(g,(l-s)/((0,o.max)(a,e=>e.length)-1)),function(e){let r=(0,o.min)(e,e=>(l-s-(e.length-1)*v)/(0,o.sum)(e,p));for(let n of e){let e=s;for(let t of n)for(let s of(t.y0=e,t.y1=e+t.value*r,e=t.y1+v,t.sourceLinks))s.width=s.value*r;e=(l-e+v)/(n.length+1);for(let t=0;t<n.length;++t){let r=n[t];r.y0+=e*(t+1),r.y1+=e*(t+1)}(function(e){if(void 0===t)for(let{sourceLinks:t,targetLinks:r}of e)t.sort(c),r.sort(u)})(n)}}(a);for(let t=0;t<I;++t){let r=Math.pow(.99,t),s=Math.max(1-r,(t+1)/I);(function(t,r,s){for(let n=t.length,o=n-2;o>=0;--o){let n=t[o];for(let e of n){let t=0,s=0;for(let{target:r,value:n}of e.sourceLinks){let o=n*(r.layer-e.layer);t+=function(e,t){let r=t.y0-(t.targetLinks.length-1)*v/2;for(let{source:s,width:n}of t.targetLinks){if(s===e)break;r+=n+v}for(let{target:s,width:n}of e.sourceLinks){if(s===t)break;r-=n}return r}(e,r)*o,s+=o}if(!(s>0))continue;let n=(t/s-e.y0)*r;e.y0+=n,e.y1+=n,A(e)}void 0===e&&n.sort(f),w(n,s)}})(a,r,s),function(t,r,s){for(let n=1,o=t.length;n<o;++n){let o=t[n];for(let e of o){let t=0,s=0;for(let{source:r,value:n}of e.targetLinks){let o=n*(e.layer-r.layer);t+=function(e,t){let r=e.y0-(e.sourceLinks.length-1)*v/2;for(let{target:s,width:n}of e.sourceLinks){if(s===t)break;r+=n+v}for(let{source:s,width:n}of t.targetLinks){if(s===e)break;r-=n}return r}(r,e)*o,s+=o}if(!(s>0))continue;let n=(t/s-e.y0)*r;e.y0+=n,e.y1+=n,A(e)}void 0===e&&o.sort(f),w(o,s)}}(a,r,s)}}(i),m(i),i}function w(e,t){let r=e.length>>1,n=e[r];O(e,n.y0-v,r-1,t),E(e,n.y1+v,r+1,t),O(e,l,e.length-1,t),E(e,s,0,t)}function E(e,t,r,s){for(;r<e.length;++r){let n=e[r],o=(t-n.y0)*s;o>1e-6&&(n.y0+=o,n.y1+=o),t=n.y1+v}}function O(e,t,r,s){for(;r>=0;--r){let n=e[r],o=(n.y1-t)*s;o>1e-6&&(n.y0-=o,n.y1-=o),t=n.y0-v}}function A({sourceLinks:e,targetLinks:r}){if(void 0===t){for(let{source:{sourceLinks:e}}of r)e.sort(c);for(let{target:{targetLinks:t}}of e)t.sort(u)}}return S.update=function(e){return m(e),e},S.nodeId=function(e){return arguments.length?(k="function"==typeof e?e:(0,a.default)(e),S):k},S.nodeAlign=function(e){return arguments.length?(_="function"==typeof e?e:(0,a.default)(e),S):_},S.nodeSort=function(t){return arguments.length?(e=t,S):e},S.nodeWidth=function(e){return arguments.length?(x=+e,S):x},S.nodePadding=function(e){return arguments.length?(g=v=+e,S):g},S.nodes=function(e){return arguments.length?(b="function"==typeof e?e:(0,a.default)(e),S):b},S.links=function(e){return arguments.length?(D="function"==typeof e?e:(0,a.default)(e),S):D},S.linkSort=function(e){return arguments.length?(t=e,S):t},S.size=function(e){return arguments.length?(r=s=0,n=+e[0],l=+e[1],S):[n-r,l-s]},S.extent=function(e){return arguments.length?(r=+e[0][0],n=+e[1][0],s=+e[0][1],l=+e[1][1],S):[[r,s],[n,l]]},S.iterations=function(e){return arguments.length?(I=+e,S):I},S}},{"d3-array":"jsxTM","./align.js":"7PP8Y","./constant.js":"HRcCK","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],jsxTM:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"bisect",()=>i.default),n.export(r,"bisectRight",()=>o.bisectRight),n.export(r,"bisectLeft",()=>o.bisectLeft),n.export(r,"bisectCenter",()=>o.bisectCenter),n.export(r,"ascending",()=>a.default),n.export(r,"bisector",()=>c.default),n.export(r,"count",()=>p.default),n.export(r,"cross",()=>d.default),n.export(r,"cumsum",()=>j.default),n.export(r,"descending",()=>x.default),n.export(r,"deviation",()=>v.default),n.export(r,"extent",()=>_.default),n.export(r,"Adder",()=>b.Adder),n.export(r,"fsum",()=>b.fsum),n.export(r,"fcumsum",()=>b.fcumsum),n.export(r,"group",()=>I.default),n.export(r,"groups",()=>D.groups),n.export(r,"index",()=>D.index),n.export(r,"indexes",()=>D.indexes),n.export(r,"rollup",()=>D.rollup),n.export(r,"rollups",()=>D.rollups),n.export(r,"groupSort",()=>w.default),n.export(r,"bin",()=>O.default),n.export(r,"histogram",()=>O.default),n.export(r,"thresholdFreedmanDiaconis",()=>L.default),n.export(r,"thresholdScott",()=>C.default),n.export(r,"thresholdSturges",()=>R.default),n.export(r,"max",()=>F.default),n.export(r,"maxIndex",()=>z.default),n.export(r,"mean",()=>$.default),n.export(r,"median",()=>H.default),n.export(r,"merge",()=>W.default),n.export(r,"min",()=>V.default),n.export(r,"minIndex",()=>Z.default),n.export(r,"nice",()=>G.default),n.export(r,"pairs",()=>J.default),n.export(r,"permute",()=>et.default),n.export(r,"quantile",()=>es.default),n.export(r,"quantileSorted",()=>er.quantileSorted),n.export(r,"quickselect",()=>eo.default),n.export(r,"range",()=>el.default),n.export(r,"least",()=>eu.default),n.export(r,"leastIndex",()=>ef.default),n.export(r,"greatest",()=>eh.default),n.export(r,"greatestIndex",()=>ey.default),n.export(r,"scan",()=>em.default),n.export(r,"shuffle",()=>eg.default),n.export(r,"shuffler",()=>ex.shuffler),n.export(r,"sum",()=>ek.default),n.export(r,"ticks",()=>eb.default),n.export(r,"tickIncrement",()=>e_.tickIncrement),n.export(r,"tickStep",()=>e_.tickStep),n.export(r,"transpose",()=>eI.default),n.export(r,"variance",()=>ew.default),n.export(r,"zip",()=>eO.default),n.export(r,"every",()=>eL.default),n.export(r,"some",()=>eC.default),n.export(r,"filter",()=>eR.default),n.export(r,"map",()=>eF.default),n.export(r,"reduce",()=>ez.default),n.export(r,"reverse",()=>e$.default),n.export(r,"sort",()=>eH.default),n.export(r,"difference",()=>eW.default),n.export(r,"disjoint",()=>eV.default),n.export(r,"intersection",()=>eZ.default),n.export(r,"subset",()=>eG.default),n.export(r,"superset",()=>eJ.default),n.export(r,"union",()=>e0.default),n.export(r,"InternMap",()=>e2.InternMap),n.export(r,"InternSet",()=>e2.InternSet);var o=e("./bisect.js"),i=n.interopDefault(o),l=e("./ascending.js"),a=n.interopDefault(l),u=e("./bisector.js"),c=n.interopDefault(u),f=e("./count.js"),p=n.interopDefault(f),h=e("./cross.js"),d=n.interopDefault(h),y=e("./cumsum.js"),j=n.interopDefault(y),m=e("./descending.js"),x=n.interopDefault(m),g=e("./deviation.js"),v=n.interopDefault(g),k=e("./extent.js"),_=n.interopDefault(k),b=e("./fsum.js"),D=e("./group.js"),I=n.interopDefault(D),S=e("./groupSort.js"),w=n.interopDefault(S),E=e("./bin.js"),O=n.interopDefault(E),A=e("./threshold/freedmanDiaconis.js"),L=n.interopDefault(A),M=e("./threshold/scott.js"),C=n.interopDefault(M),T=e("./threshold/sturges.js"),R=n.interopDefault(T),P=e("./max.js"),F=n.interopDefault(P),N=e("./maxIndex.js"),z=n.interopDefault(N),q=e("./mean.js"),$=n.interopDefault(q),B=e("./median.js"),H=n.interopDefault(B),U=e("./merge.js"),W=n.interopDefault(U),Y=e("./min.js"),V=n.interopDefault(Y),X=e("./minIndex.js"),Z=n.interopDefault(X),K=e("./nice.js"),G=n.interopDefault(K),Q=e("./pairs.js"),J=n.interopDefault(Q),ee=e("./permute.js"),et=n.interopDefault(ee),er=e("./quantile.js"),es=n.interopDefault(er),en=e("./quickselect.js"),eo=n.interopDefault(en),ei=e("./range.js"),el=n.interopDefault(ei),ea=e("./least.js"),eu=n.interopDefault(ea),ec=e("./leastIndex.js"),ef=n.interopDefault(ec),ep=e("./greatest.js"),eh=n.interopDefault(ep),ed=e("./greatestIndex.js"),ey=n.interopDefault(ed),ej=e("./scan.js"),em=n.interopDefault(ej),ex=e("./shuffle.js"),eg=n.interopDefault(ex),ev=e("./sum.js"),ek=n.interopDefault(ev),e_=e("./ticks.js"),eb=n.interopDefault(e_),eD=e("./transpose.js"),eI=n.interopDefault(eD),eS=e("./variance.js"),ew=n.interopDefault(eS),eE=e("./zip.js"),eO=n.interopDefault(eE),eA=e("./every.js"),eL=n.interopDefault(eA),eM=e("./some.js"),eC=n.interopDefault(eM),eT=e("./filter.js"),eR=n.interopDefault(eT),eP=e("./map.js"),eF=n.interopDefault(eP),eN=e("./reduce.js"),ez=n.interopDefault(eN),eq=e("./reverse.js"),e$=n.interopDefault(eq),eB=e("./sort.js"),eH=n.interopDefault(eB),eU=e("./difference.js"),eW=n.interopDefault(eU),eY=e("./disjoint.js"),eV=n.interopDefault(eY),eX=e("./intersection.js"),eZ=n.interopDefault(eX),eK=e("./subset.js"),eG=n.interopDefault(eK),eQ=e("./superset.js"),eJ=n.interopDefault(eQ),e1=e("./union.js"),e0=n.interopDefault(e1),e2=e("internmap")},{"./bisect.js":!1,"./ascending.js":!1,"./bisector.js":!1,"./count.js":!1,"./cross.js":!1,"./cumsum.js":!1,"./descending.js":!1,"./deviation.js":!1,"./extent.js":!1,"./fsum.js":!1,"./group.js":!1,"./groupSort.js":!1,"./bin.js":!1,"./threshold/freedmanDiaconis.js":!1,"./threshold/scott.js":!1,"./threshold/sturges.js":!1,"./max.js":"bBgNl","./maxIndex.js":!1,"./mean.js":!1,"./median.js":!1,"./merge.js":!1,"./min.js":"caBBg","./minIndex.js":!1,"./nice.js":!1,"./pairs.js":!1,"./permute.js":!1,"./quantile.js":!1,"./quickselect.js":!1,"./range.js":!1,"./least.js":!1,"./leastIndex.js":!1,"./greatest.js":!1,"./greatestIndex.js":!1,"./scan.js":!1,"./shuffle.js":!1,"./sum.js":"7yNPs","./ticks.js":!1,"./transpose.js":!1,"./variance.js":!1,"./zip.js":!1,"./every.js":!1,"./some.js":!1,"./filter.js":!1,"./map.js":!1,"./reduce.js":!1,"./reverse.js":!1,"./sort.js":!1,"./difference.js":!1,"./disjoint.js":!1,"./intersection.js":!1,"./subset.js":!1,"./superset.js":!1,"./union.js":!1,internmap:!1,"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bBgNl:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){let r;if(void 0===t)for(let t of e)null!=t&&(r<t||void 0===r&&t>=t)&&(r=t);else{let s=-1;for(let n of e)null!=(n=t(n,++s,e))&&(r<n||void 0===r&&n>=n)&&(r=n)}return r}n.defineInteropFlag(r),n.export(r,"default",()=>o)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],caBBg:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){let r;if(void 0===t)for(let t of e)null!=t&&(r>t||void 0===r&&t>=t)&&(r=t);else{let s=-1;for(let n of e)null!=(n=t(n,++s,e))&&(r>n||void 0===r&&n>=n)&&(r=n)}return r}n.defineInteropFlag(r),n.export(r,"default",()=>o)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7yNPs":[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e,t){let r=0;if(void 0===t)for(let t of e)(t=+t)&&(r+=t);else{let s=-1;for(let n of e)(n=+t(n,++s,e))&&(r+=n)}return r}n.defineInteropFlag(r),n.export(r,"default",()=>o)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7PP8Y":[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"left",()=>l),n.export(r,"right",()=>a),n.export(r,"justify",()=>u),n.export(r,"center",()=>c);var o=e("d3-array");function i(e){return e.target.depth}function l(e){return e.depth}function a(e,t){return t-1-e.height}function u(e,t){return e.sourceLinks.length?e.depth:t-1}function c(e){return e.targetLinks.length?e.depth:e.sourceLinks.length?(0,o.min)(e.sourceLinks,i)-1:0}},{"d3-array":"jsxTM","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],HRcCK:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return function(){return e}}n.defineInteropFlag(r),n.export(r,"default",()=>o)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5eoFk":[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",()=>function(){return(0,o.linkHorizontal)().source(i).target(l)});var o=e("d3-shape");function i(e){return[e.source.x1,e.y0]}function l(e){return[e.target.x0,e.y1]}},{"d3-shape":"lL1uE","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],lL1uE:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"arc",()=>i.default),n.export(r,"area",()=>a.default),n.export(r,"line",()=>c.default),n.export(r,"pie",()=>p.default),n.export(r,"areaRadial",()=>d.default),n.export(r,"radialArea",()=>d.default),n.export(r,"lineRadial",()=>j.default),n.export(r,"radialLine",()=>j.default),n.export(r,"pointRadial",()=>x.default),n.export(r,"linkHorizontal",()=>g.linkHorizontal),n.export(r,"linkVertical",()=>g.linkVertical),n.export(r,"linkRadial",()=>g.linkRadial),n.export(r,"symbol",()=>k.default),n.export(r,"symbols",()=>v.symbols),n.export(r,"symbolCircle",()=>b.default),n.export(r,"symbolCross",()=>I.default),n.export(r,"symbolDiamond",()=>w.default),n.export(r,"symbolSquare",()=>O.default),n.export(r,"symbolStar",()=>L.default),n.export(r,"symbolTriangle",()=>C.default),n.export(r,"symbolWye",()=>R.default),n.export(r,"curveBasisClosed",()=>F.default),n.export(r,"curveBasisOpen",()=>z.default),n.export(r,"curveBasis",()=>$.default),n.export(r,"curveBundle",()=>H.default),n.export(r,"curveCardinalClosed",()=>W.default),n.export(r,"curveCardinalOpen",()=>V.default),n.export(r,"curveCardinal",()=>Z.default),n.export(r,"curveCatmullRomClosed",()=>G.default),n.export(r,"curveCatmullRomOpen",()=>J.default),n.export(r,"curveCatmullRom",()=>et.default),n.export(r,"curveLinearClosed",()=>es.default),n.export(r,"curveLinear",()=>eo.default),n.export(r,"curveMonotoneX",()=>ei.monotoneX),n.export(r,"curveMonotoneY",()=>ei.monotoneY),n.export(r,"curveNatural",()=>ea.default),n.export(r,"curveStep",()=>ec.default),n.export(r,"curveStepAfter",()=>eu.stepAfter),n.export(r,"curveStepBefore",()=>eu.stepBefore),n.export(r,"stack",()=>ep.default),n.export(r,"stackOffsetExpand",()=>ed.default),n.export(r,"stackOffsetDiverging",()=>ej.default),n.export(r,"stackOffsetNone",()=>ex.default),n.export(r,"stackOffsetSilhouette",()=>ev.default),n.export(r,"stackOffsetWiggle",()=>e_.default),n.export(r,"stackOrderAppearance",()=>eD.default),n.export(r,"stackOrderAscending",()=>eS.default),n.export(r,"stackOrderDescending",()=>eE.default),n.export(r,"stackOrderInsideOut",()=>eA.default),n.export(r,"stackOrderNone",()=>eM.default),n.export(r,"stackOrderReverse",()=>eT.default);var o=e("./arc.js"),i=n.interopDefault(o),l=e("./area.js"),a=n.interopDefault(l),u=e("./line.js"),c=n.interopDefault(u),f=e("./pie.js"),p=n.interopDefault(f),h=e("./areaRadial.js"),d=n.interopDefault(h),y=e("./lineRadial.js"),j=n.interopDefault(y),m=e("./pointRadial.js"),x=n.interopDefault(m),g=e("./link/index.js"),v=e("./symbol.js"),k=n.interopDefault(v),_=e("./symbol/circle.js"),b=n.interopDefault(_),D=e("./symbol/cross.js"),I=n.interopDefault(D),S=e("./symbol/diamond.js"),w=n.interopDefault(S),E=e("./symbol/square.js"),O=n.interopDefault(E),A=e("./symbol/star.js"),L=n.interopDefault(A),M=e("./symbol/triangle.js"),C=n.interopDefault(M),T=e("./symbol/wye.js"),R=n.interopDefault(T),P=e("./curve/basisClosed.js"),F=n.interopDefault(P),N=e("./curve/basisOpen.js"),z=n.interopDefault(N),q=e("./curve/basis.js"),$=n.interopDefault(q),B=e("./curve/bundle.js"),H=n.interopDefault(B),U=e("./curve/cardinalClosed.js"),W=n.interopDefault(U),Y=e("./curve/cardinalOpen.js"),V=n.interopDefault(Y),X=e("./curve/cardinal.js"),Z=n.interopDefault(X),K=e("./curve/catmullRomClosed.js"),G=n.interopDefault(K),Q=e("./curve/catmullRomOpen.js"),J=n.interopDefault(Q),ee=e("./curve/catmullRom.js"),et=n.interopDefault(ee),er=e("./curve/linearClosed.js"),es=n.interopDefault(er),en=e("./curve/linear.js"),eo=n.interopDefault(en),ei=e("./curve/monotone.js"),el=e("./curve/natural.js"),ea=n.interopDefault(el),eu=e("./curve/step.js"),ec=n.interopDefault(eu),ef=e("./stack.js"),ep=n.interopDefault(ef),eh=e("./offset/expand.js"),ed=n.interopDefault(eh),ey=e("./offset/diverging.js"),ej=n.interopDefault(ey),em=e("./offset/none.js"),ex=n.interopDefault(em),eg=e("./offset/silhouette.js"),ev=n.interopDefault(eg),ek=e("./offset/wiggle.js"),e_=n.interopDefault(ek),eb=e("./order/appearance.js"),eD=n.interopDefault(eb),eI=e("./order/ascending.js"),eS=n.interopDefault(eI),ew=e("./order/descending.js"),eE=n.interopDefault(ew),eO=e("./order/insideOut.js"),eA=n.interopDefault(eO),eL=e("./order/none.js"),eM=n.interopDefault(eL),eC=e("./order/reverse.js"),eT=n.interopDefault(eC)},{"./arc.js":!1,"./area.js":!1,"./line.js":!1,"./pie.js":!1,"./areaRadial.js":!1,"./lineRadial.js":!1,"./pointRadial.js":!1,"./link/index.js":"fUFjP","./symbol.js":!1,"./symbol/circle.js":!1,"./symbol/cross.js":!1,"./symbol/diamond.js":!1,"./symbol/square.js":!1,"./symbol/star.js":!1,"./symbol/triangle.js":!1,"./symbol/wye.js":!1,"./curve/basisClosed.js":!1,"./curve/basisOpen.js":!1,"./curve/basis.js":!1,"./curve/bundle.js":!1,"./curve/cardinalClosed.js":!1,"./curve/cardinalOpen.js":!1,"./curve/cardinal.js":!1,"./curve/catmullRomClosed.js":!1,"./curve/catmullRomOpen.js":!1,"./curve/catmullRom.js":!1,"./curve/linearClosed.js":!1,"./curve/linear.js":!1,"./curve/monotone.js":!1,"./curve/natural.js":!1,"./curve/step.js":!1,"./stack.js":!1,"./offset/expand.js":!1,"./offset/diverging.js":!1,"./offset/none.js":!1,"./offset/silhouette.js":!1,"./offset/wiggle.js":!1,"./order/appearance.js":!1,"./order/ascending.js":!1,"./order/descending.js":!1,"./order/insideOut.js":!1,"./order/none.js":!1,"./order/reverse.js":!1,"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7hggk":[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",()=>function(e,t){return[(t=+t)*Math.cos(e-=Math.PI/2),t*Math.sin(e)]})},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fUFjP:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"linkHorizontal",()=>x),n.export(r,"linkVertical",()=>g),n.export(r,"linkRadial",()=>v);var o=e("d3-path"),i=e("../array.js"),l=e("../constant.js"),a=n.interopDefault(l),u=e("../point.js"),c=e("../pointRadial.js"),f=n.interopDefault(c);function p(e){return e.source}function h(e){return e.target}function d(e){var t=p,r=h,s=u.x,n=u.y,l=null;function c(){var a,u=(0,i.slice).call(arguments),c=t.apply(this,u),f=r.apply(this,u);if(l||(l=a=(0,o.path)()),e(l,+s.apply(this,(u[0]=c,u)),+n.apply(this,u),+s.apply(this,(u[0]=f,u)),+n.apply(this,u)),a)return l=null,a+""||null}return c.source=function(e){return arguments.length?(t=e,c):t},c.target=function(e){return arguments.length?(r=e,c):r},c.x=function(e){return arguments.length?(s="function"==typeof e?e:(0,a.default)(+e),c):s},c.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,a.default)(+e),c):n},c.context=function(e){return arguments.length?(l=null==e?null:e,c):l},c}function y(e,t,r,s,n){e.moveTo(t,r),e.bezierCurveTo(t=(t+s)/2,r,t,n,s,n)}function j(e,t,r,s,n){e.moveTo(t,r),e.bezierCurveTo(t,r=(r+n)/2,s,r,s,n)}function m(e,t,r,s,n){var o=(0,f.default)(t,r),i=(0,f.default)(t,r=(r+n)/2),l=(0,f.default)(s,r),a=(0,f.default)(s,n);e.moveTo(o[0],o[1]),e.bezierCurveTo(i[0],i[1],l[0],l[1],a[0],a[1])}function x(){return d(y)}function g(){return d(j)}function v(){var e=d(m);return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e}},{"d3-path":"6z9sF","../array.js":"btyxw","../constant.js":"e2hpN","../point.js":"eBi6r","../pointRadial.js":"7hggk","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6z9sF":[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"path",()=>i.default);var o=e("./path.js"),i=n.interopDefault(o)},{"./path.js":"e4HdN","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],e4HdN:[function(e,t,r,s){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);var n=Math.PI,o=2*n,i=o-1e-6;function l(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new l}l.prototype=a.prototype={constructor:l,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,r,s){this._+="Q"+ +e+","+ +t+","+(this._x1=+r)+","+(this._y1=+s)},bezierCurveTo:function(e,t,r,s,n,o){this._+="C"+ +e+","+ +t+","+ +r+","+ +s+","+(this._x1=+n)+","+(this._y1=+o)},arcTo:function(e,t,r,s,o){e=+e,t=+t,r=+r,s=+s,o=+o;var i=this._x1,l=this._y1,a=r-e,u=s-t,c=i-e,f=l-t,p=c*c+f*f;if(o<0)throw Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(p>1e-6){if(Math.abs(f*a-u*c)>1e-6&&o){var h=r-i,d=s-l,y=a*a+u*u,j=Math.sqrt(y),m=Math.sqrt(p),x=o*Math.tan((n-Math.acos((y+p-(h*h+d*d))/(2*j*m)))/2),g=x/m,v=x/j;Math.abs(g-1)>1e-6&&(this._+="L"+(e+g*c)+","+(t+g*f)),this._+="A"+o+","+o+",0,0,"+ +(f*h>c*d)+","+(this._x1=e+v*a)+","+(this._y1=t+v*u)}else this._+="L"+(this._x1=e)+","+(this._y1=t)}},arc:function(e,t,r,s,l,a){e=+e,t=+t,r=+r,a=!!a;var u=r*Math.cos(s),c=r*Math.sin(s),f=e+u,p=t+c,h=1^a,d=a?s-l:l-s;if(r<0)throw Error("negative radius: "+r);null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-p)>1e-6)&&(this._+="L"+f+","+p),r&&(d<0&&(d=d%o+o),d>i?this._+="A"+r+","+r+",0,1,"+h+","+(e-u)+","+(t-c)+"A"+r+","+r+",0,1,"+h+","+(this._x1=f)+","+(this._y1=p):d>1e-6&&(this._+="A"+r+","+r+",0,"+ +(d>=n)+","+h+","+(this._x1=e+r*Math.cos(l))+","+(this._y1=t+r*Math.sin(l))))},rect:function(e,t,r,s){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +r+"v"+ +s+"h"+-r+"Z"},toString:function(){return this._}},r.default=a},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],btyxw:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"slice",()=>o);var o=Array.prototype.slice},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],e2hpN:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"default",()=>function(e){return function(){return e}})},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eBi6r:[function(e,t,r,s){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function o(e){return e[0]}function i(e){return e[1]}n.defineInteropFlag(r),n.export(r,"x",()=>o),n.export(r,"y",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},[],0,"parcelRequire94c2");
//# sourceMappingURL=sankeyDiagram-04a897e0.dd663f78.js.map
