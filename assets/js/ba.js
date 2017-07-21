var ba = {};
var baSelector = $('.ba-delete');

ba.error = function deleteError(data) {
    jQuery.notify({
        message: 'Error on remove ba'
    }, {
        type: 'danger'
    })
}

ba.success = function deleteSuccess(data) {
    var id = JSON.parse(data)._id
    console.log($('#tr-' + id));
    $('#tr-' + id).remove();
    jQuery.notify({
        message: 'ba removed'
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

function deleteba(event) {
    event.preventDefault();
    var id = event.currentTarget.dataset.id;

    var options = {
        method: 'DELETE',
        url: '/deleteba?id=' + id,
        success: function(data) {
            return ba.success(data);
        },
        error: function(data) {
            return ba.error(data);
        },
    };

    ajax(options);
}

$(document).ready(function onReady() {
    baSelector.on('click', deleteba);
});