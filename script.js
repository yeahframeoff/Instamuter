function hide(name) {
    $("a:contains(" + name + ")").closest(".timelineItem").remove();
}

$(document).ready(function() {

    chrome.storage.local.get({names: []} , function(result) {
        var names = result.names;

        for (i = 0; i < names.length; i++) { 
            hide(names[i]);
        }
    });    
});