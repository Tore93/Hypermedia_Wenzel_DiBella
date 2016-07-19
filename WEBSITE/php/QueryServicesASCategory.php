<?php 
header('Access-Control-Allow-Origin: *');
	$mysqli = new mysqli("localhost", "hypermedia2016tim", "sitotim", "my_hypermedia2016tim");
	
if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
		
else {

    if(isset($_POST['id'])){
      $type=($_POST['id']);
    }
    else $type ="Te"; //debug

      if($type!=="High"){
    	 $query="SELECT Assistant_Service.Pre_Description,Assistant_Service.Name FROM Assistant_Service,AS_Category WHERE Assistant_Service.Type_Category=AS_Category.Id && AS_Category.Name LIKE'".$type."%'"; 
       }else  $query ="SELECT Name,Pre_Description FROM Assistant_Service WHERE inHighlights='1'";
       
    
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