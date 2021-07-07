<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Containerisierung" FOLDED="false" ID="ID_1751691448" CREATED="1625649496414" MODIFIED="1625649528583" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.331">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false"/>

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
<hook NAME="AutomaticEdgeColor" COUNTER="17" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Docker" POSITION="right" ID="ID_1637997490" CREATED="1625649529246" MODIFIED="1625649531465">
<edge COLOR="#ff0000"/>
<node TEXT="Dockerfile" ID="ID_762479465" CREATED="1625649651772" MODIFIED="1625649662861"/>
</node>
<node TEXT="Docker-Compose" POSITION="right" ID="ID_536616464" CREATED="1625649531644" MODIFIED="1625649537715">
<edge COLOR="#0000ff"/>
<node TEXT="COMMANDS" ID="ID_1394748159" CREATED="1625649544088" MODIFIED="1625649548866">
<node TEXT="up" ID="ID_835376588" CREATED="1625649557544" MODIFIED="1625649559602"/>
<node TEXT="down" ID="ID_1844625188" CREATED="1625649559916" MODIFIED="1625649560744"/>
<node TEXT="start" ID="ID_1898056985" CREATED="1625649562787" MODIFIED="1625649563866"/>
<node TEXT="stop" ID="ID_321663838" CREATED="1625649564205" MODIFIED="1625649565690"/>
<node TEXT="build" ID="ID_1745593310" CREATED="1625649638390" MODIFIED="1625649640191"/>
<node TEXT="run" ID="ID_1884913157" CREATED="1625649640796" MODIFIED="1625649641575"/>
</node>
<node TEXT="docker-compose.yml" ID="ID_1613563778" CREATED="1625649645620" MODIFIED="1625649664555"/>
<node TEXT="Services" ID="ID_1973215731" CREATED="1625649670524" MODIFIED="1625649675050"/>
</node>
<node TEXT="Registry" POSITION="right" ID="ID_1542983610" CREATED="1625649585090" MODIFIED="1625656036933">
<edge COLOR="#00ff00"/>
</node>
<node TEXT="Image" POSITION="right" ID="ID_1596241501" CREATED="1625649576431" MODIFIED="1625656036935">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1647261626" STARTINCLINATION="80;0;" ENDINCLINATION="80;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<edge COLOR="#ff00ff"/>
</node>
<node TEXT="Container" POSITION="right" ID="ID_819451334" CREATED="1625649579208" MODIFIED="1625656036937">
<edge COLOR="#00ffff"/>
</node>
<node TEXT="Dockerhub" POSITION="right" ID="ID_1647261626" CREATED="1625649923564" MODIFIED="1625656036951" LINK="https://hub.docker.com/">
<edge COLOR="#7c0000"/>
</node>
<node TEXT="Voll-Virtualisierung" POSITION="right" ID="ID_697296568" CREATED="1625649751058" MODIFIED="1625649773929">
<edge COLOR="#ff0000"/>
<node TEXT="VMware" ID="ID_824567702" CREATED="1625649775930" MODIFIED="1625649784404"/>
<node TEXT="VirtualBox" ID="ID_889931086" CREATED="1625649784760" MODIFIED="1625649912888"/>
<node TEXT="kvm" ID="ID_712041897" CREATED="1625649789960" MODIFIED="1625649791346"/>
<node TEXT="zen (AMD)" ID="ID_1024046458" CREATED="1625649802089" MODIFIED="1625649815299"/>
</node>
</node>
</map>
