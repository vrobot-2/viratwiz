import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'About Virat',
    description: 'Learn more about Virat Ponugoti, a 12-year-old developer and 3D artist.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero bg-base-200 rounded-box mb-8">
        <div className="hero-content flex-col lg:flex-row items-start lg:items-center text-left">
          <div className="avatar">
            <div className="w-64 h-64 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image 
                src="/portrait.jpg" 
                alt="Virat Ponugoti" 
                width={256}
                height={256}
                priority
              />
            </div>
          </div>
          <div className="max-w-md">
            <h1 className="text-5xl font-bold lg:text-center">Virat Ram Ponugoti</h1>
            <p className="py-2">
              High School Student at Conestoga Senior High School • {(() => {
                const birthDate = new Date("April 02, 2010");
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                  age--;
                }
                return age;
              })()}-year-old
            </p>
            <div className="badge badge-primary">AWS Certified</div>
            <div className="badge badge-secondary ml-2">Life Scout</div>
            <div className="badge badge-accent ml-2">Robotics</div>
            <p className="py-4">Dedicated and accomplished high school student with a strong foundation in programming, leadership, and STEM activities. Seeking opportunities to further develop skills in technology, leadership, and community service while contributing meaningfully to team-based projects.</p>
            <a href="mailto:virponugoti@gmail.com" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
              Education
            </h2>
            <div className="divider m-0"></div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Conestoga Senior High School, Berwyn, PA</p>
                <p>Class of 2028</p>
                <ul className="list mt-2">
                  <li className="list-row">• AP Courses: Computer Science and Biology (2024-25)</li>
                  <li className="list-row">• Math: Math Analysis BC Honors, Pre-Calculus (2024-25)</li>
                  <li className="list-row">• Standardized Tests: 1340 PSAT (2024)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Accomplishments
            </h2>
            <div className="divider m-0"></div>
            <ul className="list">
              <li className="list-row">• Gold Presidential Service Award two times recipient (2024 x2)</li>
              <li className="list-row">• 2nd in a Tri-State High School Hackathon - HackStoga 2025 Connections</li>
              <li className="list-row">• 1st in a Math Competition - Jane Street Estimathon 2025</li>
              <li className="list-row">• Life Scout in Scouting America Troop 181</li>
              <li className="list-row">• National Youth Leadership Training Graduate, Boy Scouts</li>
              <li className="list-row">• Junior Black Belt in Taekwondo (Gold Star)</li>
              <li className="list-row">• 1st Place at JamStoga School Game Jam</li>
              <li className="list-row">• Science Olympiad: #1 in State Trial Event for Solar Power</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Technical Skills
            </h2>
            <div className="divider m-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <p className="font-semibold">Programming Languages:</p>
                <p>Python, JavaScript, C++, HTML/CSS, Java</p>
              </div>
              <div>
                <p className="font-semibold">Web Development:</p>
                <p>Django, React, Next.js, Express, Node.js</p>
              </div>
              <div>
                <p className="font-semibold">Databases:</p>
                <p>MySQL, SQLite</p>
              </div>
              <div>
                <p className="font-semibold">Systems Programming:</p>
                <p>Arduino, Raspberry PI</p>
              </div>
              <div>
                <p className="font-semibold">Artificial Intelligence:</p>
                <p>Statistics, ML, Prompt Engineering</p>
              </div>
              <div>
                <p className="font-semibold">Software Tools:</p>
                <p>VS Code, Git/GitHub, AWS Cloud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Roles & Leadership
            </h2>
            <div className="divider m-0"></div>
            <ul className="list">
              <li className="list-row">• Secretary of AI Club at Conestoga Sr. High School (2024-Present)</li>
              <li className="list-row">• Martial Arts Instructor, SKY Martial Arts (2023-Present)</li>
              <li className="list-row">• Quartermaster and Patrol Leader, Boy Scout Troop 181 (2023-Present)</li>
              <li className="list-row">• Staff Member at Camp Horseshoe, Rising Sun, MD (July 2024)</li>
              <li className="list-row">• Programmer with Robotics Team 6121C (2024-Present)</li>
              <li className="list-row">• Co-Founder of STEM2Ignite Nonprofit Organization (2025-present)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            Certifications & Activities
          </h2>
          <div className="divider m-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold">Certifications</h3>
              <ul className="list mt-2">
                <li className="list-row">• AWS Certified Cloud Practitioner (2024)</li>
                <li className="list-row">• Photography as Art - Wayne Art Center (Summer 2023)</li>
                <li className="list-row">• Python for Machine Learning and Data Science - Udemy</li>
                <li className="list-row">• Python for Computer vision with OpenCV - Udemy</li>
                <li className="list-row">• Complete C# Unity Game Developer - Udemy</li>
                <li className="list-row">• Django 3 and Python Full Stack Developer - Udemy</li>
                <li className="list-row">• Complete Blender Creator - Udemy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Extracurricular Activities</h3>
              <ul className="list mt-2">
                <li className="list-row">• Taekwondo Demo ONE Team (2025-Present)</li>
                <li className="list-row">• Track and Field Runner: Sprint and Mile Events (2024-Present)</li>
                <li className="list-row">• Science Olympiad Competitor (2022-2023)</li>
                <li className="list-row">• Scouts of America (BSA): 2021-Present</li>
                <li className="list-row">• Clubs: Robotics, AI, Computer Science, HOSA, ILMUNC, DECA</li>
                <li className="list-row">• Community Service: Over 350 hours logged in the past year</li>
                <li className="list-row">• Hobbies: Outdoor Activities, Robotics, Cooking, Photography</li>
              </ul>
            </div>
          </div>          <div className="card-actions justify-end mt-4">
            <Link href="/gallery" className="btn btn-primary">View My Gallery</Link>
            <a href="mailto:virponugoti@gmail.com" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}
