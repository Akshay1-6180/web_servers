$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if($('#life').text()== "")
        {
            $('#life').html('<i class="fab fa-pagelines move"></i>LIFE DETECTION');
            $('#auto').html("<i class='fas fa-dharmachakra move'></i>AUTONOMOUS");
            $('#comm').html("<i class='fas fa-signal move'></i>COMMUNICATION");

            
        }
        else if ($('#life').text() == "LIFE DETECTION")
        {
            $('#life').html("<i class='fab fa-pagelines move'></i>");
            $('#auto').html("<i class='fas fa-dharmachakra move'></i>");
            $('#comm').html("<i class='fas fa-signal move'></i>");
        }
    });
});