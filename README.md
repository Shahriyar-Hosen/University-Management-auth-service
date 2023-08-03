<h1 align="center">University Management auth service</h1>

<br/>
<br/>

<h1 align="center">Authentication Service</h1>

We are developing a university management system that includes three types of roles: Admin, Student, and Faculty.

## Functional Requirements

### Student

- Students can log in and log out.
- Students can manage and update their profiles.
- Students can update specific fields in their profiles.
- Students can enroll in a semester.
- Students can enroll in offered courses for a specific semester.
- Students can pay tuition fees both offline and online (Partial / Full Payment).
- Students can view their transaction histories.
- Students can access their class routines.
- Students can view notices and events on their notice board.
- Students can check their results (Full / Semester Wise).
- Students can provide evaluations for their teachers.

### Admin

- Admins can log in and log out.
- Admins can manage and update their profiles.
- Admins can update certain fields in their profiles.
- Admins can manage user accounts:
  - Block/Unblock
  - Change Password
  - Forcefully Log out
- Admins can manage various processes:
  - Semester
  - Offered Courses
  - Section
  - Faculty
  - Student
  - Building
  - Room
  - Payment
  - Permissions
  - Activity

### Faculty

- Faculty members can log in and log out.
- Faculty members can manage and update their profiles.
- Faculty members can update specific fields in their profiles.
- Faculty members can manage user accounts.
- Faculty members can manage student grades and access academic and personal information.
- Faculty members can manage their lecture resources.

<br/>
<br/>

<h1 align="center">Models</h1>

## Permission

- title

## UserPermission

- permissionId
- userId

## User

- id (Generated ID, same as student id)
- role (Appended from Backend, `user.service.ts`)
- password (Default Password, given from frontend)
- createdAt (Automatically generated by mongoose)
- updatedAt (Automatically generated by mongoose)
- student (Reference, `_id` mongoose)
- admin (Reference, `_id` mongoose)
- faculty (Reference, `_id` mongoose)

## Student

- id (Generated ID, same as user id)
- name
- firstName
- middleName
- lastName
- Gender (enum: male, female)
- dateOfBirth (24-04-1998)
- email
- contactNo
- emergencyContactNo
- presentAddress
- permanentAddress
- bloodGroup (enum)
- guardian
  - fatherName
  - fatherOccupation
  - fatherContactNo
  - motherName
  - motherOccupation
  - motherContactNo
  - address
- localGuardian
  - name
  - occupation
  - contactNo
  - address
- academicSemester (Reference)
- academicDepartment (Reference)
- academicFaculty (Reference)

# Sample Data

Below is the sample data for different roles in the university management system.

## Student

```json
{
  "password": "123456",
  "student": {
    "name": {
      "firstName": "Mezbaul",
      "lastName": "Abedin",
      "middleName": "Forhan"
    },
    "dateOfBirth": "24-04-1998",
    "gender": "male",
    "bloodGroup": "O+",
    "email": "user@gmail.com",
    "contactNo": "user_4",
    "emergencyContactNo": "01600000000",
    "presentAddress": "CTG",
    "permanentAddress": "CTG",
    "academicFaculty": "6473b67a123df7493739e2a0",
    "academicDepartment": "6473badee8ddae33f1cf0a3f",
    "academicSemester": "647a5d967a96742c8cb4b8d2",
    "guardian": {
      "fatherName": "MD.ABBU",
      "fatherOccupation": "Retired Teacher",
      "fatherContactNo": "01600000000",
      "motherName": "Mrs.Ammu",
      "motherOccupation": "Housewife",
      "motherContactNo": "01600000000",
      "address": "CTG"
    },
    "localGuardian": {
      "name": "Zahid Hasan",
      "occupation": "Service Holder",
      "contactNo": "01600000000",
      "address": "Dhaka"
    }
  }
}
```

### Faculty

- **id** (custom generated by generateFacultyId)
- **name**
- **firstName**
- **middleName**
- **lastName**
- **gender** ('male'|'female')
- **dateOfBirth**
- **email**
- **contactNo**
- **emergencyContactNo**
- **presentAddress**
- **permanentAddress**
- **bloodGroup** ('A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-')
- **designation** (Professor, Lecturer)
- **academicDepartment** (Department of Computer Science & Engineering) [reference]
- **academicFaculty** (Faculty of Science and Engineering) [reference]

### Admin

- **Id**
- **name**
- **firstName**
- **middleName**
- **lastName**
- **gender**
- **dateOfBirth**
- **email**
- **contactNo**
- **emergencyContactNo**
- **department**
- **designation**
