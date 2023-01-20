import Teacher from "../Teacher/Teacher.js";

class LeadTeacher extends Teacher {
  correctedExams = 0;
  favouriteAssistantTeacher;

  correctExam() {
    this.correctedExams++;
  }

  teach(subject) {
    return `NOIS! ${super.teach(subject)}`;
  }
}

export default LeadTeacher;
