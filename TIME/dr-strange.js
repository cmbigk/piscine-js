
function addWeek(newDate) {
  const defaultDate = new Date('0001-01-01');
  const customWeekdays = [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
      "secondFriday", "secondSaturday", "secondSunday"
    ];
    

    const datesDifference = Math.floor((newDate - defaultDate) / 86400000);

    const weekdayIndex = datesDifference % 14;
  
    return customWeekdays[weekdayIndex];
  }
  
  console.log(addWeek(new Date('0001-01-09'))) 
  console.log(addWeek(new Date('0001-01-02'))) 
  console.log(addWeek(new Date('0001-01-01')))
  console.log(addWeek(new Date('0001-01-07'))) 
  console.log(addWeek(new Date('0001-01-08'))) 
  


  function timeTravel({date,hour,minute,second})
    {
        const newDate = new Date(date);
        newDate.setHours(hour);
        newDate.setMinutes(minute);
        newDate.setSeconds(second);
        return newDate;
    }


    console.log(
        timeTravel({
          date: new Date('2024-02-17 10:15:45'),
          hour: 5,
          minute: 30,
          second: 0,
        }).toString()
      );
      