<?php
function get_user($user_id = ""){
    $url = 'http://server/api/user';
    if($user_id != ""){
    $url = $url.'/'.$user_id;
    }
    $options = array(
        'http' => array(
            'header'  => "Authorization: Bearer ".$_COOKIE["token"]."\r\n",
            'method'  => 'GET',
        ),
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        // Handle error
        echo $result;
        echo "Error in request";
    } else {
        // Handle success
        return json_decode($result);
    }
};
function show_users(){

};