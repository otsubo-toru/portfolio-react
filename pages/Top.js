import React from "react"

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <section class="mb50">
          <div class="mb20">
            <p>ポートフォリオページをご覧いただき、ありがとうございます。</p>
            <p>WEBデザイナー・フロントエンドエンジニアの「大坪 亨」と申します。</p>
          </div>
        </section>

        <section id="SKILL" class="skill-area mb50">
          <h2 class="heading md-main">Skill</h2>
          <p></p>
          <div class="grid t14">
            <div class="g03">
              <ul class="disc li05 mb20">
                <li>
                  <p>HTML5</p>
                </li>
                <li>
                  <p>CSS3</p>
                  <p class="t-supplement">SASS(SCSS)</p>
                  <p class="t-supplement">OOCSSによる保守性の高い運用</p>
                </li>
                <li>WordPress</li>
              </ul>
            </div>
            <div class="g03">
              <ul class="disc li05">
                <li>
                  <p>JavaScript</p>
                  <p class="t-supplement">jQuery、Node.js</p>
                </li>
                <li>
                  <p>PHP</p>
                  <p class="t-supplement">Laravel、CakePHP、Smarty</p>
                </li>
                <li>
                  <p>Ruby</p>
                  <p class="t-supplement">Rails</p>
                </li>
                <li>
                  <p>Python</p>
                </li>
                <li>MySQL</li>
              </ul>
            </div>
            <div class="g03">
              <ul class="disc li05">
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>DreamWeaver</li>
                <li>Google Analitics</li>
                <li>
                  <p>Microsoft Office</p>
                  <p class="t-supplement">Word、Excel、PowerPoint</p>
                </li>
                <li>
                  <p>Microsoft PowerBI</p>
                  <p class="t-supplement">データ分析・BIツール</p>
                </li>
              </ul>
            </div>
          </div>
        </section>


        <section class="mb50">
          <h2 class="heading md-main">Works</h2>
          <ul class="grid fix-height md-target-item mt15">
            <li class="g04">
              <a href="/works#JIKABUKI" class="item">
                <figure class="el-thumb"><img src="/img/img_jikabuki.jpg" alt="" class="el-thumb-img fix-img b01 h250" /></figure>
                <p class="el-name t-link-color">地歌舞伎 -JIKABUKI-</p>
              </a>
            </li>
            <li class="g04">
              <a href="/works#MATUSOU" class="item">
                <figure class="el-thumb"><img src="/img/img_matusou.jpg" alt="" class="el-thumb-img fix-img b01 h250" /></figure>
                <p class="el-name t-link-color">総合インテリア通販「松装」</p>
              </a>
            </li>
            <li class="g04">
              <a href="/works#DTP" class="item">
                <figure class="el-thumb"><img src="/img/photo/photo02.jpg" alt="" class="el-thumb-img fix-img b01 h250" /></figure>
                <p class="el-name t-link-color">［ 印刷物・写真 ］</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
