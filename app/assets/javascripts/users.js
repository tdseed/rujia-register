// (function() {
//   window.UserUI = function() {
//     var coverSection;
//       $('#new-user-form').validate({
//         rules: {
//           'user[name]': {
//             required: true
//           },
//           'user[phone]': {
//             required: true,
//             number: true,
//             minlength: 11,
//             maxlength: 11,
//             remote: '/users/check_phone'
//           }
//         },
//         messages: {
//           'user[name]': {
//             required: '姓名不能为空'
//           },
//           'user[phone]': {
//             required: '手机号不能为空',
//             number: '无效的手机号格式',
//             minlength: '无效的手机号格式',
//             maxlength: '无效的手机号格式',
//             remote: '此号码已经被使用'
//           }
//         },
//         submitHandler: function() {
//             var name, phone, userParams;
//             name = $("#user_name").val();
//             phone = $("#user_phone").val();
//             userParams = "name=" + name + "&phone=" + phone;
//             $.ajax({
//               url: window.RailsParams.userPostPath,
//               type: "POST",
//               data: { user: { name: name, phone: phone } },
//               success: function(data) {
//                 var coverSection;
//                 coverSection = $("section.cover");
//                 coverSection.fadeIn(500).click(function(event) {
//                   return coverSection.fadeOut(500, function() {
//                     return window.location.href = window.RailsParams.userOverPath;
//                   });
//                 });
//                 setTimeout(function() {
//                   return coverSection.fadeOut(500, function() {
//                     return window.location.href = window.RailsParams.userOverPath;
//                   });
//                 }, 3000);
//                 if (data.error_code !== "0") {
//                   // return alert(data.error_msg);
//                 }
//               }
//             })
//         }
//       })
//   }

// }).call(this);



// (function() {
//   window.UserUI = function() {
//     var coverSection;
//       $('#new-user-form').validate({
//         rules: {
//           'name': {
//             required: true
//           },
//           'phone': {
//             required: true,
//             number: true,
//             minlength: 11,
//             maxlength: 11,
//             remote: '/users/check_phone'
//           }
//         },
//         messages: {
//           'name': {
//             required: '姓名不能为空'
//           },
//           'phone': {
//             required: '手机号不能为空',
//             number: '无效的手机号格式',
//             minlength: '无效的手机号格式',
//             maxlength: '无效的手机号格式',
//             remote: '此号码已经被使用'
//           }
//         },
//         submitHandler: function() {
//             var name, phone, userParams;
//             name = $("#name").val();
//             phone = $("#phone").val();
//             userParams = "name=" + name + "&phone=" + phone;
//             $.ajax({
//               // url: window.RailsParams.userPostPath,
//               url: '/users/ajax_get',
//               type: "GET",
//               data: { name: name, phone: phone },
//               success: function(data) {
//                 var coverSection;
//                 coverSection = $("section.cover");
//                 coverSection.fadeIn(500).click(function(event) {
//                   return coverSection.fadeOut(500, function() {
//                     return window.location.href = window.RailsParams.userOverPath;
//                   });
//                 });
//                 setTimeout(function() {
//                   return coverSection.fadeOut(500, function() {
//                     return window.location.href = window.RailsParams.userOverPath;
//                   });
//                 }, 3000);
//                 if (data.error_code !== "0") {
//                   // return alert(data.error_msg);
//                 }
//               }
//             })
//         }
//       })
//   }

// }).call(this);



(function() {
  window.UserUI = function() {
    var coverSection;
      $('#new-user-form').validate({
        rules: {
          'user[name]': {
            required: true
          },
          'user[phone]': {
            required: true,
            number: true,
            minlength: 11,
            maxlength: 11,
            remote: '/users/check_phone'
          }
        },
        messages: {
          'user[name]': {
            required: '姓名不能为空'
          },
          'user[phone]': {
            required: '手机号不能为空',
            number: '无效的手机号格式',
            minlength: '无效的手机号格式',
            maxlength: '无效的手机号格式',
            remote: '此号码已经被使用'
          }
        }
      })
  }

}).call(this);




	