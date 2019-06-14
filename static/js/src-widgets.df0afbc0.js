(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/widgets.mdx":function(e,n,a){"use strict";a.r(n);var o=a("./node_modules/react/index.js"),t=a.n(o),c=a("./node_modules/@mdx-js/tag/dist/index.js"),l=a("./node_modules/docz/dist/index.m.js"),r=a("./src/site/data/poc.js"),i=a("./src/editor/components/Dante/Dante.js"),m=a("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),s=a("./src/editor/components/blocks/image.js"),p=a("./src/editor/components/blocks/embed.js"),d=a("./src/editor/components/blocks/video.js"),g=a("./src/editor/components/blocks/placeholder.js"),u=a("./src/editor/components/blocks/videoRecorder/index.js"),h={publicUrl:"/dante2/",uploadUrl:"https://dante-uploader.herokuapp.com/upload"};function f(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},c=Object.keys(e);for(o=0;o<c.length;o++)a=c[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)a=c[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}n.default=function(e){var n=e.components,a=f(e,["components"]);return t.a.createElement(c.MDXTag,{name:"wrapper",components:n},t.a.createElement(c.MDXTag,{name:"h1",components:n,props:{id:"widgets"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#widgets"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Widgets"),t.a.createElement(c.MDXTag,{name:"p",components:n},"Widgets are just react components that you can use to render custom content on your component. Note that all Dante's features are composed as components."),t.a.createElement(c.MDXTag,{name:"p",components:n},"Widgets are contained in an array that contain a configuration object"),t.a.createElement(c.MDXTag,{name:"p",components:n},"the config options are:"),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"options"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#options"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Options"),t.a.createElement(c.MDXTag,{name:"ul",components:n},t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"block"),": the class of the React.Component."),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"editable"),": boolean, this configures if the component will be editable or not."),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"renderable"),": boolean, this configures if the component is renderable"),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"breakOnContinuous"),": boolean, same as continuousBlock but for widgets."),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"handleEnterWithText"),": function, this handles the behaviour when you hit ENTER on the component and text is present.\nhandleEnterWihoutText: function, this handles the behaviour when you hit ENTER on the component and no text is present."),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"selectedFn"),": function, this handles the behaviour when component is focused"),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"selected_class"),": string, this configures which class will be added when component is focused"),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"wrapper_class"),": string, this configures the default class that will wrapp the component"),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"options"),": Object, this are custom options that will be stored in your component for later use."),t.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"widget_options"),": Object, this are custom options that will operate as a blockProps, this are volatile options and will not be stored in your content but will be accesible in the editor's context. ")),t.a.createElement(c.MDXTag,{name:"hr",components:n}),t.a.createElement(c.MDXTag,{name:"p",components:n},'Widgets can interoperate with tooltips or other widgets. For example the Add Button loads the widgets that have a "displayOnInlineTooltip" option on widget_options. That basically is a custom option that can be read from any component since the widget context have access to Dante\'s context.'),t.a.createElement(c.MDXTag,{name:"hr",components:n}),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"default"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#default"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"default"),t.a.createElement(c.MDXTag,{name:"p",components:n},'By default Dante2 has the image, link embed & video embed activated out of the box. If "Add Button" is configured (it is by default), those widgets will be displayed when the button is clicked.  '),t.a.createElement(l.d,{__position:0,__code:"<Dante content={null} />",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null})),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"empty-widgets"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#empty-widgets"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"empty widgets"),t.a.createElement(c.MDXTag,{name:"p",components:n},"Also you can empty the list of widgets:"),t.a.createElement(l.d,{__position:1,__code:"<Dante content={null} widgets={[]} />",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[]})),t.a.createElement(c.MDXTag,{name:"p",components:n},"Or configure those one by one:"),t.a.createElement(l.d,{__position:2,__code:"<Dante content={null} widgets={[ImageBlockConfig()]} />",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[Object(s.a)()]})),t.a.createElement(c.MDXTag,{name:"h1",components:n,props:{id:"embed--extract"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#embed--extract"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Embed & Extract"),t.a.createElement(c.MDXTag,{name:"p",components:n},"Embed and Video widgets uses open framely you can override this by using your own account of iframely or use another oembed provider like embedly."),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"embed-link"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#embed-link"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Embed Link"),t.a.createElement(l.d,{__position:3,__code:"<Dante\n  content={null}\n  widgets={[\n    EmbedBlockConfig({\n      options: {\n        placeholder: 'put an external link',\n        endpoint: '//noembed.com/embed?url=',\n      },\n    }),\n    PlaceholderBlockConfig(),\n  ]}\n/>",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[Object(p.a)({options:{placeholder:"put an external link",endpoint:"//noembed.com/embed?url="}}),Object(g.a)()]})),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"embed-video"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#embed-video"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Embed Video"),t.a.createElement(l.d,{__position:4,__code:"<Dante\n  content={null}\n  widgets={[\n    VideoBlockConfig({\n      options: {\n        placeholder: 'put an external video link',\n        endpoint: '//noembed.com/embed?url=',\n        caption: 'optional caption',\n      },\n    }),\n    PlaceholderBlockConfig(),\n  ]}\n/>",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[Object(d.a)({options:{placeholder:"put an external video link",endpoint:"//noembed.com/embed?url=",caption:"optional caption"}}),Object(g.a)()]})),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"upload"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#upload"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Upload"),t.a.createElement(l.d,{__position:5,__code:"<Dante content={null} widgets={[ImageBlockConfig()]} />",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[Object(s.a)()]})),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"upload-url-callback"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#upload-url-callback"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Upload Url Callback"),t.a.createElement(l.d,{__position:6,__code:"<Dante\n  content={null}\n  widgets={[\n    ImageBlockConfig({\n      options: {\n        upload_url: config.uploadUrl,\n        upload_callback: (ctx, img) => {\n          alert('file uploaded: ' + ctx.data.url)\n        },\n        upload_error_callback: (ctx, img) => {\n          console.log(ctx)\n        },\n      },\n    }),\n  ]}\n/>",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[Object(s.a)({options:{upload_url:h.uploadUrl,upload_callback:function(e,n){alert("file uploaded: "+e.data.url)},upload_error_callback:function(e,n){console.log(e)}}})]})),t.a.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"video"}},t.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#video"}},t.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Video"),t.a.createElement(l.d,{__position:7,__code:"<Dante\n  content={null}\n  widgets={[\n    VideoRecorderBlockConfig({\n      options: {\n        seconds_to_record: 5000,\n        upload_url: config.uploadUrl,\n        upload_callback: (ctx, img) => {\n          console.log('file uploaded: ' + ctx.data.url)\n        },\n        upload_error_callback: (ctx, img) => {\n          debugger\n          console.log(ctx)\n        },\n      },\n    }),\n  ]}\n  debug={true}\n/>",__scope:{props:a,h1:r.e,Dante:i.a,State:m.a,Toggle:m.b,ImageBlockConfig:s.a,EmbedBlockConfig:p.a,VideoBlockConfig:d.a,PlaceholderBlockConfig:g.a,VideoRecorderBlockConfig:u.a,config:h}},t.a.createElement(i.a,{content:null,widgets:[Object(u.a)({options:{seconds_to_record:5e3,upload_url:h.uploadUrl,upload_callback:function(e,n){console.log("file uploaded: "+e.data.url)},upload_error_callback:function(e,n){console.log(e)}}})],debug:!0})))}}}]);