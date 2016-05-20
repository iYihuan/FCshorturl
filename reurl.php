<?php
$url = addslashes($_POST['url']);//防日2333
 function safe_replace($string) {
    $string = str_replace('*','',$string);
    $string = str_replace('"','"',$string);
    $string = str_replace("'",'',$string);
    $string = str_replace('"','',$string);
    $string = str_replace(';','',$string);
    $string = str_replace('<','<',$string);
    $string = str_replace('>','>',$string);
    $string = str_replace("{",'',$string);
    $string = str_replace('}','',$string);
    $string = str_replace('','',$string);
    return $string;
    }
$safeurl =safe_replace($url);
$reurl = addslashes($_POST['reurl']);
if(is_dir($reurl))
{
  exit(json_encode(array('error1' => true)));
}
mkdir($reurl);
$urlre = file_put_contents("$reurl/index.html","<script>window.location.href='http://$safeurl';</script>");
if($urlre){
       exit(json_encode(array('success' => true)));//验证通过成功返回数据
    }else{
       exit(json_encode(array('error' => true)));
    }
?>
