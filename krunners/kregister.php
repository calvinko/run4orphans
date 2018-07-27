<?php


$server = "localhost";
$username = "r4oadmin";
$password = "r4oadmin";
$dbname = "r4odb";

$conn = new mysqli($server,$username,$password,$dbname);

if ($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}

$table = "runners";

//variables
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$gender = $_POST['gender'];
$ismale = 0;

if ($gender == "Male"){
	$ismale = 1;
}

$age = $_POST['age'];
$paid = 0;
$guardian = $_POST['guardian_name'];


$conn->query("INSERT INTO $table (first_name, last_name, age, address, telephone, email, paid, ismale, guardian_name) 
			VALUES ('$fname', '$lname', '$age', '$address', '$phone', '$email', $paid, $ismale, '$guardian')");



$conn->close();




?>
