<?php 
header('Access-Control-Allow-Origin: *');
	$mysqli = new mysqli("localhost", "hypermedia2016tim", "sitotim", "my_hypermedia2016tim");
	
if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
		
else {
//$_POST['nameC']="Huawei P9"; 
    if(isset($_POST['nameC'])){
      $type=($_POST['nameC']);
    }
    else $type ="Huawei"; //debug


		$query = "SELECT Path FROM PhotoPerDevice WHERE Name LIKE'".$type."%'";
    
     
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