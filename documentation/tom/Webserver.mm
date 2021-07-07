<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Webserver" FOLDED="false" ID="ID_76163202" CREATED="1625650206232" MODIFIED="1625650211077" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.331">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false" show_icon_for_attributes="true" show_note_icons="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="10" RULE="ON_BRANCH_CREATION"/>
<node TEXT="CRUD" POSITION="right" ID="ID_737459091" CREATED="1625650620262" MODIFIED="1625650822858">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_288371262" STARTINCLINATION="-11;23;" ENDINCLINATION="-17;-3;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<edge COLOR="#00007c"/>
<node TEXT="Create" ID="ID_533328614" CREATED="1625650629389" MODIFIED="1625650803068"/>
<node TEXT="Read" ID="ID_781218408" CREATED="1625650636029" MODIFIED="1625650806476"/>
<node TEXT="Update" ID="ID_516256770" CREATED="1625650637421" MODIFIED="1625650638751"/>
<node TEXT="Delete" ID="ID_1528339673" CREATED="1625650639141" MODIFIED="1625650640720"/>
</node>
<node TEXT="HTTP" POSITION="right" ID="ID_370676521" CREATED="1625650695293" MODIFIED="1625650745076" LINK="https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol">
<edge COLOR="#7c007c"/>
<node TEXT="Method" ID="ID_288371262" CREATED="1625650240767" MODIFIED="1625657265173">
<node TEXT="POST" ID="ID_1015968135" CREATED="1625650274997" MODIFIED="1625650285821"/>
<node TEXT="GET" ID="ID_633651936" CREATED="1625650265855" MODIFIED="1625650285806"/>
<node TEXT="PUT" ID="ID_1750164696" CREATED="1625650612094" MODIFIED="1625650613922"/>
<node TEXT="DELETE" ID="ID_15280129" CREATED="1625650614077" MODIFIED="1625650615996"/>
</node>
</node>
<node TEXT="HTTP-Server" POSITION="right" ID="ID_728084441" CREATED="1625650646934" MODIFIED="1625650653990">
<edge COLOR="#007c00"/>
<node TEXT="Apache" ID="ID_583952797" CREATED="1625650655502" MODIFIED="1625650657373"/>
<node TEXT="Nginx" ID="ID_1393732712" CREATED="1625650657525" MODIFIED="1625650659769"/>
<node TEXT="http.server" ID="ID_1667385271" CREATED="1625657042445" MODIFIED="1625657055352" LINK="https://nodejs.org/api/http.html#http_class_http_server"/>
<node TEXT="node-express" ID="ID_322694206" CREATED="1625650660108" MODIFIED="1625657236220" LINK="http://expressjs.com/"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Fast, unopinionated, minimalist web framework for Node.js
    </p>
  </body>
</html>

</richcontent>
<node TEXT="express-static" ID="ID_191622318" CREATED="1625650665534" MODIFIED="1625650668439"/>
<node TEXT="Route" ID="ID_1651697259" CREATED="1625650669924" MODIFIED="1625650676911"/>
<node TEXT="Middleware" ID="ID_824923766" CREATED="1625650677372" MODIFIED="1625650679542"/>
<node TEXT="Router" ID="ID_1214963184" CREATED="1625657151040" MODIFIED="1625657152714"/>
<node TEXT="Validation" ID="ID_266367450" CREATED="1625657164072" MODIFIED="1625657166083">
<node TEXT="express-validator (package)" ID="ID_1871987404" CREATED="1625657188568" MODIFIED="1625657201689"/>
</node>
<node TEXT="Sanitization" ID="ID_321757230" CREATED="1625657166274" MODIFIED="1625657185341"/>
<node TEXT="Error-Handling" ID="ID_917999134" CREATED="1625650679852" MODIFIED="1625650689458"/>
</node>
</node>
</node>
</map>
