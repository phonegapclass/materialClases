<?php
	if(isset($_POST['nom'])){
		echo 1;
	}else{
		if(isset($_POST['t'])){
			echo 1;
		}else{
			if(isset($_FILES["archivo"])){
				$archivo = "algo";
				//Foto 1
				$destino = "pgfotos/".$archivo.".jpg";
				if(copy($_FILES['archivo']['tmp_name'],$destino))
					echo 1;
				else
					echo 0;
			}else{
				echo 0;
			}
		}
	}
?>