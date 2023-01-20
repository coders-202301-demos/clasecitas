import Teacher from "../Teacher/Teacher.js";

class AssistantTeacher extends Teacher {
  correctedPrecourseExercises = 0;

  correctPrecourseExercise() {
    this.correctedPrecourseExercises++;
  }

  teach(subject) {
    return `I'm so nervous! ${super.teach(subject)}`;
  }
}

export default AssistantTeacher;
