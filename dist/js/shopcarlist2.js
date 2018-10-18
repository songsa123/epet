function getCount(){
    var brr = getCookie("shoplist");
    console.log(brr);
    var count = 0;
    if( brr.length != 0 ){
        for( var i = 0 ; i < brr.length ; i++ ){
            count += brr[i].count;
        }
        //console.log(count);
        $(".sp1 .shopNum1").html(count);
        console.log($(".shopNum1").html());
    }               
}
getCount();
