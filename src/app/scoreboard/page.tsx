import { FC } from "react";

const MyPage: FC = () => {
  const htmlContent = `<HTML>
    <HEAD>
        <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <TITLE>ICTPC</TITLE>
        <style>
// based on
// $Id: standings.css 1983 2009-12-09 02:29:11Z boudreat $
table {
	border: 1px solid #ccc; 
	border-bottom: 0;
	width: 52.7em;
	margin-bottom: 2em;
}
body {
   font-family: verdana, arial, tahoma, sans-serif;
}
table th {
	text-align: center;
	background: #247eca;
	color: white;
	padding: 0em; 
	border: outset 2px #eee8aa;
}
table td {
	border-bottom: 1px solid #DDD; 
	padding: .0em .0em .0em .5em;
}
table tr td.rank {
	background: transparent; 
	border: 2px outset #ffffff;
}
table tr.gold td.rank {
	background: #f9d923;
	border: outset 2px #ffd700;
}
table tr.silver td.rank {
	background: Silver;
	border: 2px outset sILVER;
}
table tr.bronze td.rank {
	background: #c08e55; 
	border: outset 2px #c9960c;
}
table td.name {
	padding-left: 2em;
}
table th.name{
	padding-left: 3em; 
}
table tr.even td {
	background: #F7F7F7;
}
table tr td.r10 {
	background: #e9d923;
	border: 2px outset #DCDCDC;
}
table tr td.r9 {
	background: #e1d963;
	border: 2px outset #DCDCDC;
}
table tr td.r8 {
	background: #DDD7AA;
	border: 2px outset #DCDCDC;
}
table tr td.r7 {
	background: #d2d2d2;
	border: 2px outset #DCDCDC;
}
table tr td.r6 {
	background: #DDCDBD;
	border: 2px outset #DCDCDC;
}
table tr td.r5 {
	background: #e6e6e6;
	border: 2px outset #DCDCDC;
}
table tr td.r4 {
	background: #eee;
	border: 2px outset #f3f3f3;
}
table tr td.r3 {
	background: #F7f7f7;
	border: 2px outset #f7f7f7;
}
div.tail {
       font-size: .8em;
       color: #888;
//width: 65.875em;
width: 80%;
 border: 1px solid #ccc;
margin-left: auto;
margin-right: auto;
}
span.right {
     float: right;
}

// troy additions
table tr.odd {
        background-color: #0; color: black;
}
table tr.even {
        background-color: #EEEEFF; color: black;
}
table tr td.yes {
        background-color: #00ff00; color: black;
        text-align: center;
}
table tr td.pending {
        background-color: #ffff00; color: black;
        text-align: center;
}
table tr td.no {
        background-color: #ff0000; color: black;
        text-align: center;
}
table tr td.center {
        text-align: center;
}
table tr td.right {
        text-align: right;
}

</style>
        <META HTTP-EQUIV="REFRESH" CONTENT="60;">
        <META HTTP-EQUIV="EXPIRES" CONTENT="0">
        <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
        <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
    </HEAD>
    <BODY>
        <font face="verdana, arial, helvetica" align="right">
            <center>
                <h2>ICTPC</h2>
                <h3></h3>
                		    &nbsp;
		    
		    
                <br>
                Scoreboard
                <br>
                <br>
                <br>
                <br>
            </center>
        </font>
        <center>
            <TABLE cellspacing="0">
                <tr>
                    <th><strong><u>Rank</u></strong></th><th><strong><u>Name</u></strong></th><th><strong><u>Solved</u></strong></th><th><strong><u>Time</u></strong></th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>A</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>B</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>C</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>D</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>E</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>F</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>G</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>H</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>I</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>J</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>K</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;<strong><u>L</u></strong>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Total att/solv</th>
                </tr>
                <tr>
                    <td></td><td></td><td></td><td></td>
                </tr>
                <tr class="even">
                    <td>1</td><td>The OMICRON Group</td><td class="center">4</td><td class="right">507</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">2/73</td><td class="yes">1/15</td><td class="center">0/--</td><td class="yes">7/290</td><td class="no">6/--</td><td class="yes">1/9</td><td class="center">0/--</td><td class="no">3/--</td><td class="no">3/--</td><td>23/4</td>
                </tr>
                <tr class="odd">
                    <td>2</td><td>G-Wiz</td><td class="center">4</td><td class="right">578</td><td class="no">2/--</td><td class="yes">5/253</td><td class="center">0/--</td><td class="yes">1/66</td><td class="yes">2/45</td><td class="center">0/--</td><td class="no">5/--</td><td class="center">0/--</td><td class="yes">1/114</td><td class="center">0/--</td><td class="no">2/--</td><td class="no">3/--</td><td>21/4</td>
                </tr>
                <tr class="even">
                    <td>3</td><td>JET</td><td class="center">3</td><td class="right">446</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">4/241</td><td class="yes">2/35</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="yes">1/90</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>9/3</td>
                </tr>
                <tr class="odd">
                    <td>4</td><td>RatataMoth</td><td class="center">3</td><td class="right">830</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">8/212</td><td class="center">0/--</td><td class="yes">4/228</td><td class="center">0/--</td><td class="yes">2/190</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>14/3</td>
                </tr>
                <tr class="even">
                    <td>5</td><td>Jeng jaew jut jap jap jing kra jee jor  </td><td class="center">2</td><td class="right">50</td><td class="center">0/--</td><td class="no">7/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">1/17</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="yes">1/33</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td>13/2</td>
                </tr>
                <tr class="odd">
                    <td>6</td><td>We play rhythm games btw</td><td class="center">2</td><td class="right">180</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">2/73</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="yes">1/87</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td>7/2</td>
                </tr>
                <tr class="even">
                    <td>7</td><td>Khad pom pai laew krai ja thai na  </td><td class="center">2</td><td class="right">192</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="no">1/--</td><td class="yes">1/23</td><td class="center">0/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="yes">1/169</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td>8/2</td>
                </tr>
                <tr class="odd">
                    <td>8</td><td>Bike for Keam</td><td class="center">2</td><td class="right">212</td><td class="no">4/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">1/188</td><td class="center">0/--</td><td class="no">5/--</td><td class="center">0/--</td><td class="yes">3/24</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>13/2</td>
                </tr>
                <tr class="even">
                    <td>9</td><td>KLUAY</td><td class="center">2</td><td class="right">301</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">1/192</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">1/109</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td>5/2</td>
                </tr>
                <tr class="odd">
                    <td>10</td><td>Moodeng Mai Yu</td><td class="center">2</td><td class="right">319</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">2/72</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="yes">1/227</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td>8/2</td>
                </tr>
                <tr class="even">
                    <td>11</td><td>Echelon</td><td class="center">1</td><td class="right">47</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="yes">1/47</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">8/--</td><td>11/1</td>
                </tr>
                <tr class="odd">
                    <td>12</td><td>PM 2.5</td><td class="center">1</td><td class="right">64</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">1/64</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>2/1</td>
                </tr>
                <tr class="even">
                    <td>13</td><td>Ma tam mai  </td><td class="center">1</td><td class="right">70</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">5/--</td><td class="yes">2/50</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>7/1</td>
                </tr>
                <tr class="odd">
                    <td>14</td><td>Go mak  </td><td class="center">1</td><td class="right">109</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">3/69</td><td class="no">19/--</td><td class="center">0/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>25/1</td>
                </tr>
                <tr class="even">
                    <td>15</td><td>Danthurang</td><td class="center">1</td><td class="right">135</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">1/--</td><td class="no">8/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">1/135</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>10/1</td>
                </tr>
                <tr class="odd">
                    <td>16</td><td>team55</td><td class="center">1</td><td class="right">271</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">10/--</td><td class="center">0/--</td><td class="yes">1/271</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>11/1</td>
                </tr>
                <tr class="even">
                    <td>17</td><td>Hello!</td><td class="center">1</td><td class="right">284</td><td class="center">0/--</td><td class="yes">2/264</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">6/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>8/1</td>
                </tr>
                <tr class="odd">
                    <td>18</td><td>Arai kor dai  </td><td class="center">1</td><td class="right">307</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="yes">3/267</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>3/1</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>123</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>1xBit</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>3 tour baht</td><td class="center">0</td><td class="right">0</td><td class="no">2/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>2/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Bossmadeaw</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Bunnybell</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>2/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Chuay duay pom mee khon diao  </td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Gep mod (don gep)  </td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">5/--</td><td class="center">0/--</td><td class="no">15/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>20/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Gok-kok-gok-kok</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">4/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>4/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>GoodbyeWorld</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>HNB</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Jeng jap jut jaew jing jo jee  </td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="no">17/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>19/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Khor song khanan ka</td><td class="center">0</td><td class="right">0</td><td class="no">8/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>14/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>KUN&amp;KUN</td><td class="center">0</td><td class="right">0</td><td class="no">6/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>7/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>L M N O P</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>MaAou2%</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td>5/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Mai roo  </td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">8/--</td><td>9/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>MaOaKawFree</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="no">11/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">5/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>16/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>MaskerMan</td><td class="center">0</td><td class="right">0</td><td class="no">2/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td>6/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Miyoyo</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="no">12/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">7/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">5/--</td><td>24/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>nah I�m cooked</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>3/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Numhin or HinNum</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">17/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">1/--</td><td>18/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Odo by Ado</td><td class="center">0</td><td class="right">0</td><td class="no">2/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="no">2/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">2/--</td><td>12/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Pai Kim Jing Eun</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Plakud</td><td class="center">0</td><td class="right">0</td><td class="no">1/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="no">1/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>4/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Qwerty</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">11/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>11/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Sam yod</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">1/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">4/--</td><td>5/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>Sholay and friends</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>3/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>Sigma</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="no">10/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>10/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>SoGung</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="no">3/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>3/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>soloEducation</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>team48</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>team49</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>team50</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>team51</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>team52</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="odd">
                    <td>19</td><td>team53</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr class="even">
                    <td>19</td><td>team54</td><td class="center">0</td><td class="right">0</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td class="center">0/--</td><td>0/0</td>
                </tr>
                <tr>
                    <td></td><td>Submitted/1st Yes/Total Yes</td><td></td><td></td><td class="center">27/--/0</td><td class="center">63/253/2</td><td class="center">0/--/0</td><td class="center">24/66/4</td><td class="center">88/15/11</td><td class="center">2/--/0</td><td class="center">64/228/2</td><td class="center">14/--/0</td><td class="center">56/9/15</td><td class="center">0/--/0</td><td class="center">5/--/0</td><td class="center">52/--/0</td><td>395/34</td>
                </tr>
            </TABLE>
        </center>
        <div class="tail">
            <span class="right"><A HREF="http://pc2.ecs.csus.edu/">PC^2 Homepage</A>
                <br>
                       CSS by Tomas Cerny and Ray Holder
</span>
Created by <A HREF="http://pc2.ecs.csus.edu/">CSUS PC^2</A> version 9.7.0 20210317 build 6181
            <br>
            Last updated
Thu Feb 13 15:53:16 ICT 2025
        </div>
    </BODY>
</HTML>
`;

  return (<div className="bg-white py-12">
  <div dangerouslySetInnerHTML={{ __html: htmlContent }} /></div>);
};

export default MyPage;
