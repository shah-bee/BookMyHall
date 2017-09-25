create table User
(
ID integer primary key autoincrement,
Username string,
Password string
);

create table Area
(
ID integer primary key autoincrement,
Name string
);

create table Subject
(
ID integer primary key autoincrement,
Name string,
Abbreviation string,
IDArea integer references Area(ID)
);

create table Level
(
ID integer primary key autoincrement,
Name string,
Principle string
);

create table Grade
(
ID integer primary key autoincrement,
Name string,
IDLevel integer references Level(ID),
Observation string
);

create table StaffType
(
ID integer primary key autoincrement,
Name string
);

create table Staff
(
ID integer primary key autoincrement,
IDStaffType integer references StaffType(ID),
Name string,
LastNameFather string,
LastNameMother string,
DateOfBirth string,
PlaceOfBirth string,
Sex string,
Carnet string,
Telephone string,
MobilePhone string,
Address string,
FatherName string,
MotherName string,
FatherContact string,
MotherContact string,
FatherPlaceOfWork string,
MotherPlaceOfWork string,
DateOfHiring string,
YearsOfService string,
Formation string,
Specialty string,
Category string,
Salary string
);

create table GradeParalelo
(
ID integer primary key autoincrement,
IDGrade integer references Grade(ID),
IDStaff integer references Staff(ID),
Name string
);

create table Student
(
ID integer primary key autoincrement,
IDGradeParalelo integer references GradeParalelo(ID),
Rude string,
Name string,
LastNameFather string,
LastNameMother string,
DateOfBirth string,
PlaceOfBirth string,
Sex string,
Carnet string,
Telephone string,
MobilePhone string,
Address string,
FatherName string,
MotherName string,
FatherMobilePhone string,
MotherMobilePhone string,
FatherProfession string,
MotherProfession string,
FatherPlaceOfWork string,
MotherPlaceOfWork string,
Observations string
);

create table Attendance
(
ID integer primary key autoincrement,
IDStudent integer references Student(ID),
Attended string,
Date string
);

create table SubjectGrade
(
ID integer primary key autoincrement,
IDGrade integer references Grade(ID),
IDSubject integer references Subject(ID)
);

create table ScoreRecord
(
ID integer primary key autoincrement,
IDSubject integer references Subject(ID),
IDStudent integer references Student(ID),
FirstTrimester integer,
SecondTrimester integer,
ThirdTrimester integer,
FinalGrade integer,
Year string
);
