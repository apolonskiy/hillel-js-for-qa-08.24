// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi',
//     getUserFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi',
//     getUserFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi',
//     getUserFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
// value1const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };
// const user1 = {
//     email: 'aaa@aa.com',
//     userName: 'aaa',
//     firstName: 'Andrii',
//     lastName: 'Polonskyi'
// };

class User {
  isInvited = true;
  #password = '';
  constructor(
    email,
    firstName,
    lastName,
    password,
    notificationsEnabled = false
  ) {
    this.email = email;
    this.userName = email
      .split('@')
      .shift();
    this.firstName = firstName;
    this.lastName = lastName;
    this.#password = password;
    this.notificationsEnabled =
            notificationsEnabled;
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  login() {
    // some action to login
    this.isInvited = false;
  }

  isUserAcitve() {
    return !this.isInvited;
  }

  notifyUser() {
    if (this.notificationsEnabled) {
      console.log('Email sent');
    }
  }
}

class Admin extends User {
  hasAdminAccess = true;
  constructor(
    email,
    firstName,
    lastName,
    password,
    adminPrivileges = [
      'Users',
      'Groups',
    ]
  ) {
    super(
      email,
      firstName,
      lastName,
      password
    );
    this.adminPrivileges =
            adminPrivileges;
  }

  hasAdminPrivilege(privilege) {
    return this.adminPrivileges.includes(
      privilege
    );
  }
}

const user1 = new User(
  'abc@aa.com',
  'Andrii',
  'Pol',
  'Pass1!'
);
console.log(user1.isUserAcitve());
user1.login();
console.log(user1.isUserAcitve());
user1.notifyUser();

const admin1 = new Admin(
  'admin@abc.com',
  'Admin1',
  'Best',
  '*^%&^'
);
console.log(
  admin1.hasAdminPrivilege('Users')
);

const user2 = new User(
  'abc@aa.com',
  'Andrii',
  'Pol',
  'Pass1!',
  true
);
user2.notifyUser();

class UserManagerAnonymous {
  admin = new Admin(
    'manage@email.com',
    'Anon',
    'Anon',
    'password'
  );
  constructor(someOtherProp) {
    this.someOtherProp =
            someOtherProp;
  }

  logUserPrivielges() {
    console.log(
      this.admin.adminPrivileges
    );
    console.log(
      this.admin.hasAdminPrivilege(
        'Users'
      )
    );
  }
}

const manager1 =
    new UserManagerAnonymous(
      'sdgd@aa.com',
      '^&$%&*^(^&'
    );
manager1.logUserPrivielges();

console.log(process);
