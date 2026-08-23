"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem-01: Battery Level Status
function getBatteryStatus(percentage) {
    if (percentage < 0 || percentage > 100) {
        return "Invalid percentage";
    }
    if (percentage <= 20) {
        return "Low";
    }
    else if (percentage <= 50) {
        return "Medium";
    }
    else if (percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses) {
    return expenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
function getTrafficAction(light) {
    switch (light) {
        case "red":
            return "Stop";
        case "yellow":
            return "Slow Down";
        case "green":
            return "Go";
        default:
            return "Invalid Light";
    }
}
function getQuizSummary(scores) {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }
    const total = scores.reduce((sum, currentValue) => sum + currentValue, 0);
    const average = total / scores.length;
    return { total: total, average: average };
}
// For test
console.log(getBatteryStatus(75));
console.log(calculateWeeklyTotal([200, 450, 100]));
//# sourceMappingURL=TS_Submission_Code.js.map