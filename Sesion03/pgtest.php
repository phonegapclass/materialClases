<?php
	if(isset($_POST['nom'])){
		$nom=$_POST['nom'];
		//$lug=$_POST['lug'];
		$mai=$_POST['mai'];
		$tel=$_POST['tel'];
		echo 1;
	}else{
		if(isset($_POST['signal'])){
			$hId=$_POST['hId'];
			$arr=array(
				'1'=>array(
					'fecha'=>'06/01/2013',
					'habitaciones'=>'1',
					'personas'=>'2',
					'estancia'=>'5'
				),
				'2'=>array(
					'fecha'=>'06/01/2013',
					'habitaciones'=>'1',
					'personas'=>'2',
					'estancia'=>'5'
				),
				'3'=>array(
					'fecha'=>'06/01/2013',
					'habitaciones'=>'1',
					'personas'=>'2',
					'estancia'=>'5'
				),
				'4'=>array(
					'fecha'=>'06/01/2013',
					'habitaciones'=>'1',
					'personas'=>'2',
					'estancia'=>'5'
				),
				'5'=>array(
					'fecha'=>'06/01/2013',
					'habitaciones'=>'1',
					'personas'=>'2',
					'estancia'=>'5'
				)
			);
			if($hId<5){
				
			}
		}else{
			if(isset($_POST['t'])){
				$status = 1;
			}else{
				$archivo = $_FILES["archivo"]['name'];
				//Foto 1
				$destino = "pgfotos/".$archivo.".jpg";
				if(copy($_FILES['archivo']['tmp_name'],$destino))
					$status = 1;
			}
			echo $status;
		}
		//echo 0;	
	}
?>