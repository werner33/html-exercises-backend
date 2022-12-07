// format a number as a dollar amount
function formatDollarAmount(amount) {
    return "$" + amount.toFixed(2);
}

// format a number as a percentage
function formatPercentage(amount) {
    return amount.toFixed(2) + "%";
}

// format a string with every other character capitalized
function formatEveryOtherCharacterCapitalized(string) {
    let formattedString = "";
    for(let i = 0; i < string.length; i++) {
        if(i % 2 === 0) {
            formattedString += string[i].toUpperCase();
        } else {
            formattedString += string[i].toLowerCase();
        }
    }
    return formattedString;
}


// format a name in html with the last name in bold
function formatNameInHtml(firstName, lastName) {
    return `<b>${lastName}</b>, ${firstName}`;
}









