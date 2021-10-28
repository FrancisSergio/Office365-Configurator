/**
 * 
 * Global variables
 * 
 */
var questions, results, outputApps;
/**
 * Change here the path to where the app folder is located
 */
var host ='./';
/***********************************/
var appImg = host+'assets/images/';
/**
 * document ready function
 */
$(document).ready(function() {
    loadData();
});
/**
 * 
 * homeButton function 
 * 
 */
function homeButton() {
    $('#startPage .brand').click(function() {
        console.log('in')
        location.reload();
        localStorage.clear();
        nextArray = [];
    });
}
/**
 * 
 * loadData function
 * 
 */
function loadData(){
    var loadPackages = $.getJSON("assets/data/question.json", function(json) {
        packages = json;
    });
    loadPackages.then(snapshot => {
        questions = snapshot;
        
        generateQuestion(0);
    }); 

    var loadResults = $.getJSON("assets/data/results.json", function(json) {
        packages = json;
    });
    loadResults.then(snapshot => {
        results = snapshot;
    }); 
}
/**
 * 
 * generateQuestion function
 * 
 */
function generateQuestion(id=0){
    
    var questionId = questions[id].identiefier;
    var questionTitle = questions[id].question;
    var answers = questions[id].answers;
    var image = questions[id].image;

    var notice = questions[id].notice;
    var noticeMessage = notice.message;
    
    var countAnswers = Object.keys(answers).length;

    var outputNav = ''
    +'<nav id="topnav">'
        +'<div class="container">'
            +'<div class="row">'
                +'<div class="columns c-12">'
                    +'<img class="brand" src="'+host+'assets/images/logo_microsoft.png" alt="Logo Microsoft" />'
                +'</div>'
            +'</div>'
        +'</div>'
    +'</nav>';
    // var outputStepBack = '<div id="step_back" class="columns c-4"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104.85" height="104.85" viewBox="0 0 104.85 104.85"> <defs> <clipPath id="clip-path"> <path id="Pfad_2" data-name="Pfad 2" d="M0,51.877H104.85V-52.973H0Z" transform="translate(0 52.973)" fill="none"/> </clipPath> </defs> <g id="Gruppe_6" data-name="Gruppe 6" transform="translate(-136.062 -354.035)"> <g id="Gruppe_5" data-name="Gruppe 5" transform="translate(136.062 407.008)"> <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(0 -52.973)" clip-path="url(#clip-path)"> <g id="Gruppe_1" data-name="Gruppe 1" transform="translate(3.96 3.959)"> <path id="Pfad_1" data-name="Pfad 1" d="M23.979,47.959A48.466,48.466,0,0,0,72.444-.506,48.466,48.466,0,0,0,23.979-48.973,48.466,48.466,0,0,0-24.486-.506,48.466,48.466,0,0,0,23.979,47.959Z" transform="translate(24.486 48.973)" fill="none" stroke="#0078D7" stroke-width="8"/> </g> </g> <path id="Pfad_3" data-name="Pfad 3" d="M16.642-14.945H68.114V-30.388H16.642Z" transform="translate(16.298 22.118)" fill="#0078D7"/> <g id="Gruppe_3" data-name="Gruppe 3" transform="translate(20.438 -9.998)"> <path id="Pfad_4" data-name="Pfad 4" d="M4.682,0-4.781,9.463,24.661,38.905l9.463-9.463Z" transform="translate(4.781)" fill="#0078D7"/> </g> <g id="Gruppe_4" data-name="Gruppe 4" transform="translate(20.438 -30.004)"> <path id="Pfad_5" data-name="Pfad 5" d="M0,14.567,9.463,24.03,38.905-5.412l-9.463-9.463Z" transform="translate(0 14.875)" fill="#0078D7"/> </g> </g> </g> </svg></div>';
    var outputStepBack = ''
        +'<div id="step_back" class="columns c-4">'
            +'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12.7px" height="19.6px" viewBox="0 0 12.7 19.6" style="enable-background:new 0 0 12.7 19.6;" xml:space="preserve"> <style type="text/css"> .st0{fill:#575756;} </style> <defs> </defs> <path id="Pfad_1_1_" class="st0" d="M12.7,0H9.9L1.8,8.2L0,10l9.9,9.5h2.9L2.7,10L12.7,0z"/> </svg>'
            +'<span>Zurück</span>'
        +'</div>';
    var outputHeader = '<header><div class="row"><div class="columns c-12"><h1 id="'+questionId+'">'+questionTitle+'</h1></div></div></header>';
    var outputInformation = '<aside><img src="'+appImg+image+'" alt="'+questionTitle+'" /></aside>';
    var outputChoice = '';

    if (countAnswers == 3) {
        var outputChoice = '<div class="choice c3"><div class="row"><div class="columns c-12"><button class="btn btn-prime next" data-next="'+answers[0].nextQ+'">'+answers[0].content+'</button><button class="btn btn-prime next" data-next="'+answers[1].nextQ+'">'+answers[1].content+'</button><button class="btn btn-prime next" data-next="'+answers[2].nextQ+'">'+answers[2].content+'</button></div></div></div>';
    } 
    if (countAnswers == 2) {
        var outputChoice = '<div class="choice c2"><div class="row"><div class="columns c-12"><button class="btn btn-prime next" data-next="'+answers[0].nextQ+'">'+answers[0].content+'</button><button class="btn btn-prime next" data-next="'+answers[1].nextQ+'">'+answers[1].content+'</button></div></div></div>';
    } 
    if (countAnswers == 1) {
        var outputChoice = '<div class="choice c1"><div class="row"><div class="columns c-12"><button class="btn btn-prime next" data-next="'+answers[0].nextQ+'">'+answers[0].content+'</button></div></div></div>';
    } 

    var outputNote = ''
    +'<div class="notice">'
        +'<div class="container">'
            +'<div class="row">'
                +'<div class="columns c-12">'
                    +'<p>'+noticeMessage+'</p>'
                +'</div>'
            +'</div>'
        +'</div>'
    +'</div>';
    // else {
    //     var outputChoice = '<div class="choice"><div class="row"><div class="columns c-12"><button class="btn btn-prime next" data-next="'+answers[0].nextQ+'">'+answers[0].content+'</button><button class="btn btn-prime next" data-next="'+answers[1].nextQ+'">'+answers[1].content+'</button></div></div></div>';
    // }

    if (nextArray == 0) {
        $('#startPage').append(outputNav, outputHeader, outputChoice, outputInformation, outputNote);
    } else {
        $('#startPage').append(outputNav, outputStepBack, outputHeader, outputChoice, outputInformation, outputNote);
    }

    $('#step_back').click(function() {
        backClick();
    });

    nextClick();
}
/**
 * 
 * genearateResults function
 * 
 */

function generateResults(identifier,isub=""){
    for (let result in results) {
        if(results[result]['id'] == identifier){
            var productId = results[result].id;
            var productName = results[result].name; 
            var productSubname = results[result].subname; 
            var subproducts = results[result].subproduct;
            var officeGray = results[result].officeGray;

            var info = results[result].info;
            var license = info.license;

            var user = info.user;
            var userTitle = user.title;
            var userImage = user.image;

            var devices = info.devices;
            var devicesTitle = devices.title;
            var devicesDescription = devices.description;
            var devicesImage = devices.image;

            var apps = info.apps;
            var appsTitle = apps.title;

            var cloudservice = info.cloudservice;
            var cloudserviceTitle = cloudservice.title;

            var support = info.support;
            var supportTitle = support.title;

            var notice = info.notice;
            var noticeMessage = notice.message;

            var banner = results[result].banner;
            var bannerImage = banner.image;
            var bannerInfo = banner.info;
            var bannerBuy = banner.buy;
        }
    }

    var outputNav = '';
    var backButton = '';
    
    if ($('#new-grid').length > 0) {
        $('#topnav').html(''
            +'<div class="container">'
                +'<div class="row">'
                    +'<div class="columns c-12">'
                        +'<img class="brand" src="'+host+'assets/images/logo_microsoft.png" alt="Logo Microsoft" />'
                    +'</div>'
                    +'<div class="columns c-12 tab">'
                        +'<span id="tab1" class="active">Empfehlung</span>'
                        +'<span id="tab2">Optional</span>'
                    +'</div>'
                +'</div>'
            +'</div>'
            // +'<div id="step_back" class="columns c-4"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104.85" height="104.85" viewBox="0 0 104.85 104.85"> <defs> <clipPath id="clip-path"> <path id="Pfad_2" data-name="Pfad 2" d="M0,51.877H104.85V-52.973H0Z" transform="translate(0 52.973)" fill="#0078D7"/> </clipPath> </defs> <g id="Gruppe_6" data-name="Gruppe 6" transform="translate(-136.062 -354.035)"> <g id="Gruppe_5" data-name="Gruppe 5" transform="translate(136.062 407.008)"> <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(0 -52.973)" clip-path="url(#clip-path)"> <g id="Gruppe_1" data-name="Gruppe 1" transform="translate(3.96 3.959)"> <path id="Pfad_1" data-name="Pfad 1" d="M23.979,47.959A48.466,48.466,0,0,0,72.444-.506,48.466,48.466,0,0,0,23.979-48.973,48.466,48.466,0,0,0-24.486-.506,48.466,48.466,0,0,0,23.979,47.959Z" transform="translate(24.486 48.973)" fill="#FFFFFF" stroke="#0078D7" stroke-width="8"/> </g> </g> <path id="Pfad_3" data-name="Pfad 3" d="M16.642-14.945H68.114V-30.388H16.642Z" transform="translate(16.298 22.118)" fill="#0078D7"/> <g id="Gruppe_3" data-name="Gruppe 3" transform="translate(20.438 -9.998)"> <path id="Pfad_4" data-name="Pfad 4" d="M4.682,0-4.781,9.463,24.661,38.905l9.463-9.463Z" transform="translate(4.781)" fill="#0078D7"/> </g> <g id="Gruppe_4" data-name="Gruppe 4" transform="translate(20.438 -30.004)"> <path id="Pfad_5" data-name="Pfad 5" d="M0,14.567,9.463,24.03,38.905-5.412l-9.463-9.463Z" transform="translate(0 14.875)" fill="#0078D7"/> </g> </g> </g> </svg></div>'
            +'<div id="step_back" class="columns c-4">'
                +'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12.7px" height="19.6px" viewBox="0 0 12.7 19.6" style="enable-background:new 0 0 12.7 19.6;" xml:space="preserve"> <style type="text/css"> .st0{fill:#575756;} </style> <defs> </defs> <path id="Pfad_1_1_" class="st0" d="M12.7,0H9.9L1.8,8.2L0,10l9.9,9.5h2.9L2.7,10L12.7,0z"/> </svg>'
                +'<span>Zurück</span>'
            +'</div>'
        )
        $('#new-grid #step_back').remove();
        $('.add').addClass('tabBanner');
        $('.top').hide();
    }

    var outputHeader = ''
    +'<div class="row"><div class="columns c-12 top"></div></div>'
    +'<header><div class="row">'
        +'<div class="columns c-12 top"><p>Alternativ</p></div>'
        +'<div class="columns c-12"><h1 id="'+productId+'">'+productName+'<span>'+productSubname+'</span></h1></div>'
    +'</div><header>';
    /**
     * If you want to see the main result and an alternative. 
     * backButton & outputNav should only be displayed once. 
     * outputHeader should be different in the alternative result to the main result.
     */
    if (isub != 'sub') {
        // backButton = '<div id="step_back" class="columns c-4"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104.85" height="104.85" viewBox="0 0 104.85 104.85"> <defs> <clipPath id="clip-path"> <path id="Pfad_2" data-name="Pfad 2" d="M0,51.877H104.85V-52.973H0Z" transform="translate(0 52.973)" fill="#0078D7"/> </clipPath> </defs> <g id="Gruppe_6" data-name="Gruppe 6" transform="translate(-136.062 -354.035)"> <g id="Gruppe_5" data-name="Gruppe 5" transform="translate(136.062 407.008)"> <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(0 -52.973)" clip-path="url(#clip-path)"> <g id="Gruppe_1" data-name="Gruppe 1" transform="translate(3.96 3.959)"> <path id="Pfad_1" data-name="Pfad 1" d="M23.979,47.959A48.466,48.466,0,0,0,72.444-.506,48.466,48.466,0,0,0,23.979-48.973,48.466,48.466,0,0,0-24.486-.506,48.466,48.466,0,0,0,23.979,47.959Z" transform="translate(24.486 48.973)" fill="#FFFFFF" stroke="#0078D7" stroke-width="8"/> </g> </g> <path id="Pfad_3" data-name="Pfad 3" d="M16.642-14.945H68.114V-30.388H16.642Z" transform="translate(16.298 22.118)" fill="#0078D7"/> <g id="Gruppe_3" data-name="Gruppe 3" transform="translate(20.438 -9.998)"> <path id="Pfad_4" data-name="Pfad 4" d="M4.682,0-4.781,9.463,24.661,38.905l9.463-9.463Z" transform="translate(4.781)" fill="#0078D7"/> </g> <g id="Gruppe_4" data-name="Gruppe 4" transform="translate(20.438 -30.004)"> <path id="Pfad_5" data-name="Pfad 5" d="M0,14.567,9.463,24.03,38.905-5.412l-9.463-9.463Z" transform="translate(0 14.875)" fill="#0078D7"/> </g> </g> </g> </svg></div>';
        backButton = ''
        +'<div id="step_back" class="columns c-4">'
            +'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12.7px" height="19.6px" viewBox="0 0 12.7 19.6" style="enable-background:new 0 0 12.7 19.6;" xml:space="preserve"> <style type="text/css"> .st0{fill:#575756;} </style> <defs> </defs> <path id="Pfad_1_1_" class="st0" d="M12.7,0H9.9L1.8,8.2L0,10l9.9,9.5h2.9L2.7,10L12.7,0z"/> </svg>'
            +'<span>Zurück</span>'
        +'</div>';
        outputNav = ''
        +'<nav id="topnav">'
            +'<div class="container">'
                +'<div class="row">'
                    +'<div class="columns c-12">'
                        +'<img class="brand" src="'+host+'assets/images/logo_microsoft.png" alt="Logo Microsoft" />'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</nav>';
        outputHeader = ''
        +'<header><div class="row">'
            +'<div class="columns c-12 top"><p>Wir empfehlen Ihnen diese Version:</p></div>'
            +'<div class="columns c-12"><h1 id="'+productId+'">'+productName+'<span>'+productSubname+'</span></h1></div>'
        +'</div><header>';
    } 

    var newGrid = ''
    +'<div id="new-grid" class="row add '+isub+'">'
        +backButton
        +'<div id="left-side" class="columns m-7 c-12"></div>'
        +'<div id="right-side" class="columns m-5 c-12"></div>'
    +'</div>'

    var outputChoice = '' 
    +'<div class="choice info-container">'
        +'<div class="license row">'
            +'<div class="columns c-12"><p>'+license+'</p></div>'
        +'</div>'
        +'<div class="user row">'
            +'<div class="columns s-6 c-12"><p>'+userTitle+'</p></div>'
            +'<div class="columns s-6 c-12"><img src="'+appImg+userImage+'" alt="'+userTitle+'" /></div>'
        +'</div>'
        +'<div class="devices row">'
            +'<div class="columns s-6 c-12"><p>'+devicesTitle+'</p><p>'+devicesDescription+'</p></div>'
            +'<div class="columns s-6 c-12"><img src="'+appImg+devicesImage+'" alt="'+devicesTitle+'" /></div>'
        +'</div>'
        +'<div class="apps row">'
            +'<div class="columns s-6 c-12"><p>'+appsTitle+'</p></div>'
            +'<div id="app" class="columns s-6 c-12">'+countContent(apps.app)+'</div>'
        +'</div>'
        +'<div class="cloudservice row">'
            +'<div class="columns s-6 c-12"><p>'+cloudserviceTitle+'</p></div>'
            +'<div id="cloudserviceproduct" class="columns s-6 c-12">'+countContent(cloudservice.product)+'</div>'
        +'</div>'
        +'<div class="support row">'
            +'<div class="columns s-6 c-12"><p>'+supportTitle+'</p></div>'
            +'<div id="supportservice" class="columns s-6 c-12">'+countContent(support.product)+'</div>'
        +'</div>'
        +'<div class="notice row">'
            +'<div class="columns c-12"><p>'+noticeMessage+'</p></div>'
        +'</div>'
    +'</div>';

    var outputBanner = ''
    +'<aside class="banner">'
        +'<div class="row">'
            +'<div class="columns c-12 s-6 m-12">'
                +'<img src="'+appImg+bannerImage+'" alt="'+productName + productSubname+'" />'
            +'</div>'
            +'<div class="columns c-12 s-6 m-12">'
                +'<a href="'+bannerInfo+'" class="btn btn-white">Mehr Infos <svg xmlns="http://www.w3.org/2000/svg" width="12.72" height="19.557" viewBox="0 0 12.72 19.557"> <path id="Pfad_1" data-name="Pfad 1" d="M879.2,883.124h2.863l8.1,8.235,1.754,1.783-9.857,9.538H879.2l10.026-9.538Z" transform="translate(-879.197 -883.124)" fill="#060606"/> </svg></a>'
                +'<a href="'+bannerBuy+'" class="btn btn-white">Jetzt kaufen <svg xmlns="http://www.w3.org/2000/svg" width="12.72" height="19.557" viewBox="0 0 12.72 19.557"> <path id="Pfad_1" data-name="Pfad 1" d="M879.2,883.124h2.863l8.1,8.235,1.754,1.783-9.857,9.538H879.2l10.026-9.538Z" transform="translate(-879.197 -883.124)" fill="#060606"/> </svg></a>'
            +'</div>'
        +'</div>'
    +'</aside>';
    
    $('#startPage').append(outputNav, newGrid);
    var subclass;
    (isub!="sub") ? subclass='' : subclass =  '.'+isub;
    $(subclass+' #left-side').append(outputHeader, outputChoice);
    $(subclass+' #right-side').append(outputBanner);

    if (nextArray == 0) {
        $('#step_back').hide();
    } 
    $('#step_back').unbind();
    $('#step_back').click(function() {
        backClick();
    });
    
    if(subproducts && isub != "sub"){
        subproducts.forEach(element => {
            generateResults(element,"sub");
        });
    }

    if(officeGray === true) {
        $('#startPage').addClass('gray');
    }

    $('#tab1').click(function() {
        $('#new-grid.row').css('display', 'flex');
        $('#new-grid.row.sub').css('display', 'none');
        $('#tab1').addClass('active');
        $('#tab2').removeClass('active');
    });
    $('#tab2').click(function() {
        $('#new-grid.row').css('display', 'none');
        $('#new-grid.row.sub').css('display', 'flex');
        $('#tab2').addClass('active');
        $('#tab1').removeClass('active');
    });
}
function countContent(data) {
    var html = '';
    for (var key in data) {
        var item = data[key];

        if (item['enabled'] === true) {
           var outputApps = ''
            +'<div class="group">'
                +'<img src="'+appImg+item['image']+'" alt="'+key['title']+'" />'
                +'<span>'+item['subline']+'</span>'
            +'</div>';
            html = html + outputApps;
        } 
    } 
    return html;
}
/**
 * 
 * nextClick function
 * 
 * This function will called if the user click on one of the answers. 
 * Depending on the answer, it controls which question comes next.
 * 
 */
var nextArray = [];

function nextClick() {

    $('.next').click(function(e) {
        e.preventDefault();

        var next = $(this).data('next');
        // console.log(next)

        nextArray.push(next);
        // console.log(nextArray)
        
        clearContent();

        if(!isNaN(next)){
            generateQuestion(next);
            
        } else{
            generateResults(next);
           
        }
    });
}
/**
 * 
 * backClick function 
 * 
 * If the user want to go back in the configurator this function will ne called 
 * 
 */
function backClick () {

    if (nextArray == 0) {
        //

    } else if (nextArray != 0) {
        // console.log(nextArray)

        nextArray.splice(-1);

        var last_element = nextArray[nextArray.length - 1];
        // console.log(last_element+"last_element")
        
        clearContent();
        generateQuestion(last_element)
        $('#startPage').removeClass('gray');

    } else {
        $('#startPage').html('NOTHING');

    }
    
}
/**
 * 
 * clearContent function
 * 
 * lear content before loading new content
 * 
 */
function clearContent() {
    $('#startPage').empty();
}
/**
 * 
 * generateTab function
 * 
 * Create the tab functionallity on result page
 *
 */
function generateTab() {

    $('.tab-header').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-header').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });

}