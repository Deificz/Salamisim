<?php

namespace App\Http\Controllers;

use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index()
    {
        // Retrieve and display a list of students
        $students = Student::all();
        

        return response()->json([
            "message" => "Success!",
            "data"=>$students,   
        ])->setStatusCode(200);
    }
}
