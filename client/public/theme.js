const currentTime = new Date().getHours();

const morningStart = 6;
const afternoonStart = 12;
const eveningStart = 18;
const nightStart = 21;
 
let theme = 'default';

if (currentTime >= morningStart && currentTime < afternoonStart) {
    theme = 'morning';
} else if (currentTime >= afternoonStart && currentTime < eveningStart) {
    theme = 'afternoon';
} else if(currentTime >=eveningStart && currentTime < nightStart ){
    theme = 'evening';
} else{
    theme = 'night';
}

document.body.style.backgroundColor = getThemeColor(theme);

function getThemeColor(theme) {
    const themeColors = {
        'morning': '#343a40', // Morning color #343a40
        'afternoon': '#323131', // Afternoon color #323131
        'evening': '#152238', // Evening color #152238
        'night': '#001524', // Night color #001524
    };
    
    return themeColors[theme];
}