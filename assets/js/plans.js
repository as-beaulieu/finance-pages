var plan = {};
var selector = $('.delete');

plan.error = function deleteError(data) {
    jQuery.notify({
        message: 'Error on remove plan'
    }, {
        type: 'danger'
    })
}

plan.success = function deleteSuccess(data) {
    var id = JSON.parse(data)._id
    $('#tr-'+ id ).remove();
    jQuery.notify({
        message: 'Plan removed'
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

function deletePlan(event) {
    event.preventDefault();
    var id = event.currentTarget.dataset.id;

    var options = {
        method: 'DELETE',
        url: '/plans_delete?id=' + id,
        success: function(data) {
            return plan.success(data);
        },
        error: function(data) {
            return plan.error(data);
        },
    };

    ajax(options);
}

$(document).ready(function onReady() {
    selector.on('click', deletePlan);
});