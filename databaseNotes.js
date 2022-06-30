// USER TABLE
//pandaWhale: correct format for database insertion so far:

//INSERT INTO  events VALUES ('biking', '010/01/2000 1:00', '01/01/2000 10:00','01/01/2000 10:00', 'crossfit', 5, 12345, 10, 'Your Moms house');

//this format works, just be sure to insert :
//INSERT INTO  events (title, date, start_time, end_time, activity_type, num_participants, zip, location, created_by_id) VALUES ('biking', '01/01/2000', '10:00','10:00', 'crossfit', 5, 12345, 'Your moms house', 3);



// CREATE TABLE users(
//     id SERIAL PRIMARY KEY,
//     full_name varchar,
//     user_name varchar NOT NULL,
//     password varchar NOT NULL,
//     zip int,
//     participant_id int,
//     hobby_id int,
//     profile_picture_id int
// );

//   INSERT INTO users(user_name, password, zip)
// VALUES('fake', null, 96813)

//   //HOBBY TABLE

//   //   Table hobby {
//   //     id int [pk, increment]
//   //     hobby varchar
//   //   }

//   CREATE TABLE hobby(
//     id SERIAL PRIMARY KEY,
//     hobby varchar,
// );

//   //PARTICPANTS TABLE
//   //Table participants as P {
//     //     id int [pk, increment] // primary key
//     //     name varchar
//     //   }

//     CREATE TABLE participants(
//     id SERIAL PRIMARY KEY,
//     name varchar
// );

//     //COMMENTS TABLE
//     //Table comments as C {
//       //     id int [pk, increment] // primary key
//       //     name varchar
//       //     start_date datetime
//       //     comment varchar
//       //   }

//       CREATE TABLE comments(
//     id SERIAL PRIMARY KEY,
//     user_name varchar,
//     time TIMESTAMP,
//     comment varchar
// );

// //   Table profile_picture {
// //     id int [pk, increment]
// //     picture varchar
// //   }

// //   Ref: U.hobby_id < hobby.id
// //   Ref: U.profile_picture_id - profile_picture.id
// //   Ref: U.user_name - comments.name

// // Table events as E {
// //     id int [pk, increment] // auto-increment
// //     title varchar
// //     start_date datetime
// //     end_date datetime
// //     activity_type varchar
// //     num_participants int [default: 1]
// //     zip int // inline relationship (many-to-one)
// //     participant_id int
// //     comment_id int
// //   }

// CREATE TABLE events(
//     id SERIAL PRIMARY KEY,
//     title varchar,
//     date DATE,
//     start_time TIME,
//     end_time TIME,
//     activity_type varchar,
//     num_participants int DEFAULT 1,
//     zip int,
//     participant_id int,
//     comment_id int
// )

// UPDATE events SET date = '2022-06-26', start_time = '10:00', end_time = '12:00', activity_type = 'Basketball', num_participants = 10, zip = 96813 WHERE id = 1

// //   Table participants as P {
// //     id int [pk, increment] // primary key
// //     name varchar
// //   }

// //   Ref: events.participant_id < participants.id
// //   Ref: U.participant_id > participants.id
// //   Ref: events.comment_id < comments.id

// //update event
// UPDATE events
//    SET num_participants = num_participants + 1
// WHERE id = 1;

// @import './_variables.scss';

// input {
//   background: transparent;
// }

// label {
//   display: inline-block;
//   font-family: Roboto;
//   width: 115px;
// }

// .logo {
//   height: 300px;
//   width: 300px;

//   margin-bottom: 25px;
// }

// .submit-btn {
//   height: 24px;
//   border: 1px solid $primary-text-color;
//   border-radius: 6px;
//   background: transparent;

//   margin-top: 15px;
//   padding-left: 2px;
//   padding-right: 2px;
// }

// .log-in-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .log-in-sec {
//   margin-bottom: 15px;
// }

// .signupContainer {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 15px;
//   padding-left: 2px;
//   padding-right: 2px;
// }

// .submitSignUp {
//   height: 24px;
//   width: 150px;
//   border: 1px solid $primary-text-color;
//   border-radius: 6px;
//   background: transparent;

//   margin-top: 15px;
//   padding-left: 2px;
//   padding-right: 2px;
// }
