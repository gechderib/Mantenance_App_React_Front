import $ from "jquery";
import jQuery from "jquery"

import "./css/redmond.calendars.picker.css"
import "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
import "./js/jquery.plugin"
import "./js/jquery.calendars"
import "./js/jquery.calendars.plus"
import "./js/jquery.calendars.picker"
import "./js/jquery.calendars.ethiopian"
import "./js/jquery.calendars.ethiopian-am"

function AmCalander(props) {
  $(function () {
    var calendar = $.calendars.instance("ethiopian", "am");
    $("#popupDatepicker").calendarsPicker({ calendar: calendar });
    $("#inlineDatepicker").calendarsPicker({ calendar: calendar });
  });
  return <input  ref={props.reference} className={props.className1} placeholder={props.placeholder1} type="text" id="popupDatepicker"/>
    
}
export default AmCalander;