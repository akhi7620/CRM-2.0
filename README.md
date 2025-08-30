# Smart Contact Manager (SCM 2.0)

A full-stack web application for managing contacts, built with **Spring Boot**, **Thymeleaf**, **MySQL**, and **Spring Security**. This application allows users to securely store, view, update, and delete contact information, with added features like image uploads, category tagging, and email notifications.

## Features
- **User Authentication**: Registration, login, and role-based access control.
- **Contact Management**: Create, update, delete, and view contacts.
- **Categories**: Assign contacts to different categories (e.g., Personal, Work, Family).
- **Image Uploads**: Upload and store profile images for contacts.
- **Search & Pagination**: Efficient search and pagination for managing large contact lists.
- **Email Notifications**: Get notified when a new contact is added.
- **Responsive UI**: User-friendly interface built with **Thymeleaf**.

## Tech Stack
- **Backend**: Java, Spring Boot
- **Frontend**: Thymeleaf, HTML5, CSS3
- **Database**: MySQL
- **Security**: Spring Security, JWT
- **Image Storage**: Local file system or Cloudinary
- **Email**: Spring JavaMailSender
- **Build Tool**: Maven
- **Version Control**: Git

## Project Setup

### Prerequisites
Before you start, make sure you have the following installed on your system:
- Java 17 or later
- Maven
- MySQL

### 1. Clone the Repository
Clone this repository to your local machine using:
```bash
git clone https://github.com/your-username/scm2.0.git
cd scm2.0
2. Database Configuration
Create a new MySQL database:

sql
Copy code
CREATE DATABASE scm;
Update the src/main/resources/application.properties file with your MySQL credentials:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/scm
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.thymeleaf.cache=false
3. Set Up the Application
Run the application using Maven:

bash
Copy code
mvn spring-boot:run
The application should now be running at http://localhost:8080.

4. Accessing the Application
Registration: Navigate to /register to create a new account.

Login: Use /signin for user login.

Dashboard: After logging in, you will be redirected to the dashboard, where you can manage your contacts.

Folder Structure
bash
Copy code
src/
├── main/
│   ├── java/com/scm/
│   │   ├── controllers/          # Contains controllers for handling HTTP requests
│   │   ├── models/               # Contains entity classes like User, Contact
│   │   ├── repositories/         # Data access layer (JPA repositories)
│   │   ├── services/             # Business logic layer (service classes)
│   │   └── config/               # Security and configuration classes
│   └── resources/
│       ├── static/               # Static files like CSS, JS, images
│       ├── templates/            # Thymeleaf templates for rendering UI
│       └── application.properties # Database and app settings
Features in Detail
1. User Authentication
Spring Security is used to manage login, registration, and user roles (Admin, User).

JWT (JSON Web Token) can be implemented for secure token-based authentication.

2. Contact Management
Users can add, update, and delete contacts from their dashboard.

Each contact can have a name, phone number, email, profile image, description, and category (e.g., Personal, Work).

3. Categories and Search
Contacts can be categorized to make management easier (Personal, Work, etc.).

Search functionality allows users to filter contacts by name or email.

Pagination is implemented to display contacts in chunks (for performance).

4. Image Upload
Users can upload profile images for their contacts.

Images are stored either locally on the server or uploaded to Cloudinary for cloud-based storage.

5. Email Notifications
Users receive an email notification whenever a new contact is added.

Future Enhancements
Mobile Application: Build a REST API and connect it with a mobile app.

Two-Factor Authentication (2FA): Add an additional layer of security for user login.

SMS Notifications: Integrate Twilio for SMS notifications.

Activity Logging: Track user actions and display them in a history log.

Contributing
Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Open a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Spring Boot for the framework

Thymeleaf for the templating engine

MySQL for database management

Cloudinary for image storage

JavaMailSender for email notifications

yaml
Copy code

---

### 💡 Notes:
- Replace `your-username` with your actual GitHub username when cloning the repo.
- You can extend the **email notifications** feature, or add other enhancements like two-factor authentication or SMS integration as you progress.
- The **Folder Structure** will help you organize your project into manageable components (controllers, services, views).

---

If you need **additional setup instructions** or **clarifications** for any specific part of the project, feel
