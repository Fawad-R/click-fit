$(document).ready(function () {
    $.ajax({
      url: "http://numbersapi.com/1/30/date?json",
      method: "GET",
      success: function (data) {
        $('#fact').text(data.text);
      },
      error: function () {
        $('#fact').text("Failed to load fact.");
      }
    });
  
    $('#imageInput').change(function () {
      const formData = new FormData($('#uploadForm')[0]);
      $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
          $('#uploadStatus').text("Upload successful: " + response.file);
        },
        error: function () {
          $('#uploadStatus').text("Upload failed.");
        }
      });
    });
  });
  