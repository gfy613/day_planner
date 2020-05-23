var currentDate = moment().format('dddd MMMM Do YYYY');
$(currentDay).text(currentDate)

var time = moment().format('LT')

let hour24 = moment().format('H');
let hour12 = moment().format('h');



var plannerArray = [
    {timeBlock: "9AM",
    task:"",
    hour:9,
    },
    {timeBlock:"10AM",
    task:"",
    hour:10,
    },
    {timeBlock:"11AM",
    task:"",
    hour:11,
    },
    {timeBlock:"12PM",
    task:"",
    hour:12,
    },
    {timeBlock:"1PM",
    task:"",
    hour:13,
    },
    {timeBlock:"2PM",
    task:"",
    hour:14,
    },
    {timeBlock:"3PM",
    task:"",
    hour:15,
    },
    {timeBlock:"4PM",
    task:"",
    hour:16,
    },
    {timeBlock:"5PM",
    task:"",
    hour:17,
    },
    {timeBlock:"6PM",
    task:"",
    hour:18,
    }
]

// check to see if local storage has the array already saved
let storedPlannerArray  = JSON.parse(localStorage.getItem("storedPlannerArray"));

if(storedPlannerArray !== null){
    plannerArray = storedPlannerArray;
}

// create your day planner
function createPlanner(){
for (i=0; i < plannerArray.length; i++){
    console.log(plannerArray[i].hour < hour24 )
    console.log(plannerArray[i].hour > hour24)

    // Create a new row
    var rowEl = $("<div>");
    rowEl.addClass("row");
    // give time to row
    var timeBlockEl = $("<div>");
    timeBlockEl.addClass("col-md-2 hour");
    timeBlockEl.text(plannerArray[i].timeBlock);
    // give task to row
    var task = $("<input>");
    task.addClass("col-md-9 task");
    task.attr("type","text")
    task.attr("id","inputId"+i)
    task.val(plannerArray[i].task);
    // formatting for color based on time
    if(plannerArray[i].hour < hour24){
        task.addClass("past");    
    }
    else if(plannerArray[i].hour > hour24){
        task.addClass("future");    
    }
    else if (plannerArray[i].hour = hour24){
        task.addClass("present");    
    }
    // create save button
    var saveBtn = $("<button>");
    saveBtn.addClass("col-md-1 saveBtn");
    saveBtn.attr("value",i)
    saveBtn.text("save");
    $("#planner").append(rowEl);
    rowEl.append(timeBlockEl);
    rowEl.append(task);
    rowEl.append(saveBtn);
}

}

createPlanner()

// Save button function
$(".saveBtn").on("click",function(){
    event.preventDefault();  
    console.log("test");
    console.log($(this).attr("value"))
    var valueId = $(this).attr("value")
    var index = "#inputId"+$(this).attr("value")
    console.log($(index).val())
    plannerArray[valueId].task = $(index).val()
    console.log(plannerArray)
    
  storeTasks()

})

// Store task to local storage
function storeTasks(){
    localStorage.setItem("storedPlannerArray",JSON.stringify(plannerArray));
};

