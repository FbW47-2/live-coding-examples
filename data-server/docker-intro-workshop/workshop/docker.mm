<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Docker" FOLDED="false" ID="ID_751611297" CREATED="1616062291930" MODIFIED="1616063101209" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.464">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false" show_note_icons="true" show_icon_for_attributes="true"/>

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
<hook NAME="AutomaticEdgeColor" COUNTER="7" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Dockerfile" POSITION="right" ID="ID_171172876" CREATED="1616062306995" MODIFIED="1616069943942" LINK="https://docs.docker.com/engine/reference/builder/" HGAP_QUANTITY="145.2499960884453 pt" VSHIFT_QUANTITY="36.74999890476469 pt">
<edge COLOR="#ff0000"/>
<node TEXT="FROM" ID="ID_558541251" CREATED="1616062323794" MODIFIED="1616063178991">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_684411312" STARTINCLINATION="134;0;" ENDINCLINATION="-5;-61;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="RUN" ID="ID_1032569911" CREATED="1616062326475" MODIFIED="1616062332904"/>
<node TEXT="COPY" ID="ID_1249405848" CREATED="1616062333211" MODIFIED="1616062334470"/>
<node TEXT="EXPOSE" ID="ID_1284862435" CREATED="1616062334907" MODIFIED="1616062342319"/>
<node TEXT="CMD" ID="ID_1945910893" CREATED="1616062342779" MODIFIED="1616069986266"/>
<node TEXT="ENV" ID="ID_620096955" CREATED="1616069986679" MODIFIED="1616069987810"/>
</node>
<node TEXT="Container" POSITION="right" ID="ID_636603668" CREATED="1616062403587" MODIFIED="1616063125786" HGAP_QUANTITY="81.4999979883433 pt" VSHIFT_QUANTITY="32.99999901652339 pt">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1751301122" MIDDLE_LABEL="is a running Image" STARTINCLINATION="13;14;" ENDINCLINATION="-7;-23;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<edge COLOR="#ff00ff"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      A Container is a running instance of an Image.
    </p>
  </body>
</html>

</richcontent>
</node>
<node TEXT="Image" POSITION="right" ID="ID_1751301122" CREATED="1616062400515" MODIFIED="1616063190874" HGAP_QUANTITY="151.99999588727962 pt" VSHIFT_QUANTITY="8.249999754130839 pt">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_629688451" MIDDLE_LABEL="stored in" STARTINCLINATION="4;15;" ENDINCLINATION="5;-17;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_171172876" TARGET_LABEL="defined in" STARTINCLINATION="97;-94;" ENDINCLINATION="31;33;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_684411312" MIDDLE_LABEL="image can base &#xa;on another image" STARTINCLINATION="94;-16;" ENDINCLINATION="-69;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<edge COLOR="#00ff00"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      An Image contains everything that is needed to run a service from inside the container. So the application and every of its dependencies/prerequisites/requirements are part of the Image.
    </p>
  </body>
</html>

</richcontent>
<node TEXT="Baseimage" ID="ID_684411312" CREATED="1616062405691" MODIFIED="1616063092927" HGAP_QUANTITY="154.2499958202244 pt" VSHIFT_QUANTITY="-74.99999776482588 pt"/>
</node>
<node TEXT="Registry" POSITION="right" ID="ID_629688451" CREATED="1616062422411" MODIFIED="1616063098731" HGAP_QUANTITY="141.499996200204 pt" VSHIFT_QUANTITY="73.49999780952938 pt">
<edge COLOR="#7c0000"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Images can be stored in a registry.
    </p>
  </body>
</html>

</richcontent>
</node>
<node TEXT="Dockerhub" POSITION="right" ID="ID_1789651764" CREATED="1616062311698" MODIFIED="1616063470935" LINK="https://hub.docker.com/" HGAP_QUANTITY="20.74999979883433 pt" VSHIFT_QUANTITY="8.249999754130847 pt">
<edge COLOR="#0000ff"/>
</node>
<node TEXT="docker - commandline-tool" POSITION="right" ID="ID_303279578" CREATED="1616069949728" MODIFIED="1616069958635">
<edge COLOR="#00007c"/>
<node TEXT="image" ID="ID_1903959025" CREATED="1616070353905" MODIFIED="1616070356051">
<node TEXT="build" ID="ID_219231" CREATED="1616070332977" MODIFIED="1616070371443">
<node TEXT="build" ID="ID_639967529" CREATED="1616070712801" MODIFIED="1616070714468"/>
<node TEXT="Buildcontext" ID="ID_706671302" CREATED="1616070724186" MODIFIED="1616070727123"/>
</node>
<node TEXT="list" ID="ID_1513859792" CREATED="1616070371961" MODIFIED="1616070373227">
<node TEXT="ls" ID="ID_1132982367" CREATED="1616070709762" MODIFIED="1616070710949"/>
</node>
<node TEXT="remove" ID="ID_1144968338" CREATED="1616070373569" MODIFIED="1616070374683">
<node TEXT="rm" ID="ID_202437978" CREATED="1616070701394" MODIFIED="1616070702965"/>
</node>
</node>
<node TEXT="container" ID="ID_1130203460" CREATED="1616070360801" MODIFIED="1616070363251">
<node TEXT="start" ID="ID_1785422764" CREATED="1616070338424" MODIFIED="1616070386611"/>
<node TEXT="stop" ID="ID_1384202427" CREATED="1616070386976" MODIFIED="1616070388019"/>
<node TEXT="list" ID="ID_1185079214" CREATED="1616070371961" MODIFIED="1616070373227"/>
<node TEXT="remove" ID="ID_424989215" CREATED="1616070373569" MODIFIED="1616070374683"/>
</node>
</node>
</node>
</map>
