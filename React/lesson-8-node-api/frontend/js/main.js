window.onload = () => {

  $.post("ajax/user/getList", function (data) {
    $(".users-list").html(data);
  });


  $('.user-create-form__button').click(() => {
    const name = $('.user-create-form__name').val();
    const age = $('.user-create-form__age').val();
    $.post("ajax/user/add", {name, age});
  });


};