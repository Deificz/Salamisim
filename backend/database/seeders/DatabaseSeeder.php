<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Course;
use App\Models\Student;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $universities = University::factory(5)->create();
        $courses = Course::factory(5)->create();
        $users = User::factory(3)->create();

        $users->each(function ($user) use ($universities, $courses) {
            Student::factory()->create([
                'user_id' => $user->id,
                'university_id' => $universities->random()->id,
                'course_id' => $courses->random()->id,
            ]);
        });
    }
}
