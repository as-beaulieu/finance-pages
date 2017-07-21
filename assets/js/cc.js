var cc = {};
var ccSelector = $('.cc-delete');

cc.error = function deleteError(data) {
    jQuery.notify({
        message: 'Error on remove cc'
    }, {
        type: 'danger'
    })
}

cc.success = function deleteSuccess(data) {
    var id = JSON.parse(data)._id
    console.log($('#tr-' + id));
    $('#tr-' + id).remove();
    jQuery.notify({
        message: 'cc removed'
    }, {
        type: 'success'
    })
}

function ajax(data) {
    $.ajax({
        method: data.method,
        url: data.url,
        contentType: 'application/json; charset=utf-8',
        xhrFields: {
            withCredentials: true
        },
        success: data.success,
        error: data.fail
    });
}

function deletecc(event) {
    event.preventDefault();
    var id = event.currentTarget.dataset.id;

    var options = {
        method: 'DELETE',
        url: '/deletecc?id=' + id,
        success: function(data) {
            return cc.success(data);
        },
        error: function(data) {
            return cc.error(data);
        },
    };

    ajax(options);
}

$(document).ready(function onReady() {
    ccSelector.on('click', deletecc);
});