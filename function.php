<?php
  // function clean_link($link){
  //   $str = explode("&",$link);
  //   // print_r($str);
  //   // echo "<br>";
  //   $imp_index = $str[0];
  //   // print_r($str[0]);
  //   // echo "<br>";
  //   // print_r($imp_index);
  //   // echo "<br>";
  //   $important_index = explode("=",$imp_index);
  //   // print_r($important_index);
  //   // echo "<br>";
  //   // print_r($important_index[1]);
  //   global $final_index;
  //   $final_index = $important_index[1];
  //   echo $final_index;
  // }


  $link = 'https://www.youtube.com/watch?v=Mubj_fqiAv8&list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO&ab_channel=codebasics';

  function clean_link($link){
    global $final_index;
    if(strpos($link, '&') !== false){
      $str = explode("&",$link);
      // print_r($str);
      // echo "<br>";
      $imp_index = $str[0];
      // print_r($imp_index);
      // echo "<br>";
      // print_r($link);
      // echo "<br>";
      $link =$imp_index;
      // echo $final_index;
      // echo "<br>";
    }
    $important_index = explode("=",$link);
    // print_r($important_index);
    // echo "<br>";
    // print_r($important_index[1]);
    $final_index = $important_index[1];
    // echo $final_index;
    return $final_index;
  }





  echo clean_link($link);
?>