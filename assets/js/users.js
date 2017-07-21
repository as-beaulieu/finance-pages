var User = {};
var userSelector = $('.user-delete');

User.error = function deleteError(data) {
    jQuery.notify({
        message: 'Error on remove User'
    }, {
        type: 'danger'
    })
}

User.success = function deleteSuccess(data) {
    var id = JSON.parse(data)._id
    console.log($('#tr-' + id));
    $('#tr-' + id).remove();
    jQuery.notify({
        message: 'User removed'
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

function deleteUser(event) {
    event.preventDefault();
    var id = event.currentTarget.dataset.id;

    var options = {
        method: 'DELETE',
        url: '/users?id=' + id,
        success: function(data) {
            return User.success(data);
        },
        error: function(data) {
            return User.error(data);
        },
    };

    ajax(options);
}

$(document).ready(function onReady() {
    userSelector.on('click', deleteUser);
});