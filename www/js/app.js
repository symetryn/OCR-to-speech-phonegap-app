$(document).ready(function (){
    //document.addEventListener("deviceready", init, false);
    //function init() {
        console.log("::::::::::::::My device is ready ::::::: ");
        $( window ).load(function() {
           request('https://cors-anywhere.herokuapp.com/'+'https://librivox.org/api/feed/audiobooks/title/^hero?&format=json');
          });
            function request(url)
            {
            var url = url;
            var count=0;
            $.ajax({
                url:url,
                dataType: 'json',
                type:'GET',
               
                success: function (parsedData) {
                    console.log(parsedData);
                    $.each(parsedData.books, function (key,index) {
                        $("#newsArea").append(
                            `
                            <div class = "wide-card mdl-card mdl-shadow--2dp" style="width:100%">
                                      <div class = "mdl-card__title" style="padding-left:16px; padding-bottom:0px">
                                         <h2 class = "mdl-card__title-text" >${parsedData.books[count].title}</h2>
                                      </div>
                                   
                                      <div class = "mdl-card__supporting-text" style="text-align:justify;padding-top:0px;padding-bottom:0px;padding-bottom:0px;margin-bottom:0px">
                                            ${parsedData.books[count].description}
                                      </div>
                                   
                                      <div class = "mdl-card__actions mdl-card--border">
                                         <a href="${parsedData.books[count].url_zip_file}" class = "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                            Download</a>
                                      </div>
                                   
                                      </div>
                                   
                            `
                        );
                        count++;       
                    })
                    $("#output").listview('refresh')
                },
                error: function (jqXHR, status, error) {
                    alert("jqXHR "+ jqXHR.responseText +" status " +status +" error "+ error);

                }

            })

        }

        });




