// This JavaScript file implements the logic for the Digital Timer application.
// It creates DOM elements for displaying hours, minutes, seconds, format (AM/PM),
// date, and additional time information like timezone, week, and day.
// The timer updates every second, minute, and hour using setInterval functions
// to simulate a running clock.

// Get references to existing DOM elements
let bgContainer=document.getElementById("bgContainer");
let clockContainer=document.getElementById("clockContainer");
let timeRow=document.getElementById("timeRow");
let timeInfo=document.getElementById("timeInfo");

// Create and append DOM elements for hours display
let hourBox=document.createElement("div");
hourBox.className="time-box";
let hourText=document.createElement("h1");
hourText.textContent='00';
let hourLabel=document.createElement('span');
hourLabel.textContent="HOURS";

hourBox.appendChild(hourText);
hourBox.appendChild(hourLabel);
timeRow.appendChild(hourBox);

let colon1=document.createElement("div");
colon1.className="colon";
colon1.textContent=":";
timeRow.appendChild(colon1);

// minutes DOM
let minuteBox=document.createElement("div");
minuteBox.className="time-box"
let minuteText=document.createElement('h1');
minuteText.textContent="00";
let minuteLabel=document.createElement('span');
minuteLabel.textContent="MINUTES";

minuteBox.appendChild(minuteText);
minuteBox.appendChild(minuteLabel);
timeRow.appendChild(minuteBox);

let colon2=document.createElement('div');
colon2.className="colon";
colon2.textContent=":";
timeRow.appendChild(colon2);


//seconds DOM
let secondsBox=document.createElement("div");
secondsBox.className="time-box";
let secondText=document.createElement("h1");
secondText.textContent="00";
let secondLabel=document.createElement('span');
secondLabel.textContent="SECONDS";

secondsBox.appendChild(secondText);
secondsBox.appendChild(secondLabel);
timeRow.appendChild(secondsBox);


// Format DOM
let formatValue=document.createElement("h1");
formatValue.className="format";
formatValue.textContent="AM";
timeRow.appendChild(formatValue);

//Date DOM
let dateText=document.createElement('h1');
dateText.className="date";
dateText.textContent="Sunday, Feb 8, 2026";
clockContainer.appendChild(dateText);

//dot DOM
let dotDesign=document.createElement("div");
dotDesign.className="dot";
clockContainer.appendChild(dotDesign);

//time zone DOM
let timezone=document.createElement("div");
timezone.className="details-row-style";
let timezoneLabel=document.createElement("h1");
timezoneLabel.className="info-label";
timezoneLabel.textContent="Time Zone";
let timezoneInfo=document.createElement("p");
timezoneInfo.className="info-value";
timezoneInfo.textContent="India";

timezone.appendChild(timezoneLabel);
timezone.appendChild(timezoneInfo);
timeInfo.appendChild(timezone);


//week DOM
let week=document.createElement("div");
week.className="details-row-style";
let weekLabel=document.createElement("h1");
weekLabel.className="info-label";
weekLabel.textContent="Week";
let weekInfo=document.createElement("p");
weekInfo.className="info-value";
weekInfo.textContent="8";

week.appendChild(weekLabel);
week.appendChild(weekInfo);
timeInfo.appendChild(week);


// Day DOM
let day=document.createElement("div");
day.className="details-row-style";
let dayLabel=document.createElement("h1");
dayLabel.className="info-label";
dayLabel.textContent="Day";
let dayInfo=document.createElement("p");
dayInfo.className="info-value";
dayInfo.textContent="39";

day.appendChild(dayLabel);
day.appendChild(dayInfo);
timeInfo.appendChild(day);



// Timer update logic: Update seconds every 1 second
let secondsValue=0;
setInterval(function(){
    secondsValue+=1;
    if (secondsValue < 60){
        if (secondsValue < 10){
            secondText.textContent="0"+secondsValue;
        }
        else{
            secondText.textContent=secondsValue;
        }
    }
    else{
        secondsValue=0;
        secondText.textContent="0"+secondsValue;
    }
},1000)


// Update minutes every 60 seconds
let minutesValue=0;
setInterval(()=>{
    minutesValue+=1;
    if (minutesValue < 60){
        if (minutesValue < 10){
            minuteText.textContent="0"+minutesValue;
        }
        else{
            minuteText.textContent=minutesValue;
        }
    }
    else{
        minutesValue=0;
        minuteText.textContent="0"+minutesValue;
    }
},60000)

// Update hours every 60 minutes, handle AM/PM format
let hoursValue=0;
let pmValue=0; // value for prime meridian

setInterval(()=> {
    hoursValue+=1;
    if (hoursValue < 24){
        if (hoursValue < 12){
            if (hoursValue < 10){
                hourText.textContent="0"+hoursValue;
            }
            else{
                hourText.textContent=hoursValue;
            }
        }
        else{
            formatValue.textContent="PM";

            if (hoursValue === 12){
                hourText.textContent=hoursValue;
            }
            else{

                pmValue+=1;
                if (pmValue < 10){
                    hourText.textContent="0"+pmValue;
                }
                else{
                    hourText.textContent=pmValue;
                }
            }
        }
    }
    else{
        formatValue.textContent="AM";
        hoursValue=0;
        hourText.textContent="0"+hoursValue;
        pmValue=0;
    }
},3600000)
