(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./.linaria-cache/src/components/contribute/Contribute.linaria.css":function(e,a,t){},"./src/components/contribute/Contribute.tsx":function(e,a,t){"use strict";t.r(a),function(e){var s,l=t("./node_modules/formik/dist/formik.esm.js"),r=t("./node_modules/linaria/lib/index.js"),i=t("./node_modules/linaria/react.js"),n=t("./node_modules/ramda/es/find.js"),c=t("./node_modules/ramda/es/pathEq.js"),o=t("./node_modules/ramda/es/uniq.js"),m=t("./node_modules/react/index.js"),d=t.n(m),u=t("./node_modules/react-icons/bs/index.esm.js"),g=t("./node_modules/react-syntax-highlighter/dist/esm/prism-light.js"),b=t("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/yaml.js"),p=t("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light.js"),f=t("./node_modules/js-yaml/index.js"),h=t.n(f),k=t("./src/components/general/ExternalLink.tsx"),E=t("./src/lib/stickers.ts");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const N=Object(i.styled)("div")({name:"Contribute",class:"c1b6b6t9"}),w=/^https:\/\/signal.art\/addstickers\/#pack_id=([\dA-Za-z]+)&pack_key=([\dA-Za-z]+)$/g,y=/^(?:([\w ]+))+(?:, ?([\w ]+))*$/g,x={signalArtUrl:"",source:"",tags:"",isNsfw:void 0,isOriginal:void 0},O={signalArtUrl:async e=>{if(!e)return"This field is required.";const a=new RegExp(w).exec(e);if(!a)return"Invalid signal.art URL.";const[,t,s]=a;if(n.a(c.a(["meta","id"],t),await Object(E.d)()))return"A sticker pack with that ID already exists in the directory.";try{await Object(E.c)(t,s)}catch{return"Invalid sticker pack. Please check the pack ID and key."}},source:e=>{if(e&&e.length>320)return"This field must be no longer than 320 characters."},tags:e=>{if(""!==e&&!new RegExp(y).test(e))return"Invalid value. Tags must be a list of comma-delimited strings."},isNsfw:e=>{if(void 0===e)return"This field is required."},isOriginal:e=>{if(void 0===e)return"This field is required."}};g.a.registerLanguage("yaml",b.a);const S=()=>{const[e,a]=d.a.useState(!1),[t,s]=d.a.useState(""),i=d.a.useRef(null),n=()=>{a(!0),s("")},c=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://github.com",title:"GitHub"},"GitHub"),[]),m=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests",title:"Pull Request"},"Pull Request"),[]),b=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://support.signal.org/hc/articles/360031836512-Stickers#h_c2a0a45b-862f-4d12-9ab1-d9a6844062ca",title:"Sticker Creator Guidelines"},"Sticker Creator Guidelines"),[]),f=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://en.wikipedia.org/wiki/YAML",title:"YAML"},"YAML"),[]),E=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",title:"Signal Stickers repository"},"Signal Stickers repository"),[]),v=d.a.useMemo(()=>d.a.createElement(k.a,{href:"https://twitter.com/signalstickers",title:"Twitter"},"@signalstickers"),[]);return d.a.createElement(N,{className:"my-4 p-lg-3 px-lg-4"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("h1",{className:"mb-4"},"Contribute"),d.a.createElement("p",{className:"mt-lg-3 mb-4"},"To get your sticker pack listed in the Signal Stickers directory:"),d.a.createElement("ol",null,d.a.createElement("li",{className:"mb-2"},"If you don't already have one, create a ",c," account. You will need one in order to open a ",m," against the Signal Stickers repository."),d.a.createElement("li",{className:"mb-2"},"Create a sticker pack using the Signal desktop app. For help, see Signal's ",b,". Be sure to save the ",d.a.createElement("code",null,"signal.art")," URL for your pack. If you are creating a sticker pack derived from an existing one on another platform or from someone else's artwork, please consider using the original author's name in the ",d.a.createElement("strong",null,"Author")," field when creating your pack in Signal, and consider adding their website, Twitter handle, or other online presence to the ",d.a.createElement("strong",null,"Source")," field below."),d.a.createElement("li",{className:"mb-2"},"Open a Pull Request in the Signal Stickers GitHub repository updating ",d.a.createElement("code",null,"stickers.yml")," to to include an entry for your sticker pack.")),d.a.createElement("p",null,"The form below will guide you through the process of generating the ",f," entry for your pack that you will need to add to ",d.a.createElement("code",null,"stickers.yml"),"."),d.a.createElement("p",null,"Alternatively, you can send us the YAML via a Twitter message at ",v,". Please only use this if you have no way to open a Pull Request on GitHub!"))),d.a.createElement("hr",{className:"pt-3 pb-2"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement(l.d,{initialValues:x,onSubmit:e=>{const a=new RegExp(w).exec(e.signalArtUrl);if(!a)throw new Error("Unable to extract pack ID and pack key from signal.art URL.");const[,t,l]=a,r=o.a(e.tags.split(",").map(e=>e.trim()).filter(e=>e.length));return s(h.a.safeDump({[t]:{key:l,source:e.source,tags:r,nsfw:"true"===e.isNsfw,original:"true"===e.isOriginal}},{indent:2}).trim()),i.current&&i.current.scrollIntoView({behavior:"smooth"}),!0},validateOnChange:e,validateOnBlur:e},({values:e,errors:a,isValidating:t,isSubmitting:s})=>d.a.createElement(l.c,{noValidate:!0},d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.cx)("col-12",a.signalArtUrl&&"text-danger"),htmlFor:"signal-art-url"},"Signal.art URL:",d.a.createElement(l.b,{type:"text",id:"signal-art-url",name:"signalArtUrl",validate:O.signalArtUrl,className:Object(r.cx)("form-control","mt-2",a.signalArtUrl&&"is-invalid"),placeholder:"https://signal.art/addstickers/#pack_id=<your pack id>&pack_key=<your pack key>"}),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"signalArtUrl"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.cx)("col-12",a.source&&"text-danger"),htmlFor:"source"},"(Optional) Source:",d.a.createElement(l.b,{type:"text",id:"source",name:"source",validate:O.source,className:Object(r.cx)("form-control","mt-2",a.source&&"is-invalid")}),d.a.createElement("small",{className:"form-text text-muted"},"Original author, website, company, etc."),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"source"})," ")))),d.a.createElement("div",{className:"form-group mb-4"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.cx)("col-12",a.tags&&"text-danger"),htmlFor:"tags"},"(Optional) Tags:",d.a.createElement(l.b,{type:"text",id:"tags",name:"tags",validate:O.tags,className:Object(r.cx)("form-control","mt-2",a.tags&&"is-invalid")}),d.a.createElement("small",{className:"form-text text-muted"},"Comma-separated list of words."),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"tags"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.cx)("col-12","mb-2",a.isNsfw&&"text-danger")},"Is your sticker pack ",d.a.createElement(k.a,{href:"https://www.urbandictionary.com/define.php?term=NSFW",title:"NSFW"},"NSFW"),"?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-nsfw-true",name:"isNsfw",validate:O.isNsfw,className:Object(r.cx)("custom-control-input",a.isNsfw&&"is-invalid"),value:"true",checked:"true"===e.isNsfw}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-nsfw-false",name:"isNsfw",validate:O.isNsfw,className:Object(r.cx)("custom-control-input",a.isNsfw&&"is-invalid"),value:"false",checked:"false"===e.isNsfw}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isNsfw"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.cx)("col-12","mb-2",a.isOriginal&&"text-danger")},"Is your pack original? Did the author of the pack draw it exclusively for Signal, from original artworks?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-original-true",name:"isOriginal",validate:O.isOriginal,className:Object(r.cx)("custom-control-input",a.isOriginal&&"is-invalid"),value:"true",checked:"true"===e.isOriginal}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-original-false",name:"isOriginal",validate:O.isOriginal,className:Object(r.cx)("custom-control-input",a.isOriginal&&"is-invalid"),value:"false",checked:"false"===e.isOriginal}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isOriginal"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:s||t,onClick:n},"Generate YAML")))))))),t?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("hr",null),d.a.createElement("p",{className:"mt-4 mb-4"},"Great! Below is the YAML entry you will need to add to the end of ",d.a.createElement("code",null,"stickers.yml")," in the ",E,":"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement("div",{className:"card"},d.a.createElement(g.a,{language:"yaml",style:p.a,customStyle:{margin:"0"}},t)))),d.a.createElement("div",{className:"row mt-4"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement(k.a,{title:"Open a Pull Request",href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",className:"btn btn-success btn-block btn-lg",ref:i},"Edit the file and open a Pull Request",d.a.createElement(u.c,{className:"ml-2"}))))):null)};v(S,"useState{[hasBeenSubmitted, setHasBeenSubmitted](false)}\nuseState{[ymlBlob, setYmlBlob]('')}\nuseRef{openPrButton}\nuseMemo{gitHubLink}\nuseMemo{pullRequestLink}\nuseMemo{stickerPackGuideLink}\nuseMemo{yamlLink}\nuseMemo{editStickersYmlLink}\nuseMemo{twitterLink}");const j=S;var L,A;a.default=j,t("./.linaria-cache/src/components/contribute/Contribute.linaria.css"),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(N,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(w,"SIGNAL_ART_URL_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(y,"TAGS_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(x,"initialValues","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(O,"validators","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(S,"ContributeComponent","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),L.register(j,"default","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx")),(A="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&A(e)}.call(this,t("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=contribute-d5b9792edcd282e74a2c.js.map