$(document).ready(function () {
    // Variables to be used in the functions
    var textareasByIDs = [$("#1"), $("#2"), $("#3"), $("#4"), $("#5"), $("#6"), $("#7"), $("#8"), $("#9")];
    var plan2Store = ["", "", "", "", "", "", "", "", ""];
    var plan2StoreString

    // Using moment to add the date
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    // Writes any stored plans and saves those stored plans to be stored again
    if (JSON.parse(localStorage.getItem("plan2StoreString")) !== null) {
        storedArray = JSON.parse(localStorage.getItem("plan2StoreString"));
        for (var i = 0; i < 9; i++) {
            textareasByIDs[i].val(storedArray[i]);
            plan2Store[i] = storedArray[i];
        }
    }

    // This loop controls the color of the textareas
    for (var i = 0; i < 9; i++) {
        if (moment().hour() > parseInt(textareasByIDs[i].attr("id")) + 7) {
            textareasByIDs[i].attr("class", "form-control past");
        } else if (moment().hour() === parseInt(textareasByIDs[i].attr("id")) + 7) {
            textareasByIDs[i].attr("class", "form-control present");
        } else if (moment().hour() < parseInt(textareasByIDs[i].attr("id")) + 7) {
            textareasByIDs[i].attr("class", "form-control future");
        } 
    }

    // Function that begins when user clicks a save button
    $(".saveBtn").on("click", function () {
        // Grabs whichever button was clicked
        var clickedsaveBtn = $(this).val();
        // Stores the string that was connected to the clicked save button
        for (var i = 0; i < 9; i++) {
            if (textareasByIDs[i].attr("id") == clickedsaveBtn) {
                plan2Store[i] = textareasByIDs[i].val();
                plan2StoreString = JSON.stringify(plan2Store);
                localStorage.setItem("plan2StoreString", plan2StoreString);
            }
        }
    });
    
});