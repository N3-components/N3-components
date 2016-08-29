<template>
  <div class="bs-docs-section" id="图标"  >
    <h1 class="page-header"><a href="#图标" class="anchor">图标</a><span class="author"> </span></h1>
    <div class="bs-example">
    <h3>FontAwesome 4.0 图标列表</h3>  
    <h4>11 New Icons in 4.0</h4>
    <hr></hr>
    <n3-container>
      <n3-row class="row-ex">
        <n3-column v-for="font in newfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
        <br>
      <h4>Web Application Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in webfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
      <h4>Form Control Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in formfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
      <br>
      <h4>Currency Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in currencyfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
      <br>
      <h4>Text Edit Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in textfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
      <br>
      <h4>Directional Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in directionalfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
      <br>
      <h4>Video Player Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in videofont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
      <br>
      <h4>Brand Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in brandfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
       <br>
      <h4>Medical Icons</h4>
      <hr></hr>
      <n3-row class="row-ex">
        <n3-column v-for="font in medicalfont" :col="3"><n3-icon :type="font"></n3-icon><span>{{font}}</span></n3-column>
      </n3-row>
    </n3-container> 
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
      <n3-icon type="rub"></n3-icon>
    </script></code></pre>

  <h2>参数</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>参数名</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>type</td>
        <td><code>String</code></td>
        <td><code></code></td>
        <td>图标类型名</td>
      </tr>
      <tr>
        <td>size</td>
        <td><code>String</code></td>
        <td><code></code></td>
        <td>图标尺寸</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    newfont:['rub','ruble','rouble','pagelines','stack-exchange','arrow-circle-o-right','arrow-circle-o-left','caret-square-o-left','toggle-left','dot-circle-o','wheelchair','vimeo-square','try','turkish-lira','plus-square-o'],
    webfont:['adjust','anchor','archive','arrows','arrows-h','arrows-v','asterisk','ban','bar-chart-o','barcode','bars','beer','bell','bell-o','bolt','book','bookmark','bookmark-o','briefcase','bug','building-o','bullhorn','bullseye','calendar','calendar-o','camera','camera-retro','caret-square-o-down','caret-square-o-left','caret-square-o-right','caret-square-o-up','certificate','check','check-circle','check-circle-o','check-square','check-square-o','circle','circle-o','clock-o','cloud','cloud-download','cloud-upload','code','code-fork','coffee','cog','cogs','comment','comment-o','comments','comments-o','compass','credit-card','crop','crosshairs','cutlery','dashboard','desktop','dot-circle-o','download','edit','ellipsis-h','ellipsis-v','envelope','envelope-o','eraser','exchange','exclamation','exclamation-circle','exclamation-triangle','external-link','external-link-square','eye','eye-slash','female','fighter-jet','film','filter','fire','fire-extinguisher','flag','flag-checkered','flag-o','flash','flask','folder','folder-o','folder-open','folder-open-o','frown-o','gamepad','gavel','gear','gears','gift','glass','globe','group','hdd-o','headphones','heart','heart-o','home','inbox','info','info-circle','key','keyboard-o','laptop','leaf','legal','lemon-o','level-down','level-up','lightbulb-o','location-arrow','lock','magic','magnet','mail-forward','mail-reply','mail-reply-all','male','map-marker','meh-o','microphone','microphone-slash','minus','minus-circle','minus-square','minus-square-o','mobile','mobile-phone','money','moon-o','music','pencil','pencil-square','pencil-square-o','phone','phone-square','picture-o','plane','plus','plus-circle','plus-square','plus-square-o','power-off','print','puzzle-piece','qrcode','question','question-circle','quote-left','quote-right','random','refresh','reply','reply-all','retweet','road','rocket','rss','rss-square','search','search-minus','search-plus','share','share-square','share-square-o','shield','shopping-cart','sign-in','sign-out','signal','sitemap','smile-o','sort','sort-alpha-asc','sort-alpha-desc','sort-amount-asc','sort-amount-desc','sort-asc','sort-desc','sort-down','sort-numeric-asc','sort-numeric-desc','sort-up','spinner','square','square-o','star','star-half','star-half-empty','star-half-full','star-half-o','star-o','subscript','suitcase','sun-o','superscript','tablet','tachometer','tag','tags','tasks','terminal','thumb-tack','thumbs-down','thumbs-o-down','thumbs-o-up','thumbs-up','ticket','times','times-circle','times-circle-o','tint','toggle-down','toggle-left','toggle-right','toggle-up','trash-o','trophy','truck','umbrella','unlock','unlock-alt','unsorted','upload','user','users','video-camera','volume-down','volume-off','volume-up','warning','wheelchair','wrench'],
      formfont:['check-square','check-square-o','circle','circle-o','dot-circle-o','minus-square','minus-square-o','plus-square','plus-square-o','square','square-o'],
      currencyfont:['bitcoin','btc','cny','dollar','eur','euro','gbp','inr','jpy','krw','money','rmb','rouble','rub','ruble','rupee','try','turkish-lira','usd','won','yen' ],
      textfont:['align-center','align-justify','align-left','align-right','bold','chain','chain-broken','clipboard','columns','copy','cut','dedent','eraser','file','file-o','file-text','file-text-o','files-o','floppy-o','font','indent','italic','link','list','list-alt','list-ol','list-ul','outdent','paperclip','paste','repeat','rotate-left','rotate-right','save','scissors','strikethrough','table','text-height','text-width','th','th-large','th-list','underline','undo','unlink'],
      directionalfont:['angle-double-down','angle-double-left','angle-double-right','angle-double-up','angle-down','angle-left','angle-right','angle-up','arrow-circle-down','arrow-circle-left','arrow-circle-o-down','arrow-circle-o-left','arrow-circle-o-right','arrow-circle-o-up','arrow-circle-right','arrow-circle-up','arrow-down','arrow-left','arrow-right','arrow-up','arrows','arrows-alt','arrows-h','arrows-v','caret-down','caret-left','caret-right','caret-square-o-down','caret-square-o-left','caret-square-o-right','caret-square-o-up','caret-up','chevron-circle-down','chevron-circle-left','chevron-circle-right','chevron-circle-up','chevron-down','chevron-left','chevron-right','chevron-up','hand-o-down','hand-o-left','hand-o-right','hand-o-up','long-arrow-down','long-arrow-left','long-arrow-right','long-arrow-up','toggle-down','toggle-left','toggle-right','toggle-up'],
      videofont:['arrows-alt','backward','compress','eject','expand','fast-backward','fast-forward','forward','pause','play','play-circle','play-circle-o','step-backward','step-forward','stop','youtube-play'],
      brandfont:['adn','android','apple','bitbucket','bitbucket-square','bitcoin','btc','css3','dribbble','dropbox','facebook','facebook-square','flickr','foursquare','github','github-alt','github-square','gittip','google-plus','google-plus-square','html5','instagram','linkedin','linkedin-square','linux','maxcdn','pagelines','pinterest','pinterest-square','renren','skype','stack-exchange','stack-overflow','trello','tumblr','tumblr-square','twitter','twitter-square','vimeo-square','vk','weibo','windows','xing','xing-square','youtube','youtube-play','youtube-square'],
      medicalfont:['ambulance','h-square','hospital-o','medkit','plus-square','stethoscope','user-md','wheelchair']
      }
  }
}
</script>
<style scoped>
  .row-ex div{
    text-align: left;
    margin-top: 10px;
  }
  .row-ex i{
    margin-right: 10px;
  }
  .row-ex span{
    color:gray;
  }
</style>