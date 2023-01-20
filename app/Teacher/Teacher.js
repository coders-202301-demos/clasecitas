class Teacher {
  name;
  subjects = [];
  salary;
  bankAccountBalance;
  entryHour = 9;

  constructor(name, subjects, salary = 30000, bankAccountBalance = 0) {
    this.name = name;
    this.salary = salary;
    this.subjects = subjects;
    this.bankAccountBalance = bankAccountBalance;
  }

  teach(subject) {
    return this.subjects.includes(subject)
      ? `Now you know ${subject}`
      : "I'm a paket";
  }

  cobrateNomin() {
    this.bankAccountBalance += this.salary;
  }
}

export default Teacher;
