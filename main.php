<?php
$randStr = str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwsyz1234567890');
$rand = substr($randStr,0,6);
?>
<script type="text/javascript" src="js/main.js" ></script>
		<div class="box box-shadow">
			<div class="box-container">
<div class="panel success box-shadow margin10">
	                    <div class="heading">
	                        <span class="title"><center>公告</center></span>
	                    </div>
	                    <div class="content padding10">
	                    	<p id="nnote"><center>FCshorturl开始提供服务啦~<br>Tips:不定期删档</center>
	                    </div>
	                </div>
		        <div class="window">
                    <div class="window-caption bg-blue ribbed-blue fg-white">
                        <span class="window-caption-icon"><span class="mif-windows"></span>
                        <span class="window-caption-title">生成短链接</span>
                    </div>
                    <div class="window-content">
                    	<center><label>需要跳转的url:http://</label>
	        <div class="input-control text">
	    		<input id="url" type="text" name="url">
			</div><br>
                   <label>缩短到：https://url.mcpe.cc/</label>
	        <div class="input-control text">
	    		<input id="reurl" type="text" name="reurl" value="<?php echo $rand;?>" required>
			</div>
                                         <div id=surl></div> 
			<br><button id="dohttpget" class="button info block-shadow-info text-shadow" onclick="geturl();">缩短</button>
			<br>
		


			</center>
                        <table class="table striped hovered bordered" id="pingtable" hidden>
						    <thead>
						    </tbody>
						</table>
                    </div>
                </div>
                <p></p>