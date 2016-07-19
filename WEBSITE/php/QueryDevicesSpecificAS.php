<?php 
header('Access-Control-Allow-Origin: *');
	$mysqli = new mysqli("localhost", "hypermedia2016tim", "sitotim", "my_hypermedia2016tim");
	
if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
		
else {

    if(isset($_POST['name'])){
      $type=($_POST['name']);
    }
    else $type ="iPad"; //debug

	if ($type=!"High"){
		$query = "SELECT Device.Name , Path , Id_AssistantService  FROM Device ,PhotoPerDevice, AS_Offered WHERE Device.Id=AS_Offered.Id AND Id_AssistantService LIKE'".$type."%' AND Device.Name=PhotoPerDevice.Name GROUP BY PhotoPerDevice.Name"; 
    }else{
    $query = "SELECT Device.Name , Path  FROM Device ,PhotoPerDevice WHERE  Device.InPromotion=1 AND Device.Name=PhotoPerDevice.Name GROUP BY PhotoPerDevice.Name"; 
    }
     
    $result = $mysqli->query($query);
        if($result->num_rows >=0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
                
        
	
        echo json_encode($myArray);
    }
	
    //free result
    $result->close();
    //close connection
    $mysqli->close();
 }

   
    //if there are data available


?>