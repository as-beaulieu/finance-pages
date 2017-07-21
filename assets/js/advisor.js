var advisor = {};
var advisorSelector = $('.advisor-delete');

advisor.error = function deleteError(data) {
    jQuery.notify({
        message: 'Error on remove advisor'
    }, {
        type: 'danger'
    })
}

advisor.success = function deleteSuccess(data) {
    var id = JSON.parse(data)._id
    console.log($('#tr-' + id));
    $('#tr-' + id).remove();
    jQuery.notify({
        message: 'advisor removed'
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

function deleteadvisor(event) {
    event.preventDefault();
    var id = event.currentTarget.dataset.id;

    var options = {
        method: 'DELETE',
        url: '/clients?id=' + id,
        success: function(data) {
            return advisor.success(data);
        },
        error: function(data) {
            return advisor.error(data);
        },
    };

    ajax(options);
}

$(document).ready(function onReady() {
    advisorSelector.on('click', deleteadvisor);
});