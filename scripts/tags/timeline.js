/**
 * timeline.js v1 | https://github.com/xaoxuu/hexo-theme-stellar/
 *
 * {% timeline [order:-date] %}
 *
 * {% timenode header1 %}
 * what happened 1
 * {% endtimenode %}
 *
 * {% timenode header2 %}
 * what happened 2
 * {% endtimenode %}
 *
 * {% endtimeline %}
 */

'use strict';

function postTimeline(args, content) {
  args = hexo.args.map(args, ['order']);

  const newerIcon = '<svg class="icon top" width="1em" height="1em" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7,0 C3.13425,0 0,3.13425 0,7 C0,10.86575 3.13425,14 7,14 C10.86575,14 14,10.86575 14,7 C14,3.13425 10.86575,0 7,0 Z M7,12.25 C4.104625,12.25 1.75,9.89449999 1.75,7 C1.75,4.10550001 4.104625,1.75 7,1.75 C9.895375,1.75 12.25,4.10550001 12.25,7 C12.25,9.89449999 9.895375,12.25 7,12.25 Z M8.75875001,7 L7.43750001,7 C7.19600001,7 7.00000002,6.804 7.00000002,6.56250001 L7.00000002,5.24125001 C7.00000002,4.76262501 6.61237501,4.37500001 6.13375002,4.37500001 L6.11625001,4.37500001 C5.63762502,4.37500001 5.25000001,4.76262501 5.25000001,5.24125001 L5.25000001,7.88375 C5.25000001,8.362375 5.63762502,8.75 6.11625001,8.75 L8.75875001,8.75 C9.237375,8.75 9.62500001,8.362375 9.62500001,7.88375 L9.62500001,7.86625 C9.62500001,7.387625 9.237375,7 8.75875001,7 L8.75875001,7 Z" id="top"></path></svg>';

  const olderIcon = '<svg class="icon bottom" width="1em" height="1em" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7,0 C10.8558804,0.0243061403 13.9756939,3.14411956 14,7 C14,10.8659932 10.8659932,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 Z M7,1.27272727 C4.67984382,1.25597015 2.57881097,2.64070073 1.67929035,4.77945461 C0.779769726,6.91820849 1.25950821,9.38836411 2.89419242,11.0349403 C4.52887664,12.6815164 6.99549008,13.1791467 9.14070778,12.2951521 C11.2859255,11.4111574 12.6859091,9.32021669 12.6859091,7 C12.6739296,3.85798179 10.1418488,1.30748075 7,1.27272727 Z M2.70454544,7 C2.7044994,7.39789465 2.91674722,7.76558417 3.26132643,7.96454478 C3.60590563,8.1635054 4.030458,8.1635054 4.3750372,7.96454478 C4.7196164,7.76558417 4.93186422,7.39789465 4.93181818,7 C4.93186422,6.60210535 4.7196164,6.23441583 4.3750372,6.03545522 C4.030458,5.8364946 3.60590563,5.8364946 3.26132643,6.03545522 C2.91674722,6.23441583 2.7044994,6.60210535 2.70454544,7 L2.70454544,7 Z M5.88636363,7 C5.88636363,7.39786396 6.09862151,7.76550543 6.44318181,7.96443741 C6.7877421,8.1633694 7.2122579,8.1633694 7.55681819,7.96443741 C7.90137849,7.76550543 8.11363637,7.39786396 8.11363637,7 C8.11363637,6.38495562 7.61504438,5.88636363 7,5.88636363 C6.38495562,5.88636363 5.88636363,6.38495562 5.88636363,7 L5.88636363,7 Z M9.06818182,7 C9.06813578,7.39789465 9.2803836,7.76558417 9.6249628,7.96454478 C9.969542,8.1635054 10.3940944,8.1635054 10.7386736,7.96454478 C11.0832528,7.76558417 11.2955006,7.39789465 11.2954546,7 C11.2955006,6.60210535 11.0832528,6.23441583 10.7386736,6.03545522 C10.3940944,5.8364946 9.969542,5.8364946 9.6249628,6.03545522 C9.2803836,6.23441583 9.06813578,6.60210535 9.06818182,7 Z" id="bottom"></path></svg>';

  var el = '';
  const order = args && args.order == 'date' ? 'date' : '-date';
  el += '<div class="tag-plugin timeline" order="' + order + '">';
  if (order == '-date') {
    el += newerIcon;
  } else {
    el += olderIcon;
  }
  el += '<div class="timenodes">' + content + '</div>';
  if (order == '-date') {
    el += olderIcon;
  } else {
    el += newerIcon;
  }
  el += '</div>';
  return el;
}

function postTimenode(args, content) {
  args = args.join(' ').split(', ');
  var header = args[0];
  return `<div class="tag-plugin timenode fs14"><div class="header"><span>${header}</span><a href="#comments"><svg class="icon comment" width="1em" height="1em" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M2.9969419,5.71559633 C2.9969419,6.20032331 3.38989075,6.59327217 3.87461774,6.59327217 C4.35934472,6.59327217 4.75229358,6.20032331 4.75229358,5.71559633 C4.75229358,5.23086935 4.35934472,4.83792049 3.87461774,4.83792049 C3.38989075,4.83792049 2.9969419,5.23086935 2.9969419,5.71559633 L2.9969419,5.71559633 Z" id="Path"></path>
  <path d="M6.76452599,5.71559633 C6.76452599,6.20032331 7.15747485,6.59327217 7.64220183,6.59327217 C8.12692882,6.59327217 8.51987768,6.20032331 8.51987768,5.71559633 C8.51987768,5.23086935 8.12692882,4.83792049 7.64220183,4.83792049 C7.15747485,4.83792049 6.76452599,5.23086935 6.76452599,5.71559633 L6.76452599,5.71559633 Z" id="Path"></path>
  <path d="M10.5321101,5.71559633 C10.5321101,6.20032331 10.925059,6.59327217 11.4097859,6.59327217 C11.8945129,6.59327217 12.2874618,6.20032331 12.2874618,5.71559633 C12.2874618,5.23086935 11.8945129,4.83792049 11.4097859,4.83792049 C10.925059,4.83792049 10.5321101,5.23086935 10.5321101,5.71559633 L10.5321101,5.71559633 Z" id="Path"></path>
  <path d="M7.60209315,13.9999855 L7.55255823,13.9999855 C7.30643038,13.9884675 7.07504521,13.8795376 6.90961525,13.6972904 L4.89384746,11.4483761 L1.65891421,11.4483761 C0.743346584,11.4478203 0.00111501673,10.7074957 6.1284311e-14,9.79372406 L6.1284311e-14,1.65465205 C0.00111501673,0.740880414 0.743346584,0.000555821957 1.65891421,0 L13.5877306,0 C14.5013239,0.00333115 15.2404835,0.742844925 15.2415902,1.65465205 L15.2415902,9.82701889 C15.2251033,10.7277804 14.490407,11.4502791 13.5877306,11.4534208 L10.271924,11.4534208 L8.2976038,13.6892189 C8.27421324,13.715602 8.24923084,13.7405354 8.22279597,13.7638801 C8.05262919,13.9170682 7.83125236,14.0012711 7.60209315,13.9999855 L7.60209315,13.9999855 Z M1.66396879,1.21475675 C1.41971289,1.21474108 1.22092389,1.41089082 1.21815455,1.65465205 L1.21815455,9.78968833 C1.21926521,10.0347976 1.41837601,10.2330673 1.66396879,10.2336194 L5.44075337,10.2336194 L7.60007132,12.6520346 L9.72299626,10.2467355 L13.5877306,10.2467355 C13.8298342,10.2462637 14.0275201,10.0534394 14.0335448,9.81188488 L14.0335448,1.65465205 C14.0329874,1.4093126 13.8335527,1.21072101 13.5877306,1.21072101 L1.66396879,1.21475675 Z" id="comment"></path>
</svg></a></div><div class="body">${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}</div></div>`;
}

hexo.extend.tag.register('timeline', postTimeline, {ends: true});

hexo.extend.tag.register('timenode', postTimenode, {ends: true});
