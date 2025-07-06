import React from "react";
import "./style/HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Campus Listing</h1>

      <details open className="user-stories">
        <summary>User Stories</summary>
        <ul>
          <ul>
            <li>
              [ ✔ ] As a user, I will land on a visually pleasing homepage by
              default, which allows navigation to view all campuses and all
              students
            </li>
            <li>
              [ ✔ ] I can navigate to all campuses view, and
              <ul>
                <li>[ ✔ ] I see a list of all campuses in the database</li>
                <li>
                  [ *Pedro ] I see an informative message if no campuses exist
                </li>
                <li>
                  [ *Flo ] I can add a new campus
                  <ul>
                    <li>
                      [ *Flo ] with a validated form displaying real-time error
                      messages
                    </li>
                    <li>
                      [ *Flo ] which redirects to the new campus's single campus
                      view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              [ ✔ ] I can navigate to a single campus view, and
              <ul>
                <li>
                  [ ✔ ] see details about a single campus, including enrolled
                  students (if any)
                </li>
                <li>
                  [ *Pedro ] see an informative message if no students are
                  enrolled at that campus
                </li>
                <li>
                  [ *Pedro ] navigate to any student's single student view
                </li>
                <li>
                  [ ** ] delete the campus (and elegantly handle associated
                  students)
                </li>
                <li>
                  [ *Pedro ] edit campus information (including adding/removing
                  students)
                  <ul>
                    <li>
                      [ * ] with a validated form displaying real-time error
                      messages
                    </li>
                    <li>
                      [ * ] which redirects back to the single campus view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              [ ✔ ] I can navigate to all students view, and
              <ul>
                <li>[ ✔ ] see a list of all students in the database</li>
                <li>[ ✔ ] see an informative message if no students exist</li>
                <li>
                  [ ✔ ] add a new student
                  <ul>
                    <li>
                      [ *Debbie ] with a validated form displaying real-time
                      error messages
                    </li>
                    <li>
                      [ ✔ ] which redirects to the new student's single student
                      view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              [ ✔ ] I can navigate to a single student view, and
              <ul>
                <li>
                  [ ✔ ] see details about a single student, including the campus
                  at which they are enrolled (if any)
                </li>
                <li>
                  [ ✔ ] see an informative message if the student is not
                  enrolled at a campus
                </li>
                <li>
                  [ ✔ ] navigate to the single campus view of the student's
                  enrolled campus
                </li>
                <li>[ ✔ ] delete the student</li>
                <li>
                  [ ✔ ] edit the student's information (including campus
                  enrollment)
                  <ul>
                    <li>
                      [ *Mark ] with a validated form displaying real-time error
                      messages
                    </li>
                    <li>
                      [ ✔ ] which redirects back to the single student view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </details>

      <details className="all-campuses-and-students">
        <summary>Technical Requirements 1: All Campuses and Students</summary>
        <ul>
          <ul>
            <li>
              will land on a visually pleasing homepage by default, which allows
              navigation to view all campuses and all students
            </li>
            <li>
              can navigate to all campuses view, and
              <ul>
                <li>see a list of all campuses in the database</li>
                <li>see an informative message if no campuses exist</li>
                <li>
                  add a new campus
                  <ul>
                    <li>
                      with a validated form displaying real-time error messages
                    </li>
                    <li>
                      which redirects to the new campus's single campus view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              can navigate to a single campus view, and
              <ul>
                <li>
                  see details about a single campus, including enrolled students
                  (if any)
                </li>
                <li>
                  see an informative message if no students are enrolled at that
                  campus
                </li>
                <li>navigate to any student's single student view</li>
                <li>
                  delete the campus (and elegantly handle associated students)
                </li>
                <li>
                  edit campus information (including adding/removing students)
                  <ul>
                    <li>
                      with a validated form displaying real-time error messages
                    </li>
                    <li>which redirects back to the single campus view</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              can navigate to all students view, and
              <ul>
                <li>see a list of all students in the database</li>
                <li>see an informative message if no students exist</li>
                <li>
                  add a new student
                  <ul>
                    <li>
                      with a validated form displaying real-time error messages
                    </li>
                    <li>
                      which redirects to the new student's single student view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              can navigate to a single student view, and
              <ul>
                <li>
                  see details about a single student, including the campus at
                  which they are enrolled (if any)
                </li>
                <li>
                  see an informative message if the student is not enrolled at a
                  campus
                </li>
                <li>
                  navigate to the single campus view of the student's enrolled
                  campus
                </li>
                <li>delete the student</li>
                <li>
                  edit the student's information (including campus enrollment)
                  <ul>
                    <li>
                      with a validated form displaying real-time error messages
                    </li>
                    <li>which redirects back to the single student view</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </details>

      <details className="single-student-and-single-campus">
        <summary>
          Technical Requirements 2: Single Student and Single Campus
        </summary>
        <ul>
          <ul>
            <li>
              Backend (Express and Sequelize)
              <ul>
                <li>
                  Write a route to serve up a single campus (based on its id),
                  including that campus's students
                </li>
                <li>
                  Write a route to serve up a single student (based on their
                  id), including that student's campus
                </li>
              </ul>
            </li>
            <li>
              Frontend (React and React Router)
              <ul>
                <li>
                  Write a component to display a single campus with the
                  following information:
                  <ul>
                    <li>The campus's name, image, address, and description</li>
                    <li>
                      A list of the names of all students in that campus (or a
                      helpful message if it doesn't have any students)
                    </li>
                    <li>
                      Display the appropriate campus's info when the URL matches{" "}
                      <code>/campuses/:campusId</code>
                    </li>
                    <li>
                      Clicking on a campus from the all-campuses view should
                      navigate to its single-campus view
                    </li>
                  </ul>
                </li>
                <li>
                  Write a component to display a single student with the
                  following information:
                  <ul>
                    <li>The student's full name, email, image, and GPA</li>
                    <li>
                      The name of their campus (or a helpful message if they
                      don't have one)
                    </li>
                    <li>
                      Display the appropriate student when the URL matches{" "}
                      <code>/students/:studentId</code>
                    </li>
                    <li>
                      Clicking on a student from the all-students view should
                      navigate to their single-student view
                    </li>
                    <li>
                      Clicking on the name of a student in the single-campus
                      view should navigate to their single-student view
                    </li>
                    <li>
                      Clicking on the name of a campus in the single-student
                      view should navigate to its single-campus view
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </details>

      <details className="adding-a-campus-and-adding-a-student">
        <summary>
          Technical Requirements 3: Adding a Campus and Adding a Student
        </summary>
        <ul>
          <p>Adding a Campus and Adding a Student</p>
          <ul>
            <li>
              Backend (Express and Sequelize)
              <ul>
                <li>Write a route to add a new campus</li>
                <li>Write a route to add a new student</li>
              </ul>
            </li>
            <li>
              Frontend (React and React Router)
              <ul>
                <li>
                  Write a component to display a form for adding a new campus
                  that contains inputs for at least the name and address
                </li>
                <li>
                  Display this component EITHER as part of the all-campuses
                  view, or as its own view
                </li>
                <li>
                  Submitting the form with a valid name/address should:
                  <ul>
                    <li>
                      Make a network request that causes the new campus to be
                      persisted in the database
                    </li>
                    <li>
                      Add the new campus to the list of campuses without needing
                      to refresh the page
                    </li>
                  </ul>
                </li>
                <li>
                  Write a component to display a form for adding a new student
                  that contains inputs for at least first name, last name, and
                  email
                </li>
                <li>
                  Display this component EITHER as part of the all-students
                  view, or as its own view
                </li>
                <li>
                  Submitting the form with a valid first name/last name/email
                  should:
                  <ul>
                    <li>
                      Make a network request that causes the new student to be
                      persisted in the database
                    </li>
                    <li>
                      Add the new student to the list of students without
                      needing to refresh the page
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </details>

      <details className="removing-a-campus-and-removing-a-student">
        <summary>
          Technical Requirements 4: Removing a Campus and Removing a Student
        </summary>
        <ul>
          <ul>
            <li>
              Backend (Express and Sequelize)
              <ul>
                <li>Write a route to remove a campus (based on its id)</li>
                <li>Write a route to remove a student (based on their id)</li>
              </ul>
            </li>
            <li>
              Frontend (React and Axios/Fetch)
              <ul>
                <li>
                  In the all-campuses view, include a delete button next to each
                  campus
                </li>
                <li>
                  Clicking the delete button should:
                  <ul>
                    <li>
                      Make a network request that causes that campus to be
                      removed from the database
                    </li>
                    <li>
                      Remove the campus from the list of campuses without
                      needing to refresh the page
                    </li>
                  </ul>
                </li>
                <li>
                  In the all-students view, include a delete button next to each
                  student
                </li>
                <li>
                  Clicking the delete button should:
                  <ul>
                    <li>
                      Make a network request that causes that student to be
                      removed from the database
                    </li>
                    <li>
                      Remove the student from the list of students without
                      needing to refresh the page
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </details>
    </div>
  );
};

export default HomePage;
