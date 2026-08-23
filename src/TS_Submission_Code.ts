//Problem-01: Battery Level Status
function getBatteryStatus(percentage: number): string{
  if (percentage < 0 || percentage > 100) {
    return "Invalid percentage";
  }
  if (percentage <= 20) {
    return "Low";
  } else if (percentage <= 50) {
    return "Medium";
  } else if (percentage <= 90) {
    return "High";
  } else {
    return "Full";
  }
}

//Problem-02: Table Booking Confirmation
interface Booking{
    name: string;
    guests: number;
    time: string;
}

function formatBookingConfirmation(booking: Booking): string{
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses: number[]): number{
    return expenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    )
}

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green"
function getTrafficAction(light: Light): string{
    switch(light){
        case "red":
            return "Stop";

        case "yellow":
            return "Slow Down"
        case "green":
            return "Go"
        default:
            return "Invalid Light"
    }
}

//Problem-05: Quiz Score Summary
interface QuizSummary{
    total: number;
    average: number;
}
function getQuizSummary(scores: number[]): QuizSummary{
    if(scores.length === 0){
        return {total: 0, average: 0}
    }

    const total = scores.reduce((sum, currentValue) => sum + currentValue, 0);

    const average = total / scores.length;

    return {total: total, average: average}
}
