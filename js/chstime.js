

/* If you see this code, just beware: Don't do it like me. Don't do any of this like me unless there really is no other way to go about executing this 
   entire concept of creating a bell schedule checker, which there most likely is. This is sloppy, unprofessional, and very, VERY unoptimized. Be careful.
             ------------------------- CHS Bell Schedule Checker by Elwiss M. Jimenez 2020 ----------------------------------
             
                                                        ---- MIT LICENSE ----
    Copyright 2020-2022 Elwiss M. Jimenez
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
    to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
    IN THE SOFTWARE.
    
                                                      ---- End of license. ---- 
 
 */
// edited by akidinatophat for easy implementation
// akidinatophat 2023

 const div = document.getElementById('Period')
 const div2 = document.getElementById('Time')
 const bar = document.getElementById("barfill")
 const span = document.getElementById('Span');
 const date_element = document.getElementById('date');
 
 periodnumber = 0;
 var tran = 0;
 DayStarted = 0;

function yeetus() {
  try {

 var color2;
 timespan = "Now - 7:10 AM";
 time2 = "7:10 AM - 8:04 AM"
 var date = new Date();
 var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
 // var now = new Date(2022, 2, 15, 9, 06, 1);   
 var abcd = (now.getMonth()+1)+'/'+now.getDate()+'/'+now.getFullYear();
 var weekday = new Array(7);
 weekday[0] = "SUN";
 weekday[1] = "MON";
 weekday[2] = "TUE";
 weekday[3] = "WED";
 weekday[4] = "THU";
 weekday[5] = "FRI";
 weekday[6] = "SAT";

 var tenten = 0;




// Schedule management
wednesdayornot = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
var n = weekday[wednesdayornot.getDay()];
var truvalue = 0
period = ""
dode = "PERIOD 1"
if(wednesdayornot.getDay() == 3) truvalue = 1; else truvalue = 0;

if (truvalue == 0){
var astartTime = '7:10:00'; // 1st period 
var aendTime = '8:04:00';
var atransTime = '8:10:00'; // trans 2
var bstartTime = '8:10:00'; // 2nd period
var bendTime = '9:00:00';
var btransTime = '9:06:00'; // trans 3
var cstartTime = '9:06:00'; // 3rd period
var cendTime = '9:56:00';
var ctransTime = '10:02:00'; // trans 4
var dstartTime = '10:02:00'; // 4th period
var dtransTime = '10:58:00'; // trans to A/5B
var dendTime = '10:52:00'; // A lunch
var eendTime = '11:22:00';
var fstartTime = '11:28:00'; // 5A
var fendTime = '12:18:00';
var gstartTime = '10:58:00'; // 5B
var gendTime = '11:48:00'; // B lunch
var hendTime = '12:18:00';
var htransTime = '12:24:00';
var istartTime = '12:24:00'; // 6th period
var iendTime = '13:14:00';
var itransTime = '13:20:00';
var jstartTime = '13:20:00'; // 7th period
var jendTime = '14:10:00';
} else if (truvalue == 1){   //Wednesday
var astartTime = '7:10:00'; // 1st period 
var aendTime = '7:54:00';
var atransTime = '8:00:00'; // trans 2
var bstartTime = '8:00:00'; // 2nd period
var bendTime = '8:40:00';
var btransTime = '8:46:00'; // trans 3
var cstartTime = '8:46:00'; // 3rd period
var cendTime = '9:26:00';
var ctransTime = '9:32:00'; // trans 4
var dstartTime = '9:32:00'; // 4th period
var dtransTime = '10:18:00'; // trans to A/5B
var dendTime = '10:12:00'; // A lunch
var eendTime = '10:42:00';
var fstartTime = '10:48:00'; // 5A
var fendTime = '11:28:00';
var gstartTime = '10:18:00'; // 5B
var gendTime = '10:58:00'; // B lunch
var hendTime = '11:28:00';
var htransTime = '11:34:00';
var istartTime = '11:34:00'; // 6th period
var iendTime = '12:14:00';
var itransTime = '12:20:00';
var jstartTime = '12:20:00'; // 7th period
var jendTime = '13:00:00';
}

var as = astartTime.split(':');
var bs = bstartTime.split(':');
var cs = cstartTime.split(':');
var ds = dstartTime.split(':');
var es = dendTime.split(':');
var fs = fstartTime.split(':');
var gs = gstartTime.split(':');
var hs = gendTime.split(':');
var is = istartTime.split(':');
var js = jstartTime.split(':');
var ae = aendTime.split(':');
var be = bendTime.split(':');
var ce = cendTime.split(':');
var de = dendTime.split(':');
var ee = eendTime.split(':');
var fe = fendTime.split(':');
var ge = gendTime.split(':');
var he = hendTime.split(':');
var ie = iendTime.split(':');
var je = jendTime.split(':');
var transition2 = atransTime.split(':');
var transition3 = btransTime.split(':');
var transition4 = ctransTime.split(':');
var transitiona5 = dtransTime.split(':');
var transition6 = htransTime.split(':');
var transition7 = itransTime.split(':');

// transition times
var t2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(transition2[0]), parseInt(transition2[1]), parseInt(transition2[2])); // 1 -> 2
var t3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(transition3[0]), parseInt(transition3[1]), parseInt(transition3[2])); // 2 -> 3
var t4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(transition4[0]), parseInt(transition4[1]), parseInt(transition4[2])); // 3 -> 4
var t5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(transitiona5[0]), parseInt(transitiona5[1]), parseInt(transitiona5[2])); // 4 -> A - 5B
var t6 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(transition6[0]), parseInt(transition6[1]), parseInt(transition6[2])); // B - 5A -> 6
var t7 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(transition7[0]), parseInt(transition7[1]), parseInt(transition7[2])); // 6 -> 7

// normal start times
var a1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(as[0]), parseInt(as[1]), parseInt(as[2])); // 1
var a2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(bs[0]), parseInt(bs[1]), parseInt(bs[2])); // 2 
var a3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(cs[0]), parseInt(cs[1]), parseInt(cs[2])); // 3
var a4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(ds[0]), parseInt(ds[1]), parseInt(ds[2])); // 4
var luncha = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(es[0]), parseInt(es[1]), parseInt(es[2])); // A lunch
var a5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(fs[0]), parseInt(fs[1]), parseInt(fs[2])); // 5A
var lunchb = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(hs[0]), parseInt(hs[1]), parseInt(hs[2])); // B lunch
var b5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(gs[0]), parseInt(gs[1]), parseInt(gs[2])); // 5B
var a6 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(is[0]), parseInt(is[1]), parseInt(is[2])); // 6
var a7 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(js[0]), parseInt(js[1]), parseInt(js[2])); // 7
var opening = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(as[0]), parseInt(as[1]), parseInt(as[2]));
  
// normal end times
var b1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(ae[0]), parseInt(ae[1]), parseInt(ae[2]));
var b2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(be[0]), parseInt(be[1]), parseInt(be[2]));
var b3 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(ce[0]), parseInt(ce[1]), parseInt(ce[2]));
var b4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(de[0]), parseInt(de[1]), parseInt(de[2]));
var bluncha = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(ee[0]), parseInt(ee[1]), parseInt(ee[2]));
var ba5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(fe[0]), parseInt(fe[1]), parseInt(fe[2]));
var blunchb = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(he[0]), parseInt(he[1]), parseInt(he[2]));
var bb5 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(ge[0]), parseInt(ge[1]), parseInt(ge[2]));
var b6 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(ie[0]), parseInt(ie[1]), parseInt(ie[2]));
var b7 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(je[0]), parseInt(je[1]), parseInt(je[2]));





  
if (truvalue == 0) {
      if (now >= b7 && now <= a1) {
        periodnumber = 0;
        tran = 0;
      }

      if (now >= a1 && now <= b1) {
        periodnumber = 1;
        tran = 0;
        timespan = "7:10 AM - 8:04 AM";
        time2 = "8:10 AM";
        dode = "PERIOD 2"
        DayStarted = 1;
      } // 1st period

      if (b1 <= now && now <= t2) {
        periodnumber = 11;
        timespan = "8:04 AM - 8:10 AM";
        time2 = "8:10 AM";
        dode = "PERIOD 2"
      }

      if (now >= a2 && now <= b2) {
        periodnumber = 2;
        tran = 0;
        timespan = "8:10 AM - 9:00 AM";
        time2 = "9:06 AM";
        dode = "PERIOD 3"
      } // 2nd period

      if (b2 <= now && now <= t3) {
        periodnumber = 12;
        timespan = "9:00 AM - 9:06 AM";
        time2 = "9:06 AM";
        dode = "PERIOD 3"

      }

      if (now >= a3 && now <= b3) {
        periodnumber = 3;
        tran = 0;
        timespan = "9:06 AM - 9:56 AM";
        time2 = "10:02 AM";
        dode = "PERIOD 4"

      } // 3rd period

      if (b3 <= now && now <= t4) {
        periodnumber = 13;
        timespan = "9:56 AM - 10:02 AM";
        time2 = "10:02 AM";
        dode = "PERIOD 4"       
      }

      if (now >= a4 && now <= b4) {
        periodnumber = 4;
        tran = 0;
        timespan = "10:02 AM - 10:52 AM";
        time2 = "A Lunch: 10:52 AM <br /> 5B: 10:58 AM";
        dode = "PERIOD 5B | LUNCH A"
      } // 4th period

      if (b4 <= now && now <= t5) {
        periodnumber = 14;
        timespan = "10:52 AM - 10:58 AM";
        time2 = "A Lunch: Immediately <br /> Period 5B: 10:58 AM";
        dode = "PERIOD 5B | LUNCH A"
      }

      if (now >= luncha && now <= bb5) {
        periodnumber = 5;
        tran = 0;
        timespan = "A LUNCH: 10:52 AM - 11:22 AM <br /> 5B: 10:58 AM - 11:48 AM";
        time2 = "B Lunch - 11:48 AM <br /> 5A - 11:28 AM";
        dode = "PERIOD 5A | LUNCH B"
      } // A Lunch - 5th period

      if (now >= lunchb && now <= blunchb) {
        periodnumber = 6;
        tran = 0;
        timespan = "11:48 AM - 12:18 PM";
        time2 = "12:24 PM";
        dode = "PERIOD 6"
      } // B Lunch

      if (blunchb <= now && now <= t6) {
        periodnumber = 15;
        timespan = "12:18 PM - 12:24 PM";
        time2 = "12:24 PM";
        dode = "PERIOD 6"
      }

      if (now >= a6 && now <= b6) {
        periodnumber = 7;
        tran = 0;
        timespan = "12:24 PM - 1:14 PM";
        time2 = "1:20 PM";
        dode = "PERIOD 7"
      } // 6th period

      if (b6 <= now && now <= t7) {
        periodnumber = 16;
        timespan = "1:14 PM - 1:20 PM";
        time2 = "1:20 PM";
        dode = "PERIOD 7"
      }

      if (now >= a7 && now <= b7) {
        periodnumber = 8;
        tran = 0;
        timespan = "1:20 PM - 2:10 PM";

        time2 = "2:10 PM";
        dode = "End of School Day"
      } // 7th period
    } else if (truvalue == 1) {
      if (now >= b7 && now <= a1) {
        periodnumber = 0;
        tran = 0;
      }

      if (now >= a1 && now <= b1) {
        periodnumber = 1;
        tran = 0;
        timespan = "7:10 AM - 7:54 AM";
        time2 = "8:00 AM";
        dode = "PERIOD 2"
      } // 1st period

      if (b1 <= now && now <= t2) {
        periodnumber = 11;
        timespan = "7:54 AM - 8:00 AM";
        time2 = "8:00 AM";
        dode = "PERIOD 2"
      }

      if (now >= a2 && now <= b2) {
        periodnumber = 2;
        tran = 0;
        timespan = "8:00 AM - 8:40 AM";
        time2 = "8:46 AM";
        dode = "PERIOD 3"
      } // 2nd period

      if (b2 <= now && now <= t3) {
        periodnumber = 12;
        timespan = "8:40 AM - 8:46 AM";
        time2 = "8:46 AM";
        dode = "PERIOD 3"
      }

      if (now >= a3 && now <= b3) {
        periodnumber = 3;
        tran = 0;
        timespan = "8:46 AM - 9:26 AM";
        time2 = "9:32 AM";
        dode = "PERIOD 4"
      } // 3rd period

      if (b3 <= now && now <= t4) {
        periodnumber = 13;
        timespan = "9:26 AM - 9:32 AM";
        time2 = "9:32 AM";
        dode = "PERIOD 4"
      }

      if (now >= a4 && now <= b4) {
        periodnumber = 4;
        tran = 0;
        timespan = "9:32 AM - 10:12 AM";
        time2 = "A Lunch - 10:12 AM <br /> 5B - 10:18 AM";
        dode = "PERIOD 5B | A LUNCH"
      } // 4th period

      if (b4 <= now && now <= t5) {
        periodnumber = 14;
        timespan = "10:12 AM - 10:18 AM";
        time2 = "A Lunch: Immediately <br /> Period 5B: 10:18 AM";
        dode = "PERIOD 5B | A LUNCH"
      }

      if (now >= luncha && now <= bb5) {
        periodnumber = 5;
        tran = 0;
        timespan = "A Lunch: 10:12 AM - 10:42 AM <br /> 5B: 10:18 AM - 10:58 AM";
        time2 = "B Lunch - 10:58 AM <br /> 5A - 10:48 AM";
        dode = "PERIOD 5A | B LUNCH"
      } // A Lunch - 5th period

      if (now >= lunchb && now <= blunchb) {
        periodnumber = 6;
        tran = 0;
        timespan = "10:58 AM - 11:28 AM";
        time2 = "11:34 AM";
        dode = "PERIOD 6"
      } // B Lunch

      if (blunchb <= now && now <= t6) {
        periodnumber = 15;
        timespan = "11:28 AM - 11:34 AM";
        time2 = "11:34 AM";
        dode = "PERIOD 6"
      }

      if (now >= a6 && now <= b6) {
        periodnumber = 7;
        tran = 0;
        timespan = "11:34 AM - 12:14 PM";
        time2 = "12:30 PM";
        dode = "PERIOD 7"
      } // 6th period

      if (b6 <= now && now <= t7) {
        periodnumber = 16;
        timespan = "12:14 PM - 12:20 PM";
        time2 = "12:20 PM";
        dode = "PERIOD 7"
      }

      if (now >= a7 && now <= b7) {
        periodnumber = 8;
        tran = 0;
        timespan = "12:20 PM - 1:00 PM";
        time2 = "1:00 PM";
        dode = "End of School Day"
      } // 7th period
    }


var aseconds = b1.getTime() - now.getTime()
var bseconds = b2.getTime() - now.getTime()
var cseconds = b3.getTime() - now.getTime()
var dseconds = b4.getTime() - now.getTime()
var eseconds = bluncha.getTime() - now.getTime()
var fseconds = b5.getTime() - now.getTime()
var gseconds = blunchb.getTime() - now.getTime()
var hseconds = bb5.getTime() - now.getTime()
var iseconds = b6.getTime() - now.getTime()
var jseconds = b7.getTime() - now.getTime()
var oseconds = opening.getTime() - now.getTime()




 var ams = aseconds % 1000;
 var bms = bseconds % 1000;
 var cms = cseconds % 1000;
 var dms = dseconds % 1000;
 var ems = eseconds % 1000;
 var fms = fseconds % 1000;
 var gms = gseconds % 1000;
 var hms = hseconds % 1000;
 var ims = iseconds % 1000;
 var jms = jseconds % 1000;
 var oms = oseconds % 1000;
 aas = (aseconds - ams) / 1000;
 bbs = (bseconds - bms) / 1000;
 ccs = (cseconds - cms) / 1000;
 dds = (dseconds - dms) / 1000;
 ees = (eseconds - ems) / 1000;
 ffs = (fseconds - fms) / 1000;
 ggs = (gseconds - gms) / 1000;
 hhs = (hseconds - hms) / 1000;
 iis = (iseconds - ims) / 1000;
 jjs = (jseconds - jms) / 1000;
 oos = (oseconds - oms) / 1000;
 var asecs = aas % 60;
 var bsecs = bbs % 60;
 var csecs = ccs % 60;
 var dsecs = dds % 60;
 var esecs = ees % 60;
 var fsecs = ffs % 60;
 var gsecs = ggs % 60;
 var hsecs = hhs % 60;
 var isecs = iis % 60;
 var jsecs = jjs % 60;
 var osecs = oos % 60;
 aaas = (aas - asecs) / 60;
 bbbs = (bbs - bsecs) / 60;
 cccs = (ccs - csecs) / 60;
 ddds = (dds - dsecs) / 60;
 eees = (ees - esecs) / 60;
 fffs = (ffs - fsecs) / 60;
 gggs = (ggs - gsecs) / 60;
 hhhs = (hhs - hsecs) / 60;
 iiis = (iis - isecs) / 60;
 jjjs = (jjs - jsecs) / 60;
 ooos = (oos - osecs) / 60;

 var amins = aaas % 60;
 var ahrs = (aaas - amins) / 60;

 var bmins = bbbs % 60;
 var bhrs = (bbbs - bmins) / 60;

 var cmins = cccs % 60;
 var chrs = (cccs - cmins) / 60;

 var dmins = ddds % 60;
 var dhrs = (ddds - dmins) / 60;

 var emins = eees % 60;
 var ehrs = (eees - emins) / 60;

 var fmins = fffs % 60;
 var fhrs = (fffs - fmins) / 60;

 var gmins = gggs % 60;
 var ghrs = (gggs - gmins) / 60;

 var hmins = hhhs % 60;
 var hhrs = (hhhs - hmins) / 60;

 var imins = iiis % 60;
 var ihrs = (iiis - imins) / 60;

 var jmins = jjjs % 60;
 var jhrs = (jjjs - jmins) / 60;

 var omins = ooos % 60;
 var ohrs = (ooos - omins) / 60;


 if (amins < 0) amins = 00
 if (bmins < 0) bmins = 00
 if (cmins < 0) cmins = 00
 if (dmins < 0) dmins = 00
 if (emins < 0) emins = 00
 if (fmins < 0) fmins = 00
 if (gmins < 0) gmins = 00
 if (hmins < 0) hmins = 00
 if (imins < 0) imins = 00
 if (jmins < 0) jmins = 00

 if (asecs < 0) asecs = 00
 if (bsecs < 0) bsecs = 00
 if (csecs < 0) csecs = 00
 if (dsecs < 0) dsecs = 00
 if (esecs < 0) esecs = 00
 if (fsecs < 0) fsecs = 00
 if (gsecs < 0) gsecs = 00
 if (hsecs < 0) hsecs = 00
 if (isecs < 0) isecs = 00
 if (jsecs < 0) jsecs = 00
 
 if (ahrs < 0) ahrs = 00
 if (bhrs < 0) bhrs = 00
 if (chrs < 0) chrs = 00
 if (dhrs < 0) dhrs = 00
 if (ehrs < 0) ehrs = 00
 if (fhrs < 0) fhrs = 00
 if (ghrs < 0) ghrs = 00
 if (hhrs < 0) hhrs = 00
 if (ihrs < 0) ihrs = 00
 if (jhrs < 0) jhrs = 00
 ////////////////////////////////


if(periodnumber == 0){
 color2 = "00FF00"
}else{
 color2 = "FF1818"
}
if(tran != 0){
 color2 = "FFFF00"
}

var timer2 

switch (periodnumber){
 case 0 :
   period = "Outside school hours"
   timer2 = `${('0' + ohrs).slice(-2)}:${('0' + omins).slice(-2)}:${('0' + osecs).slice(-2)}`
   break;
 case 1 : 
   period = "PERIOD 1"
   timer2 = `${('0' + amins).slice(-2)}:${('0' + asecs).slice(-2)}`
   break;
 case 2 :
   period = "PERIOD 2"
   timer2 = `${('0' + bmins).slice(-2)}:${('0' + bsecs).slice(-2)}`
   break;
 case 3 :
   period = "PERIOD 3"
   timer2 = `${('0' + cmins).slice(-2)}:${('0' + csecs).slice(-2)}`
   break;
 case 4 :
   period = "PERIOD 4"
   timer2 = `${('0' + dmins).slice(-2)}:${('0' + dsecs).slice(-2)}`
   break;
 case 5 :
   period = "PERIOD 5B / A LUNCH"
   timer2 = `A Lunch: ${('0' + emins).slice(-2)}:${('0' + esecs).slice(-2)}
Period 5B: ${  ('0' + hmins).slice(-2)   }:${   ('0' + hsecs).slice(-2)}
`
   div2.style.fontSize = "4em";
   break;
 case 6 :
   period = "PERIOD 5A / B LUNCH"
   timer2 = `${('0' + gmins).slice(-2)}:${('0' + gsecs).slice(-2)}`
   break;
 case 7 :
   period = "PERIOD 6"
   timer2 = `${('0' + imins).slice(-2)}:${('0' + isecs).slice(-2)}`
   break;
 case 8 :
   period = "PERIOD 7"
   timer2 = `${('0' + jmins).slice(-2)}:${('0' + jsecs).slice(-2)}`
   break;
  case 11:
    period = "Transitioning to Period 2..."
   timer2 = `6 mins`
   break;
  case 12:
    period = "Transitioning to Period 3..."
   timer2 = `6 mins`
   break;
  case 13:
    period = "Transitioning to Period 4..."
   timer2 = `6 mins`
   break;
  case 14:
    period = "Transitioning to A Lunch/Period 5B..."
   timer2 = `6 mins`
   break;
  case 15:
    period = "Transitioning to Period 6..."
   timer2 = `6 mins`
   break;
  case 16:
    period = "Transitioning to Period 7..."
   timer2 = `6 mins`
   break;
}
  /*    console.log('!!!!!!!!!!!!!');
      console.log('!!!!!!!!!!!!!');
      console.log('!!!!!!!!!!!!!'); */
      console.log(now);
     /* console.log(periodnumber);
      console.log(dode);
      console.log(`AYYY!` + timespan);
      console.log(period);
      console.log(timer2);
      console.log(DayStarted);
       console.log('----------');
      console.log('----------');
      console.log('----------');
  */

      date_element.innerHTML = `${n}
${abcd}`;

if (wednesdayornot.getDay() != 6 && wednesdayornot.getDay() != 0 ){
    div2.innerHTML = `${timer2}`;
    document.title = `${timer2}`;  

    // TEN / TEN INDICATOR //
    var timersplit = timer2.split(':');
    if (periodnumber != 0){
    switch (timersplit[0]) {
      case '52': date_element.innerHTML = `We are in 10/10.`;
      case '51': date_element.innerHTML = `We are in 10/10.`;
      case '50': date_element.innerHTML = `We are in 10/10.`;
      case '49': date_element.innerHTML = `We are in 10/10.`;
      case '48': date_element.innerHTML = `We are in 10/10.`;
      case '47': date_element.innerHTML = `We are in 10/10.`;
      case '46': date_element.innerHTML = `We are in 10/10.`;
      case '45': date_element.innerHTML = `We are in 10/10.`;
      case '44': date_element.innerHTML = `We are in 10/10.`;
      case '43': date_element.innerHTML = `We are in 10/10.`;
      case '42': date_element.innerHTML = `We are in 10/10.`;
      case '41': date_element.innerHTML = `We are in 10/10.`;
      case '40': date_element.innerHTML = `We are in 10/10.`;
      case '10': date_element.innerHTML = `We are in 10/10.`;
      case '09': date_element.innerHTML = `We are in 10/10.`;
      case '08': date_element.innerHTML = `We are in 10/10.`;
      case '07': date_element.innerHTML = `We are in 10/10.`;
      case '06': date_element.innerHTML = `We are in 10/10.`;
      case '05': date_element.innerHTML = `We are in 10/10.`;
      case '04': date_element.innerHTML = `We are in 10/10.`;
      case '03': date_element.innerHTML = `We are in 10/10.`;
      case '02': date_element.innerHTML = `We are in 10/10.`;
      case '01': date_element.innerHTML = `We are in 10/10.`;
      case '00': date_element.innerHTML = `We are in 10/10.`;
    }
  }   

     }else if (wednesdayornot.getDay() == 6 || wednesdayornot.getDay() == 0 ){
    div.innerHTML = '';
    div2.innerHTML = `Weekend!`;
    span.remove();
  }

      return [timespan, period];
} catch(err){
  
}
    
}

yeetus();
setInterval(yeetus, 1000);












div.innerHTML = `${period}`
span.innerHTML = `${timespan}`

function testing4() {
    
    switch (periodnumber){
 case 1 : 
   bar.style.width = 12.5 + '%'
   break;
 case 2 :
   bar.style.width = 25 + '%'
   break;
 case 3 :
   bar.style.width = 37.5 + '%'
   break;
 case 4 :
   bar.style.width = 50 + '%'
   break;
 case 5 :
   bar.style.width = 62.5 + '%'
   break;
 case 6 :
   bar.style.width = 75 + '%'
   break;
 case 7 :
   bar.style.width = 87.5 + '%'
   break;
 case 8 :
   bar.style.width = 100 + '%'
   break;
}


}
setInterval(testing4, 1000);







